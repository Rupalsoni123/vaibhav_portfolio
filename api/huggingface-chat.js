// Vercel API Route: /api/huggingface-chat
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const startTime = Date.now();
  const { question, context = '', userId = 'anonymous' } = req.body;

  // Input validation
  if (!question || question.trim().length === 0) {
    res.status(400).json({
      error: 'Question is required',
      message: 'Please provide a valid question'
    });
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
    res.status(403).json({
      error: 'Security Restriction',
      message: 'This request contains potentially dangerous commands that are not allowed.'
    });
    return;
  }
  
  if (sanitizedQuestion.length > 500) {
    res.status(400).json({
      error: 'Question too long',
      message: 'Please keep questions under 500 characters'
    });
    return;
  }

  console.log(`Hugging Face AI request from ${userId}: ${sanitizedQuestion}`);

  // Try Hugging Face Inference API
  try {
    const hfApiKey = process.env.HUGGINGFACE_API_KEY || process.env.VITE_HUGGINGFACE_API_KEY;
    
    if (!hfApiKey) {
      const response = {
        success: true,
        response: `I'm your AI assistant powered by Hugging Face AI.

**🔑 API Key Required:**
To get AI responses, you need a free Hugging Face API key.

**🆓 Setup Instructions:**
1. **Visit:** https://huggingface.co
2. **Sign up** for a free account
3. **Go to Settings** → Access Tokens
4. **Create new token** with 'read' permissions
5. **Add to environment variables:**
   \`\`\`bash
   # For local development (.env file)
   HUGGINGFACE_API_KEY=hf_your_token_here
   
   # For Vercel deployment
   Add HUGGINGFACE_API_KEY in Vercel environment variables
   \`\`\`

**🎯 Benefits:**
• **Free tier:** 1000 requests/month
• **No credit card required**
• **Good quality AI responses**
• **Easy setup**

**Your question:** "${sanitizedQuestion}"

Once you add the API key, I'll be able to provide AI-powered answers to all your questions!

Would you like help with the setup process?`,
        source: 'Hugging Face Setup Guide',
        timestamp: new Date().toISOString(),
        processingTime: Date.now() - startTime,
        metadata: {
          questionLength: sanitizedQuestion.length,
          setupRequired: true,
          service: 'huggingface'
        }
      };

      res.status(200).json(response);
      return;
    }

    console.log('Calling Hugging Face API...');
    
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
          do_sample: true,
          return_full_text: false
        }
      })
    });

    if (!hfResponse.ok) {
      const errorText = await hfResponse.text();
      console.error('Hugging Face API error:', hfResponse.status, errorText);
      
      let errorMessage = 'Failed to get response from Hugging Face AI.';
      
      if (hfResponse.status === 401) {
        errorMessage = 'Invalid Hugging Face API key. Please check your token.';
      } else if (hfResponse.status === 429) {
        errorMessage = 'Rate limit exceeded. You\'ve used your free quota for this month.';
      } else if (hfResponse.status === 503) {
        errorMessage = 'Hugging Face model is loading. Please try again in a moment.';
      }
      
      const response = {
        success: false,
        error: 'Hugging Face API Error',
        message: errorMessage,
        details: `Status: ${hfResponse.status}`,
        fallback: `I encountered an issue while processing "${sanitizedQuestion}". Please try again in a moment, or check your API key configuration.`,
        timestamp: new Date().toISOString(),
        processingTime: Date.now() - startTime
      };

      res.status(200).json(response);
      return;
    }

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
      aiResponse = `I understand you're asking about "${sanitizedQuestion}". This is an interesting topic that I'd be happy to help explain in detail.`;
    }
    
    // Clean up the response
    aiResponse = aiResponse.replace(sanitizedQuestion, '').trim();
    
    // Ensure minimum response length
    if (aiResponse.length < 20) {
      aiResponse = `Thank you for asking about "${sanitizedQuestion}". Let me provide you with a helpful explanation about this topic.`;
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
        environment: 'vercel'
      }
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('Hugging Face error:', error);
    
    const response = {
      success: false,
      error: 'AI Service Error',
      message: `I encountered an issue while processing your question.`,
      details: error.message,
      fallback: `I'd like to help you with "${sanitizedQuestion}", but I'm having trouble connecting to the AI service right now. Please try again in a moment.`,
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - startTime
    };

    res.status(500).json(response);
  }
}
