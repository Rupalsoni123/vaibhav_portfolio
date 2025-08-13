import React, { useState } from "react";
import { Code, Link, ArrowRightLong, Cancel, Rocket, Cloud, Server } from "./Icons";
import projectsData from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Icon mapping function
  const getProjectIcon = (iconName) => {
    const iconMap = {
      rocket: <Rocket size={24} color="#2563eb" />,
      cloud: <Cloud size={24} color="#2563eb" />,
      server: <Server size={24} color="#2563eb" />
    };
    return iconMap[iconName] || <Rocket size={24} color="#2563eb" />;
  };

  // Get unique categories
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Category clicked:', category);
    setActiveCategory(category);
  };

  const openModal = (project, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Opening modal for project:', project.title);
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Closing modal');
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleStartProject = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Start Project clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewGitHub = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('View GitHub clicked');
    window.open('https://github.com/vaibhav21soni', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section" style={{
      background: 'var(--bg-secondary)',
      padding: '5rem 0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A showcase of DevOps projects, infrastructure automation, and cloud solutions I've built and deployed.
          </p>
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
              type="button"
              onClick={(e) => handleCategoryClick(category, e)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: activeCategory === category 
                  ? 'none' 
                  : '1px solid var(--border-color)',
                background: activeCategory === category 
                  ? 'linear-gradient(135deg, #7c3aed, #8b5cf6)' 
                  : 'var(--card-bg)',
                color: activeCategory === category 
                  ? 'white' 
                  : 'var(--text-secondary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === category 
                  ? '0 4px 12px rgba(124, 58, 237, 0.3)' 
                  : 'none',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = '#7c3aed';
                  e.target.style.color = '#7c3aed';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-elevated"
              style={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={(e) => openModal(project, e)}
            >
              {/* Gradient Border Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: project.category === 'Infrastructure as Code' ? 'var(--gradient-primary)' :
                           project.category === 'Container Orchestration' ? 'var(--gradient-success)' :
                           project.category === 'CI/CD Pipeline' ? 'var(--gradient-secondary)' :
                           project.category === 'Monitoring' ? 'var(--gradient-tertiary)' :
                           'var(--gradient-primary)'
              }} />
              
              {/* Project Header */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div className="tech-tag" style={{
                    background: project.category === 'Infrastructure as Code' ? 'var(--accent-primary)' :
                               project.category === 'Container Orchestration' ? 'var(--accent-success)' :
                               project.category === 'CI/CD Pipeline' ? 'var(--accent-error)' :
                               project.category === 'Monitoring' ? 'var(--accent-secondary)' :
                               'var(--accent-warning)',
                    color: 'white',
                    border: 'none'
                  }}>
                    {project.category}
                  </div>
                  <div style={{ 
                    fontSize: '1.5rem',
                    background: 'var(--bg-tertiary)',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getProjectIcon(project.icon)}
                  </div>
                </div>

                <h3 style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  fontSize: '1.25rem'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag" style={{
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)'
                    }}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'center'
                }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        transform: 'scale(1)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#2563eb';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'var(--bg-tertiary)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      <Code size={16} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        transform: 'scale(1)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#059669';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'var(--bg-tertiary)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      <Link size={16} />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={(e) => openModal(project, e)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)',
                      marginLeft: 'auto'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    View Details
                    <ArrowRightLong size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          borderRadius: '1rem',
          color: 'white'
        }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Have a Project in Mind?
          </h3>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
            Let's discuss how we can build scalable, reliable infrastructure for your next project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleStartProject}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#1e293b',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start a Project
            </button>
            
            <button
              type="button"
              onClick={handleViewGitHub}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#1e293b';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
            backdropFilter: 'blur(8px)'
          }} 
          onClick={closeModal}
        >
          <div
            style={{
              background: 'var(--card-bg)',
              borderRadius: '1rem',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              border: '1px solid var(--border-color)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: '2rem 2rem 1rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div>
                <div style={{
                  padding: '0.25rem 0.75rem',
                  background: selectedProject.category === 'Infrastructure as Code' ? '#2563eb' :
                             selectedProject.category === 'Container Orchestration' ? '#059669' :
                             selectedProject.category === 'CI/CD Pipeline' ? '#dc2626' :
                             selectedProject.category === 'Monitoring' ? '#7c3aed' :
                             '#f59e0b',
                  color: 'white',
                  borderRadius: '1rem',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {selectedProject.category}
                </div>
                <h2 style={{ 
                  fontWeight: '700', 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem',
                  fontSize: '1.5rem'
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {selectedProject.description}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-tertiary)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--bg-tertiary)';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'none';
                  e.target.style.color = 'var(--text-tertiary)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <Cancel size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              {/* Long Description */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  Project Details
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  Technologies Used
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {selectedProject.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        borderRadius: '0.5rem',
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: 'transparent',
                      color: '#2563eb',
                      border: '2px solid #2563eb',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#2563eb';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#2563eb';
                      e.target.style.transform = 'translateY(0)';
                    }}
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, #059669, #10b981)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(5, 150, 105, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
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
