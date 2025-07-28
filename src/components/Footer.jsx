import React from 'react';

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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigationLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'DevOps Consultation',
    'Infrastructure Setup',
    'CI/CD Pipeline',
    'Cloud Migration',
    'Monitoring Setup'
  ];

  const technologies = [
    'AWS',
    'Azure',
    'Kubernetes',
    'Docker',
    'Terraform'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vaibhavsonii21',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vaibhav21soni',
      icon: '🐙'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vaibhavsonii21',
      icon: '🐦'
    },
    {
      name: 'Email',
      url: 'mailto:vaibhavsoni5567@gmail.com',
      icon: '📧'
    }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#3b82f6' }}>Vaibhav</span>
              <span style={{ color: 'white' }}>Soni</span>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              DevOps Engineer passionate about building scalable cloud infrastructure, 
              automating workflows, and empowering development teams.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem'
            }}>
              <span>📍</span>
              Ahmedabad, India
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 style={{
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Navigation
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
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
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    padding: '0.25rem 0',
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
          <div>
            <h3 style={{
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Services
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {services.map((service, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={handleContactClick}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    padding: '0.25rem 0',
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
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 style={{
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Technologies
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleNavClick('skills', e)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    padding: '0.25rem 0',
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
                  {tech}
                </button>
              ))}
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
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Connect With Me
            </h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleSocialClick(social.url, e)}
                  title={social.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1.125rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#3b82f6';
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'scale(1)';
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
                e.target.style.color = '#1e293b';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.875rem'
        }}>
          <p>
            © {new Date().getFullYear()} Vaibhav Soni. All rights reserved. 
            Built with React & passion for DevOps.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
