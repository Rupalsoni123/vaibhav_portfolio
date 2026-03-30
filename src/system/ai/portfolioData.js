import projectsData from "../../data/projects";

const projectsText = projectsData.map(p => `- ${p.title} (${p.category}): ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n');

export const portfolioData = `
Name: Vaibhav Soni
Contact: vaibhavsoni5567@gmail.com | +91 8890944027
Location: Ahmedabad, India

Professional Summary:
DevOps Engineer with 2+ years of hands-on experience building, automating, and operating cloud-native infrastructure across AWS, Azure, and GCP. Strong expertise in Infrastructure as Code (Terraform, Terragrunt), container orchestration (Kubernetes, Istio), and CI/CD automation. Proven ability to migrate legacy systems to containerized and microservices-based architectures while improving deployment reliability, security, and scalability across SaaS, fintech, and AI workloads.

Professional Experience:

1. Inexture Solutions - DevOps Engineer (Ahmedabad, India) | May 2025 - Present
- Operated and supported production-grade Kubernetes workloads on private GKE clusters within a secured VPC.
- Administered Istio service mesh for ingress routing, traffic management, and secure service-to-service communication.
- Designed and maintained CI/CD pipelines using Jenkins and GitHub Actions, supporting 10+ services across backend, frontend, and AI workloads.
- Migrated Jenkins from legacy bare-metal infrastructure to a containerized Docker-based architecture with minimal downtime.
- Deployed and secured cloud-native applications on AWS using Docker, Nginx, SSL/TLS, and CloudFront CDN.
- Supported development teams by troubleshooting container runtime issues, scaling bottlenecks, and deployment failures.

2. Career Sabbatical & Professional Development - Independent | March 2024 - May 2025
- Took a planned career break to manage critical family healthcare responsibilities.
- Continued technical growth through self-directed learning, cloud labs, and certification preparation.
- Earned HashiCorp Terraform Associate certification and strengthened AWS cloud architecture knowledge.

3. Highskyit Solutions - DevOps Engineer (Ahmedabad, India) | Feb 2023 - Feb 2024
- Migrated 240+ Azure resources to Terraform-based Infrastructure as Code, enabling automation and version control.
- Designed reusable Terraform modules, reducing infrastructure code duplication by approximately 70%.
- Provisioned and managed AWS infrastructure using Terragrunt with environment-specific configurations.
- Managed multi-account AWS environments using AWS Organizations, SCPs, and AWS SSO.
- Automated infrastructure deployments using Bitbucket CI/CD pipelines with peer-reviewed workflows.

Technical Skills:
- Cloud Platforms: AWS, Google Cloud Platform (GCP), Azure, DigitalOcean
- Containers & Orchestration: Docker, Kubernetes, Helm, Istio
- Infrastructure as Code: Terraform, Terragrunt, AWS CDK (TypeScript), Ansible
- CI/CD: Jenkins, GitHub Actions, GitLab CI/CD, Bitbucket Pipelines
- Web & Networking: Nginx, DNS, SSL/TLS, VPC Networking
- Monitoring & Logs: SonarQube, Dozzle, CloudWatch, Prometheus (Basic)
- Databases: PostgreSQL, MySQL, Redis, MongoDB
- Operating Systems: Linux (Ubuntu, RHEL)

Certifications:
- HashiCorp Certified Terraform Associate (003)
- AWS Certified Cloud Practitioner
- Red Hat Certified System Administrator (RHCSA)

Education:
Bachelor of Commerce (B.Com)
Maharishi Dayanand Saraswati University | Rajasthan, India | 2020 - 2023

Key Projects:
- Helpr: Production Microservices Platform (GCP). Designed and operated a production-grade microservices platform on private GKE clusters with Istio.
- Trading Bot: Automated CI/CD & Cloud Deployment (AWS). Architected end-to-end CI/CD pipeline using Jenkins for a containerized trading application.
- Solvere: Multi-Tenant SaaS Platform. Built and deployed a multi-tenant SaaS platform using Docker, Django, and TypeScript.
- CI/CD Platform Modernization: Migrated Jenkins from legacy infrastructure to a Dockerized architecture for improved reliability.
- Azure Infrastructure as Code Migration: Led large-scale Azure infrastructure migration from manual provisioning to Terraform.

Other Extended Projects from Portfolio App:
${projectsText}

Contact Information:
Email: vaibhavsoni5567@gmail.com
Phone: +91 8890944027
Location: Ahmedabad, India
LinkedIn: linkedin.com/in/vaibhavsonii21
GitHub: github.com/vaibhav21soni
`;
