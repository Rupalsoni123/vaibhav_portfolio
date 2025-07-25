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
      solution: "Implemented Terraform-based Infrastructure as Code with modular design, automated state management, and standardized deployment pipelines.",
      github: "https://github.com/vaibhav21soni"
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
      solution: "Deployed Apache Kafka on Kubernetes with ZooKeeper coordination, implementing persistent storage and automated failover mechanisms.",
      github: "https://github.com/vaibhav21soni"
    },
    {
      id: 3,
      title: "Docker Container Customization",
      category: "Containerization",
      description: "Designed and built a custom Docker image for FreePBX with embedded Asterisk-9 server for specific client requirements.",
      technologies: ["Docker", "FreePBX", "Asterisk-9", "Private Registry"],
      achievements: [
        "Customized Asterisk configurations for advanced client needs",
        "Pushed customized Docker image to private registry",
        "Enabled consistent rollouts across environments",
        "Streamlined deployment process for communication infrastructure"
      ],
      icon: "🐳",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "AWS Infrastructure Automation",
      category: "CI/CD & Automation",
      description: "Provisioned and managed scalable AWS infrastructure using Terragrunt with CI/CD best practices.",
      technologies: ["AWS", "Terragrunt", "Bitbucket CI/CD", "Organizations", "SSO", "EC2"],
      achievements: [
        "Automated end-to-end infrastructure deployments",
        "Implemented structured code review process",
        "Enhanced cloud environment resilience with modular architecture",
        "Managed 6 AWS accounts using AWS Organizations"
      ],
      icon: "⚡",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Automation",
      category: "Current Project",
      description: "Currently contributing to cloud infrastructure automation and deployment optimization at Inexture Solutions.",
      technologies: ["Kubernetes", "Cloud-native", "Scalable Architecture"],
      achievements: [
        "Implementing modern DevOps practices for enterprise clients",
        "Optimizing deployment workflows",
        "Designing scalable cloud infrastructure",
        "Contributing to DevOps best practices"
      ],
      icon: "🔧",
      gradient: "from-indigo-500 to-purple-500"
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
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 bg-pattern"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Featured Projects"
            secondHeading="Real-world DevOps projects showcasing infrastructure automation and cloud expertise"
          />
        </AnimatedWrapper>

        {/* Category Filter */}
        <AnimatedWrapper delay={0.2}>
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' 
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedWrapper key={project.id} delay={0.1 * index} animateFrom="bottom">
              <div className="project-card h-full">
                <div className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {project.title}
                        </h3>
                        <span className="tech-badge">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-cyan-500 mt-1">✓</span>
                          <span>{achievement}</span>
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
                    className="mt-auto group flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRightLong className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Project Stats */}
        <AnimatedWrapper delay={0.5}>
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl border border-cyan-200/50 dark:border-cyan-800/50">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                240+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Azure Resources Migrated
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                70%
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Code Duplication Reduced
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/50 dark:border-green-800/50">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                6
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                AWS Accounts Managed
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-200/50 dark:border-orange-800/50">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                100%
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Project Success Rate
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Call to Action */}
        <AnimatedWrapper delay={0.6}>
          <div className="mt-16 text-center">
            <div className="content-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in My Work?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always excited to discuss new projects and opportunities. 
                Let's connect and explore how I can help with your DevOps initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Let's Collaborate</span>
                  <span>🚀</span>
                </a>
                <a
                  href="https://github.com/vaibhav21soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <span>View GitHub</span>
                  <Code className="w-4 h-4" />
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
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>
                    <span className="tech-badge">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
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

                {/* Project Links */}
                {selectedProject.github && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Links</h3>
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <Code className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary inline-flex items-center gap-2"
                        >
                          <Link className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Technical Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {selectedProject.challenge || "Complex infrastructure requirements needed automation and scalability improvements."}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {selectedProject.solution || "Implemented modern DevOps practices with Infrastructure as Code and automated deployment pipelines."}
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
  );
};

export default Projects;
