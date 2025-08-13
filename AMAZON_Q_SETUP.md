# Amazon Q CLI Integration Setup

This guide will help you integrate Amazon Q CLI with your portfolio chatbot for real-time AWS assistance.

## 🚀 Quick Start

### 1. Prerequisites

- Node.js 16+ installed
- AWS CLI configured with valid credentials
- Active AWS account with appropriate permissions

### 2. Install Amazon Q CLI

```bash
# Install Amazon Q CLI globally
npm install -g @aws/amazon-q-cli

# Or using pip (if available)
pip install amazon-q-cli
```

### 3. Configure Amazon Q CLI

```bash
# Configure Amazon Q with your AWS credentials
q configure

# Test the installation
q --version
q chat "Hello, can you help me with AWS?"
```

### 4. Set Up Backend API

```bash
# Navigate to the API directory
cd api

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
nano .env
```

### 5. Environment Configuration

Create `.env` file in the `api` directory:

```env
# AWS Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here

# API Configuration
PORT=3002
FRONTEND_URL=http://localhost:3001

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=50

# Security
NODE_ENV=development
```

### 6. Start the Backend API

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### 7. Update Frontend Configuration

Update the Amazon Q integration base URL in `src/utils/amazonQIntegration.js`:

```javascript
// For local development
const amazonQ = new AmazonQIntegration('http://localhost:3002');

// For production
const amazonQ = new AmazonQIntegration('https://your-api-domain.com');
```

## 🔧 Configuration Options

### AWS Permissions

Your AWS user/role needs these permissions for full Amazon Q functionality:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "q:*",
        "bedrock:*",
        "ec2:Describe*",
        "s3:List*",
        "lambda:List*",
        "iam:List*",
        "cloudformation:Describe*",
        "cloudwatch:Get*"
      ],
      "Resource": "*"
    }
  ]
}
```

### API Rate Limiting

Adjust rate limits in `api/amazon-q.js`:

```javascript
const qCliLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // requests per window
  message: 'Too many requests'
});
```

### Question Routing

Customize which questions go to Amazon Q in `src/utils/amazonQIntegration.js`:

```javascript
shouldUseAmazonQ(question) {
  const awsKeywords = [
    'aws', 'ec2', 's3', 'lambda', 'rds', 'vpc',
    // Add more keywords as needed
  ];
  
  return awsKeywords.some(keyword => 
    question.toLowerCase().includes(keyword)
  );
}
```

## 🧪 Testing the Integration

### 1. Test Amazon Q CLI Directly

```bash
# Test basic functionality
q chat "What is AWS EC2?"

# Test with specific AWS questions
q chat "How do I create an S3 bucket using AWS CLI?"
```

### 2. Test API Endpoints

```bash
# Check API health
curl http://localhost:3000/api/health

# Check Amazon Q status
curl http://localhost:3002/api/amazon-q/status

# Test Amazon Q query
curl -X POST http://localhost:3002/api/amazon-q \
  -H "Content-Type: application/json" \
  -d '{"question": "How do I deploy a Lambda function?"}'
```

### 3. Test Frontend Integration

1. Start your portfolio: `npm run dev`
2. Open the chatbot
3. Ask AWS-related questions:
   - "How do I create an EC2 instance?"
   - "What's the best way to store files in AWS?"
   - "Show me how to set up a VPC"

## 🚨 Troubleshooting

### Common Issues

**Amazon Q CLI not found:**
```bash
# Reinstall Amazon Q CLI
npm uninstall -g @aws/amazon-q-cli
npm install -g @aws/amazon-q-cli
```

**AWS credentials not configured:**
```bash
# Configure AWS CLI first
aws configure

# Then configure Amazon Q
q configure
```

**API connection errors:**
- Check if backend API is running on port 3002
- Verify CORS settings in `api/amazon-q.js`
- Check firewall/network settings

**Rate limiting issues:**
- Reduce request frequency
- Increase rate limits in configuration
- Implement request queuing

### Debug Mode

Enable debug logging:

```bash
# Backend API debug
DEBUG=* npm run dev

# Amazon Q CLI debug
q chat "test question" --debug
```

## 🔒 Security Considerations

### Production Deployment

1. **Environment Variables:**
   - Never commit `.env` files
   - Use secure environment variable management
   - Rotate AWS credentials regularly

2. **API Security:**
   - Enable HTTPS in production
   - Implement proper authentication
   - Use API keys for additional security
   - Monitor API usage and costs

3. **AWS Permissions:**
   - Follow principle of least privilege
   - Use IAM roles instead of access keys when possible
   - Enable CloudTrail for audit logging

### Cost Management

- Monitor Amazon Q usage and costs
- Set up billing alerts
- Implement usage quotas per user
- Cache common responses to reduce API calls

## 📊 Monitoring and Analytics

### API Metrics

Track these metrics in production:

- Request volume and response times
- Error rates and types
- Amazon Q CLI success/failure rates
- User engagement with Q responses

### AWS CloudWatch Integration

```javascript
// Add CloudWatch metrics to your API
const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

// Log custom metrics
await cloudwatch.putMetricData({
  Namespace: 'Portfolio/AmazonQ',
  MetricData: [{
    MetricName: 'QueriesProcessed',
    Value: 1,
    Unit: 'Count'
  }]
}).promise();
```

## 🚀 Advanced Features

### Custom Commands

Add custom Amazon Q commands:

```javascript
// In your API, add custom command handling
if (question.startsWith('/deploy')) {
  const deployCommand = `q deploy ${question.slice(7)}`;
  // Execute custom deployment logic
}
```

### Response Caching

Implement response caching for common questions:

```javascript
const cache = new Map();

async function getCachedResponse(question) {
  const cacheKey = question.toLowerCase().trim();
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  
  const response = await amazonQ.query(question);
  cache.set(cacheKey, response);
  return response;
}
```

### Multi-User Support

Add user-specific contexts and preferences:

```javascript
// Store user contexts
const userContexts = new Map();

async function queryWithContext(question, userId) {
  const context = userContexts.get(userId) || '';
  const response = await amazonQ.query(question, context, userId);
  
  // Update user context
  userContexts.set(userId, response.context);
  return response;
}
```

## 📚 Additional Resources

- [Amazon Q CLI Documentation](https://docs.aws.amazon.com/amazonq/)
- [AWS CLI Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Production Deployment](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## 🤝 Contributing

To contribute to the Amazon Q integration:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This integration is licensed under the MIT License. See LICENSE file for details.
