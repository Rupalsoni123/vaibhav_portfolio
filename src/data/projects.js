const projectsData = [
  {
    id: 1,
    title: "GKE Microservices Platform (Helpr)",
    category: "Container Orchestration & Mesh",
    description: "Managed and operated a production-grade microservices platform on private GKE Autopilot clusters with managed ASM (Istio).",
    longDescription: "Managed and operated a production-grade microservices platform on private GKE clusters utilizing Autopilot mode and managed Anthos Service Mesh (ASM/Istio). Implemented secure ingress routing, mTLS-based internal communication, and private Cloud SQL connectivity for sensitive data. Enforced restricted administrative access and supported zero-downtime scaling and deployments to ensure maximum availability.",
    technologies: ["GKE Autopilot", "GCP", "ASM (Istio)", "mTLS", "Cloud SQL", "Zero-Downtime Deployment", "IAM Security"],
    live: null,
    image: null,
    icon: "shield",
    status: "Completed",
    featured: true
  },
  {
    id: 2,
    title: "Azure to Terraform IaC Migration",
    category: "Infrastructure as Code",
    description: "Successfully migrated over 240+ Azure resources to Terraform-based Infrastructure as Code (IaC), enabling full automation and version control.",
    longDescription: "Successfully migrated over 240+ Azure resources to Terraform-based Infrastructure as Code (IaC), enabling full automation and version control. Designed and implemented reusable dynamic Terraform modules for various Azure services including App Services, API Management, Logic Apps, Service Bus, Storage Accounts, and Key Vaults. Reduced code duplication by 70% and developed standardized naming conventions and tag policies.",
    technologies: ["Terraform", "Azure", "App Services", "API Management", "Logic Apps", "Service Bus", "Storage Accounts", "Key Vaults"],
    live: null,
    image: null,
    icon: "cloud",
    status: "Completed",
    featured: true
  },
  {
    id: 3,
    title: "Scalable AWS Architecture via Terragrunt",
    category: "Cloud Infrastructure",
    description: "Provisioned and managed scalable AWS infrastructure using Terragrunt, adhering to IaC best practices for modularity and multi-account management.",
    longDescription: "Provisioned and managed scalable AWS infrastructure using Terragrunt, adhering to Infrastructure as Code (IaC) best practices for modularity, reusability, and maintainability. Managed 6 AWS accounts using AWS Organizations with centralized billing and Service Control Policies (SCPs). Implemented AWS SSO for secure access management and configured EC2 instances to be securely accessible using AWS Systems Manager Session Manager.",
    technologies: ["AWS", "Terragrunt", "AWS Organizations", "AWS SSO", "EC2", "Systems Manager", "Bitbucket CI/CD", "SCPs"],
    live: null,
    image: null,
    icon: "cloud",
    status: "Completed",
    featured: true
  },
  {
    id: 4,
    title: "SmartmintAI Ecosystem",
    category: "CI/CD & Cloud Infrastructure",
    description: "Managed end-to-end CI/CD pipelines, Dockerized services, and ensured environment stability across AWS accounts.",
    longDescription: "Managed CI/CD pipelines, Dockerized services, and AWS account infrastructure for the SmartmintAI platform. Handled deployment orchestration and resolved environment stability issues during critical release phases. Optimized Docker images for production use and implemented automated scaling policies on AWS to handle fluctuating AI workloads.",
    technologies: ["AWS", "Docker", "CI/CD", "Jenkins", "EC2", "CloudWatch"],
    live: null,
    image: null,
    icon: "rocket",
    status: "Completed",
    featured: true
  },
  {
    id: 5,
    title: "MassAI Infrastructure (Azure)",
    category: "Search & Cloud Architecture",
    description: "Managed CI/CD pipelines, Docker images, and Elasticsearch clusters on Azure to support multi-environment AI operations.",
    longDescription: "Managed CI/CD pipelines and production Docker images for the MassAI project on Azure. Administered and optimized Elasticsearch clusters for high-performance AI data retrieval. Assisted in building scalable cloud infrastructure and provided multi-environment support including development, staging, and production troubleshooting on the Azure cloud platform.",
    technologies: ["Azure", "Elasticsearch", "Docker", "CI/CD", "Cloud Infrastructure", "Multi-environment", "Monitoring"],
    icon: "rocket",
    status: "Completed",
    featured: true
  },
  {
    id: 6,
    title: "Solvere Multi-Tenant Platform",
    category: "Full Stack DevOps",
    description: "Handled multi-tenant routing, complex deployment issues, and ensured high service availability for the Solvere platform.",
    longDescription: "Handled multi-tenant Nginx routing, complex deployment issue resolution, and ensured continuous service availability for the Solvere project. Managed wildcard domain setups and advanced proxy routing to separate client traffic securely. Automated scaling and persistent volume management for multi-tenant data storage.",
    technologies: ["Nginx", "Multi-tenant", "AWS", "Docker Compose", "Service Availability", "Routing"],
    icon: "rocket",
    status: "In Progress",
    featured: true
  },
  {
    id: 7,
    title: "AI PoC Deployment Lifecycle",
    category: "AI & ML Ops",
    description: "Implemented test-driven Jenkins CI/CD pipelines with Sonar-based quality checks for multiple AI PoC deployments.",
    longDescription: "Supported multiple AI PoC deployments by implementing robust CI/CD pipelines using Jenkins. Integrated Sonar-based code quality checks and automated test stages—specifically ensuring the pipeline stops execution if any tests fail to maintain code integrity. Managed multi-stage environments across development, staging, and production.",
    technologies: ["Jenkins", "SonarQube", "Test Automation", "AI Deployments", "CI/CD Pipelines", "Troubleshooting"],
    icon: "terminal",
    status: "Completed",
    featured: true
  },
  {
    id: 8,
    title: "Liferay & CMS Migrations (Utho Server)",
    category: "Infrastructure Migration",
    description: "Migrated Liferay and WordPress applications from on-premise infrastructure to Utho cloud servers with minimal downtime.",
    longDescription: "Performed a series of mission-critical migrations for Liferay (CMATA) and WordPress (Advance Ahmedabad) applications. Transitioned legacy on-premise infrastructure to Utho server environments. Managed environment setup, deployment verification, and post-migration stability validation while ensuring data integrity and configuration accuracy.",
    technologies: ["Utho Server", "Liferay", "WordPress", "On-Premise Migration", "Environment Setup", "Validation"],
    icon: "cloud",
    status: "Completed",
    featured: true
  },
  {
    id: 9,
    title: "Drupal Environment Orchestration (ChainTerms)",
    category: "Containerization",
    description: "Deployed Drupal on multiple environments using a robust Docker-based architecture for the ChainTerms project.",
    longDescription: "Implemented a robust Docker-based deployment strategy for Drupal on the ChainTerms platform. Managed multi-environment orchestration ensuring that configuration changes were consistent across staging and production. Optimized container runtime and simplified the onboarding process for developers.",
    technologies: ["Drupal", "Docker", "Multi-environment", "Deployment Architecture", "Orchestration"],
    icon: "server",
    status: "Completed",
    featured: false
  },
  {
    id: 10,
    title: "Lawvidia CI/CD Support",
    category: "DevOps Support",
    description: "Supported CI/CD workflows and Docker deployments for environment configuration across multiple stages.",
    longDescription: "Provided expert support for CI/CD workflows and Docker-based deployments on the Lawvidia project. Managed environment configurations across development, test, and staging to ensure a smooth promotion pipeline. Resolved integration issues between various microservices.",
    technologies: ["Docker", "CI/CD Workflows", "Environment Configuration", "Pipeline Support"],
    icon: "rocket",
    status: "Completed",
    featured: false
  }
];

export default projectsData;
