import React, { useState } from "react";
import { Code, Link, ArrowRightLong, Cancel } from "./Icons";
import projectsData from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const projectStats = [
    {
      icon: "🚀",
      value: "4+",
      label: "Projects",
      description: "Successfully Deployed"
    },
    {
      icon: "⚙️",
      value: "15+",
      label: "Technologies",
      description: "Tools & Frameworks"
    },
    {
      icon: "☁️",
      value: "3+",
      label: "Cloud Platforms",
      description: "AWS, Azure, DigitalOcean"
    },
    {
      icon: "🔧",
      value: "100%",
      label: "Success Rate",
      description: "Project Completion"
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge badge-secondary" style={{ marginBottom: '1rem' }}>
            🚀 Portfolio Showcase
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Featured <span className="text-gradient-secondary">Projects</span>
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Real-world DevOps projects showcasing infrastructure automation, 
            cloud deployments, and CI/CD pipeline implementations.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid-responsive" style={{ marginBottom: '4rem' }}>
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="card animate-scale-in"
              style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                animationDelay: `${index * 0.1}s`,
                background: 'var(--gradient-primary)',
                color: 'white',
                border: 'none'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {stat.icon}
              </div>
              <div className="heading-md" style={{ marginBottom: '0.5rem', color: 'white' }}>
                {stat.value}
              </div>
              <div style={{
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
                border: 'none',
                background: activeCategory === category 
                  ? 'var(--gradient-secondary)' 
                  : 'var(--card-bg)',
                color: activeCategory === category 
                  ? 'white' 
                  : 'var(--text-secondary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === category 
                  ? 'var(--shadow-md)' 
                  : 'none',
                border: activeCategory === category 
                  ? 'none' 
                  : '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--primary-teal)';
                  e.target.style.color = 'var(--primary-teal)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-responsive" style={{ gap: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="card animate-fade-in-up"
              style={{
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                animationDelay: `${index * 0.1}s`,
                transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredProject === project.id ? 'var(--shadow-xl)' : 'var(--shadow-md)'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
            >
              {/* Project Image/Preview */}
              <div style={{
                height: '200px',
                background: project.image 
                  ? `url(${project.image})` 
                  : 'var(--gradient-primary)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {!project.image && (
                  <div style={{
                    fontSize: '3rem',
                    color: 'white',
                    opacity: 0.8
                  }}>
                    {project.icon || '🚀'}
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: hoveredProject === project.id ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                  }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          padding: '0.75rem',
                          background: 'white',
                          borderRadius: '50%',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Code size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          padding: '0.75rem',
                          background: 'white',
                          borderRadius: '50%',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Link size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '1.5rem' }}>
                {/* Category Badge */}
                <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  fontSize: '1.25rem'
                }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.875rem'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies?.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-tertiary)',
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'var(--primary-blue)',
                      color: 'white',
                      borderRadius: 'var(--border-radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary-blue)',
                    background: 'none',
                    border: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.gap = '0.75rem';
                    e.target.style.color = 'var(--primary-purple)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.gap = '0.5rem';
                    e.target.style.color = 'var(--primary-blue)';
                  }}
                >
                  View Details
                  <ArrowRightLong size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem 2rem',
          background: 'var(--card-bg)',
          borderRadius: 'var(--border-radius-xl)',
          border: '1px solid var(--border-color)'
        }}>
          <h3 className="heading-md" style={{ marginBottom: '1rem' }}>
            Have a Project in Mind?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's collaborate to build scalable, reliable infrastructure that powers 
            your next innovative solution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary"
              style={{ 
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Start a Project
            </button>
            <a
              href="https://github.com/vaibhav21soni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ textDecoration: 'none' }}
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          backdropFilter: 'blur(8px)'
        }} onClick={closeModal}>
          <div
            style={{
              background: 'var(--card-bg)',
              borderRadius: 'var(--border-radius-xl)',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: 'var(--shadow-xl)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '2rem 2rem 1rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div>
                  <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
                    {selectedProject.category}
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-tertiary)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--bg-tertiary)';
                    e.target.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'none';
                    e.target.style.color = 'var(--text-tertiary)';
                  }}
                >
                  <Cancel size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                fontSize: '1rem'
              }}>
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  Technologies Used
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {selectedProject.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        borderRadius: 'var(--border-radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ textDecoration: 'none' }}
                  >
                    <Code size={16} />
                    View Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <Link size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
            