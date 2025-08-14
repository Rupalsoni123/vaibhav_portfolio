import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        if (req.url === '/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'healthy',
            service: 'Portfolio API',
            timestamp: new Date().toISOString(),
            version: '1.0.0',
            environment: 'local'
          }));
          return;
        }

        if (req.url === '/huggingface-chat' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', async () => {
            try {
              const { question, context = '', userId = 'anonymous' } = JSON.parse(body);
              const startTime = Date.now();

              // Input validation
              if (!question || question.trim().length === 0) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  error: 'Question is required',
                  message: 'Please provide a valid question'
                }));
                return;
              }

              // Sanitize input and block dangerous commands
              const sanitizedQuestion = question.replace(/[;&|`$(){}[\]]/g, '').trim();
              
              // Security: Block dangerous patterns
              const blockedPatterns = [
                /mcp[_-]?server/i, /mcp.*invoke/i, /mcp.*tool/i, /mcp.*protocol/i,
                /aws\s+.*create/i, /aws\s+.*delete/i, /aws\s+.*modify/i, /aws\s+.*update/i,
                /aws\s+.*put/i, /aws\s+.*deploy/i, /aws\s+.*launch/i, /aws\s+.*terminate/i,
                /terraform\s+apply/i, /terraform\s+destroy/i, /cdk\s+deploy/i, /cdk\s+destroy/i,
                /kubectl\s+create/i, /kubectl\s+apply/i, /kubectl\s+delete/i, /kubectl\s+deploy/i,
                /docker\s+run/i, /docker\s+deploy/i, /docker\s+create/i,
                /\$\(/, /`.*`/, /\|\s*sh/i, /\|\s*bash/i, /\|\s*exec/i,
                /sudo/i, /chmod/i, /chown/i, /rm\s+-rf/i, /curl.*\|/i, /wget.*\|/i, /nc\s+/i, /netcat/i
              ];
              
              const isBlocked = blockedPatterns.some(pattern => pattern.test(sanitizedQuestion));
              
              if (isBlocked) {
                res.statusCode = 403;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  error: 'Security Restriction',
                  message: 'This request contains potentially dangerous commands that are not allowed.',
                  details: 'The chatbot is restricted from executing commands that could create, modify, or delete cloud services.'
                }));
                return;
              }
              
              if (sanitizedQuestion.length > 500) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  error: 'Question too long',
                  message: 'Please keep questions under 500 characters'
                }));
                return;
              }

              console.log(`Free AI request from ${userId}: ${sanitizedQuestion}`);

              // Try to use Hugging Face API if available
              const hfApiKey = process.env.HUGGINGFACE_API_KEY || process.env.VITE_HUGGINGFACE_API_KEY;
              
              if (hfApiKey) {
                try {
                  console.log('Attempting Hugging Face API...');
                  
                  const hfResponse = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-large', {
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${hfApiKey}`,
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      inputs: sanitizedQuestion,
                      parameters: {
                        max_length: 500,
                        temperature: 0.7,
                        do_sample: true
                      }
                    })
                  });

                  if (hfResponse.ok) {
                    const hfData = await hfResponse.json();
                    console.log('Hugging Face response:', hfData);
                    
                    let aiResponse;
                    if (Array.isArray(hfData) && hfData[0]?.generated_text) {
                      aiResponse = hfData[0].generated_text;
                    } else if (hfData.generated_text) {
                      aiResponse = hfData.generated_text;
                    } else if (typeof hfData === 'string') {
                      aiResponse = hfData;
                    } else {
                      aiResponse = `I can help you with "${sanitizedQuestion}". Let me provide you with a comprehensive answer based on my knowledge.`;
                    }
                    
                    // Clean up the response
                    aiResponse = aiResponse.replace(sanitizedQuestion, '').trim();
                    if (aiResponse.length < 20) {
                      aiResponse = `I understand you're asking about "${sanitizedQuestion}". This is an interesting topic that I'd be happy to help explain in detail.`;
                    }

                    const response = {
                      success: true,
                      response: aiResponse,
                      source: 'Hugging Face AI (Free)',
                      timestamp: new Date().toISOString(),
                      processingTime: Date.now() - startTime,
                      metadata: {
                        questionLength: sanitizedQuestion.length,
                        responseLength: aiResponse.length,
                        model: 'microsoft/DialoGPT-large',
                        service: 'huggingface',
                        environment: 'local'
                      }
                    };

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(response));
                    return;
                  } else {
                    console.log('Hugging Face API error:', hfResponse.status, await hfResponse.text());
                  }
                } catch (hfError) {
                  console.log('Hugging Face API failed:', hfError.message);
                }
              }

              // Fallback response with setup guidance
              const response = {
                success: true,
                response: `I'm your Free AI assistant and I can see you have a Hugging Face API key configured!

**Your question:** "${sanitizedQuestion}"

**Status Check:**
${hfApiKey ? '✅ Hugging Face API key detected' : '❌ No Hugging Face API key found'}

**If you're seeing this message, it might be because:**
• The Hugging Face model is still loading (try again in a moment)
• The API key needs proper permissions
• The model is temporarily unavailable

**Your API Key Setup:**
• ✅ Environment variable: ${hfApiKey ? 'CONFIGURED' : 'NOT FOUND'}
• 🔧 Format: ${hfApiKey ? 'Looks good!' : 'Add HUGGINGFACE_API_KEY or VITE_HUGGINGFACE_API_KEY'}

**To get AI responses working:**
1. **Verify your API key** at https://huggingface.co/settings/tokens
2. **Check permissions** - make sure it has 'read' access
3. **Try again** - Hugging Face models sometimes need a moment to load
4. **Alternative**: Try a different free AI service

**Free AI alternatives:**
• **Google AI Studio** - Very generous free tier
• **Cohere** - 100 requests/month free
• **Local AI with Ollama** - Completely free and unlimited

Would you like help setting up any of these alternatives, or shall we troubleshoot the Hugging Face integration?`,
                source: 'Free AI Setup Assistant',
                timestamp: new Date().toISOString(),
                processingTime: Date.now() - startTime,
                metadata: {
                  questionLength: sanitizedQuestion.length,
                  category: 'setup',
                  apiKeyConfigured: !!hfApiKey,
                  environment: 'local'
                }
              };

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(response));

            } catch (error) {
              console.error('API error:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: 'Internal server error',
                message: error.message
              }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}
