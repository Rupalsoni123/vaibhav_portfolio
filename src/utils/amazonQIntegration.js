// Amazon Q CLI Frontend Integration - Vercel Compatible
// This utility handles communication with Amazon Q CLI backend

class AmazonQIntegration {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl; // Empty string means same origin
    this.isAvailable = false;
    this.isVercel = this.detectVercelEnvironment();
    this.checkAvailability();
  }

  // Detect if running on Vercel
  detectVercelEnvironment() {
    return window.location.hostname.includes('vercel.app') || 
           window.location.hostname.includes('vercel.com') ||
           process.env.NODE_ENV === 'production';
  }

  // Check if Amazon Q CLI is available
  async checkAvailability() {
    try {
      // Use simplified endpoint for Vercel compatibility
      const endpoint = this.isVercel ? '/api/amazon-q-status' : '/api/amazon-q/status';
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      this.isAvailable = data.available || data.fallbackMode;
      
      if (this.isVercel && data.fallbackMode) {
        console.log('Using built-in AWS knowledge on Vercel');
      }
      
      return data;
    } catch (error) {
      console.warn('Amazon Q CLI status check failed:', error);
      this.isAvailable = this.isVercel; // Enable built-in responses on Vercel
      return { 
        available: this.isAvailable, 
        error: error.message, 
        fallbackMode: true,
        environment: this.isVercel ? 'vercel' : 'local'
      };
    }
  }

  // Query Amazon Q CLI
  async query(question, context = '', userId = 'anonymous') {
    if (!this.isAvailable) {
      await this.checkAvailability();
      if (!this.isAvailable) {
        throw new Error('Amazon Q CLI is not available');
      }
    }

    try {
      // Use simplified endpoint for Vercel compatibility
      const endpoint = this.isVercel ? '/api/amazon-q-query' : '/api/amazon-q';
      
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          context,
          userId
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Amazon Q query error:', error);
      throw error;
    }
  }

  // Check if a question should be routed to Amazon Q (now always true)
  shouldUseAmazonQ(question) {
    // Always try to use Amazon Q CLI for all questions
    return true;
  }

  // Format Amazon Q response for display
  formatResponse(qResponse, originalQuestion) {
    // Handle error responses
    if (!qResponse.success && qResponse.error) {
      return `🔧 **${qResponse.error}**

${qResponse.message}

**🛠️ Troubleshooting Steps:**
${qResponse.troubleshooting.steps.map(step => `• ${step}`).join('\n')}

**🔍 Common Issues:**
${qResponse.troubleshooting.commonIssues.map(issue => `• ${issue}`).join('\n')}

**📚 Meanwhile, here's what I can tell you:**

${qResponse.fallbackResponse}`;
    }
    
    const { response, metadata, processingTime } = qResponse;
    
    let formattedResponse = `🚀 **Amazon Q Response:**\n\n${response}`;
    
    // Add metadata if available
    if (metadata) {
      formattedResponse += `\n\n📊 **Response Details:**`;
      
      if (metadata.hasCodeBlocks) {
        formattedResponse += `\n• Contains code examples and commands`;
      }
      
      if (metadata.hasCommands) {
        formattedResponse += `\n• Includes AWS CLI commands`;
      }
      
      if (metadata.category && metadata.category !== 'general') {
        formattedResponse += `\n• Category: ${metadata.category.charAt(0).toUpperCase() + metadata.category.slice(1)}`;
      }
      
      if (processingTime) {
        formattedResponse += `\n• Processing time: ${processingTime}ms`;
      }
    }
    
    formattedResponse += `\n\n💡 **Powered by Amazon Q CLI** - Real-time AWS assistance`;
    
    return formattedResponse;
  }

  // Handle errors gracefully
  handleError(error, originalQuestion) {
    console.error('Amazon Q error:', error);
    
    if (error.message.includes('timeout')) {
      return `⏱️ **Amazon Q Timeout**\n\nThe request took too long to process. This might happen with complex questions.\n\n**Suggestions:**\n• Try asking a more specific question\n• Break complex requests into smaller parts\n• Check your internet connection\n\n**Original question:** "${originalQuestion}"`;
    }
    
    if (error.message.includes('not available')) {
      return `🔧 **Amazon Q CLI Not Available**\n\nAmazon Q CLI integration is currently unavailable.\n\n**To enable Amazon Q integration:**\n1. Install Amazon Q CLI: \`npm install -g @aws/amazon-q-cli\`\n2. Configure AWS credentials: \`aws configure\`\n3. Set up Amazon Q: \`q configure\`\n\n**Meanwhile, I can still help with AWS questions using my built-in knowledge!**\n\nWould you like me to answer "${originalQuestion}" using my AWS expertise?`;
    }
    
    if (error.message.includes('rate limit')) {
      return `🚦 **Rate Limit Reached**\n\nToo many Amazon Q requests in a short time.\n\n**Please:**\n• Wait a few minutes before trying again\n• Consider asking fewer questions at once\n\n**I can still help with "${originalQuestion}" using my built-in AWS knowledge while you wait!**`;
    }
    
    // For command failed errors, provide helpful AWS guidance
    if (error.message.includes('Command failed')) {
      return `🚀 **AWS Question Detected**\n\nI can help you with AWS and DevOps topics! While Amazon Q CLI had some issues, I can still provide comprehensive information about:\n\n**AWS Services:**\n• **Compute:** EC2, Lambda, ECS, EKS, Fargate\n• **Storage:** S3, EBS, EFS, Glacier\n• **Database:** RDS, DynamoDB, ElastiCache, Redshift\n• **Networking:** VPC, CloudFront, Route 53, Load Balancers\n• **Security:** IAM, KMS, Secrets Manager, WAF\n\n**DevOps Tools:**\n• **Infrastructure as Code:** Terraform, CloudFormation, CDK\n• **Containers:** Docker, Kubernetes, ECS, EKS\n• **CI/CD:** CodePipeline, Jenkins, GitLab CI, GitHub Actions\n• **Monitoring:** CloudWatch, Prometheus, Grafana\n\n**Best Practices:**\n• Architecture design patterns\n• Cost optimization strategies\n• Security configurations\n• Performance tuning\n\nWhat specific AWS or DevOps topic would you like me to explain regarding "${originalQuestion}"?`;
    }
    
    return `❌ **Amazon Q Error**\n\nSorry, there was an issue with Amazon Q CLI integration.\n\n**Error:** ${error.message}\n\n**Don't worry!** I can still help with "${originalQuestion}" using my comprehensive AWS knowledge. Would you like me to provide an answer based on my built-in expertise?`;
  }

  // Get integration status for UI
  getStatus() {
    return {
      available: this.isAvailable,
      baseUrl: this.baseUrl,
      lastChecked: new Date().toISOString()
    };
  }
}

// Create singleton instance
const amazonQ = new AmazonQIntegration();

export default amazonQ;
