// Free Chatbot Service - No external APIs required
class FreeChatbotService {
  constructor() {
    this.responses = {
      // Vaibhav specific
      vaibhav: `👨‍💻 **About Vaibhav Soni**

**DevOps Engineer** at Inexture Solutions, Ahmedabad
• **Experience:** Cloud infrastructure, CI/CD, Kubernetes
• **Certifications:** Terraform Associate, AWS Cloud Practitioner, RHCSA
• **Specialties:** AWS, Azure, Docker, Terraform, Jenkins

**Contact:**
📧 vaibhavsoni5567@gmail.com
📱 +91 8890944027
💼 [LinkedIn](https://linkedin.com/in/vaibhavsonii21)`,

      // Technical topics
      kubernetes: `⚓ **Kubernetes Overview**

Container orchestration platform for:
• **Deployment** - Automated application deployment
• **Scaling** - Horizontal/vertical scaling
• **Management** - Service discovery, load balancing
• **Self-healing** - Automatic restart of failed containers

**Key Components:**
• Pods, Services, Deployments
• ConfigMaps, Secrets
• Ingress, Persistent Volumes`,

      docker: `🐳 **Docker Containerization**

**Benefits:**
• Consistent environments across dev/prod
• Lightweight virtualization
• Easy deployment and scaling
• Isolated application runtime

**Key Commands:**
\`docker build\`, \`docker run\`, \`docker push\`
\`docker-compose\` for multi-container apps`,

      terraform: `🏗️ **Terraform Infrastructure as Code**

**Features:**
• Declarative configuration
• Multi-cloud support
• State management
• Plan before apply

**Basic Workflow:**
1. Write .tf configuration files
2. \`terraform init\` - Initialize
3. \`terraform plan\` - Preview changes
4. \`terraform apply\` - Deploy infrastructure`,

      aws: `☁️ **Amazon Web Services**

**Core Services:**
• **EC2** - Virtual servers
• **S3** - Object storage
• **RDS** - Managed databases
• **Lambda** - Serverless functions
• **VPC** - Virtual networking
• **IAM** - Identity management

**Benefits:** Scalability, reliability, pay-as-you-go`,

      devops: `🚀 **DevOps Practices**

**Key Areas:**
• **CI/CD** - Continuous integration/deployment
• **Infrastructure as Code** - Terraform, CloudFormation
• **Monitoring** - Prometheus, Grafana
• **Containerization** - Docker, Kubernetes
• **Automation** - Scripting, pipelines

**Goal:** Faster, reliable software delivery`,

      // Projects
      projects: `📂 **Vaibhav's Key Projects**

1. **Trading Bot Infrastructure** - Jenkins CI/CD, AWS deployment
2. **Azure Migration** - 240+ resources to Terraform
3. **Kubernetes Cluster** - DigitalOcean production setup
4. **DDA Liferay Environment** - Multi-developer setup
5. **AWS Automation** - Terragrunt, Organizations

Each project showcases different DevOps skills and technologies.`,

      // Default responses
      greeting: `👋 **Hello! I'm Vaibhav's Portfolio Assistant**

I can help you learn about:
• **Vaibhav's experience** and projects
• **DevOps technologies** (Kubernetes, Docker, Terraform)
• **Cloud platforms** (AWS, Azure)
• **Career guidance** in DevOps

What would you like to know?`,

      help: `🤖 **How I can help:**

**About Vaibhav:**
• Professional experience and skills
• Project details and achievements
• Contact information

**Technical Topics:**
• DevOps tools and practices
• Cloud technologies
• Infrastructure automation
• Best practices

Just ask me anything!`
    };
  }

  async query(message) {
    const lowerMessage = message.toLowerCase();
    
    // Match keywords to responses
    if (lowerMessage.includes('vaibhav') || lowerMessage.includes('about')) {
      return this.responses.vaibhav;
    }
    
    if (lowerMessage.includes('kubernetes') || lowerMessage.includes('k8s')) {
      return this.responses.kubernetes;
    }
    
    if (lowerMessage.includes('docker')) {
      return this.responses.docker;
    }
    
    if (lowerMessage.includes('terraform')) {
      return this.responses.terraform;
    }
    
    if (lowerMessage.includes('aws') || lowerMessage.includes('amazon')) {
      return this.responses.aws;
    }
    
    if (lowerMessage.includes('devops')) {
      return this.responses.devops;
    }
    
    if (lowerMessage.includes('project')) {
      return this.responses.projects;
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return this.responses.greeting;
    }
    
    if (lowerMessage.includes('help')) {
      return this.responses.help;
    }

    // Default response
    return `🤖 **I can help with that!**

I have information about:
• **Vaibhav's DevOps experience**
• **Technologies:** Kubernetes, Docker, Terraform, AWS
• **Projects and achievements**
• **Career guidance**

Try asking: "Tell me about Vaibhav" or "What is Kubernetes?"`;
  }

  formatResponse(response) {
    return response;
  }

  handleError() {
    return `🤖 **I'm here to help!**

Ask me about:
• Vaibhav's experience and projects
• DevOps technologies
• Cloud platforms
• Career guidance

What would you like to know?`;
  }
}

export default new FreeChatbotService();
