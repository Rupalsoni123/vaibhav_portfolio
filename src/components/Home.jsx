import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "./Icons";
import AvatarImage from "../assets/Avatars/Avatars/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
// import FallbackAvatar from "../assets/profile.jpg";
import contactInfo from "../data/contactInfo";
import resume from "../assets/resume.pdf";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [avatarSrc, setAvatarSrc] = useState(AvatarImage);
  const [avatarError, setAvatarError] = useState(false);

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
    link.href = resume;
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
            {/* Avatar */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                position: 'relative',
                width: '180px',
                height: '180px'
              }}>
                <img
                  src={avatarSrc}
                  alt="Vaibhav Soni - DevOps Engineer"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #2563eb',
                    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    background: 'var(--card-bg)',
                    display: avatarError ? 'none' : 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 15px 40px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)';
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = '#2563eb';
                  }}
                  onError={(e) => {
                    console.error('Avatar image failed to load, trying fallback');
                    if (avatarSrc === AvatarImage) {
                      setAvatarSrc(FallbackAvatar);
                    } else {
                      setAvatarError(true);
                      console.error('Both avatar images failed to load');
                    }
                  }}
                  onLoad={() => {
                    console.log('Avatar loaded successfully');
                    setAvatarError(false);
                  }}
                  loading="eager"
                />
                
                {/* Fallback when both images fail */}
                {avatarError && (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '4rem',
                    fontWeight: '700',
                    border: '4px solid #2563eb',
                    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                  }}>
                    VS
                  </div>
                )}
                {/* Decorative ring */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  right: '-8px',
                  bottom: '-8px',
                  borderRadius: '50%',
                  border: '2px solid rgba(59, 130, 246, 0.2)',
                  animation: 'pulse 3s infinite'
                }} />
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default Home;
