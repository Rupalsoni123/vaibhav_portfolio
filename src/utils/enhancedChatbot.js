// Enhanced AI Chatbot with comprehensive knowledge about Vaibhav and DevOps
export const getEnhancedChatbotResponse = async (message) => {
  try {
    const lowerMessage = message.toLowerCase();
    
    // About Vaibhav - Comprehensive Information
    if (lowerMessage.includes('vaibhav') || lowerMessage.includes('about') || lowerMessage.includes('who are you') || lowerMessage.includes('tell me about')) {
      return `👋 **Meet Vaibhav Soni - DevOps Engineer**

**🚀 Professional Journey:**
I'm an aspiring DevOps Engineer based in Ahmedabad, India, currently contributing to DevOps projects at **Inexture Solutions**. What makes my story unique is that I come from a **non-Computer Science academic background** but have built my expertise through **real-world projects, continuous learning, and hands-on experience**.

**💼 Current Role & Responsibilities:**
• **DevOps Engineer at Inexture Solutions**
• Infrastructure automation and CI/CD pipeline development
• Cloud infrastructure management (AWS & Azure)
• Kubernetes cluster administration and container orchestration
• Terraform-based Infrastructure as Code implementation
• Monitoring and observability setup

**🏆 Major Achievement:**
Successfully **migrated 240+ Azure resources to Terraform**, achieving:
• **70% reduction in deployment time**
• **Zero configuration drift**
• **Automated infrastructure provisioning**
• **Improved disaster recovery capabilities**

**📜 Professional Certifications:**
• **HashiCorp Certified Terraform Associate (003)** - 2024
• **AWS Certified Cloud Practitioner** - 2023
• **Red Hat Certified System Administrator (RHCSA)** - 2022

**🎯 Core Philosophy:**
"Passionate about streamlining workflows, embracing cloud-native technologies, and building resilient, scalable infrastructure that empowers development teams to deliver faster and more reliably."

**🛠️ Technical Expertise:**
• **Cloud Platforms**: AWS, Azure, DigitalOcean
• **Container Orchestration**: Kubernetes, Docker, Helm Charts
• **Infrastructure as Code**: Terraform, Terragrunt, AWS CDK (TypeScript)
• **CI/CD & Automation**: GitHub Actions, GitLab CI/CD, Bitbucket Pipelines
• **Monitoring**: Prometheus, Grafana, ELK Stack, CloudWatch
• **Scripting**: Bash/Shell, Python for automation

**📍 Location**: Ahmedabad, Gujarat, India
**📧 Contact**: vaibhavsoni5567@gmail.com
**📱 Phone**: +91 8890944027
**💼 LinkedIn**: [linkedin.com/in/vaibhavsonii21](https://linkedin.com/in/vaibhavsonii21)
**🐙 GitHub**: [github.com/vaibhav21soni](https://github.com/vaibhav21soni)

**💡 What sets me apart:**
• Self-taught DevOps professional with proven track record
• Strong problem-solving skills developed through real projects
• Continuous learner adapting to latest technologies
• Focus on automation and efficiency optimization

Want to know more about my specific projects, skills, or DevOps journey? 🤔`;
    }

    // Kubernetes - Comprehensive Guide
    if (lowerMessage.includes('kubernetes') || lowerMessage.includes('k8s') || lowerMessage.includes('container orchestration')) {
      return `⚓ **Kubernetes Mastery - Complete Guide**

**🎯 What is Kubernetes?**
Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications across clusters of machines.

**🏗️ Core Architecture:**
**Master Node Components:**
• **API Server**: Central management entity
• **etcd**: Distributed key-value store
• **Controller Manager**: Manages controllers
• **Scheduler**: Assigns pods to nodes

**Worker Node Components:**
• **kubelet**: Node agent
• **kube-proxy**: Network proxy
• **Container Runtime**: Docker/containerd

**📦 Key Objects & Resources:**
• **Pods**: Smallest deployable units (1+ containers)
• **Services**: Network abstraction (ClusterIP, NodePort, LoadBalancer)
• **Deployments**: Manage replica sets and rolling updates
• **StatefulSets**: For stateful applications
• **DaemonSets**: Run pods on all/selected nodes
• **ConfigMaps**: Non-sensitive configuration data
• **Secrets**: Sensitive data (passwords, tokens, keys)
• **Ingress**: HTTP/HTTPS routing to services
• **Persistent Volumes**: Storage abstraction

**🔒 Security Best Practices:**
• **RBAC (Role-Based Access Control)**: Implement least privilege
• **Pod Security Standards**: Replace deprecated Pod Security Policies
• **Network Policies**: Control traffic between pods/namespaces
• **Service Mesh**: Istio/Linkerd for secure service communication
• **Image Security**: Scan images, use distroless/minimal base images
• **Secrets Management**: External secret stores (Vault, AWS Secrets Manager)
• **Admission Controllers**: Validate and mutate resources

**🚀 Production Best Practices:**
• **Resource Management**: Set CPU/memory requests and limits
• **Health Checks**: Liveness, readiness, and startup probes
• **Auto-scaling**: HPA (Horizontal Pod Autoscaler) and VPA (Vertical Pod Autoscaler)
• **Rolling Updates**: Zero-downtime deployments
• **Monitoring**: Prometheus + Grafana + AlertManager
• **Logging**: ELK/EFK stack or Loki
• **Backup**: etcd backups and disaster recovery plans

**🛠️ Advanced Topics:**
• **Custom Resources (CRDs)**: Extend Kubernetes API
• **Operators**: Automate complex applications
• **GitOps**: ArgoCD/Flux for declarative deployments
• **Service Mesh**: Advanced traffic management and security
• **Multi-cluster Management**: Rancher, Anthos, OpenShift

**💡 Vaibhav's K8s Experience:**
• Kubernetes cluster administration and management
• Container orchestration for production workloads
• Implementation of monitoring and logging solutions
• Security hardening and best practices implementation

**🔧 Essential kubectl Commands:**
\`\`\`bash
kubectl get pods -A                    # List all pods
kubectl describe pod <pod-name>        # Pod details
kubectl logs <pod-name> -f            # Follow logs
kubectl exec -it <pod-name> -- /bin/bash  # Shell access
kubectl apply -f deployment.yaml      # Apply configuration
kubectl scale deployment <name> --replicas=3  # Scale deployment
\`\`\`

Want to dive deeper into any specific Kubernetes topic? 🤔`;
    }

    // Terraform - Infrastructure as Code
    if (lowerMessage.includes('terraform') || lowerMessage.includes('iac') || lowerMessage.includes('infrastructure as code')) {
      return `🚀 **Terraform Infrastructure as Code - Expert Guide**

**🎯 What is Terraform?**
Terraform is HashiCorp's Infrastructure as Code (IaC) tool that enables you to define, provision, and manage infrastructure using declarative configuration files written in HCL (HashiCorp Configuration Language).

**✨ Core Benefits:**
• **Declarative**: Describe desired state, Terraform handles the how
• **Multi-Cloud**: 1000+ providers (AWS, Azure, GCP, Kubernetes, etc.)
• **Version Control**: Infrastructure changes tracked like code
• **Automation**: Eliminate manual provisioning errors
• **Consistency**: Identical environments across dev/staging/prod
• **Scalability**: Easy resource replication and management

**🏗️ Terraform Workflow:**
1. **Write**: Define infrastructure in .tf files
2. **Plan**: Preview changes with \`terraform plan\`
3. **Apply**: Execute changes with \`terraform apply\`
4. **Manage**: Update and destroy resources as needed

**📁 Best Practices & Project Structure:**
\`\`\`
project/
├── main.tf              # Main configuration
├── variables.tf         # Input variables
├── outputs.tf          # Output values
├── terraform.tfvars    # Variable values
├── versions.tf         # Provider versions
└── modules/
    ├── vpc/
    ├── ec2/
    └── rds/
\`\`\`

**🔧 Advanced Techniques:**
• **Modules**: Reusable, composable infrastructure components
• **Remote State**: S3 backend with DynamoDB locking
• **Workspaces**: Environment separation (dev, staging, prod)
• **Data Sources**: Reference existing infrastructure
• **Dynamic Blocks**: Generate repeated configuration
• **Conditional Resources**: Use count and for_each
• **Custom Validation**: Input validation rules
• **Provisioners**: Execute scripts during resource creation

**🏆 Vaibhav's Terraform Success Story:**
**Project**: Migration of 240+ Azure Resources to Terraform
**Results Achieved:**
• **70% reduction** in deployment time
• **Zero configuration drift**
• **Automated infrastructure provisioning**
• **Improved disaster recovery capabilities**
• **Standardized resource naming and tagging**
• **Enhanced security through code reviews**

**🛠️ Essential Commands:**
\`\`\`bash
terraform init          # Initialize working directory
terraform validate      # Validate configuration
terraform plan          # Preview changes
terraform apply         # Apply changes
terraform destroy       # Remove infrastructure
terraform fmt           # Format code
terraform import        # Import existing resources
terraform state list    # List resources in state
\`\`\`

**🔒 Security Best Practices:**
• Store sensitive data in variables, not hardcoded
• Use remote state with encryption
• Implement proper IAM roles and policies
• Regular state file backups
• Code reviews for infrastructure changes
• Secrets management integration

**💡 Pro Tips:**
• Always run \`terraform plan\` before \`apply\`
• Use consistent naming conventions
• Document your modules thoroughly
• Implement automated testing (Terratest)
• Use version constraints for providers and modules

Want to learn about specific Terraform concepts or see real examples? 🤔`;
    }

    // AWS Cloud Services
    if (lowerMessage.includes('aws') || lowerMessage.includes('amazon web services') || lowerMessage.includes('cloud')) {
      return `☁️ **AWS Cloud Services - Complete Guide**

**🎯 What is AWS?**
Amazon Web Services (AWS) is the world's most comprehensive cloud platform, offering 200+ services from data centers globally. It provides on-demand cloud computing platforms and APIs.

**🏗️ Core Service Categories:**

**💻 Compute Services:**
• **EC2**: Virtual servers in the cloud
• **Lambda**: Serverless compute service
• **ECS**: Container orchestration service
• **EKS**: Managed Kubernetes service
• **Fargate**: Serverless containers
• **Batch**: Batch computing jobs

**💾 Storage Services:**
• **S3**: Object storage service
• **EBS**: Block storage for EC2
• **EFS**: Managed file system
• **Glacier**: Long-term archival storage
• **Storage Gateway**: Hybrid cloud storage

**🗄️ Database Services:**
• **RDS**: Managed relational databases
• **DynamoDB**: NoSQL database
• **ElastiCache**: In-memory caching
• **Redshift**: Data warehouse
• **Aurora**: High-performance database

**🌐 Networking & Content Delivery:**
• **VPC**: Virtual Private Cloud
• **CloudFront**: Content Delivery Network
• **Route 53**: DNS web service
• **API Gateway**: API management
• **Direct Connect**: Dedicated network connection

**🔒 Security & Identity:**
• **IAM**: Identity and Access Management
• **KMS**: Key Management Service
• **Secrets Manager**: Secrets storage
• **WAF**: Web Application Firewall
• **Shield**: DDoS protection

**🚀 DevOps & Developer Tools:**
• **CodePipeline**: Continuous delivery
• **CodeBuild**: Build service
• **CodeDeploy**: Deployment service
• **CloudFormation**: Infrastructure as Code
• **CDK**: Cloud Development Kit
• **Systems Manager**: Operational insights

**📊 Monitoring & Management:**
• **CloudWatch**: Monitoring and observability
• **X-Ray**: Application tracing
• **CloudTrail**: API logging
• **Config**: Resource configuration tracking
• **Trusted Advisor**: Best practice recommendations

**💰 Cost Optimization Strategies:**
• **Right-sizing**: Match resources to workload needs
• **Reserved Instances**: Long-term commitments for discounts
• **Spot Instances**: Use spare capacity at reduced costs
• **Auto Scaling**: Scale resources based on demand
• **S3 Lifecycle Policies**: Automatic data archiving
• **Cost Explorer**: Analyze spending patterns

**🏆 Vaibhav's AWS Expertise:**
• **AWS Certified Cloud Practitioner** (2023)
• Hands-on experience with core AWS services
• Infrastructure automation using AWS services
• Cost optimization and security best practices
• Integration with DevOps tools and workflows

**🔧 AWS CLI Essential Commands:**
\`\`\`bash
aws configure                          # Configure credentials
aws s3 ls                             # List S3 buckets
aws ec2 describe-instances            # List EC2 instances
aws iam list-users                    # List IAM users
aws cloudformation list-stacks        # List CloudFormation stacks
\`\`\`

**💡 Best Practices:**
• Follow the Well-Architected Framework
• Implement least privilege access (IAM)
• Use multiple Availability Zones
• Enable logging and monitoring
• Regular security audits and compliance checks
• Automate everything possible

Want to explore specific AWS services or architectures? 🤔`;
    }

    // DevOps Career Guidance
    if (lowerMessage.includes('career') || lowerMessage.includes('learning') || lowerMessage.includes('devops career') || lowerMessage.includes('how to start')) {
      return `🎯 **DevOps Career Roadmap - Complete Guide**

**🚀 What is DevOps?**
DevOps is a cultural and technical movement that emphasizes collaboration between Development and Operations teams to deliver software faster, more reliably, and with higher quality.

**📈 DevOps Career Path:**

**🌱 Beginner Level (0-6 months):**
**Foundation Skills:**
• **Linux Fundamentals**: Command line, file systems, permissions
• **Networking Basics**: TCP/IP, DNS, HTTP/HTTPS, load balancing
• **Version Control**: Git, GitHub/GitLab workflows
• **Scripting**: Bash/Shell scripting for automation
• **Cloud Basics**: AWS/Azure fundamentals

**📚 Learning Resources:**
• Linux Academy / A Cloud Guru courses
• "The Phoenix Project" book
• Free AWS/Azure training materials
• YouTube channels: TechWorld with Nana, DevOps Toolkit

**🚀 Intermediate Level (6-18 months):**
**Core DevOps Skills:**
• **Containerization**: Docker, container best practices
• **Orchestration**: Kubernetes administration
• **Infrastructure as Code**: Terraform, CloudFormation
• **CI/CD**: Jenkins, GitHub Actions, GitLab CI
• **Configuration Management**: Ansible, Puppet, Chef
• **Monitoring**: Prometheus, Grafana, ELK Stack

**Advanced Level (18+ months):**
**Specialized Skills:**
• **Service Mesh**: Istio, Linkerd
• **GitOps**: ArgoCD, Flux
• **Security**: DevSecOps practices, vulnerability scanning
• **Site Reliability Engineering**: SLIs, SLOs, error budgets
• **Multi-cloud**: AWS + Azure + GCP strategies

**🏆 Essential Certifications:**

**Cloud Certifications:**
• **AWS Solutions Architect Associate**
• **Azure DevOps Engineer Expert**
• **Google Cloud Professional DevOps Engineer**

**Tool-Specific Certifications:**
• **HashiCorp Certified Terraform Associate**
• **Certified Kubernetes Administrator (CKA)**
• **Docker Certified Associate**
• **Red Hat Certified System Administrator (RHCSA)**

**💼 DevOps Job Roles:**
• **DevOps Engineer**: Infrastructure automation, CI/CD
• **Site Reliability Engineer (SRE)**: System reliability, monitoring
• **Cloud Engineer**: Cloud infrastructure, migration
• **Platform Engineer**: Developer experience, internal tools
• **Security Engineer**: DevSecOps, compliance automation

**💰 Salary Expectations (India):**
• **Entry Level**: ₹4-8 LPA
• **Mid Level**: ₹8-15 LPA
• **Senior Level**: ₹15-25 LPA
• **Lead/Architect**: ₹25+ LPA

**🎯 Vaibhav's Success Story:**
**Background**: Non-CS academic background
**Journey**: Self-taught through real projects and continuous learning
**Current Role**: DevOps Engineer at Inexture Solutions
**Achievements**: 
• Migrated 240+ Azure resources to Terraform
• 70% reduction in deployment time
• Multiple professional certifications

**🛠️ Practical Project Ideas:**
1. **Personal Website**: Deploy using CI/CD pipeline
2. **Microservices App**: Containerize and orchestrate with K8s
3. **Infrastructure Automation**: Terraform modules for cloud resources
4. **Monitoring Setup**: Prometheus + Grafana stack
5. **GitOps Workflow**: ArgoCD for application deployment

**💡 Success Tips:**
• **Hands-on Practice**: Build real projects, not just tutorials
• **Community Engagement**: Join DevOps communities, contribute to open source
• **Continuous Learning**: Technology evolves rapidly, stay updated
• **Soft Skills**: Communication, collaboration, problem-solving
• **Document Everything**: Share your learning journey

**📚 Recommended Learning Path:**
1. **Month 1-2**: Linux, Git, basic scripting
2. **Month 3-4**: Cloud fundamentals (AWS/Azure)
3. **Month 5-6**: Docker, basic Kubernetes
4. **Month 7-9**: CI/CD, Infrastructure as Code
5. **Month 10-12**: Advanced K8s, monitoring, security
6. **Year 2+**: Specialization, certifications, leadership

Want specific guidance on any aspect of DevOps career development? 🤔`;
    }

    // Default comprehensive response
    return `🤖 **Hi! I'm Vaibhav's AI DevOps Assistant**

I'm here to help you with comprehensive information about:

**👨‍💻 About Vaibhav Soni:**
• Professional journey and background
• Current role at Inexture Solutions
• Major achievements (240+ Azure resources migration)
• Certifications and expertise
• Contact information and social profiles

**🚀 DevOps Expertise:**
• **Kubernetes**: Container orchestration, security, best practices
• **Terraform**: Infrastructure as Code, modules, state management
• **AWS**: Cloud services, architecture, cost optimization
• **CI/CD**: Pipeline automation, GitHub Actions, deployment strategies
• **Docker**: Containerization, best practices, security
• **Monitoring**: Prometheus, Grafana, observability

**💼 Career Guidance:**
• DevOps career roadmap and learning path
• Essential skills and certifications
• Salary expectations and job roles
• Practical project ideas
• Success tips from Vaibhav's journey

**🎯 Try asking:**
• "Tell me about Vaibhav's experience"
• "What are Kubernetes security practices?"
• "How do I start a DevOps career?"
• "Explain Terraform best practices"
• "AWS services for DevOps"

What would you like to explore? 🚀`;
  } catch (error) {
    console.error('Chatbot error:', error);
    return `🤖 **I'm here to help!**

I can provide detailed information about:
• Vaibhav Soni's professional background and experience
• DevOps technologies (Kubernetes, Terraform, AWS, Docker)
• Career guidance and learning paths
• Technical best practices and real-world examples

Try asking about any DevOps topic or Vaibhav's experience! 🚀`;
  }
};

export default getEnhancedChatbotResponse;
