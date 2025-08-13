// Amazon Q CLI Integration API
// This file demonstrates how to integrate Amazon Q CLI with your portfolio chatbot

const express = require('express');
const { exec } = require('child_process');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting for Amazon Q CLI calls
const qCliLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per windowMs
  message: {
    error: 'Too many Amazon Q requests, please try again later.',
    retryAfter: '15 minutes'
  }
});

app.use(express.json({ limit: '10mb' }));
app.use('/api/amazon-q', qCliLimit);

// Amazon Q CLI Integration Endpoint
app.post('/api/amazon-q', async (req, res) => {
  const { question, context = '', userId = 'anonymous' } = req.body;
  
  // Input validation
  if (!question || question.trim().length === 0) {
    return res.status(400).json({
      error: 'Question is required',
      message: 'Please provide a valid question for Amazon Q'
    });
  }

  // Sanitize input to prevent command injection
  const sanitizedQuestion = question.replace(/[;&|`$(){}[\]]/g, '').trim();
  
  if (sanitizedQuestion.length > 500) {
    return res.status(400).json({
      error: 'Question too long',
      message: 'Please keep questions under 500 characters'
    });
  }

  console.log(`Amazon Q request from ${userId}: ${sanitizedQuestion}`);

  try {
    // Check if Amazon Q CLI is available
    const checkCommand = 'q --version';
    
    exec(checkCommand, (checkError) => {
      if (checkError) {
        return res.status(503).json({
          error: 'Amazon Q CLI not available',
          message: 'Amazon Q CLI is not installed or configured properly',
          suggestion: 'Please install Amazon Q CLI: npm install -g @aws/amazon-q-cli'
        });
      }

      // Execute Amazon Q CLI command
      const qCommand = `q chat "${sanitizedQuestion}"`;
      const timeout = 30000; // 30 second timeout
      
      const childProcess = exec(qCommand, {
        timeout: timeout,
        env: {
          ...process.env,
          AWS_REGION: process.env.AWS_REGION || 'us-east-1'
        }
      }, (error, stdout, stderr) => {
        if (error) {
          console.error('Amazon Q CLI error:', error);
          
          // Handle different types of errors
          if (error.code === 'ETIMEDOUT') {
            return res.status(408).json({
              error: 'Request timeout',
              message: 'Amazon Q request took too long to complete',
              suggestion: 'Try asking a more specific question'
            });
          }
          
          if (error.code === 1) {
            return res.status(400).json({
              error: 'Amazon Q processing error',
              message: 'Amazon Q could not process your request',
              details: stderr || error.message,
              suggestion: 'Try rephrasing your question or check AWS credentials'
            });
          }
          
          return res.status(500).json({
            error: 'Amazon Q CLI execution error',
            message: error.message,
            suggestion: 'Please try again or contact support'
          });
        }

        if (stderr && stderr.trim()) {
          console.warn('Amazon Q CLI warning:', stderr);
        }

        // Process and format the response
        const qResponse = stdout.trim();
        
        if (!qResponse) {
          return res.status(204).json({
            message: 'Amazon Q returned an empty response',
            suggestion: 'Try asking a more specific AWS-related question'
          });
        }

        // Enhanced response with metadata
        const response = {
          success: true,
          response: qResponse,
          source: 'Amazon Q CLI',
          timestamp: new Date().toISOString(),
          processingTime: Date.now() - startTime,
          metadata: {
            questionLength: sanitizedQuestion.length,
            responseLength: qResponse.length,
            hasCodeBlocks: qResponse.includes('```'),
            hasCommands: qResponse.includes('aws ') || qResponse.includes('q '),
            category: categorizeQuestion(sanitizedQuestion)
          }
        };

        res.json(response);
      });

      const startTime = Date.now();
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An unexpected error occurred while processing your request',
      suggestion: 'Please try again later'
    });
  }
});

// Helper function to categorize questions
function categorizeQuestion(question) {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('ec2') || lowerQuestion.includes('instance')) return 'compute';
  if (lowerQuestion.includes('s3') || lowerQuestion.includes('bucket')) return 'storage';
  if (lowerQuestion.includes('lambda') || lowerQuestion.includes('function')) return 'serverless';
  if (lowerQuestion.includes('rds') || lowerQuestion.includes('database')) return 'database';
  if (lowerQuestion.includes('vpc') || lowerQuestion.includes('network')) return 'networking';
  if (lowerQuestion.includes('iam') || lowerQuestion.includes('security')) return 'security';
  if (lowerQuestion.includes('cloudformation') || lowerQuestion.includes('cdk')) return 'infrastructure';
  if (lowerQuestion.includes('cost') || lowerQuestion.includes('billing')) return 'billing';
  if (lowerQuestion.includes('monitor') || lowerQuestion.includes('cloudwatch')) return 'monitoring';
  
  return 'general';
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Amazon Q CLI Integration',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Amazon Q CLI status check
app.get('/api/amazon-q/status', (req, res) => {
  exec('q --version', (error, stdout, stderr) => {
    if (error) {
      return res.json({
        available: false,
        error: error.message,
        suggestion: 'Install Amazon Q CLI: npm install -g @aws/amazon-q-cli'
      });
    }
    
    res.json({
      available: true,
      version: stdout.trim(),
      awsRegion: process.env.AWS_REGION || 'us-east-1',
      timestamp: new Date().toISOString()
    });
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('API Error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: 'Something went wrong processing your request',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: 'The requested API endpoint does not exist',
    availableEndpoints: [
      'POST /api/amazon-q',
      'GET /api/health',
      'GET /api/amazon-q/status'
    ]
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🚀 Amazon Q CLI Integration API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔍 Q CLI status: http://localhost:${PORT}/api/amazon-q/status`);
});

module.exports = app;
