// Hugging Face AI Integration
class HuggingFaceIntegration {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
    this.isAvailable = true;
  }

  // Check if Hugging Face AI is available
  async checkAvailability() {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
      return { 
        available: true, 
        service: 'Hugging Face AI',
        details: 'Free tier: 1000 requests/month'
      };
    } catch (error) {
      return { available: true, service: 'Hugging Face AI', note: 'Setup required' };
    }
  }

  // Query Hugging Face AI
  async query(question, context = '', userId = 'anonymous') {
    try {
      const response = await fetch(`${this.baseUrl}/api/huggingface-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          context,
          userId
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Hugging Face query failed:', error);
      throw error;
    }
  }

  // Format Hugging Face response for display
  formatResponse(hfResponse, originalQuestion) {
    // Handle error responses
    if (!hfResponse.success && hfResponse.error) {
      return `🔧 **${hfResponse.error}**

${hfResponse.message}

${hfResponse.fallback || ''}`;
    }
    
    const { response, metadata, processingTime, source } = hfResponse;
    
    let formattedResponse = response;
    
    // Add source attribution
    if (source) {
      formattedResponse += `\n\n---\n**Powered by:** ${source}`;
      
      if (metadata && metadata.model) {
        formattedResponse += ` (${metadata.model})`;
      }
    }
    
    // Add processing time
    if (processingTime) {
      formattedResponse += `\n**Response time:** ${processingTime}ms`;
    }
    
    return formattedResponse;
  }

  // Handle errors gracefully
  handleError(error, originalQuestion) {
    console.error('Hugging Face error:', error);
    
    if (error.message.includes('API key')) {
      return `🔑 **Hugging Face API Key Required**

I'd like to help you with "${originalQuestion}", but I need a Hugging Face API key to provide AI responses.

**🆓 Free Setup (No Credit Card Required):**

1. **Visit:** https://huggingface.co
2. **Sign up** for a free account
3. **Go to Settings** → Access Tokens
4. **Create new token** with 'read' permissions
5. **Add to environment variables:**

**For Local Development:**
\`\`\`bash
# Add to your .env file
HUGGINGFACE_API_KEY=hf_your_token_here
\`\`\`

**For Vercel Deployment:**
\`\`\`bash
# Add in Vercel environment variables
HUGGINGFACE_API_KEY=hf_your_token_here
\`\`\`

**🎯 What You Get:**
• **1000 free requests/month**
• **No credit card required**
• **Good quality AI responses**
• **Easy setup process**

**Error:** ${error.message}`;
    }
    
    if (error.message.includes('timeout') || error.message.includes('network')) {
      return `🌐 **Connection Issue**

I'm having trouble connecting to Hugging Face AI right now.

**This might be due to:**
• Temporary network issues
• Hugging Face service maintenance
• Model loading (try again in 30 seconds)

**Please try:**
• Asking your question again in a moment
• Refreshing the page
• Checking your internet connection

**Your question:** "${originalQuestion}"`;
    }
    
    return `❌ **Hugging Face AI Error**

I encountered an issue while processing your question.

**Error:** ${error.message}

**You can:**
• Try rephrasing your question
• Ask again in a moment
• Check if your API key is valid

**Your question:** "${originalQuestion}"`;
  }
}

// Create and export a singleton instance
const huggingfaceAI = new HuggingFaceIntegration();
export default huggingfaceAI;
