import React, { useState } from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import SectionHeading from "./SectionHeading";
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
      className="pt-10 min-h-screen w-full flex items-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Featured Projects"
            secondHeading="Real-world DevOps projects showcasing infrastructure automation and cloud expertise"
          />
        </AnimatedWrapper>

        {/* Enhanced Category Filter */}
        <AnimatedWrapper delay={0.2}>
          <div className="mb-16">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <AnimatedWrapper key={project.id} delay={0.1 * index} animateFrom="bottom">
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] hover:border-blue-500/40 h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
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
                    className="mt-auto group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                  >
                    <span className="group-hover/btn:-translate-x-1 transition-transform duration-300">View Details</span>
                    <ArrowRightLong className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Enhanced Project Stats */}
        <AnimatedWrapper delay={0.5}>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl shadow-lg border border-blue-200/50 dark:border-blue-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                4+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Projects Completed
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg border border-purple-200/50 dark:border-purple-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Technologies Used
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg border border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                70%
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Efficiency Improvement
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-lg border border-orange-200/50 dark:border-orange-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Project Success Rate
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Enhanced Call to Action */}
        <AnimatedWrapper delay={0.6}>
          <div className="relative text-center bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20 rounded-3xl p-12 border border-blue-200/50 dark:border-blue-800/50 shadow-xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to discuss new projects and opportunities. 
                Let's connect and explore how I can help with your DevOps initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get In Touch</span>
                </a>
                <a
                  href="https://github.com/vaibhav21soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                >
                  <span>View GitHub</span>
                  <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Project Details Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400"
                >
                  <Cancel color="currentColor" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Overview */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {selectedProject.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Context */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Context</h3>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-lg p-6 border border-cyan-500/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="text-orange-500">🏢</span>
                          Work Environment
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {selectedProject.category === "Current Project" 
                            ? "Currently working on this project at Inexture Solutions as part of enterprise infrastructure initiatives."
                            : "Completed as part of professional DevOps work, focusing on real-world infrastructure challenges and solutions."
                          }
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="text-blue-500">🎯</span>
                          Impact & Results
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          This project demonstrates hands-on experience with enterprise-level infrastructure, 
                          showcasing practical DevOps skills and real-world problem-solving capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
