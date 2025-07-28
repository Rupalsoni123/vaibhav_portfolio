import React, { useState } from "react";
import { Code, Link, ArrowRightLong, Cancel } from "./Icons";
import projectsData from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Get unique categories
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section name="Projects" className="section-cyber matrix-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Project Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green opacity-10 font-mono text-lg animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['🚀', '⚙️', '🔧', '📦', '☁️', '🐳'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="terminal-window max-w-3xl mx-auto">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                projects-showcase.sh
              </div>
            </div>
            <div className="terminal-content">
              <div className="font-mono text-sm space-y-2">
                <div className="text-neon-blue">$ ./deploy_portfolio.sh --showcase</div>
                <div className="text-neon-green">Loading project repositories...</div>
                <div className="text-white">Infrastructure: <span className="text-neon-green">DEPLOYED</span></div>
                <div className="text-white">Applications: <span className="text-neon-green">RUNNING</span></div>
                <div className="text-white">Monitoring: <span className="text-neon-green">ACTIVE</span></div>
                <div className="text-neon-green">All systems operational. Projects ready for review.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="cyber-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                <span className="text-neon-green font-mono text-sm">$</span>
              </div>
              <h3 className="neon-text-blue font-cyber text-xl">PROJECT_CATEGORIES</h3>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-mono text-sm px-4 py-2 rounded border-2 transition-all duration-300 hover:scale-105`}
                  style={{
                    borderColor: activeCategory === category ? '#00d4ff' : '#00ff41',
                    backgroundColor: activeCategory === category ? 'rgba(0, 212, 255, 0.2)' : 'transparent',
                    color: activeCategory === category ? '#00d4ff' : '#00ff41'
                  }}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Active Filter Display */}
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0, 255, 65, 0.3)' }}>
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm text-neon-blue">
                  ACTIVE: <span className="text-neon-green">{activeCategory}</span>
                </div>
                <div className="font-mono text-sm text-gray-400">
                  SHOWING: <span className="text-neon-green">{filteredProjects.length}</span> projects
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group flex flex-col cursor-pointer" 
              onClick={() => {
                setSelectedProject(project);
                setShowModal(true);
              }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6" style={{ minHeight: '80px' }}>
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-neon group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-mono text-lg font-bold mb-2 group-hover:text-neon-green transition-colors duration-300 leading-tight" style={{ minHeight: '48px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {project.title}
                    </h3>
                    <div className="project-badge">
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className={`font-mono text-xs px-2 py-1 rounded flex-shrink-0 ml-2`} style={{ 
                  backgroundColor: project.status === 'DEPLOYED' ? 'rgba(0, 255, 65, 0.2)' :
                  project.status === 'ACTIVE' ? 'rgba(0, 212, 255, 0.2)' :
                  project.status === 'OPTIMIZING' ? 'rgba(191, 0, 255, 0.2)' :
                  'rgba(255, 0, 128, 0.2)',
                  color: project.status === 'DEPLOYED' ? '#00ff41' :
                  project.status === 'ACTIVE' ? '#00d4ff' :
                  project.status === 'OPTIMIZING' ? '#bf00ff' :
                  '#ff0080'
                }}>
                  [{project.status}]
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col">
                {/* Project Description */}
                <div className="mb-6" style={{ minHeight: '60px' }}>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-mono text-sm text-neon-blue mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                    TECH_STACK
                  </h4>
                  <div className="flex flex-wrap gap-2" style={{ minHeight: '60px', alignContent: 'flex-start' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono text-xs text-white px-3 py-1 rounded border hover:border-neon-green hover:text-neon-green transition-colors duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 255, 65, 0.3)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
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

                {/* Impact & View Details */}
                <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: '1px solid rgba(0, 255, 65, 0.3)' }}>
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
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="stat-card group">
            <div className="stat-icon bg-gradient-to-br from-neon-green to-neon-blue text-black group-hover:shadow-neon">
              🚀
            </div>
            <div className="neon-text text-3xl font-bold font-mono mb-2">06+</div>
            <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">PROJECTS</div>
            <div className="text-gray-400 font-mono text-xs">Completed Successfully</div>
          </div>
          
          <div className="stat-card group">
            <div className="stat-icon bg-gradient-to-br from-neon-blue to-neon-purple text-black group-hover:shadow-neon">
              ⚡
            </div>
            <div className="neon-text text-3xl font-bold font-mono mb-2">15+</div>
            <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">TECHNOLOGIES</div>
            <div className="text-gray-400 font-mono text-xs">Tools & Frameworks</div>
          </div>
          
          <div className="stat-card group">
            <div className="stat-icon bg-gradient-to-br from-neon-purple to-neon-pink text-black group-hover:shadow-neon">
              🏆
            </div>
            <div className="neon-text text-3xl font-bold font-mono mb-2">03+</div>
            <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">CERTIFICATIONS</div>
            <div className="text-gray-400 font-mono text-xs">Industry Recognized</div>
          </div>
          
          <div className="stat-card group">
            <div className="stat-icon bg-gradient-to-br from-neon-pink to-neon-green text-black group-hover:shadow-neon">
              📈
            </div>
            <div className="neon-text text-3xl font-bold font-mono mb-2">99%</div>
            <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">UPTIME</div>
            <div className="text-gray-400 font-mono text-xs">System Reliability</div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="cyber-card p-8 text-center mb-16">
          <h3 className="neon-text-blue font-cyber text-2xl mb-6">TECHNOLOGY_STACK</h3>
          <div className="font-mono text-sm text-neon-blue mb-4">$ cat tech_stack.json | jq '.technologies[]'</div>
          <div className="flex flex-wrap justify-center gap-3">
            {['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Python', 'Bash', 'YAML', 'JSON', 'Ansible'].map((tech, index) => (
              <span
                key={index}
                className="font-mono text-xs text-white px-3 py-2 rounded border hover:border-neon-green hover:text-neon-green transition-colors duration-300"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 255, 65, 0.3)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
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
                <span>START_PROJECT.exe</span>
                <span className="text-lg">🚀</span>
              </a>
              <a
                href="tel:+918890944027"
                className="cyber-button-secondary inline-flex items-center gap-2"
              >
                <span>SCHEDULE_CALL.sh</span>
                <span className="text-lg">📞</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="cyber-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-black border-b-2 border-neon-green p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-2xl`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="neon-text font-cyber text-xl">{selectedProject.title}</h2>
                    <div className="project-badge">{selectedProject.category}</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 flex items-center justify-center text-neon-green hover:text-neon-red transition-colors duration-300"
                >
                  <Cancel className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Description */}
                <div>
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">PROJECT_OVERVIEW</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">TECHNOLOGIES_USED</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="font-mono text-xs text-white px-3 py-2 rounded border border-neon-green hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">KEY_ACHIEVEMENTS</h3>
                  <ul className="space-y-3">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-300 font-mono">
                        <span className="text-neon-green mt-1 text-base flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stats */}
                <div>
                  <h3 className="neon-text-blue font-cyber text-lg mb-4">PROJECT_METRICS</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-black/50 rounded border border-neon-green/30">
                      <div className="font-mono text-2xl font-bold text-neon-green mb-1">
                        {selectedProject.id === 1 ? '100%' : 
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
