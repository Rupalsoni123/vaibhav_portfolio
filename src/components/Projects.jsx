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
      technologies: ["Terraform", "Azure", "App Services", "API Management", "Logic Apps", "Service Bus"],
      achievements: [
        "Designed reusable dynamic Terraform modules",
        "Reduced code duplication by 70%",
        "Standardized naming conventions and tag policies",
        "Ensured consistent, scalable deployments",
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
      description: "Designed and deployed a highly available, production-grade Kubernetes cluster with multi-node architecture.",
      technologies: ["Kubernetes", "DigitalOcean", "Apache Kafka", "ZooKeeper", "YAML"],
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
      title: "Multi-Cloud CI/CD Pipeline",
      category: "CI/CD & Automation",
      description: "Built comprehensive CI/CD pipeline supporting multiple cloud providers with automated testing and deployment.",
      technologies: ["GitHub Actions", "Docker", "AWS", "Azure", "Terraform"],
      achievements: [
        "Automated build, test, and deployment processes",
        "Implemented multi-environment deployment strategy",
        "Integrated security scanning and compliance checks",
        "Created rollback mechanisms for failed deployments",
        "Established monitoring and alerting for pipeline health",
        "Reduced manual deployment effort by 90%"
      ],
      icon: "🔄",
      gradient: "from-neon-green to-neon-blue",
      challenge: "Manual deployment processes were error-prone and time-consuming, leading to delayed releases and inconsistent environments.",
      solution: "Implemented automated CI/CD pipeline with comprehensive testing, security scanning, and multi-cloud deployment capabilities.",
      status: "OPTIMIZING",
      impact: "90% faster deployments"
    },
    {
      id: 4,
      title: "Infrastructure Monitoring Stack",
      category: "Monitoring & Observability",
      description: "Implemented comprehensive monitoring and observability solution for distributed microservices architecture.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Kubernetes", "Docker"],
      achievements: [
        "Deployed Prometheus for metrics collection",
        "Created custom Grafana dashboards for visualization",
        "Implemented centralized logging with ELK Stack",
        "Set up alerting rules for proactive monitoring",
        "Established SLA monitoring and reporting",
        "Reduced MTTR by 60% through better observability"
      ],
      icon: "📊",
      gradient: "from-neon-pink to-neon-purple",
      challenge: "Lack of visibility into system performance and health across distributed microservices architecture.",
      solution: "Implemented comprehensive monitoring stack with metrics, logs, and traces for full observability.",
      status: "MONITORING",
      impact: "60% faster issue resolution"
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
              animation="scale-in" 
              delay={0.1 * (index % 3)}
            >
              <div className="project-card group" onClick={() => {
                setSelectedProject(project);
                setShowModal(true);
              }}>
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-neon group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-mono text-lg font-bold mb-2 group-hover:text-neon-green transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="project-badge">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className={`font-mono text-xs px-2 py-1 rounded ${
                    project.status === 'DEPLOYED' ? 'bg-neon-green/20 text-neon-green' :
                    project.status === 'ACTIVE' ? 'bg-neon-blue/20 text-neon-blue' :
                    project.status === 'OPTIMIZING' ? 'bg-neon-purple/20 text-neon-purple' :
                    'bg-neon-pink/20 text-neon-pink'
                  }`}>
                    [{project.status}]
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-mono text-sm text-neon-blue mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                    TECH_STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
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

                {/* Key Achievements Preview */}
                <div className="mb-6">
                  <h4 className="font-mono text-sm text-neon-green mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                    KEY_ACHIEVEMENTS
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-300 font-mono">
                        <span className="text-neon-green mt-1 text-base">✓</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & View Details */}
                <div className="flex items-center justify-between">
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
              <div className="neon-text text-3xl font-bold font-mono mb-2">04+</div>
              <div className="text-white font-mono text-sm">PROJECTS_DEPLOYED</div>
            </div>
            <div className="stat-card group">
              <div className="stat-icon bg-gradient-to-br from-neon-blue to-neon-purple text-black group-hover:shadow-neon">
                ⚙️
              </div>
              <div className="neon-text text-3xl font-bold font-mono mb-2">20+</div>
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
            <div className="modal-content">
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
              <div className="p-6 space-y-8">
                {/* Project Overview */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">PROJECT_OVERVIEW</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="cyber-card p-6 border border-neon-pink/50">
                    <h4 className="neon-text-pink font-mono text-sm font-bold mb-3">CHALLENGE</h4>
                    <p className="text-gray-300 text-sm font-mono leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="cyber-card p-6 border border-neon-green/50">
                    <h4 className="neon-text-green font-mono text-sm font-bold mb-3">SOLUTION</h4>
                    <p className="text-gray-300 text-sm font-mono leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">TECHNOLOGIES_USED</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="font-mono text-sm text-white bg-black px-4 py-2 rounded border border-neon-green hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="cyber-card p-6">
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">KEY_ACHIEVEMENTS</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-black/50 rounded border border-neon-green/30">
                        <span className="text-neon-green mt-1 text-lg">✓</span>
                        <span className="text-gray-300 font-mono text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-black border-t-2 border-neon-green p-6 flex justify-end">
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
     