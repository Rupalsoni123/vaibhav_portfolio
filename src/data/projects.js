const projectsData = [
  // ───────────────── HighSky (Feb 2023 – Feb 2024) ─────────────────
  {
    id: 0,
    org: "HighSky",
    title: "Azure → Terraform IaC Migration",
    category: "IaC",
    description:
      "Migrated 240+ Azure resources from portal-managed to Terraform IaC. Authored reusable modules covering App Services, APIM, Logic Apps, Service Bus, Storage, Key Vaults.",
    longDescription:
      "Catalogued 240+ Azure resources across multiple environments and migrated them to Terraform-managed IaC. Designed reusable dynamic modules for App Services, API Management, Logic Apps, Service Bus, Storage Accounts, and Key Vaults. Reduced code duplication via shared module surface, standardized naming + tagging policies. Imports done resource-by-resource with plan-only PRs — never destroyed-and-recreated production.",
    technologies: ["Terraform", "Azure", "App Services", "API Management", "Logic Apps", "Service Bus", "Storage Accounts", "Key Vaults"],
    metrics: [
      { label: "resources migrated", value: "240+", tone: "ok" },
      { label: "manual portal changes", value: "0", tone: "ok" },
    ],
    evidenceStatus: "self-reported · artifacts in private repo",
    icon: "cloud",
    featured: true,
  },
  {
    id: 1,
    org: "HighSky",
    title: "Kubernetes Cluster — Kafka & ZooKeeper",
    category: "Kubernetes",
    description:
      "Designed and deployed a Kubernetes cluster on DigitalOcean to host Apache Kafka and ZooKeeper. Supported the infrastructure setup needed for distributed messaging.",
    longDescription:
      "Designed and deployed a Kubernetes cluster on DigitalOcean to host Apache Kafka and ZooKeeper services. Configured StatefulSets, persistent storage, ingress, and basic monitoring. Supported infrastructure setup and deployment activities required for the distributed messaging components.",
    technologies: ["Kubernetes", "DigitalOcean", "Kafka", "ZooKeeper", "StatefulSets"],
    metrics: [
      { label: "cluster", value: "production", tone: "ok" },
      { label: "messaging", value: "Kafka+ZK", tone: "ok" },
    ],
    icon: "server",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    org: "HighSky",
    title: "Asterisk Calling Server — Custom Docker Image",
    category: "Containerization",
    description:
      "Created and maintained a custom Docker image for an Asterisk calling server pinned to a specific version. Preserved runtime config via docker commit and pushed images to client infrastructure.",
    longDescription:
      "Created and maintained a custom Docker image for an Asterisk calling server with an exact version requirement. Used `docker commit` to preserve configured runtime changes, then pushed the images to client infrastructure for deployment consistency. Documented the image build process so the client could reproduce it.",
    technologies: ["Docker", "Asterisk", "Custom Images", "Linux"],
    metrics: [
      { label: "version pinning", value: "exact", tone: "ok" },
      { label: "drift", value: "0", tone: "ok" },
    ],
    icon: "terminal",
    status: "Completed",
    featured: true,
  },
  {
    id: 3,
    org: "HighSky",
    title: "Metropolis — AWS Deployment & Ops",
    category: "Cloud Infrastructure",
    description:
      "Owned deployment and operational activities for the Metropolis project. Frequent AWS deployments, infrastructure reporting, DB server tracking, environment management.",
    longDescription:
      "Handled deployment and operational activities for the Metropolis project for a defined period. Managed frequent deployments on AWS and supported routine operational tasks including infrastructure reporting, database server tracking, and environment management.",
    technologies: ["AWS", "Bash", "Deployment Ops", "Linux"],
    icon: "cloud",
    status: "Completed",
    featured: false,
  },

  // ───────────────── Inexture (May 2025 – Present) ─────────────────
  {
    id: 4,
    org: "Inexture",
    title: "Helpr — GKE Multi-Environment Platform",
    category: "Kubernetes",
    description:
      "Worked on GKE deployments across multiple environments. Resolved production and staging issues to improve application stability.",
    longDescription:
      "Worked on Google Kubernetes Engine (GKE) deployments for the Helpr platform. Supported multiple environments (dev, staging, production), resolved deploy and runtime issues, and helped improve application stability through configuration and routing fixes.",
    technologies: ["GKE", "Kubernetes", "GCP", "Helm"],
    metrics: [
      { label: "environments", value: "3", tone: "ok" },
      { label: "platform", value: "GKE", tone: "ok" },
    ],
    icon: "shield",
    status: "Completed",
    featured: true,
  },
  {
    id: 5,
    org: "Inexture",
    title: "MassAI — CI/CD + Elasticsearch on Cloud",
    category: "CI/CD",
    description:
      "Managed CI/CD pipelines, Docker images, and Elasticsearch integration. Multi-environment support and release-phase deployment ops.",
    longDescription:
      "Managed CI/CD pipelines and production Docker images for the MassAI project. Supported Elasticsearch integration used for AI data retrieval. Assisted in cloud infrastructure across dev, staging, and production environments during release phases.",
    technologies: ["Jenkins", "Docker", "Elasticsearch", "Cloud Infrastructure", "CI/CD"],
    icon: "rocket",
    status: "Completed",
    featured: true,
  },
  {
    id: 6,
    org: "Inexture",
    title: "Solvere — Multi-Tenant Routing",
    category: "Multi-Tenant",
    description:
      "Handled multi-tenant routing, deployment issues, and service availability management across environments.",
    longDescription:
      "Handled multi-tenant Nginx routing, deployment issue resolution, and continuous service availability for the Solvere project. Helped maintain reliable client separation through routing configuration and environment isolation.",
    technologies: ["Nginx", "Multi-tenant", "Routing", "Deployment Ops"],
    icon: "rocket",
    status: "In Progress",
    featured: true,
  },
  {
    id: 7,
    org: "Inexture",
    title: "SmartmintAI — CI/CD on AWS",
    category: "CI/CD",
    description:
      "Owned CI/CD pipelines, Dockerized services, and AWS account ops. Resolved deployment + environment stability issues for reliable releases.",
    longDescription:
      "Managed CI/CD pipelines, Dockerized services, and AWS account infrastructure for the SmartmintAI platform. Handled deployment orchestration and resolved environment stability issues during critical release phases.",
    technologies: ["Jenkins", "Docker", "AWS", "CI/CD"],
    icon: "rocket",
    status: "Completed",
    featured: true,
  },
  {
    id: 8,
    org: "Inexture",
    title: "ADCA Collab — Test-Gated CI/CD + Cost Estimation",
    category: "CI/CD",
    description:
      "Designed a test-based CI/CD pipeline that validated builds before merge into Dev. Provided cloud cost estimations to the client.",
    longDescription:
      "Designed and implemented a test-based CI/CD pipeline that validated builds before merge into Dev — improving release reliability and reducing deployment risks. Also provided cloud cost estimations to the client to inform infrastructure decisions.",
    technologies: ["Jenkins", "CI/CD", "Cost Optimization"],
    metrics: [
      { label: "broken merges into dev", value: "blocked", tone: "ok" },
    ],
    icon: "terminal",
    status: "Completed",
    featured: true,
  },
  {
    id: 9,
    org: "Inexture",
    title: "ChainTerms — Drupal on Docker",
    category: "Containerization",
    description: "Deployed Drupal applications across multiple environments via Docker. Maintained deployment workflows.",
    longDescription:
      "Deployed Drupal applications across multiple environments using Docker. Maintained robust deployment workflows so config changes promoted consistently from staging to production.",
    technologies: ["Drupal", "Docker", "Multi-environment"],
    icon: "server",
    status: "Completed",
    featured: false,
  },
  {
    id: 10,
    org: "Inexture",
    title: "Lawvidia-AI — CI/CD Support",
    category: "CI/CD",
    description:
      "Supported CI/CD workflows and Docker deployments. Managed environment configurations across multiple stages.",
    longDescription:
      "Supported CI/CD workflows and Docker-based deployments on the Lawvidia-AI project. Managed environment configurations across dev, test, and staging to keep the promotion pipeline smooth.",
    technologies: ["Jenkins", "Docker", "CI/CD"],
    icon: "rocket",
    status: "Completed",
    featured: false,
  },
  {
    id: 11,
    org: "Inexture",
    title: "DDA — Infrastructure Support",
    category: "Deployment Ops",
    description:
      "Provided infrastructure support, validated deployments, and assisted in troubleshooting environment-related issues.",
    longDescription:
      "Provided infrastructure support, validated deployments, and assisted in troubleshooting environment-related issues to ensure deployment reliability for the DDA project.",
    technologies: ["Infrastructure Support", "Deployment Validation", "Linux"],
    icon: "terminal",
    status: "Completed",
    featured: false,
  },
  {
    id: 12,
    org: "Inexture",
    title: "NetSuite — Deploy + Monitor",
    category: "Deployment Ops",
    description:
      "Deployment support, monitoring assistance, and issue troubleshooting across environments.",
    longDescription:
      "Provided deployment support, monitoring assistance, and issue troubleshooting across environments to maintain application stability for the NetSuite project.",
    technologies: ["Monitoring", "CI/CD", "Support Operations"],
    icon: "server",
    status: "Completed",
    featured: false,
  },
  {
    id: 13,
    org: "Inexture",
    title: "NextGen Global — GCP Setup",
    category: "Cloud Infrastructure",
    description:
      "Set up GCP accounts and configured cloud infrastructure required for application deployment and environment setup.",
    longDescription:
      "Set up GCP accounts and configured the cloud infrastructure required for application deployment and environment setup on the NextGen Global project.",
    technologies: ["GCP", "Cloud Infrastructure", "IAM"],
    icon: "cloud",
    status: "Completed",
    featured: false,
  },
  {
    id: 14,
    org: "Inexture",
    title: "IDBF — CI/CD + Validation",
    category: "CI/CD",
    description:
      "CI/CD setup, deployment verification, and environment issue resolution for stable releases.",
    longDescription:
      "Handled CI/CD setup, deployment verification, and environment issue resolution to support stable releases on the IDBF project.",
    technologies: ["Jenkins", "Deployment Validation", "CI/CD"],
    icon: "rocket",
    status: "Completed",
    featured: false,
  },

  // ───────────────── Inexture · AI PoC Deployments ─────────────────
  // Role limited to deployment + infra, not model or app dev.
  {
    id: 15,
    org: "Inexture",
    title: "AI-Enterprise-GPT — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Deployed a ChatGPT-style platform supporting multiple AI model deployments, API key integration, downloadable models, OCR, and image processing.",
    longDescription:
      "Deployment + infrastructure support for an AI Enterprise GPT PoC. Containerized the app, configured Nginx reverse proxy, managed TLS/SSL with Certbot, and ran Jenkins pipelines with SonarQube quality gates + automated tests. Application and model development were owned by other teams.",
    technologies: ["Jenkins", "SonarQube", "Docker", "Nginx", "Certbot", "CI/CD"],
    role: "Deployment + infrastructure (app/model dev owned separately).",
    icon: "rocket",
    status: "Completed",
    featured: true,
  },
  {
    id: 16,
    org: "Inexture",
    title: "AI Music Generation — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Supported deployment of a GPU-based self-trained AI model that generates music.",
    longDescription:
      "Deployment + environment support for a GPU-based music-generation PoC. Did not train or modify the model — set up the runtime, dependencies, and pipeline so the model team could deliver.",
    technologies: ["Docker", "GPU", "Jenkins", "Nginx", "CI/CD"],
    role: "Deployment + environment (model trained by separate team).",
    icon: "terminal",
    status: "Completed",
    featured: false,
  },
  {
    id: 17,
    org: "Inexture",
    title: "Connect Database — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Deployed an AI-powered DB interface that lets users connect via host credentials and query in natural language.",
    longDescription:
      "Deployment + environment support for the Connect Database PoC. Handled containerization, reverse proxy, TLS, and pipeline integration. App logic and model integration were not part of my scope.",
    technologies: ["Jenkins", "Docker", "Nginx", "Certbot", "CI/CD"],
    role: "Deployment + environment only.",
    icon: "server",
    status: "Completed",
    featured: false,
  },
  {
    id: 18,
    org: "Inexture",
    title: "Mock Interview AI — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Supported deployment of an AI interview platform with video/text interviews, resume analysis, confidence eval, and automated scoring.",
    longDescription:
      "Deployment support for a Mock Interview AI PoC. Application features (scoring, resume analysis, video pipeline) were built by the dev/ML team; my work was the deployment pipeline and environment configuration.",
    technologies: ["Jenkins", "Docker", "Nginx", "CI/CD"],
    role: "Deployment only.",
    icon: "rocket",
    status: "Completed",
    featured: false,
  },
  {
    id: 19,
    org: "Inexture",
    title: "PolyverseAI — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Deployed a multilingual communication platform with seamless translation support across native languages.",
    longDescription:
      "Deployment + infrastructure support for the PolyverseAI PoC. Set up Jenkins pipelines for a monorepo (frontend + backend) with conditional stages, containerization, and Nginx reverse proxy.",
    technologies: ["Jenkins", "Docker", "Nginx", "Certbot", "CI/CD"],
    role: "Deployment + infrastructure only.",
    icon: "rocket",
    status: "Completed",
    featured: true,
  },
  {
    id: 20,
    org: "Inexture",
    title: "TensorCut — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Supported deployment of AI background removal + image upscaling up to 4K.",
    longDescription:
      "Deployment support for TensorCut PoC. ML features (background removal, upscaling) were owned by the ML team. I set up the deploy pipeline, container runtime, and Nginx/TLS.",
    technologies: ["Jenkins", "Docker", "Nginx", "Certbot", "CI/CD"],
    role: "Deployment only.",
    icon: "terminal",
    status: "Completed",
    featured: false,
  },
  {
    id: 21,
    org: "Inexture",
    title: "NextGenCaterAI — Deployment",
    category: "AI PoC (Deploy-only)",
    description:
      "Deployed an Agentic AI catering recommendation platform that suggests restaurants by event + budget.",
    longDescription:
      "Deployment + infrastructure setup for an Agentic AI catering PoC. Set up Jenkins pipeline (with SonarQube + automated tests), Docker runtime, Nginx reverse proxy, and TLS. Agent/model layer was owned by other teams.",
    technologies: ["Jenkins", "SonarQube", "Docker", "Nginx", "Certbot", "CI/CD"],
    role: "Deployment + infrastructure only.",
    icon: "rocket",
    status: "Completed",
    featured: true,
  },
];

export default projectsData;
