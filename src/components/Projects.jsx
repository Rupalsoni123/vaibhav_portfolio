import React, { useState } from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Code, Link, ArrowRightLong, Cancel } from "./Icons";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Azure Cloud Infrastructure Migration",
      category: "Infrastructure as Code",
      description: "Successfully migrated 240+ Azure resources to Terraform-based IaC, enabling full automation and version control.",
      technologies: ["Terraform", "Azure", "App Services", "API Management", "Logic Apps", "Service Bus", "Storage Accounts", "Key Vaults"],
      achievements: [
        "Designed reusable dynamic Terraform modules for various Azure services",
        "Reduced code duplication by 70%",
        "Developed standardized naming conventions and tag policies",
        "Ensured consistent, scalable deployments across environments",
        "Implemented automated state management",
        "Created comprehensive documentation and runbooks"
      ],
      icon: "☁️",
      gradient: "from-neon-blue to-neon-green",
      challenge: "Legacy Azure infrastructure was manually managed, leading to inconsistencies, deployment errors, and difficulty in scaling across multiple environments.",
      solution: "Implemented Terraform-based Infrastructure as Code with modular design, automated state management, and standardized deployment pipelines.",
      status: "DEPLOYED",
      impact: "70% reduction in deployment time"
    },
    {
      id: 2,
      title: "DigitalOcean Kubernetes Cluster",
      category: "Container Orchestration",
      description: "Designed and deployed a highly available, production-grade Kubernetes cluster with multi-node architecture and persistent volume provisioning.",
      technologies: ["Kubernetes", "DigitalOcean", "Apache Kafka", "ZooKeeper", "YAML", "Persistent Volumes"],
      achievements: [
        "Deployed Apache Kafka and ZooKeeper using custom YAML manifests",
        "Configured cluster for efficient distributed workload management",
        "Implemented built-in fault tolerance and high reliability",
        "Established persistent volume management for stateful applications",
        "Set up monitoring and logging with Prometheus and Grafana",
        "Configured auto-scaling based on resource utilization"
      ],
      icon: "⚓",
      gradient: "from-neon-purple to-neon-pink",
      challenge: "Need for a scalable, fault-tolerant messaging system that could handle high-throughput data processing across multiple services.",
      solution: "Deployed Apache Kafka on Kubernetes with ZooKeeper coordination, implementing persistent storage and automated failover mechanisms.",
      status: "ACTIVE",
      impact: "99.9% uptime achieved"
    },
    {
      id: 3,
      title: "AWS Infrastructure Automation with Terragrunt",
      category: "Infrastructure as Code",
      description: "Provisioned and managed scalable AWS infrastructure using Terragrunt, adhering to IaC best practices for modularity and maintainability.",
      technologies: ["AWS", "Terragrunt", "Bitbucket CI/CD", "AWS Organizations", "AWS SSO", "EC2", "Systems Manager", "Service Control Policies"],
      achievements: [
        "Automated end-to-end infrastructure deployments using Bitbucket CI/CD pipelines",
        "Implemented structured code review process with two peer reviewers",
        "Enhanced cloud environment resilience with modular Terragrunt architecture",
        "Managed 6 AWS accounts using AWS Organizations with centralized billing",
        "Implemented AWS SSO for secure access management across all accounts",
        "Configured EC2 instances accessible via AWS Systems Manager Session Manager"
      ],
      icon: "🏗️",
      gradient: "from-neon-green to-neon-blue",
      challenge: "Managing multiple AWS accounts with consistent security policies and streamlined deployment processes across environments.",
      solution: "Implemented Terragrunt-based infrastructure with AWS Organizations, centralized billing, and automated CI/CD pipelines.",
      status: "OPTIMIZING",
      impact: "90% faster deployments"
    },
    {
      id: 4,
      title: "Docker Container Customization",
      category: "Container Orchestration",
      description: "Designed and built a custom Docker image for FreePBX with embedded Asterisk-9 server, customized for specific client requirements.",
      technologies: ["Docker", "FreePBX", "Asterisk-9", "Private Registry", "SIP Trunking", "Call Routing"],
      achievements: [
        "Customized Asterisk configurations for advanced client needs",
        "Implemented SIP trunking and call routing functionality",
        "Pushed customized Docker image to private registry for reuse",
        "Enabled consistent rollouts across environments",
        "Streamlined deployment process for communication infrastructure",
        "Created client-specific configuration templates"
      ],
      icon: "🐳",
      gradient: "from-neon-pink to-neon-purple",
      challenge: "Client required specialized communication infrastructure with custom Asterisk configurations that needed to be consistently deployed.",
      solution: "Built custom Docker image with embedded FreePBX and Asterisk-9, stored in private registry for Kubernetes deployments.",
      status: "DEPLOYED",
      impact: "100% client satisfaction"
    },
    {
      id: 5,
      title: "Infrastructure Monitoring Stack",
      category: "Monitoring & Observability",
      description: "Implemented comprehensive monitoring and observability solution for distributed microservices architecture.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Kubernetes", "Docker", "CloudWatch"],
      achievements: [
        "Deployed Prometheus for metrics collection across infrastructure",
        "Created custom Grafana dashboards for visualization",
        "Implemented centralized logging with ELK Stack",
        "Set up alerting rules for proactive monitoring",
        "Established SLA monitoring and reporting",
        "Reduced MTTR by 60% through better observability"
      ],
      icon: "📊",
      gradient: "from-neon-blue to-neon-purple",
      challenge: "Lack of visibility into system performance and health across distributed microservices architecture.",
      solution: "Implemented comprehensive monitoring stack with metrics, logs, and traces for full observability.",
      status: "MONITORING",
      impact: "60% faster issue resolution"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Automation (Current)",
      category: "CI/CD & Automation",
      description: "Currently contributing to cloud infrastructure automation and deployment optimization initiatives at Inexture Solutions.",
      technologies: ["Kubernetes", "Cloud-native Solutions", "Scalable Architecture", "Modern DevOps Practices"],
      achievements: [
        "Implementing modern DevOps practices for enterprise clients",
        "Optimizing deployment workflows for better efficiency",
        "Designing scalable cloud infrastructure solutions",
        "Contributing to automation initiatives",
        "Enhancing deployment optimization processes",
        "Working on enterprise-grade solutions"
      ],
      icon: "🚀",
      gradient: "from-neon-green to-neon-pink",
      challenge: "Enterprise clients need modern, scalable infrastructure solutions with optimized deployment workflows.",
      solution: "Implementing cloud-native solutions with Kubernetes orchestration and modern DevOps practices.",
      status: "ACTIVE",
      impact: "Ongoing optimization"
    }
  ];

  const categories = ["All", "Infrastructure as Code", "Container Orchestration", "CI/CD & Automation", "Monitoring & Observability"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      name="Projects"
      className="section-cyber matrix-bg relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Project Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/10 font-mono text-2xl animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['☁️', '⚓', '🔄', '📊', '🚀', '⚡'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
          <div className="text-center mb-16">
            <div className="terminal-window max-w-3xl mx-auto">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                  project-showcase.sh
                </div>
              </div>
              <div className="terminal-content">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-neon-blue">$ ls -la /var/projects/</div>
                  <div className="text-white">total {projects.length} projects</div>
                  <div className="text-neon-green">drwxr-xr-x infrastructure-automation/</div>
                  <div className="text-neon-green">drwxr-xr-x container-orchestration/</div>
                  <div className="text-neon-green">drwxr-xr-x cicd-pipelines/</div>
                  <div className="text-neon-green">drwxr-xr-x monitoring-stack/</div>
                  <div className="text-neon-blue">$ ./deploy_showcase.sh</div>
                  <div className="text-neon-green">Loading project portfolio...</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Category Filter */}
        <AnimatedWrapper animation="slide-up" delay={0.4}>
          <div className="mb-12">
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">#</span>
                </div>
                <h3 className="neon-text-blue font-cyber text-xl">PROJECT_CATEGORIES</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`font-mono text-sm px-4 py-2 rounded border-2 transition-all duration-300 hover:scale-105 ${
                      activeCategory === category 
                        ? 'border-neon-blue bg-neon-blue/20 text-neon-blue shadow-neon-sm' 
                        : 'border-neon-green bg-black text-neon-green hover:border-neon-blue hover:text-neon-blue'
                    }`}
                  >
                    {category === "All" ? "show_all.sh" : `./${category.toLowerCase().replace(/[^a-z]/g, '_')}.sh`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <AnimatedWrapper 
              key={project.id} 
              animateFrom={index % 2 === 0 ? "left" : "right"}
              delay={0.1 * (index % 4)}
            >
              <div className="project-card group flex flex-col h-full" onClick={() => {
                setSelectedProject(project);
                setShowModal(true);
              }}>
                {/* Project Header - Fixed Height */}
                <div className="flex items-start justify-between mb-6 min-h-80">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-neon group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-mono text-lg font-bold mb-2 group-hover:text-neon-green transition-colors duration-300 leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="project-badge">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className={`font-mono text-xs px-2 py-1 rounded flex-shrink-0 ml-2 ${
                    project.status === 'DEPLOYED' ? 'bg-neon-green/20 text-neon-green' :
                    project.status === 'ACTIVE' ? 'bg-neon-blue/20 text-neon-blue' :
                    project.status === 'OPTIMIZING' ? 'bg-neon-purple/20 text-neon-purple' :
                    'bg-neon-pink/20 text-neon-pink'
                  }`}>
                    [{project.status}]
                  </div>
                </div>

                {/* Project Content - Flexible Height */}
                <div className="flex-1 flex flex-col">
                  {/* Project Description - Fixed Height */}
                  <div className="mb-6 min-h-60">
                    <p className="text-gray-300 leading-relaxed font-mono text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies - Consistent Spacing */}
                  <div className="mb-6">
                    <h4 className="font-mono text-sm text-neon-blue mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                      TECH_STACK
                    </h4>
                    <div className="flex flex-wrap gap-2 min-h-60 content-start">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="font-mono text-xs text-white bg-black/50 px-3 py-1 rounded border border-neon-green/30 hover:border-neon-green hover:text-neon-green transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements - Flexible Height */}
                  <div className="mb-6 flex-1">
                    <h4 className="font-mono text-sm text-neon-green mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                      KEY_ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-300 font-mono">
                          <span className="text-neon-green mt-1 text-base flex-shrink-0">✓</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                      {project.achievements.length > 3 && (
                        <li className="flex items-start gap-3 text-sm text-gray-400 font-mono">
                          <span className="text-neon-purple mt-1 text-base flex-shrink-0">+</span>
                          <span className="leading-relaxed">{project.achievements.length - 3} more achievements...</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Impact & View Details - Fixed at Bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-neon-green/30 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></span>
                      <span className="font-mono text-xs text-neon-purple font-bold">{project.impact}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neon-blue font-mono text-sm group-hover:gap-3 transition-all duration-300">
                      <span>VIEW_DETAILS</span>
                      <ArrowRightLong className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Project Stats */}
        <AnimatedWrapper animation="fade-in" delay={0.8}>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="stat-card group">
              <div className="stat-icon bg-gradient-to-br from-neon-green to-neon-blue text-black group-hover:shadow-neon">
                🚀
              </div>
              <div className="neon-text text-3xl font-bold font-mono mb-2">06+</div>
              <div className="text-white font-mono text-sm">PROJECTS_DEPLOYED</div>
            </div>
            <div className="stat-card group">
              <div className="stat-icon bg-gradient-to-br from-neon-blue to-neon-purple text-black group-hover:shadow-neon">
                ⚙️
              </div>
              <div className="neon-text text-3xl font-bold font-mono mb-2">25+</div>
              <div className="text-white font-mono text-sm">TECHNOLOGIES_USED</div>
            </div>
            <div className="stat-card group">
              <div className="stat-icon bg-gradient-to-br from-neon-purple to-neon-pink text-black group-hover:shadow-neon">
                📈
              </div>
              <div className="neon-text text-3xl font-bold font-mono mb-2">70%</div>
              <div className="text-white font-mono text-sm">EFFICIENCY_GAIN</div>
            </div>
            <div className="stat-card group">
              <div className="stat-icon bg-gradient-to-br from-neon-pink to-neon-green text-black group-hover:shadow-neon">
                ✅
              </div>
              <div className="neon-text text-3xl font-bold font-mono mb-2">100%</div>
              <div className="text-white font-mono text-sm">SUCCESS_RATE</div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* CTA Section */}
        <AnimatedWrapper animation="fade-in" delay={1.0}>
          <div className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto border-2 border-neon-green">
              <h3 className="neon-text-green font-cyber text-2xl mb-6">
                READY_TO_COLLABORATE
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-mono text-sm max-w-2xl mx-auto">
                Interested in working together on your next DevOps project? Let's build something amazing 
                that scales, performs, and delivers real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="cyber-button inline-flex items-center gap-2"
                >
                  <span>INITIATE_PROJECT.sh</span>
                  <span className="text-lg">🚀</span>
                </a>
                <a
                  href="https://github.com/vaibhav21soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-secondary inline-flex items-center gap-3"
                >
                  <span>VIEW_GITHUB.repo</span>
                  <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Project Details Modal */}
        {showModal && selectedProject && (
          <div className="modal-overlay">
            <div className="modal-content max-w-6xl">
              {/* Modal Header */}
              <div className="sticky top-0 bg-black border-b-2 border-neon-green p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-2xl shadow-neon`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="neon-text font-cyber text-xl">
                      {selectedProject.title}
                    </h2>
                    <div className="project-badge">
                      {selectedProject.category}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="cyber-button-secondary p-2"
                >
                  <Cancel className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
                {/* Project Overview */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">PROJECT_OVERVIEW</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-green/30">
                      <div className="font-mono text-xs text-neon-blue mb-1">STATUS</div>
                      <div className={`font-mono text-sm font-bold ${
                        selectedProject.status === 'DEPLOYED' ? 'text-neon-green' :
                        selectedProject.status === 'ACTIVE' ? 'text-neon-blue' :
                        selectedProject.status === 'OPTIMIZING' ? 'text-neon-purple' :
                        'text-neon-pink'
                      }`}>
                        {selectedProject.status}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-purple/30">
                      <div className="font-mono text-xs text-neon-blue mb-1">IMPACT</div>
                      <div className="font-mono text-sm font-bold text-neon-purple">
                        {selectedProject.impact}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-blue/30">
                      <div className="font-mono text-xs text-neon-blue mb-1">TECH_COUNT</div>
                      <div className="font-mono text-sm font-bold text-neon-blue">
                        {selectedProject.technologies.length} Technologies
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="cyber-card p-6 border border-neon-pink/50">
                    <h4 className="neon-text-pink font-mono text-sm font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                      CHALLENGE
                    </h4>
                    <p className="text-gray-300 text-sm font-mono leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="cyber-card p-6 border border-neon-green/50">
                    <h4 className="neon-text-green font-mono text-sm font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                      SOLUTION
                    </h4>
                    <p className="text-gray-300 text-sm font-mono leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">TECHNOLOGIES_USED</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="font-mono text-sm text-white bg-black px-4 py-3 rounded border border-neon-green hover:border-neon-blue hover:text-neon-blue transition-colors duration-300 text-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete Achievements List */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">COMPLETE_ACHIEVEMENTS</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-black/50 rounded border border-neon-green/30 hover:border-neon-green/60 transition-colors duration-300">
                        <span className="text-neon-green mt-1 text-lg flex-shrink-0">✓</span>
                        <span className="text-gray-300 font-mono text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Timeline */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">PROJECT_TIMELINE</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-black/50 rounded border border-neon-blue/30">
                      <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                      <div>
                        <div className="font-mono text-sm text-white font-bold">PLANNING & ANALYSIS</div>
                        <div className="font-mono text-xs text-gray-400">Requirements gathering and architecture design</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-black/50 rounded border border-neon-purple/30">
                      <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      <div>
                        <div className="font-mono text-sm text-white font-bold">IMPLEMENTATION</div>
                        <div className="font-mono text-xs text-gray-400">Development and configuration of infrastructure</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-black/50 rounded border border-neon-green/30">
                      <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-mono text-sm text-white font-bold">DEPLOYMENT & MONITORING</div>
                        <div className="font-mono text-xs text-gray-400">Production deployment with continuous monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">PROJECT_METRICS</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-green/30">
                      <div className="font-mono text-2xl font-bold text-neon-green mb-1">
                        {selectedProject.id === 1 ? '240+' : 
                         selectedProject.id === 2 ? '99.9%' :
                         selectedProject.id === 3 ? '90%' : '60%'}
                      </div>
                      <div className="font-mono text-xs text-gray-400">
                        {selectedProject.id === 1 ? 'Resources Migrated' : 
                         selectedProject.id === 2 ? 'Uptime Achieved' :
                         selectedProject.id === 3 ? 'Time Saved' : 'MTTR Reduction'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-blue/30">
                      <div className="font-mono text-2xl font-bold text-neon-blue mb-1">
                        {selectedProject.technologies.length}
                      </div>
                      <div className="font-mono text-xs text-gray-400">Technologies Used</div>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-purple/30">
                      <div className="font-mono text-2xl font-bold text-neon-purple mb-1">
                        {selectedProject.achievements.length}
                      </div>
                      <div className="font-mono text-xs text-gray-400">Key Achievements</div>
                    </div>
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-pink/30">
                      <div className="font-mono text-2xl font-bold text-neon-pink mb-1">100%</div>
                      <div className="font-mono text-xs text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-black border-t-2 border-neon-green p-6 flex justify-between items-center">
                <div className="font-mono text-sm text-gray-400">
                  PROJECT_ID: <span className="text-neon-green">{selectedProject.id.toString().padStart(3, '0')}</span>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="cyber-button-secondary"
                >
                  CLOSE_DETAILS.sh
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
     