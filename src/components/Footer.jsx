import React from "react";
import { ArrowUp } from "./Icons";
import contactInfo from "../data/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "DevOps Consulting", href: "#contact" },
        { name: "Cloud Infrastructure", href: "#contact" },
        { name: "CI/CD Implementation", href: "#contact" },
        { name: "Automation Solutions", href: "#contact" },
        { name: "Infrastructure as Code", href: "#contact" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "AWS & Azure", href: "#skills" },
        { name: "Kubernetes & Docker", href: "#skills" },
        { name: "Terraform & CDK", href: "#skills" },
        { name: "GitHub Actions", href: "#skills" },
        { name: "Monitoring Tools", href: "#skills" }
      ]
    }
  ];

  const quickStats = [
    { label: "Projects", value: "4+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "3+" },
    { label: "Experience", value: "1+ Year" }
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, var(--primary-blue) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, var(--primary-purple) 0%, transparent 50%)
        `
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          padding: '4rem 0 2rem'
        }}>
          {/* Brand Section */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                background: 'var(--gradient-primary)',
                borderRadius: 'var(--border-radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.25rem',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                V
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1
                }}>
                  Vaibhav Soni
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-tertiary)',
                  margin: 0,
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  DevOps Engineer
                </p>
              </div>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              fontSize: '0.875rem'
            }}>
              Passionate about building scalable, reliable infrastructure that empowers 
              development teams to deliver faster and more efficiently.
            </p>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    background: 'var(--card-bg)',
                    borderRadius: 'var(--border-radius-md)',
                    border: '1px solid var(--border-color)',
                    textAlign: 'center'
                  }}
                >
                  <div className="text-gradient" style={{
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontSize: '0.875rem'
              }}>
                Connect With Me
              </h4>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}>
                {contactInfo.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={link.platform}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      fontSize: '1rem'
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                fontSize: '1rem'
              }}>
                {section.title}
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.25rem 0'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--primary-blue)';
                        e.target.style.paddingLeft = '0.5rem';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.paddingLeft = '0';
                      }}
                    >
                      <span style={{
                        width: '4px',
                        height: '4px',
                        background: 'var(--primary-blue)',
                        borderRadius: '50%',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }} />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div style={{
          padding: '2rem',
          background: 'var(--gradient-primary)',
          borderRadius: 'var(--border-radius-xl)',
          margin: '2rem 0',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Stay Updated
          </h3>
          <p style={{
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Interested in DevOps insights, cloud technologies, and infrastructure best practices? 
            Let's connect and share knowledge!
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://linkedin.com/in/vaibhavsonii21"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: 'white',
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Follow on LinkedIn
            </a>
            <a
              href="https://github.com/vaibhav21soni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                textDecoration: 'none'
              }}
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 0',
          borderTop: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <p style={{
              color: 'var(--text-tertiary)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              © {currentYear} Vaibhav Soni. All rights reserved.
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center'
            }}>
              <span style={{
                color: 'var(--text-tertiary)',
                fontSize: '0.75rem'
              }}>
                Built with React & Modern CSS
              </span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#10b981',
                  borderRadius: '50%',
                  animation: 'pulse 2s ease-in-out infinite'
                }} />
                <span style={{
                  color: 'var(--text-tertiary)',
                  fontSize: '0.75rem'
                }}>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
       