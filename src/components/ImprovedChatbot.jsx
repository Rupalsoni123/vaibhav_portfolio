import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../utils/ThemeContext';

const ImprovedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 **Hi! I'm Vaibhav's Universal AI Assistant**\n\n🧠 **I can help you with virtually any topic:**\n\n📚 **General Knowledge:**\n• Science, History, Geography, Mathematics\n• Literature, Arts, Culture, Sports\n• Current Events, Technology, AI\n• And much more!\n\n🚀 **DevOps & Technical Expertise:**\n• Kubernetes & Container Orchestration\n• Terraform & Infrastructure as Code\n• AWS & Cloud Services\n• Docker & Containerization\n• CI/CD Pipelines & Automation\n\n👨‍💻 **About Vaibhav:**\n• Professional Experience at Inexture Solutions\n• Major Achievements & Projects\n• Certifications & Contact Information\n\n💡 **Just ask me anything!** Whether it's about the Taj Mahal, photosynthesis, world history, or advanced DevOps practices - I'm here to help! 🌟\n\nWhat would you like to explore? 🚀",
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
  }, [messages]);

  // Improved response function with better AI integration
  // Calculate similarity between two strings
  const calculateSimilarity = (str1, str2) => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  };

  // Calculate edit distance (Levenshtein distance)
  const getEditDistance = (str1, str2) => {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  const getImprovedResponse = async (userMessage, messageHistory) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Improved repeated question detection
    const recentQuestions = messageHistory.slice(-4).filter(msg => !msg.isBot).map(msg => msg.text.toLowerCase());
    const isRepeated = recentQuestions.some(q => {
      // Only consider it repeated if it's very similar (80% match) and longer than 10 characters
      if (q.length < 10 || lowerMessage.length < 10) return false;
      const similarity = calculateSimilarity(q, lowerMessage);
      return similarity > 0.8;
    });
    
    // DevOps and Vaibhav-specific responses (always use local expertise)
    if (lowerMessage.includes('vaibhav') || lowerMessage.includes('about me') || lowerMessage.includes('who is vaibhav')) {
      if (isRepeated) {
        return `👨‍💻 **Here's a different perspective on Vaibhav:**

**🌟 Unique Journey:**
What makes Vaibhav special is his transition from a **non-Computer Science background** to becoming a skilled DevOps Engineer. This unique path has given him:

• **Problem-solving mindset** from diverse academic experience
• **Practical approach** learned through real-world challenges
• **Continuous learning attitude** that drives innovation
• **Fresh perspective** on traditional DevOps practices

**🏢 Current Impact at Inexture Solutions:**
• infrastructure automation initiatives
• cloud-native technologies
• Driving cost optimization through efficient resource management
• Implementing security best practices across projects

**🎯 Future Goals:**
• Expanding expertise in service mesh technologies
• Contributing to open-source DevOps tools
• Building scalable multi-cloud architectures
• Sharing knowledge through technical blogs and talks

Want to know about his specific technical projects or achievements? 🤔`;
      }
      
      return `👨‍💻 **About Vaibhav Soni - DevOps Engineer**

**🚀 Professional Journey:**
I'm a passionate DevOps Engineer at **Inexture Solutions** in Ahmedabad, India, with a unique story of transitioning from a non-CS background to becoming a cloud infrastructure expert.

**🏆 Major Achievement:**
Successfully **migrated 240+ Azure resources to Terraform**, resulting in:
• **70% reduction** in deployment time
• **Zero configuration drift**
• **Automated infrastructure provisioning**
• **Enhanced disaster recovery capabilities**

**📜 Professional Certifications:**
• **HashiCorp Certified Terraform Associate (003)** - 2024
• **AWS Certified Cloud Practitioner** - 2023
• **Red Hat Certified System Administrator (RHCSA)** - 2022

**🛠️ Technical Expertise:**
• **Cloud Platforms**: AWS, Azure, DigitalOcean
• **Container Orchestration**: Kubernetes, Docker, Helm
• **Infrastructure as Code**: Terraform, Terragrunt, AWS CDK
• **CI/CD & Automation**: GitHub Actions, GitLab CI/CD, Ansible
• **Monitoring**: Prometheus, Grafana, ELK Stack

**📞 Contact Information:**
• **Email**: vaibhavsoni5567@gmail.com
• **Phone**: +91 8890944027
• **LinkedIn**: [linkedin.com/in/vaibhavsonii21](https://linkedin.com/in/vaibhavsonii21)
• **GitHub**: [github.com/vaibhav21soni](https://github.com/vaibhav21soni)

What specific aspect would you like to know more about? 🤔`;
    }
    
    if (lowerMessage.includes('kubernetes') || lowerMessage.includes('k8s')) {
      if (isRepeated) {
        return `⚓ **Advanced Kubernetes Insights:**

**🔧 Production Troubleshooting:**
• **Pod Stuck in Pending**: Check resource requests, node capacity, and taints
• **ImagePullBackOff**: Verify image name, registry access, and pull secrets
• **CrashLoopBackOff**: Examine application logs and health check configurations
• **Network Issues**: Debug with kubectl exec, check NetworkPolicies and DNS

**🚀 Performance Optimization:**
• **Resource Tuning**: Set appropriate CPU/memory requests and limits
• **Cluster Autoscaling**: Configure HPA, VPA, and cluster autoscaler
• **Storage Optimization**: Use appropriate storage classes and volume types
• **Network Performance**: Optimize CNI plugins and service mesh configuration

**🔒 Advanced Security:**
• **Pod Security Standards**: Implement restricted, baseline, and privileged policies
• **Admission Controllers**: Use OPA Gatekeeper for policy enforcement
• **Runtime Security**: Deploy Falco for threat detection
• **Supply Chain Security**: Implement image signing and vulnerability scanning

**📊 Monitoring & Observability:**
• **Metrics**: Prometheus + Grafana for comprehensive monitoring
• **Logging**: Centralized logging with ELK or Loki stack
• **Tracing**: Distributed tracing with Jaeger or Zipkin
• **Alerting**: Smart alerting rules to reduce noise

Need help with a specific Kubernetes challenge? 🤔`;
      }
      
      return `⚓ **Kubernetes Container Orchestration**

**🎯 What is Kubernetes?**
Kubernetes is an open-source platform that automates deployment, scaling, and management of containerized applications across clusters of machines.

**🏗️ Core Architecture:**
• **Control Plane**: API Server, etcd, Controller Manager, Scheduler
• **Worker Nodes**: kubelet, kube-proxy, Container Runtime
• **Key Resources**: Pods, Services, Deployments, ConfigMaps, Secrets

**🔒 Security Best Practices:**
• **RBAC**: Implement role-based access control
• **Pod Security**: Use Pod Security Standards
• **Network Policies**: Control traffic between pods
• **Secrets Management**: Secure sensitive data handling
• **Image Security**: Scan and use minimal base images

**🚀 Production Essentials:**
• **Resource Management**: Set requests and limits
• **Health Checks**: Configure liveness and readiness probes
• **Auto-scaling**: Implement HPA and VPA
• **Monitoring**: Deploy Prometheus and Grafana
• **Backup**: Regular etcd backups and disaster recovery

**💡 Real-world Applications:**
• Microservices orchestration
• CI/CD pipeline integration
• Multi-environment deployments
• Auto-scaling based on demand

Want to dive deeper into any specific area? 🤔`;
    }
    
    if (lowerMessage.includes('terraform') || lowerMessage.includes('for_each') || lowerMessage.includes('count') || lowerMessage.includes('module')) {
      // Specific response for for_each
      if (lowerMessage.includes('for_each')) {
        return `🔄 **Terraform for_each Meta-Argument:**

**🎯 What is for_each?**
The \`for_each\` meta-argument creates multiple instances of a resource or module based on a map or set of strings.

**📝 Basic Syntax:**
\`\`\`hcl
resource "aws_instance" "example" {
  for_each = toset(["web", "api", "db"])
  
  ami           = "ami-12345678"
  instance_type = "t3.micro"
  
  tags = {
    Name = "server-\${each.key}"
    Type = each.value
  }
}
\`\`\`

**🔧 Advanced Examples:**
\`\`\`hcl
# Using with maps
resource "aws_s3_bucket" "buckets" {
  for_each = {
    dev  = "my-dev-bucket"
    prod = "my-prod-bucket"
  }
  
  bucket = each.value
  
  tags = {
    Environment = each.key
  }
}

# Using with complex objects
variable "users" {
  type = map(object({
    role   = string
    groups = list(string)
  }))
}

resource "aws_iam_user" "users" {
  for_each = var.users
  name     = each.key
  
  tags = {
    Role = each.value.role
  }
}
\`\`\`

**⚡ Key Benefits:**
• **Dynamic Resource Creation**: Create resources based on input data
• **Better State Management**: Each instance has its own state
• **Conditional Logic**: Use expressions to control resource creation
• **Maintainable Code**: Reduce duplication and improve readability

**🆚 for_each vs count:**
• **for_each**: Use with maps/sets, better for dynamic scenarios
• **count**: Use with numbers, simpler but less flexible

Want to explore more Terraform concepts? 🚀`;
      }
      
      if (isRepeated) {
        return `🚀 **Advanced Terraform Techniques:**

**🏗️ Advanced Module Patterns:**
• **Composition Pattern**: Combine multiple modules for complex infrastructure
• **Factory Pattern**: Generate resources dynamically using for_each
• **Wrapper Modules**: Create organization-specific abstractions
• **Multi-Environment Modules**: Handle dev/staging/prod variations

**🔧 State Management Strategies:**
• **Remote Backends**: S3 with DynamoDB locking for team collaboration
• **State Splitting**: Separate state files for different infrastructure layers
• **State Migration**: Safe techniques for moving resources between states
• **Backup Strategies**: Automated state backup and recovery procedures

**🚦 Advanced Workflows:**
• **GitOps Integration**: Automated deployments through Git workflows
• **Policy as Code**: Use Sentinel or OPA for governance
• **Testing Strategies**: Unit tests with Terratest, integration testing
• **Blue-Green Deployments**: Zero-downtime infrastructure updates

**📊 Monitoring & Compliance:**
• **Drift Detection**: Automated detection of configuration drift
• **Cost Monitoring**: Track infrastructure costs and optimization opportunities
• **Compliance Scanning**: Automated security and compliance checks
• **Documentation**: Auto-generated documentation from code

Any specific advanced Terraform topic you'd like to explore? 🤔`;
      }
      
      return `🚀 **Terraform Infrastructure as Code**

**🎯 What is Terraform?**
HashiCorp's tool for building, changing, and versioning infrastructure safely and efficiently using declarative configuration files.

**✨ Key Benefits:**
• **Multi-Cloud**: Works with AWS, Azure, GCP, and 1000+ providers
• **Version Control**: Infrastructure changes tracked like code
• **Automation**: Eliminates manual provisioning errors
• **Consistency**: Identical environments across stages

**🏆 Vaibhav's Success Story:**
**Project**: Migration of 240+ Azure Resources
**Results**:
• **70% faster** deployment times
• **Zero configuration drift**
• **Automated provisioning** workflows
• **Improved disaster recovery**

**🔧 Best Practices:**
• **Remote State**: Use S3 backend with DynamoDB locking
• **Module Structure**: Create reusable, well-documented modules
• **Version Pinning**: Lock provider and module versions
• **Environment Separation**: Use workspaces or separate configurations

**🛠️ Essential Commands:**
\`\`\`bash
terraform init      # Initialize working directory
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Remove infrastructure
\`\`\`

**💡 Pro Tips:**
• Always run \`plan\` before \`apply\`
• Use consistent naming conventions
• Implement proper CI/CD integration
• Regular state file backups

Need help with specific Terraform concepts? 🤔`;
    }
    
    // For general questions, try universal AI response first
    if (!isDevOpsTopic(lowerMessage)) {
      try {
        console.log('Attempting universal AI response for:', userMessage);
        console.log('Is repeated:', isRepeated);
        
        // First try the universal knowledge base
        const universalResponse = getUniversalAIResponse(userMessage);
        if (universalResponse) {
          console.log('Universal response found:', universalResponse);
          return universalResponse;
        }
        
        // If no universal response, try the Hugging Face API
        const aiResponse = await getAIResponse(userMessage, messageHistory);
        console.log('AI Response received:', aiResponse);
        
        if (aiResponse && aiResponse.trim().length > 0) {
          // Use AI response regardless of whether it's repeated
          return aiResponse;
        } else if (isRepeated) {
          // Only show "different perspective" if AI failed AND it's repeated
          return `🤖 **Let me provide a different perspective:**

I notice you've asked a similar question recently. Let me approach this from a different angle or provide additional details.

For the most comprehensive and detailed answers about **DevOps topics**, **Vaibhav's experience**, or **technical concepts**, try asking specific questions like:

• "What are advanced Kubernetes security practices?"
• "Tell me about Vaibhav's major projects"
• "How does Terraform state management work?"
• "What's the DevOps career roadmap?"

What specific aspect would you like me to elaborate on? 🚀`;
        } else {
          // AI didn't provide a good response, provide a helpful fallback
          return `🤖 I'd be happy to help with that question! However, I specialize in **DevOps topics** and **Vaibhav's professional experience**.

For questions like "${userMessage}", you might want to try:
• Google Search for factual information
• Wikipedia for general knowledge
• Specific domain experts for detailed answers

**I'm most helpful with:**
• DevOps tools and practices
• Cloud infrastructure (AWS, Azure)
• Kubernetes and containerization
• CI/CD pipelines
• Vaibhav's projects and experience

What would you like to know about these topics? 🚀`;
        }
      } catch (error) {
        console.error('AI service error:', error);
        return `🤖 I'm having trouble accessing my AI capabilities right now. 

**I can still help you with:**
• DevOps questions and best practices
• Vaibhav's experience and projects
• Technical concepts and tools
• Career advice in DevOps

What specific topic would you like to explore? 🚀`;
      }
    }
    
    // Default response with variety
    const defaultResponses = [
      `🤖 **I'm here to help with comprehensive information!**

**🎯 Popular Topics:**
• **About Vaibhav**: Professional journey, achievements, contact info
• **Kubernetes**: Container orchestration, security, best practices  
• **Terraform**: Infrastructure as Code, real project examples
• **DevOps Career**: Learning paths, certifications, salary insights
• **AWS & Cloud**: Services, architecture, cost optimization

**💡 Try asking:**
• "What makes Vaibhav unique as a DevOps engineer?"
• "Advanced Kubernetes troubleshooting tips"
• "Terraform module best practices"
• "How to transition to DevOps career?"

What interests you most? 🚀`,

      `🚀 **Ready to dive deep into DevOps topics!**

**🔥 Trending Questions:**
• **Cloud Migration**: Best practices and strategies
• **Container Security**: Advanced protection techniques
• **Infrastructure Automation**: Scaling and optimization
• **Monitoring & Observability**: Modern tooling approaches
• **Career Development**: Skills and certifications

**🎯 Vaibhav's Expertise Areas:**
• Production Kubernetes deployments
• Large-scale Terraform migrations
• AWS cloud architecture
• CI/CD pipeline optimization

What would you like to explore in detail? 🤔`
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Check if topic is DevOps related
  const isDevOpsTopic = (message) => {
    const devopsKeywords = [
      // People
      'vaibhav', 
      // Core DevOps
      'devops', 'ci/cd', 'pipeline', 'infrastructure', 'cloud', 'container',
      // Kubernetes
      'kubernetes', 'k8s', 'pod', 'deployment', 'service', 'ingress', 'helm',
      // Terraform
      'terraform', 'for_each', 'count', 'module', 'provider', 'resource', 'data', 'variable', 'output', 'state', 'plan', 'apply',
      // Cloud Providers
      'aws', 'azure', 'gcp', 'ec2', 's3', 'lambda', 'vpc', 'iam',
      // Containers & Orchestration
      'docker', 'container', 'image', 'dockerfile', 'compose',
      // Monitoring & Tools
      'monitoring', 'prometheus', 'grafana', 'ansible', 'jenkins', 'gitlab', 'github',
      // Other DevOps Tools
      'nginx', 'apache', 'mysql', 'postgresql', 'redis', 'elasticsearch'
    ];
    return devopsKeywords.some(keyword => message.toLowerCase().includes(keyword.toLowerCase()));
  };

  // Improved AI integration with better context
  const getAIResponse = async (message, history) => {
    const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
    console.log('API Key available:', !!apiKey);
    console.log('API Key starts with hf_:', apiKey?.startsWith('hf_'));
    
    if (!apiKey || apiKey === 'your_api_key_here') {
      console.log('No valid API key found');
      return null;
    }

    try {
      // Build better context from recent conversation
      const recentContext = history
        .slice(-4)
        .map(msg => `${msg.isBot ? 'Assistant' : 'Human'}: ${msg.text.substring(0, 100)}`)
        .join('\n');
      
      const prompt = recentContext ? 
        `Context:\n${recentContext}\n\nHuman: ${message}\nAssistant:` : 
        `Human: ${message}\nAssistant:`;

      console.log('Making API request to Hugging Face...');
      
      // Try the serverless inference API first
      const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 200,
            temperature: 0.8,
            do_sample: true,
            top_p: 0.9,
            repetition_penalty: 1.2,
            pad_token_id: 50256
          }
        })
      });

      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        
        // If it's a permission error or model not found, try alternative approach
        if (response.status === 403 || response.status === 404) {
          console.log('API unavailable (403/404), trying alternative approach...');
          return getUniversalAIResponse(message);
        }
        return null;
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      if (data && data[0] && data[0].generated_text) {
        let aiText = data[0].generated_text
          .replace(prompt, '')
          .replace(/^(Assistant:|Human:)/i, '')
          .trim();
        
        // Clean up repetitive text
        const sentences = aiText.split('.').filter(s => s.trim().length > 10);
        const uniqueSentences = [...new Set(sentences)];
        aiText = uniqueSentences.join('. ').trim();
        
        // Add period if missing
        if (aiText && !aiText.endsWith('.') && !aiText.endsWith('!') && !aiText.endsWith('?')) {
          aiText += '.';
        }
        
        console.log('Processed AI response:', aiText);
        return aiText.length > 10 ? aiText : null;
      } else if (data && data.error) {
        console.error('Hugging Face API Error:', data.error);
        return null;
      } else {
        console.log('No valid response from API');
        return null;
      }
    } catch (error) {
      console.error('Error calling Hugging Face API:', error);
      return null;
    }
  };

  // Enhanced AI response that can handle any topic
  const getUniversalAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    console.log('Getting universal AI response for:', message);
    
    // Geography and Places
    if (lowerMessage.includes('taj mahal') || lowerMessage.includes('tajmahal')) {
      return "🏛️ **The Taj Mahal** is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. The tomb is the centerpiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction began around 1632 and was completed around 1653, employing thousands of artisans and craftsmen. It's considered one of the Seven Wonders of the World and a UNESCO World Heritage Site.";
    }
    
    if (lowerMessage.includes('paris') && (lowerMessage.includes('capital') || lowerMessage.includes('france'))) {
      return "🇫🇷 **Paris** is the capital and most populous city of France. Located in northern central France on the River Seine, Paris is known as the 'City of Light' and is famous for landmarks like the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and Arc de Triomphe. It's a global center for art, fashion, gastronomy, and culture.";
    }
    
    if (lowerMessage.includes('mount everest') || lowerMessage.includes('everest')) {
      return "🏔️ **Mount Everest** is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Chinese and Nepali authorities. It's known as Sagarmatha in Nepali and Chomolungma in Tibetan.";
    }
    
    // Science and Technology
    if (lowerMessage.includes('photosynthesis')) {
      return "🌱 **Photosynthesis** is the process by which plants and other organisms convert light energy (usually from the Sun) into chemical energy that can be later released to fuel the organism's activities. The general equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. This process occurs in chloroplasts and involves two main stages: light-dependent reactions and the Calvin cycle.";
    }
    
    if (lowerMessage.includes('gravity') && !lowerMessage.includes('kubernetes')) {
      return "🌍 **Gravity** is a fundamental interaction which causes mutual attraction between all things with mass or energy. On Earth, gravity gives weight to physical objects and causes objects to fall toward the ground when dropped. Sir Isaac Newton described gravity as a force, while Einstein's theory of general relativity describes gravity as the curvature of spacetime caused by mass and energy.";
    }
    
    if (lowerMessage.includes('dna') || lowerMessage.includes('genetic')) {
      return "🧬 **DNA (Deoxyribonucleic Acid)** is a molecule that carries genetic instructions for the development, functioning, growth and reproduction of all known living organisms. DNA consists of two strands that wind around each other to form a double helix. Each strand is made up of four chemical bases: adenine (A), guanine (G), cytosine (C), and thymine (T).";
    }
    
    // History
    if (lowerMessage.includes('world war') || lowerMessage.includes('ww2') || lowerMessage.includes('wwii')) {
      return "⚔️ **World War II** (1939-1945) was a global war involving most of the world's nations. It was the most widespread war in history, directly involving more than 100 million personnel from over 30 countries. Major participants threw their entire economic, industrial, and scientific capabilities behind the war effort. It ended with the surrender of Germany in May 1945 and Japan in September 1945.";
    }
    
    if (lowerMessage.includes('independence') && lowerMessage.includes('india')) {
      return "🇮🇳 **Indian Independence** was achieved on August 15, 1947, when India gained freedom from British colonial rule. The independence movement was led by figures like Mahatma Gandhi, Jawaharlal Nehru, and others through non-violent resistance and civil disobedience. The partition also created Pakistan as a separate nation.";
    }
    
    // Mathematics
    if (lowerMessage.includes('pythagoras') || lowerMessage.includes('pythagorean')) {
      return "📐 **Pythagorean Theorem** states that in a right-angled triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of squares of the lengths of the other two sides. The formula is: a² + b² = c², where c is the hypotenuse and a and b are the other two sides.";
    }
    
    if (lowerMessage.includes('pi') && !lowerMessage.includes('api')) {
      return "🔢 **Pi (π)** is a mathematical constant that represents the ratio of a circle's circumference to its diameter. It's approximately equal to 3.14159265359... Pi is an irrational number, meaning it has an infinite number of decimal places that never repeat in a pattern.";
    }
    
    // Literature and Arts
    if (lowerMessage.includes('shakespeare')) {
      return "📚 **William Shakespeare** (1564-1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language. He wrote approximately 37 plays and 154 sonnets. Famous works include 'Romeo and Juliet', 'Hamlet', 'Macbeth', 'A Midsummer Night's Dream', and 'The Tempest'.";
    }
    
    if (lowerMessage.includes('mona lisa')) {
      return "🎨 **The Mona Lisa** is a half-length portrait painting by Italian Renaissance artist Leonardo da Vinci. Painted between 1503 and 1519, it depicts Lisa Gherardini, believed to be the wife of a Florentine merchant. The painting is famous for the subject's enigmatic smile and is housed in the Louvre Museum in Paris.";
    }
    
    // Current Events and General Knowledge
    if (lowerMessage.includes('climate change') || lowerMessage.includes('global warming')) {
      return "🌡️ **Climate Change** refers to long-term shifts in global temperatures and weather patterns. While climate variations are natural, scientific evidence shows that human activities, particularly burning fossil fuels, have been the main driver of climate change since the 1800s. This leads to rising temperatures, melting ice caps, rising sea levels, and extreme weather events.";
    }
    
    if (lowerMessage.includes('artificial intelligence') || lowerMessage.includes(' ai ')) {
      return "🤖 **Artificial Intelligence (AI)** is the simulation of human intelligence in machines programmed to think and learn like humans. AI includes machine learning, natural language processing, computer vision, and robotics. Applications range from virtual assistants and recommendation systems to autonomous vehicles and medical diagnosis.";
    }
    
    // Sports
    if (lowerMessage.includes('olympics') || lowerMessage.includes('olympic')) {
      return "🏅 **The Olympic Games** are the world's foremost sports competition with summer and winter games held every four years. The modern Olympics were revived in 1896 by Pierre de Coubertin. The games feature thousands of athletes from around the world competing in various sports. The Olympic motto is 'Citius, Altius, Fortius' (Faster, Higher, Stronger).";
    }
    
    if (lowerMessage.includes('football') && (lowerMessage.includes('world cup') || lowerMessage.includes('fifa'))) {
      return "⚽ **FIFA World Cup** is an international football competition contested by the senior men's national teams of FIFA members. It takes place every four years and is the most prestigious tournament in football. Brazil has won the most titles (5), followed by Germany and Italy (4 each).";
    }
    
    // Food and Culture
    if (lowerMessage.includes('pizza') && lowerMessage.includes('origin')) {
      return "🍕 **Pizza** originated in Naples, Italy, in the 18th century. The modern pizza evolved from flatbreads topped with oil, garlic, and salt. The Margherita pizza, topped with tomatoes, mozzarella, and basil, was created in 1889 to honor Queen Margherita of Savoy and represents the colors of the Italian flag.";
    }
    
    // Conversational responses
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
      return "🤖 I'm doing great, thank you for asking! I'm an AI assistant designed to help answer questions on a wide variety of topics - from science and history to technology and culture. I can provide information on almost anything you're curious about. What would you like to learn about today?";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage.includes('hey')) {
      return "👋 Hello! I'm an AI assistant that can help answer questions on virtually any topic. Whether you're curious about science, history, technology, culture, or anything else, I'm here to provide informative responses. What would you like to know?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "😊 You're very welcome! I'm glad I could help. Feel free to ask me about anything else you're curious about - I'm here to provide information on any topic you can think of!";
    }
    
    if (lowerMessage.includes('what can you do') || lowerMessage.includes('what do you know')) {
      return "🧠 I can help answer questions on a vast range of topics including:\n\n📚 **Knowledge Areas:**\n• Science & Technology\n• History & Geography\n• Literature & Arts\n• Mathematics & Physics\n• Current Events\n• Sports & Culture\n• And much more!\n\n💡 **Plus specialized expertise in:**\n• DevOps & Cloud Technologies\n• Programming & Software Development\n• Vaibhav's professional experience\n\nJust ask me anything you're curious about!";
    }
    
    // Time and Date
    if (lowerMessage.includes('time') || lowerMessage.includes('date')) {
      const now = new Date();
      return `🕐 **Current Date & Time:**\n• **Date:** ${now.toLocaleDateString()}\n• **Time:** ${now.toLocaleTimeString()}\n• **Day:** ${now.toLocaleDateString('en-US', { weekday: 'long' })}\n• **Timezone:** ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    }
    
    // Weather (general response since we don't have real-time data)
    if (lowerMessage.includes('weather')) {
      return "🌤️ I don't have access to real-time weather data, but I can suggest some great resources:\n\n• **Weather.com** - Comprehensive weather forecasts\n• **AccuWeather** - Detailed local weather\n• **Your phone's weather app** - Usually very accurate\n• **Google** - Just search 'weather' + your location\n\nFor specific weather information, these sources will give you current conditions, forecasts, and weather alerts for your area!";
    }
    
    return null;
  };

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setMessage('');
    setIsTyping(true);

    // Update conversation context
    setConversationContext(prev => [...prev.slice(-10), messageText]);

    setTimeout(async () => {
      try {
        const botResponse = await getImprovedResponse(messageText, newMessages);
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

  const quickQuestions = [
    "Tell me about Vaibhav",
    "Kubernetes best practices", 
    "Terraform expertise",
    "DevOps career guide",
    "AWS cloud services"
  ];

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
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">🤖 AI DevOps Expert</h3>
                  {/* <p className="text-sm opacity-90">Smart • Contextual </p> */}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Online</span>
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
                  <div className={`max-w-[85%] p-3 rounded-lg ${
                    msg.isBot 
                      ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  }`}>
                    <div 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    <div className={`text-xs mt-2 opacity-70 ${msg.isBot ? 'text-gray-500 dark:text-gray-400' : 'text-blue-100'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="p-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">💡 Popular questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about DevOps, Vaibhav's experience, or any tech topic..."
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows="1"
                  style={{ minHeight: '44px', maxHeight: '88px' }}
                />
                <button
                  onClick={() => handleSendMessage(message)}
                  disabled={!message.trim() || isTyping}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImprovedChatbot;
