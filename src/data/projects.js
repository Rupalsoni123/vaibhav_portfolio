import React from "react";
import { Rocket } from "../components/Icons";

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
    icon: "☁️",
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
    icon: <Rocket size={24} color="#2563eb" />,
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
    icon: "🐳",
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
    icon: "🏗️",
    status: "Completed",
    featured: true
  },
  {
    id: 5,
    title: "Cloud Infrastructure Automation",
    category: "DevOps Automation",
    description: "Currently contributing to cloud infrastructure automation and deployment optimization initiatives at Inexture Solutions.",
    longDescription: "Currently contributing to cloud infrastructure automation and deployment optimization initiatives at Inexture Solutions. Implementing modern DevOps practices for enterprise clients, optimizing deployment workflows, and designing scalable cloud infrastructure. Focus areas include Kubernetes orchestration, cloud-native solutions, and scalable architecture design to enhance enterprise client capabilities.",
    technologies: ["Kubernetes", "Cloud-native Solutions", "DevOps", "Enterprise Architecture", "Deployment Optimization"],
    live: null,
    image: null,
    icon: "⚙️",
    status: "In Progress",
    featured: false
  }
];

export default projectsData;
