import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../utils/ThemeContext';
import amazonQ from '../utils/amazonQIntegration';

const ImprovedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amazonQStatus, setAmazonQStatus] = useState({ available: false });
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 **Hi! I'm Vaibhav's AI Assistant - Secure & Educational!**\n\n🛡️ **Security Notice:**\n• **Read-Only Mode:** I can explain and teach, but cannot create or modify cloud services\n• **No MCP Servers:** I don't use external MCP servers for security\n• **Safe Learning:** Perfect for understanding concepts without affecting your infrastructure\n\n🧠 **What I Can Help With:**\n\n📚 **AWS & Cloud Knowledge:**\n• **Service Explanations:** How AWS services work and when to use them\n• **Architecture Guidance:** Best practices and design patterns\n• **Cost Optimization:** Strategies to reduce cloud costs\n• **Security Best Practices:** How to secure your AWS infrastructure\n• **Troubleshooting:** Common issues and solutions\n\n🔬 **Technical Topics:**\n• **DevOps:** Kubernetes, Docker, Terraform, CI/CD pipelines\n• **Programming:** Languages, frameworks, best practices\n• **Science & Math:** Physics, chemistry, biology, mathematics\n• **Technology:** AI, quantum computing, software development\n\n📖 **General Knowledge:**\n• **History & Culture:** World events, civilizations, literature\n• **Business & Economics:** Markets, finance, career guidance\n• **Current Information:** Date/time, weather guidance, news sources\n\n💡 **How to Ask Questions:**\n✅ **Good:** \"How does AWS Lambda work?\"\n✅ **Good:** \"What are S3 best practices?\"\n✅ **Good:** \"Explain Kubernetes architecture\"\n❌ **Blocked:** \"Create an S3 bucket\"\n❌ **Blocked:** \"Deploy this to AWS\"\n❌ **Blocked:** \"Run terraform apply\"\n\n🎯 **Perfect For:**\n• Learning AWS concepts and services\n• Understanding DevOps practices\n• Getting architecture recommendations\n• Troubleshooting guidance\n• Exam preparation and certification study\n\n👨‍💻 **About Vaibhav:**\n• Senior DevOps Engineer at Inexture Solutions\n• AWS and Kubernetes certified professional\n• Cloud infrastructure and automation expert\n\n**API Status:** `/api/health` - System health check available\n\nWhat would you like to learn about today? 🚀",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const [conversationContext, setConversationContext] = useState([]);
  const messagesEndRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    
    // Check Amazon Q availability on component mount
    amazonQ.checkAvailability().then(status => {
      setAmazonQStatus(status);
      console.log('Amazon Q CLI status:', status);
    });
  }, [messages]);

  // Check if question should use Amazon Q CLI
  const shouldUseAmazonQ = (question) => {
    return amazonQ.shouldUseAmazonQ(question) && amazonQStatus.available;
  };

  // Helper function to determine season
  const getSeason = (date) => {
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    
    if ((month === 12 && day >= 21) || (month <= 2) || (month === 3 && day < 20)) {
      return 'Winter ❄️';
    } else if ((month === 3 && day >= 20) || (month <= 5) || (month === 6 && day < 21)) {
      return 'Spring 🌸';
    } else if ((month === 6 && day >= 21) || (month <= 8) || (month === 9 && day < 23)) {
      return 'Summer ☀️';
    } else {
      return 'Autumn 🍂';
    }
  };

  // Helper function to check if year is leap year
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  // Security function to validate and sanitize user input
  const validateAndSanitizeInput = (input) => {
    if (!input || input.trim().length === 0) {
      return { valid: false, error: 'Please enter a question' };
    }

    const sanitized = input.trim();
    
    // Security: Block dangerous patterns
    const blockedPatterns = [
      // MCP server usage
      /mcp[_-]?server/i,
      /mcp.*invoke/i,
      /mcp.*tool/i,
      
      // AWS service creation/modification
      /aws\s+.*create/i,
      /aws\s+.*delete/i,
      /aws\s+.*modify/i,
      /aws\s+.*update/i,
      /aws\s+.*deploy/i,
      /aws\s+.*launch/i,
      /aws\s+.*terminate/i,
      
      // Infrastructure deployment
      /terraform\s+apply/i,
      /terraform\s+destroy/i,
      /cdk\s+deploy/i,
      /kubectl\s+create/i,
      /kubectl\s+apply/i,
      /docker\s+run/i,
      
      // Command injection attempts
      /\$\(/,
      /`.*`/,
      /\|\s*sh/i,
      /\|\s*bash/i,
      /sudo/i
    ];
    
    const isBlocked = blockedPatterns.some(pattern => pattern.test(sanitized));
    
    if (isBlocked) {
      return { 
        valid: false, 
        error: 'Security Restriction: This request contains commands that could affect cloud services. Please ask conceptual questions instead.',
        suggestion: 'Try asking: "How does AWS S3 work?" instead of "Create an S3 bucket"'
      };
    }
    
    if (sanitized.length > 500) {
      return { valid: false, error: 'Question is too long. Please keep it under 500 characters.' };
    }
    
    return { valid: true, sanitized };
  };

  const handleSendMessage = async (messageText) => {
    // Security validation
    const validation = validateAndSanitizeInput(messageText);
    if (!validation.valid) {
      const errorMessage = {
        id: Date.now(),
        text: `🚫 **${validation.error}**${validation.suggestion ? `\n\n💡 **Suggestion:** ${validation.suggestion}` : ''}`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setMessage('');
      return;
    }

    const sanitizedMessage = validation.sanitized;

    const userMessage = {
      id: Date.now(),
      text: sanitizedMessage,
      isBot: false,
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setMessage('');
    setIsTyping(true);

    // Update conversation context
    setConversationContext(prev => [...prev.slice(-10), sanitizedMessage]);

    setTimeout(async () => {
      try {
        console.log('Getting intelligent response for:', sanitizedMessage);
        
        let botResponse = "🤖 **Thank you for your question!**\n\nI'm here to help with comprehensive answers on any topic. Let me provide you with detailed information.\n\n**What I can help with:**\n• Science & Technology\n• History & Culture\n• DevOps & AWS\n• Mathematics & Physics\n• Business & Economics\n• And much more!\n\nWhat specific aspect would you like me to explain?";

        // Check if this should use Amazon Q CLI
        if (shouldUseAmazonQ(sanitizedMessage)) {
          console.log('Routing to Amazon Q CLI...');
          
          try {
            const qResponse = await amazonQ.query(sanitizedMessage, '', 'portfolio-user');
            const formattedResponse = amazonQ.formatResponse(qResponse, sanitizedMessage);
            botResponse = formattedResponse;
          } catch (qError) {
            console.error('Amazon Q error, using fallback:', qError);
            botResponse = `🤖 **AWS Question Detected**\n\nI can help with AWS and DevOps topics! While Amazon Q CLI is not available right now, I can still provide comprehensive information about:\n\n• **AWS Services:** EC2, S3, Lambda, RDS, VPC, CloudFormation\n• **DevOps Tools:** Kubernetes, Docker, Terraform, CI/CD\n• **Best Practices:** Security, cost optimization, architecture\n• **Troubleshooting:** Common issues and solutions\n\nWhat specific AWS or DevOps topic would you like me to explain?`;
          }
        } else {
          // Handle different types of questions
          const lowerMessage = sanitizedMessage.toLowerCase();
          
          // Real-time information queries
          if (lowerMessage.includes('date') || lowerMessage.includes('today') || lowerMessage.includes('time')) {
            const now = new Date();
            const dateOptions = { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            };
            const timeOptions = { 
              hour: '2-digit', 
              minute: '2-digit', 
              second: '2-digit',
              timeZoneName: 'short'
            };
            
            const currentDate = now.toLocaleDateString('en-US', dateOptions);
            const currentTime = now.toLocaleTimeString('en-US', timeOptions);
            const timestamp = now.toISOString();
            
            botResponse = `📅 **Current Date & Time Information**

**Today's Date:** ${currentDate}
**Current Time:** ${currentTime}
**ISO Timestamp:** ${timestamp}
**Unix Timestamp:** ${now.getTime()}

**Additional Information:**
• **Day of Year:** ${Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))}
• **Week Number:** ${Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + new Date(now.getFullYear(), 0, 1).getDay() + 1) / 7)}
• **Quarter:** Q${Math.floor((now.getMonth() + 3) / 3)} ${now.getFullYear()}
• **Season:** ${getSeason(now)}

**Time Zone Information:**
• **Your Local Time Zone:** ${Intl.DateTimeFormat().resolvedOptions().timeZone}
• **UTC Offset:** ${now.getTimezoneOffset() / -60} hours

**Fun Facts:**
• This year ${now.getFullYear()} ${isLeapYear(now.getFullYear()) ? 'is' : 'is not'} a leap year
• Days until New Year: ${Math.ceil((new Date(now.getFullYear() + 1, 0, 1) - now) / (1000 * 60 * 60 * 24))}
• Days since New Year: ${Math.floor((now - new Date(now.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)) + 1}

Is there anything specific about dates, times, or calendars you'd like to know more about?`;
          }
          
          // Weather queries
          else if (lowerMessage.includes('weather')) {
            botResponse = `🌤️ **Weather Information**

I don't have access to real-time weather data, but I can help you understand weather and direct you to reliable sources:

**For Current Weather:**
• **Weather.com** - Comprehensive forecasts and radar
• **AccuWeather** - Detailed local conditions
• **National Weather Service** - Official government forecasts
• **Weather apps** on your phone for location-based updates

**Understanding Weather:**
• **Temperature** - Affected by season, latitude, altitude, and proximity to water
• **Precipitation** - Rain, snow, sleet depend on atmospheric moisture and temperature
• **Pressure Systems** - High pressure brings clear skies, low pressure brings storms
• **Humidity** - Amount of water vapor in the air affects comfort

**Weather Patterns:**
• **Fronts** - Boundaries between air masses cause weather changes
• **Seasonal Variations** - Predictable patterns based on Earth's tilt and orbit
• **Local Effects** - Mountains, lakes, and urban areas create microclimates

**Climate vs Weather:**
• **Weather** - Short-term atmospheric conditions (daily/weekly)
• **Climate** - Long-term patterns over decades
• **Climate Change** - Long-term shifts in global weather patterns

For accurate, up-to-date weather information for your specific location, I recommend checking your local weather service or a reliable weather app.

What specific weather topic would you like me to explain?`;
          }
          
          // Current events and news
          else if (lowerMessage.includes('news') || lowerMessage.includes('current events') || lowerMessage.includes('latest')) {
            botResponse = `📰 **Current Events & News**

I don't have access to real-time news feeds, but I can guide you to reliable news sources and help you understand how to stay informed:

**Reliable News Sources:**
• **Reuters** - International news agency, factual reporting
• **Associated Press (AP)** - Non-profit news cooperative
• **BBC News** - British public service broadcaster
• **NPR** - National Public Radio, in-depth analysis
• **PBS NewsHour** - Public television news program

**News Categories:**
• **Breaking News** - Immediate, developing stories
• **Politics** - Government, elections, policy changes
• **Business** - Markets, economy, corporate news
• **Technology** - Innovation, cybersecurity, digital trends
• **Science** - Research, discoveries, health developments
• **International** - Global events, diplomacy, conflicts

**Media Literacy Tips:**
• **Check Multiple Sources** - Cross-reference important stories
• **Verify Information** - Look for primary sources and official statements
• **Understand Bias** - All sources have some perspective
• **Fact-Check** - Use sites like Snopes, FactCheck.org, PolitiFact
• **Be Skeptical** - Question sensational headlines and unverified claims

**Staying Informed:**
• **News Aggregators** - Google News, Apple News for diverse perspectives
• **Newsletters** - Curated content from trusted journalists
• **Podcasts** - In-depth analysis and discussion
• **Social Media** - Useful for breaking news but verify through reliable sources

**Current Global Trends (General):**
• **Technology** - AI development, cybersecurity, space exploration
• **Climate** - Environmental policies, renewable energy adoption
• **Geopolitics** - International relations, trade agreements
• **Health** - Medical breakthroughs, public health initiatives

What type of current information or news topic interests you most?`;
          }
          
          else if (lowerMessage.includes('vaibhav')) {
            botResponse = `👨‍💻 **About Vaibhav**\n\nVaibhav is a Senior DevOps Engineer at Inexture Solutions with extensive experience in:\n\n**Technical Expertise:**\n• **Cloud Platforms:** AWS (certified), Azure, GCP\n• **Container Orchestration:** Kubernetes, Docker, ECS/EKS\n• **Infrastructure as Code:** Terraform, CloudFormation, CDK\n• **CI/CD:** Jenkins, GitLab CI, GitHub Actions, AWS CodePipeline\n• **Monitoring:** Prometheus, Grafana, CloudWatch, ELK Stack\n\n**Professional Experience:**\n• Designing and implementing scalable cloud architectures\n• Automating deployment pipelines and infrastructure provisioning\n• Optimizing costs and performance for enterprise applications\n• Leading DevOps transformation initiatives\n• Mentoring junior engineers and driving best practices\n\n**Certifications:**\n• AWS Certified Solutions Architect\n• Kubernetes Administrator (CKA)\n• Terraform Associate\n\n**Key Achievements:**\n• Reduced deployment time by 80% through automation\n• Implemented multi-region disaster recovery solutions\n• Led migration of legacy applications to cloud-native architectures\n• Established monitoring and alerting systems for 99.9% uptime\n\nWhat specific aspect of Vaibhav's experience would you like to know more about?`;
          } else if (lowerMessage.includes('kubernetes') || lowerMessage.includes('docker')) {
            botResponse = `🚀 **Container Technologies**\n\n**Kubernetes:**\nKubernetes is a powerful container orchestration platform that automates deployment, scaling, and management of containerized applications.\n\n**Key Concepts:**\n• **Pods:** Smallest deployable units containing one or more containers\n• **Services:** Stable network endpoints for accessing pods\n• **Deployments:** Manage replica sets and rolling updates\n• **ConfigMaps & Secrets:** Configuration and sensitive data management\n• **Ingress:** HTTP/HTTPS routing to services\n\n**Docker:**\nDocker provides containerization technology for packaging applications with their dependencies.\n\n**Benefits:**\n• **Consistency:** Same environment across development, testing, and production\n• **Portability:** Run anywhere Docker is supported\n• **Efficiency:** Lightweight compared to virtual machines\n• **Scalability:** Easy horizontal scaling\n• **Isolation:** Applications run in isolated environments\n\n**Best Practices:**\n• Use multi-stage builds to optimize image size\n• Implement health checks for reliability\n• Follow security best practices (non-root users, minimal base images)\n• Use proper resource limits and requests\n• Implement proper logging and monitoring\n\nWhat specific aspect of containerization would you like me to explain further?`;
          } else {
            // General response for other topics
            botResponse = `🤖 **I'm here to help with "${messageText}"!**\n\nI can provide comprehensive information on a wide range of topics:\n\n**🔬 Science & Technology:**\n• Physics, Chemistry, Biology, Mathematics\n• Artificial Intelligence, Quantum Computing\n• Software Development, Programming Languages\n\n**📚 Knowledge & Learning:**\n• History, Geography, Literature, Philosophy\n• Social Sciences, Psychology, Economics\n• Current Events and Analysis\n\n**💼 Professional Topics:**\n• DevOps, Cloud Computing, AWS Services\n• Business Strategy, Finance, Career Guidance\n• Project Management, Leadership\n\n**🌍 Practical Information:**\n• How things work, Step-by-step guides\n• Problem-solving approaches\n• Best practices and recommendations\n\nCould you be more specific about what aspect of "${messageText}" you'd like me to explain? The more details you provide, the better I can tailor my response to your needs!`;
          }
        }
        
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Chatbot error:', error);
        const errorMessage = {
          id: Date.now() + 1,
          text: "🤖 **I'm here to help!**\n\nI can provide detailed information about:\n• Vaibhav's DevOps experience and achievements\n• Kubernetes, Terraform, AWS, and cloud technologies\n• DevOps career guidance and best practices\n\nWhat would you like to know? 🚀",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(message);
    }
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded text-sm">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-2 overflow-x-auto text-sm"><code>$1</code></pre>')
      .replace(/\n/g, '<br>');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          backgroundColor: isOpen ? '#dc2626' : '#2563eb'
        }}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Assistant</h3>
                  <p className="text-sm opacity-90">
                    {amazonQStatus.available ? '🚀 Amazon Q CLI Ready' : '🧠 Universal Knowledge'}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.isBot 
                      ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}>
                    <div 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    <div className={`text-xs mt-2 opacity-70 ${msg.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {msg.source && ` • ${msg.source}`}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={() => handleSendMessage(message)}
                  disabled={isTyping || !message.trim()}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImprovedChatbot;
