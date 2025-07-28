import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/Avatars/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGetInTouch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Get In Touch clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Contact section not found');
    }
  };

  const handleViewProjects = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('View Projects clicked');
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Projects section not found');
    }
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Download CV clicked');
    // Create download link
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vaibhav_Soni_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Scroll to About clicked');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('About section not found');
    }
  };

  return (
    <section id="home" className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          {/* Content Section */}
          <div className="animate-fade-in-up" style={{
            order: 1,
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius-full)',
              marginBottom: '2rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse 2s infinite'
              }} />
              Available for DevOps opportunities
            </div>

            {/* Main Heading */}
            <h1 className="heading-xl" style={{
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Hi, I'm <span className="text-gradient">Vaibhav Soni</span>
              <br />
              <TypeAnimation
                sequence={[
                  'DevOps Engineer',
                  2000,
                  'Cloud Architect',
                  2000,
                  'Infrastructure Specialist',
                  2000,
                  'Automation Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ 
                  fontSize: 'inherit',
                  color: 'var(--primary-blue)'
                }}
                repeat={Infinity}
              />
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Passionate about building scalable cloud infrastructure, automating workflows, 
              and empowering development teams with reliable DevOps solutions.
            </p>

            {/* Location & Time */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-tertiary)',
                fontSize: '0.875rem'
              }}>
                <span>📍</span>
                Ahmedabad, India
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-tertiary)',
                fontSize: '0.875rem'
              }}>
                <span>🕐</span>
                {currentTime.toLocaleTimeString('en-US', {
                  timeZone: 'Asia/Kolkata',
                  hour12: true,
                  hour: 'numeric',
                  minute: '2-digit'
                })} IST
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button
                type="button"
                onClick={handleGetInTouch}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  transform: 'translateY(0)',
                  boxShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                aria-label="Navigate to contact section"
              >
                Get In Touch
              </button>
              
              <button
                type="button"
                onClick={handleViewProjects}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#2563eb',
                  border: '2px solid #2563eb',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
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
                aria-label="Navigate to projects section"
              >
                View Projects
              </button>
              
              <button
                type="button"
                onClick={handleDownloadCV}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  transform: 'translateY(0)',
                  boxShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(124, 58, 237, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                aria-label="Download resume PDF"
              >
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                color: 'var(--text-tertiary)',
                fontSize: '0.875rem',
                marginRight: '0.5rem'
              }}>
                Connect:
              </span>
              {contactInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.platform}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.color = '#2563eb';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-tertiary)'
          }}>
            Scroll to explore
          </span>
          <button
            type="button"
            onClick={handleScrollToAbout}
            style={{
              color: '#2563eb',
              cursor: 'pointer',
              animation: 'float 2s ease-in-out infinite',
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#1d4ed8';
              e.target.style.transform = 'translateX(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#2563eb';
              e.target.style.transform = 'translateX(-50%) scale(1)';
            }}
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
