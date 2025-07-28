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
      gradient: "from-blue-500 to-cyan-500",
      challenge: "Legacy Azure infrastructure was manually managed, leading to inconsistencies, deployment errors, and difficulty in scaling across multiple environments.",
      solution: "Implemented Terraform-based Infrastructure as Code with modular design, automated state management, and standardized deployment pipelines."
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
      icon: "🚢",
      gradient: "from-purple-500 to-pink-500",
      challenge: "Need for a scalable, fault-tolerant messaging system that could handle high-throughput data processing across multiple services.",
      solution: "Deployed Apache Kafka on Kubernetes with ZooKeeper coordination, implementing persistent storage and automated failover mechanisms."
    },
    {
      id: 3,
      title: "Docker Container Customization",
      category: "Containerization",
      description: "Developed custom Docker containers with optimized configurations for improved performance and security.",
      technologies: ["Docker", "Dockerfile", "Multi-stage builds", "Alpine Linux", "Security scanning"],
      achievements: [
        "Created multi-stage Docker builds reducing image size by 60%",
        "Implemented security best practices and vulnerability scanning",
        "Optimized container startup time and resource usage",
        "Established standardized base images for development teams"
      ],
      icon: "🐳",
      gradient: "from-blue-600 to-blue-400",
      challenge: "Large, insecure container images with slow deployment times and inconsistent configurations across environments.",
      solution: "Implemented multi-stage builds, security scanning, and standardized base images with optimized configurations."
    },
    {
      id: 4,
      title: "CI/CD Pipeline Automation",
      category: "CI/CD & Automation",
      description: "Built comprehensive CI/CD pipelines using GitHub Actions for automated testing, building, and deployment.",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "SonarQube", "Slack"],
      achievements: [
        "Automated testing and deployment processes",
        "Reduced deployment time from hours to minutes",
        "Implemented quality gates and security scanning",
        "Set up automated notifications and monitoring"
      ],
      icon: "🔄",
      gradient: "from-green-500 to-teal-500",
      challenge: "Manual deployment processes were error-prone, time-consuming, and lacked proper testing and quality assurance.",
      solution: "Implemented automated CI/CD pipelines with comprehensive testing, security scanning, and deployment automation."
    },
    {
      id: 5,
      title: "Cloud Infrastructure Automation",
      category: "Current Project",
      description: "Currently contributing to cloud infrastructure automation and deployment optimization at Inexture Solutions.",
      technologies: ["Kubernetes", "Cloud-native", "Scalable Architecture"],
      achievements: [
        "Contributing to enterprise-level infrastructure projects",
        "Implementing cloud-native solutions",
        "Optimizing deployment processes",
        "Collaborating with development teams"
      ],
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
      challenge: "Enterprise infrastructure needs scalable, reliable, and cost-effective cloud solutions.",
      solution: "Implementing cloud-native architectures with automated scaling and optimized resource utilization."
    }
  ];

  const categories = ["All", "Infrastructure as Code", "Container Orchestration", "Containerization", "CI/CD & Automation", "Current Project"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      name="Projects"
      className="section-padding bg-secondary-50 dark:bg-secondary-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom section-padding">
          
          {/* Section Header */}
          <AnimatedWrapper animation="fade-in" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
                Real-world DevOps projects showcasing infrastructure automation, cloud expertise, and scalable solutions
              </p>
            </div>
          </AnimatedWrapper>

          {/* Category Filter */}
          <AnimatedWrapper animation="slide-up" delay={0.4}>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    activeCategory === category 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Projects Grid */}
          <div className="projects-grid">
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
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="project-badge">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>{project.achievements.length} achievements</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Details</span>
                      <ArrowRightLong className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Project Details Modal */}
          {showModal && selectedProject && (
            <div className="modal-overlay">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700 p-6 flex items-center justify-between z-10 rounded-t-2xl">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-200">
                        {selectedProject.title}
                      </h2>
                      <div className="project-badge">
                        {selectedProject.category}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200 text-secondary-600 dark:text-secondary-400"
                  >
                    <Cancel className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Project Overview */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-4">Project Overview</h3>
                    <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-4">Key Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg">
                          <span className="text-green-500 mt-1 text-lg">✓</span>
                          <span className="text-secondary-700 dark:text-secondary-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-4">Technical Implementation</h3>
                    <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">Challenge</h4>
                          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                            {selectedProject.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">Solution</h4>
                          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                            {selectedProject.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-white dark:bg-secondary-800 border-t border-secondary-200 dark:border-secondary-700 p-6 flex justify-end rounded-b-2xl">
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn-secondary"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
