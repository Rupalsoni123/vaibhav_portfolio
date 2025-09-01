const projectsData = [
  {
    id: 1,
    title: "Azure Cloud Infrastructure Migration",
    category: "Infrastructure as Code",
    description: "Successfully migrated over 240+ Azure resources to Terraform-based Infrastructure as Code (IaC), enabling full automation and version control.",
    longDescription: "Successfully migrated over 240+ Azure resources to Terraform-based Infrastructure as Code (IaC), enabling full automation and version control. Designed and implemented reusable dynamic Terraform modules for various Azure services including App Services, API Management, Logic Apps, Service Bus, Storage Accounts, and Key Vaults. Reduced code duplication by 70% and developed standardized naming conventions and tag policies to ensure consistent, scalable, and compliant deployments across environments.",
    technologies: ["Terraform", "Azure", "App Services", "API Management", "Logic Apps", "Service Bus", "Storage Accounts", "Key Vaults"],
    live: null,
    image: null,
    icon: "cloud",
    status: "Completed",
    featured: true
  },
  {
    id: 2,
    title: "DigitalOcean Kubernetes Cluster",
    category: "Container Orchestration",
    description: "Designed and deployed a highly available, production-grade Kubernetes cluster on DigitalOcean with multi-node architecture, integrated networking, and persistent volume provisioning.",
    longDescription: "Designed and deployed a highly available, production-grade Kubernetes cluster on DigitalOcean with multi-node architecture, integrated networking, and persistent volume provisioning. Deployed Apache Kafka and ZooKeeper using custom YAML manifests and configured the cluster for efficient distributed workload management. Implemented built-in fault tolerance and high reliability with persistent volume management for stateful applications.",
    technologies: ["Kubernetes", "DigitalOcean", "Apache Kafka", "ZooKeeper", "YAML", "Persistent Volumes"],
    live: null,
    image: null,
    icon: "rocket",
    status: "Completed",
    featured: true
  },
  {
    id: 3,
    title: "Docker Container Customization",
    category: "Containerization",
    description: "Designed and built a custom Docker image for FreePBX with an embedded Asterisk-9 server, customized for specific client requirements.",
    longDescription: "Designed and built a custom Docker image for FreePBX with an embedded Asterisk-9 server, customized for specific client requirements. Customized Asterisk configurations to support advanced client needs, including SIP trunking and call routing. Pushed the customized Docker image to a private registry for reuse in Kubernetes deployments, enabling consistent rollouts across environments based on client-specific requirements and streamlining deployment process for specialized communication infrastructure.",
    technologies: ["Docker", "FreePBX", "Asterisk-9", "Private Registry", "Kubernetes"],
    live: null,
    image: null,
    icon: "server",
    status: "Completed",
    featured: true
  },
  {
    id: 4,
    title: "AWS Infrastructure Automation with Terragrunt",
    category: "Cloud Infrastructure",
    description: "Provisioned and managed scalable AWS infrastructure using Terragrunt, adhering to Infrastructure as Code (IaC) best practices for modularity, reusability, and maintainability.",
    longDescription: "Provisioned and managed scalable AWS infrastructure using Terragrunt, adhering to Infrastructure as Code (IaC) best practices for modularity, reusability, and maintainability. Automated end-to-end infrastructure deployments using Bitbucket CI/CD pipelines with a structured code review process involving two peer reviewers. Enhanced cloud environment resilience and agility with modular Terragrunt architecture. Managed 6 AWS accounts using AWS Organizations with centralized billing and Service Control Policies (SCPs). Implemented AWS SSO for secure access management and configured EC2 instances to be securely accessible using AWS Systems Manager Session Manager.",
    technologies: ["AWS", "Terragrunt", "AWS Organizations", "AWS SSO", "EC2", "Systems Manager", "Bitbucket CI/CD", "Service Control Policies"],
    live: null,
    image: null,
    icon: "cloud",
    status: "Completed",
    featured: true
  },
  {
    id: 5,
    title: "Trading Bot – Infrastructure & DevOps",
    category: "CI/CD & Cloud Infrastructure",
    description: "Designed and implemented complete CI/CD infrastructure for a trading bot application with automated deployment pipelines and cloud-native architecture.",
    longDescription: "Designed and implemented complete CI/CD infrastructure for a trading bot application with automated deployment pipelines and cloud-native architecture. Integrated GitLab repositories with Jenkins pipelines to automate build, test, code quality checks, and deployment for both frontend and backend. Deployed backend services on EC2 using Docker containers, exposed securely via Nginx reverse proxy. Hosted frontend on AWS S3 with CloudFront CDN, ACM SSL certificates, and Route53 DNS for high availability. Implemented SonarQube scanning in CI/CD pipelines for security and code quality. Configured Redis, Dozzle, Apache, and WebSocket services to support real-time trading operations.",
    technologies: ["GitLab", "Jenkins", "SonarQube", "Redis", "FastAPI", "PostgreSQL", "Docker", "Nginx", "AWS S3", "CloudFront", "ACM", "Route53", "SSL"],
    live: null,
    image: null,
    icon: "rocket",
    status: "Completed",
    featured: true
  },
  {
    id: 6,
    title: "DDA – Liferay Environment Setup & Troubleshooting",
    category: "Environment Management",
    description: "Provisioned and managed dedicated Liferay development environments with comprehensive troubleshooting and optimization for multiple developers.",
    longDescription: "Provisioned and managed dedicated Liferay development environments with comprehensive troubleshooting and optimization for multiple developers. Provisioned dedicated Liferay environments for multiple developers with user-specific PostgreSQL databases and custom port mappings. Configured proxy-based internet access for plugin downloads and performed setup via RDP sessions in isolated environments. Installed and configured the Liferay IntelliJ plugin, initialized bundles, and integrated with project repositories. Resolved Tomcat startup failures, lock manager errors, and JVM misconfigurations by adjusting settings and cleaning temp files.",
    technologies: ["Liferay", "PostgreSQL", "Java", "Tomcat", "IntelliJ", "Docker", "Windows RDP", "Proxy"],
    live: null,
    image: null,
    icon: "server",
    status: "Completed",
    featured: true
  },
  {
    id: 7,
    title: "Cloud Infrastructure Automation",
    category: "DevOps Automation",
    description: "Currently contributing to cloud infrastructure automation and deployment optimization initiatives at Inexture Solutions.",
    longDescription: "Currently contributing to cloud infrastructure automation and deployment optimization initiatives at Inexture Solutions. Implementing modern DevOps practices for enterprise clients, optimizing deployment workflows, and designing scalable cloud infrastructure. Focus areas include Kubernetes orchestration, cloud-native solutions, and scalable architecture design to enhance enterprise client capabilities.",
    technologies: ["Kubernetes", "Cloud-native Solutions", "DevOps", "Enterprise Architecture", "Deployment Optimization"],
    live: null,
    image: null,
    icon: "server",
    status: "In Progress",
    featured: false
  }
];

export default projectsData;
