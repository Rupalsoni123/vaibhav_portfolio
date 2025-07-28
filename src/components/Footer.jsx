import React from 'react';
import LinkedIn, { GitHub, GMail, MapPin } from './Icons';

const Footer = () => {
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Footer nav clicked:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialClick = (url, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Social link clicked:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Contact clicked');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigationLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  const services = [
    'Cloud Infrastructure',
    'DevOps Automation',
    'CI/CD Pipelines',
    'Container Orchestration',
    'Infrastructure as Code',
    'Monitoring & Observability'
  ];

  const technologies = [
    'AWS & Azure',
    'Kubernetes & Docker',
    'Terraform & Ansible',
    'GitHub Actions',
    'Prometheus & Grafana',
    'Linux Administration'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vaibhavsonii21',
      icon: <LinkedIn size={20} />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vaibhav21soni',
      icon: <GitHub size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:vaibhavsoni5567@gmail.com',
      icon: <GMail size={20} />
    }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Matrix Background Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        background: `
          radial-gradient(circle at 20% 50%, #00ff41 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, #00d4ff 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, #bf00ff 0%, transparent 50%)
        `,
        filter: 'blur(40px)'
      }} />

      {/* Floating Terminal Characters */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        fontSize: '12px',
        fontFamily: 'monospace',
        color: '#00ff41',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {['$', '>', '~', '/', '\\', '|', '-', '+'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Scan Lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem 1rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div style={{ maxWidth: '350px' }}>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '1rem',
              letterSpacing: '-0.025em'
            }}>
              <span style={{ color: '#3b82f6' }}>Vaibhav</span>
              <span style={{ color: 'white', marginLeft: '0.25rem' }}>Soni</span>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              DevOps Engineer passionate about building scalable cloud infrastructure, 
              automating workflows, and empowering development teams to deliver faster and more reliably.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}>
              <MapPin size={18} />
              <span>Ahmedabad, India</span>
            </div>
          </div>

          {/* Navigation, Services & Technologies */}
          <div>
            <div style={{
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap'
            }}>
              {/* Navigation */}
              <div style={{ minWidth: '120px' }}>
                <h4 style={{
                  fontWeight: '500',
                  marginBottom: '0.75rem',
                  color: 'white',
                  fontSize: '0.875rem'
                }}>
                  Navigation
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {navigationLinks.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      onClick={(e) => handleNavClick(link.id, e)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textAlign: 'left',
                        padding: '0.2rem 0',
                        transform: 'translateX(0)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#3b82f6';
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div style={{ minWidth: '120px' }}>
                <h4 style={{
                  fontWeight: '500',
                  marginBottom: '0.75rem',
                  color: 'white',
                  fontSize: '0.875rem'
                }}>
                  Services
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {services.map((service, index) => (
                    <span
                      key={index}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.8rem',
                        padding: '0.2rem 0',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#3b82f6';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div style={{ minWidth: '140px' }}>
                <h4 style={{
                  fontWeight: '500',
                  marginBottom: '0.75rem',
                  color: 'white',
                  fontSize: '0.875rem'
                }}>
                  Technologies
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.8rem',
                        padding: '0.2rem 0',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#3b82f6';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          padding: '2rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Social Links */}
          <div>
            <h4 style={{
              fontWeight: '500',
              marginBottom: '1rem',
              color: 'white',
              fontSize: '0.875rem'
            }}>
              Connect With Me
            </h4>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleSocialClick(social.url, e)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#3b82f6';
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleContactClick}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#2563eb';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#3b82f6';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Let's Work Together
            </button>
            
            <button
              type="button"
              onClick={(e) => handleSocialClick('https://github.com/vaibhav21soni', e)}
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
                e.target.style.color = '#0f172a';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View GitHub
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          padding: '2rem 0',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.875rem'
        }}>
          <p style={{ margin: 0 }}>
            © 2024 Vaibhav Soni. All rights reserved. | Built with React & Passion for DevOps
          </p>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          
          .container > div:first-child > div:first-child {
            max-width: 100% !important;
          }
          
          .container > div:first-child > div:nth-child(2) > div {
            flex-direction: column !important;
            gap: 2rem !important;
            text-align: center;
          }
          
          .container > div:first-child > div:nth-child(2) > div > div {
            min-width: auto !important;
          }
          
          .container > div:last-child {
            flex-direction: column !important;
            gap: 1rem !important;
            text-align: center;
          }
          
          .container > div:last-child > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
