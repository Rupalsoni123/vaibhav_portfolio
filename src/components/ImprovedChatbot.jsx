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
      text: "👋 **Hello! I'm Amazon Q, your AI assistant.**\n\nI'm here to help you with a wide range of topics including:\n\n**🔧 Software Development:**\n• Code generation and debugging\n• Best practices and architecture\n• Programming languages and frameworks\n• Code reviews and optimization\n\n**☁️ AWS & Cloud:**\n• AWS services and solutions\n• Cloud architecture and design\n• DevOps and infrastructure\n• Cost optimization and security\n\n**📚 General Knowledge:**\n• Technical explanations and tutorials\n• Problem-solving and troubleshooting\n• Research and analysis\n• Learning and skill development\n\n**💡 How I can help:**\n• Answer technical questions with detailed explanations\n• Provide code examples and solutions\n• Explain complex concepts in simple terms\n• Offer best practices and recommendations\n• Help with learning and skill development\n\nWhat would you like to know or work on today?",
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

  // Generate Amazon Q style AWS responses
  const generateAmazonQStyleAWSResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion === 'aws' || lowerQuestion.includes('what is aws')) {
      return `Amazon Web Services (AWS) is a comprehensive cloud computing platform that provides a wide range of services including computing power, storage, databases, networking, analytics, machine learning, and more.

**Core AWS Services:**

**Compute Services:**
• **Amazon EC2** - Scalable virtual servers in the cloud
• **AWS Lambda** - Serverless computing for running code without managing servers
• **Amazon ECS/EKS** - Container orchestration services
• **AWS Fargate** - Serverless compute for containers

**Storage Services:**
• **Amazon S3** - Object storage with industry-leading scalability and durability
• **Amazon EBS** - High-performance block storage for EC2
• **Amazon EFS** - Fully managed file system for EC2

**Database Services:**
• **Amazon RDS** - Managed relational database service
• **Amazon DynamoDB** - Fast and flexible NoSQL database
• **Amazon Redshift** - Fast, simple, cost-effective data warehousing

**Key Benefits:**
• **Scalability** - Scale resources up or down based on demand
• **Cost-effectiveness** - Pay only for what you use
• **Reliability** - Built on proven infrastructure with high availability
• **Security** - Comprehensive security capabilities and compliance certifications
• **Global reach** - Available in multiple regions worldwide

AWS enables organizations to build and deploy applications faster, reduce costs, and improve operational efficiency. Would you like me to explain any specific AWS service or concept in more detail?`;
    }
    
    if (lowerQuestion.includes('ec2')) {
      return `Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud, allowing you to launch virtual servers called instances.

**Key Features:**
• **Instance Types** - Various configurations optimized for different use cases
• **Auto Scaling** - Automatically adjust capacity to maintain performance
• **Elastic Load Balancing** - Distribute incoming traffic across multiple instances
• **Security Groups** - Virtual firewalls to control inbound and outbound traffic

**Common Instance Types:**
• **General Purpose (t3, m5, m6i)** - Balanced compute, memory, and networking
• **Compute Optimized (c5, c6i)** - High-performance processors for compute-intensive tasks
• **Memory Optimized (r5, r6i)** - Fast performance for memory-intensive applications
• **Storage Optimized (i3, d2)** - High sequential read/write access to large datasets

**Pricing Options:**
• **On-Demand** - Pay by the hour or second with no long-term commitments
• **Reserved Instances** - Significant discounts for 1 or 3-year terms
• **Spot Instances** - Bid for unused capacity at reduced costs

**Best Practices:**
• Use Auto Scaling Groups for high availability and fault tolerance
• Implement proper security group rules following the principle of least privilege
• Regular backups using EBS snapshots
• Monitor performance and costs using CloudWatch

What specific aspect of EC2 would you like to explore further?`;
    }
    
    if (lowerQuestion.includes('s3')) {
      return `Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

**Key Features:**
• **Virtually unlimited storage** - Store and retrieve any amount of data
• **99.999999999% (11 9's) durability** - Designed to sustain the loss of data in two facilities
• **Multiple storage classes** - Optimize costs based on access patterns
• **Strong consistency** - Read-after-write consistency for all operations

**Storage Classes:**
• **S3 Standard** - For frequently accessed data
• **S3 Standard-IA** - For infrequently accessed data with rapid access when needed
• **S3 One Zone-IA** - For infrequently accessed data that doesn't require multiple AZ resilience
• **S3 Glacier** - For long-term archival with retrieval times from minutes to hours
• **S3 Glacier Deep Archive** - Lowest cost storage for long-term retention

**Common Use Cases:**
• **Backup and restore** - Reliable and cost-effective data backup
• **Data archiving** - Long-term retention with various retrieval options
• **Static website hosting** - Host static websites directly from S3
• **Content distribution** - Store and distribute content globally
• **Data lakes** - Store structured and unstructured data for analytics

**Security Features:**
• **Encryption** - Server-side and client-side encryption options
• **Access control** - Fine-grained access policies using IAM, bucket policies, and ACLs
• **Versioning** - Keep multiple versions of objects
• **MFA Delete** - Additional protection for object deletion

Would you like me to explain any specific S3 feature or use case in more detail?`;
    }
    
    return `I can help you with AWS-related questions and provide detailed explanations about various AWS services and concepts.

**Popular AWS Topics I can explain:**
• **Compute** - EC2, Lambda, ECS, EKS, Fargate
• **Storage** - S3, EBS, EFS, Glacier
• **Database** - RDS, DynamoDB, ElastiCache, Redshift
• **Networking** - VPC, CloudFront, Route 53, Load Balancers
• **Security** - IAM, KMS, WAF, Shield
• **DevOps** - CodePipeline, CodeBuild, CodeDeploy, CloudFormation

**I can help with:**
• Service explanations and use cases
• Architecture best practices
• Cost optimization strategies
• Security recommendations
• Migration guidance
• Troubleshooting common issues

What specific AWS service or concept would you like me to explain?`;
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
        
        let botResponse = "I'm Amazon Q, your AI assistant. I can help you with a wide range of topics including software development, AWS and cloud services, DevOps practices, and general technical questions. What would you like to know about today?";

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
                  <h3 className="font-bold text-lg">Amazon Q</h3>
                  <p className="text-sm opacity-90">
                    AI Assistant
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
