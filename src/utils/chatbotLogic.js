// Portfolio data for chatbot responses
const portfolioData = {
  personal: {
    name: "Vaibhav Soni",
    role: "DevOps Engineer",
    location: "Ahmedabad, India",
    company: "Inexture Solutions",
    email: "vaibhavsoni5567@gmail.com",
    phone: "+91 8890944027",
    linkedin: "linkedin.com/in/vaibhavsonii21",
    github: "github.com/vaibhav21soni"
  },
  
  skills: {
    cloud: ["AWS", "Azure", "DigitalOcean"],
    containers: ["Kubernetes", "Docker", "Helm Charts"],
    iac: ["Terraform", "Terragrunt", "AWS CDK (TypeScript)"],
    cicd: ["GitHub Actions", "GitLab CI/CD", "Bitbucket Pipelines", "Ansible", "Bash/Shell scripting"],
    monitoring: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
    security: ["IAM", "Secret Management"],
    databases: ["PostgreSQL", "MySQL", "Redis", "MongoDB"]
  },
  
  certifications: [
    "HashiCorp Certified Terraform Associate (003) - 2024",
    "AWS Certified Cloud Practitioner - 2023",
    "Red Hat Certified System Administrator (RHCSA) - 2022"
  ],
  
  experience: {
    background: "Despite coming from a non-CS academic background, I have gained experience through real-world projects, certifications, and continuous learning.",
    focus: "Passionate about streamlining workflows, embracing cloud-native technologies, and building resilient, scalable infrastructure that empowers development teams to deliver faster and more reliably.",
    expertise: "Results-driven DevOps Engineer with a passion for automating infrastructure, scaling cloud-native applications, and optimizing CI/CD workflows."
  },
  
  projects: {
    description: "I work on various DevOps-related projects focusing on automation, cloud infrastructure, and CI/CD pipelines.",
    technologies: "My projects typically involve AWS, Azure, Kubernetes, Docker, Terraform, and various monitoring tools."
  }
};

// Keywords and their associated responses
const responsePatterns = {
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! I'm here to help you learn about Vaibhav's DevOps expertise. What would you like to know?",
      "Hi there! Feel free to ask me anything about Vaibhav's skills, projects, or experience.",
      "Hey! I can tell you all about Vaibhav's DevOps journey. What interests you most?"
    ]
  },
  
  skills: {
    keywords: ['skills', 'technologies', 'tech stack', 'tools', 'expertise', 'knowledge'],
    responses: [
      `Vaibhav has expertise in several key areas:

🌩️ **Cloud Platforms**: ${portfolioData.skills.cloud.join(', ')}

🐳 **Containers**: ${portfolioData.skills.containers.join(', ')}

🏗️ **Infrastructure as Code**: ${portfolioData.skills.iac.join(', ')}

🔄 **CI/CD & Automation**: ${portfolioData.skills.cicd.join(', ')}

📊 **Monitoring**: ${portfolioData.skills.monitoring.join(', ')}

🔒 **Security**: ${portfolioData.skills.security.join(', ')}

🗄️ **Databases**: ${portfolioData.skills.databases.join(', ')}

Would you like me to elaborate on any specific area?`
    ]
  },
  
  cloud: {
    keywords: ['aws', 'azure', 'cloud', 'digitalocean'],
    responses: [
      `Vaibhav works with multiple cloud platforms:

☁️ **AWS**: Certified Cloud Practitioner with hands-on experience
☁️ **Azure**: Experience with Azure services and deployments  
☁️ **DigitalOcean**: Used for various cloud projects

He's particularly strong in AWS, having earned his AWS Cloud Practitioner certification in 2023. His cloud expertise includes infrastructure provisioning, monitoring, and security best practices.`
    ]
  },
  
  kubernetes: {
    keywords: ['kubernetes', 'k8s', 'container orchestration', 'helm'],
    responses: [
      `Vaibhav has solid experience with container orchestration:

🚢 **Kubernetes**: Container orchestration and cluster management
🐳 **Docker**: Containerization and image management
⚓ **Helm Charts**: Package management for Kubernetes applications

He uses these technologies to build scalable, resilient applications and manage containerized deployments efficiently.`
    ]
  },
  
  terraform: {
    keywords: ['terraform', 'terragrunt', 'infrastructure as code', 'iac'],
    responses: [
      `Vaibhav is certified in Infrastructure as Code:

🏗️ **Terraform**: HashiCorp Certified Terraform Associate (003) - 2024
🔧 **Terragrunt**: Advanced Terraform configurations
☁️ **AWS CDK**: TypeScript-based infrastructure definitions

He uses these tools to automate infrastructure provisioning and maintain consistent, version-controlled infrastructure across environments.`
    ]
  },
  
  certifications: {
    keywords: ['certifications', 'certified', 'credentials', 'certificates'],
    responses: [
      `Vaibhav holds several industry certifications:

🏆 **HashiCorp Certified Terraform Associate (003)** - 2024
🏆 **AWS Certified Cloud Practitioner** - 2023  
🏆 **Red Hat Certified System Administrator (RHCSA)** - 2022

These certifications demonstrate his commitment to continuous learning and validate his expertise in key DevOps technologies.`
    ]
  },
  
  experience: {
    keywords: ['experience', 'background', 'work', 'career', 'journey'],
    responses: [
      `Vaibhav's DevOps journey is quite inspiring:

🎯 **Current Role**: DevOps Engineer at Inexture Solutions in Ahmedabad, India

💪 **Unique Background**: ${portfolioData.experience.background}

🚀 **Focus Areas**: ${portfolioData.experience.focus}

⭐ **Expertise**: ${portfolioData.experience.expertise}

His non-traditional path into DevOps shows his dedication and passion for the field!`
    ]
  },
  
  projects: {
    keywords: ['projects', 'work', 'portfolio', 'examples'],
    responses: [
      `Vaibhav works on various DevOps projects:

🔧 **Focus**: ${portfolioData.projects.description}

💻 **Technologies**: ${portfolioData.projects.technologies}

His projects typically involve automating deployment pipelines, setting up monitoring solutions, and building scalable cloud infrastructure. Each project demonstrates practical application of DevOps principles and modern tooling.

You can find more details about his specific projects in the Projects section of his portfolio!`
    ]
  },
  
  contact: {
    keywords: ['contact', 'reach', 'email', 'phone', 'linkedin', 'github', 'connect'],
    responses: [
      `Here's how you can connect with Vaibhav:

📧 **Email**: ${portfolioData.personal.email}
📱 **Phone**: ${portfolioData.personal.phone}
💼 **LinkedIn**: ${portfolioData.personal.linkedin}
🐙 **GitHub**: ${portfolioData.personal.github}

Feel free to reach out for collaborations, opportunities, or just to chat about DevOps! He's always open to connecting with fellow professionals.`
    ]
  },
  
  location: {
    keywords: ['location', 'where', 'based', 'live'],
    responses: [
      `Vaibhav is based in **Ahmedabad, India** and currently works at **Inexture Solutions**. 

He's part of the vibrant tech community in Ahmedabad and contributes to various DevOps projects in the region.`
    ]
  }
};

// Default responses for unmatched queries
const defaultResponses = [
  "I'd be happy to help! You can ask me about Vaibhav's skills, experience, projects, certifications, or contact information.",
  "That's an interesting question! I can tell you about Vaibhav's DevOps expertise, cloud experience, or his professional background. What would you like to know?",
  "I'm here to help you learn about Vaibhav! Try asking about his AWS experience, Terraform skills, or recent projects.",
  "Feel free to ask about Vaibhav's technical skills, certifications, work experience, or how to get in touch with him!"
];

// Function to find the best matching response
export const getChatbotResponse = async (userMessage) => {
  const message = userMessage.toLowerCase().trim();
  
  // Check for exact matches or keyword patterns
  for (const [category, data] of Object.entries(responsePatterns)) {
    const hasKeyword = data.keywords.some(keyword => 
      message.includes(keyword.toLowerCase())
    );
    
    if (hasKeyword) {
      const responses = data.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // Special handling for specific questions
  if (message.includes('who') && (message.includes('vaibhav') || message.includes('you'))) {
    return `I'm an AI assistant for Vaibhav Soni's portfolio! Vaibhav is a passionate DevOps Engineer based in Ahmedabad, India. He specializes in cloud technologies, automation, and building scalable infrastructure. What would you like to know about his expertise?`;
  }
  
  if (message.includes('what') && message.includes('do')) {
    return `Vaibhav works as a DevOps Engineer at Inexture Solutions, focusing on:

• Automating infrastructure and deployment processes
• Building and managing cloud-native applications  
• Implementing CI/CD pipelines
• Container orchestration with Kubernetes
• Infrastructure as Code with Terraform
• Monitoring and observability solutions

He's passionate about streamlining workflows and empowering development teams!`;
  }
  
  if (message.includes('how') && (message.includes('contact') || message.includes('reach'))) {
    return responsePatterns.contact.responses[0];
  }
  
  // Return a random default response
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
