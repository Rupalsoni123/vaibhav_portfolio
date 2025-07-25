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
    <div
      name="Projects"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom section-padding">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <AnimatedWrapper>
              <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full shadow-lg mb-8">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm text-cyan-700 dark:text-cyan-300">Featured Projects</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow mb-8">
                Real-world{" "}
                <span className="text-gradient">DevOps Projects</span>
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
                Showcasing infrastructure automation and cloud expertise through hands-on professional projects
              </p>
            </AnimatedWrapper>
          </div>

          {/* Enhanced Category Filter */}
          <AnimatedWrapper delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center mb-20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
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
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <AnimatedWrapper key={project.id} delay={0.1 * index} animateFrom="bottom">
                <div className="project-card card-gradient p-8 rounded-3xl hover:scale-[1.02] hover:-translate-y-2 transform transition-all duration-500 h-full flex flex-col">
                  
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed flex-grow text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-secondary-800 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-secondary-100 to-secondary-200 dark:from-secondary-700 dark:to-secondary-600 border border-secondary-300 dark:border-secondary-600 rounded-lg text-secondary-800 dark:text-secondary-200 text-sm font-medium hover:from-primary-100 hover:to-purple-100 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-secondary-800 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-secondary-600 dark:text-secondary-400">
                          <span className="text-green-500 mt-1 text-base">✓</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setShowModal(true);
                    }}
                    className="mt-auto btn-primary inline-flex items-center gap-3 w-full justify-center"
                  >
                    <span>View Details</span>
                    <ArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Enhanced Project Stats */}
          <AnimatedWrapper delay={0.5}>
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              <div className="card-gradient p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-3">4+</div>
                <div className="text-secondary-700 dark:text-secondary-300 font-semibold">Projects Completed</div>
              </div>
              <div className="card-gradient p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-4xl font-bold text-gradient-blue mb-3">20+</div>
                <div className="text-secondary-700 dark:text-secondary-300 font-semibold">Technologies Used</div>
              </div>
              <div className="card-gradient p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-4xl font-bold text-gradient-purple mb-3">70%</div>
                <div className="text-secondary-700 dark:text-secondary-300 font-semibold">Efficiency Improvement</div>
              </div>
              <div className="card-gradient p-8 rounded-2xl text-center hover:scale-105 transform transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-3">100%</div>
                <div className="text-secondary-700 dark:text-secondary-300 font-semibold">Project Success Rate</div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Enhanced Call to Action */}
          <AnimatedWrapper delay={0.6}>
            <div className="card-gradient p-12 rounded-3xl text-center border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-3xl font-bold text-gradient mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to discuss new projects and opportunities. 
                Let's connect and explore how I can help with your DevOps initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Get In Touch</span>
                </a>
                <a
                  href="https://github.com/vaibhav21soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-3"
                >
                  <span>View GitHub</span>
                  <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Project Details Modal */}
          {showModal && selectedProject && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="card-gradient max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-3xl">
                {/* Modal Header */}
                <div className="sticky top-0 glass border-b border-secondary-200 dark:border-secondary-700 p-6 flex items-center justify-between z-10 rounded-t-3xl">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-800 dark:text-white">
                        {selectedProject.title}
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200 text-secondary-600 dark:text-secondary-400"
                  >
                    <Cancel color="currentColor" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Project Overview */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Project Overview</h3>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 border border-primary-200 dark:border-primary-700 rounded-lg text-primary-800 dark:text-primary-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Key Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-secondary-50 dark:bg-secondary-700/50 rounded-lg">
                          <span className="text-green-500 mt-1 text-lg">✓</span>
                          <span className="text-secondary-700 dark:text-secondary-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Technical Implementation</h3>
                    <div className="bg-secondary-50 dark:bg-secondary-700/50 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary-800 dark:text-white mb-2">Challenge</h4>
                          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                            {selectedProject.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-800 dark:text-white mb-2">Solution</h4>
                          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                            {selectedProject.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Context */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-4">Project Context</h3>
                    <div className="card-gradient p-6 rounded-2xl border border-primary-200 dark:border-primary-800">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary-800 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-orange-500">🏢</span>
                            Work Environment
                          </h4>
                          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                            {selectedProject.category === "Current Project" 
                              ? "Currently working on this project at Inexture Solutions as part of enterprise infrastructure initiatives."
                              : "Completed as part of professional DevOps work, focusing on real-world infrastructure challenges and solutions."
                            }
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-800 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-blue-500">🎯</span>
                            Impact & Results
                          </h4>
                          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                            This project demonstrates hands-on experience with enterprise-level infrastructure, 
                            showcasing practical DevOps skills and real-world problem-solving capabilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 glass border-t border-secondary-200 dark:border-secondary-700 p-6 flex justify-end rounded-b-3xl">
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
    </div>
  );
};

export default Projects;
