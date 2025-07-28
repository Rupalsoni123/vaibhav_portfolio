import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/Avatars/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const roleSequence = [
    "DevOps Engineer",
    2000,
    "Cloud Architect",
    2000,
    "Infrastructure Specialist",
    2000,
    "Automation Expert",
    2000,
  ];

  const stats = [
    { 
      label: "Experience", 
      value: "1+", 
      unit: "Years",
      description: "Professional Experience"
    },
    { 
      label: "Projects", 
      value: "4+", 
      unit: "Completed",
      description: "Successful Deployments"
    },
    { 
      label: "Certifications", 
      value: "3+", 
      unit: "Earned",
      description: "Industry Certifications"
    },
    { 
      label: "Technologies", 
      value: "15+", 
      unit: "Mastered",
      description: "Tools & Platforms"
    }
  ];

  return (
    <section id="home" className="section-lg" style={{
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--gradient-primary)',
        borderRadius: '50%',
        opacity: '0.1',
        filter: 'blur(100px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'var(--gradient-secondary)',
        borderRadius: '50%',
        opacity: '0.1',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          {/* Content Section */}
          <div className="animate-fade-in-up" style={{ order: 1 }}>
            {/* Status Badge */}
            <div className="badge badge-primary" style={{ marginBottom: '1.5rem' }}>
              🟢 Available for opportunities
            </div>

            {/* Main Heading */}
            <h1 className="heading-xl" style={{ 
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              Hi, I'm{' '}
              <span className="text-gradient">
                Vaibhav Soni
              </span>
            </h1>

            {/* Dynamic Role */}
            <div style={{ 
              marginBottom: '1.5rem',
              minHeight: '3rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <h2 className="heading-md text-gradient-secondary">
                <TypeAnimation
                  sequence={roleSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px'
            }}>
              Passionate about streamlining workflows, embracing cloud-native technologies, 
              and building resilient, scalable infrastructure that empowers development teams 
              to deliver faster and more reliably.
            </p>

            {/* Location & Time */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '2rem',
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
                <span>Ahmedabad, India</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-tertiary)',
                fontSize: '0.875rem'
              }}>
                <span>🕒</span>
                <span>{currentTime.toLocaleTimeString()}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                Get In Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn btn-outline"
                style={{ textDecoration: 'none' }}
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
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
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div className="animate-fade-in-down" style={{ 
            order: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {/* Profile Image */}
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px'
            }}>
              <div style={{
                position: 'absolute',
                inset: '-4px',
                background: 'var(--gradient-primary)',
                borderRadius: '50%',
                padding: '4px'
              }}>
                <img
                  src={Avatar}
                  alt="Vaibhav Soni - DevOps Engineer"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: 'var(--card-bg)'
                  }}
                  className="animate-float"
                />
              </div>
              {/* Floating Elements */}
              <div style={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                width: '60px',
                height: '60px',
                background: 'var(--gradient-accent)',
                borderRadius: '50%',
                opacity: '0.8'
              }} className="animate-float" />
              <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '-15%',
                width: '40px',
                height: '40px',
                background: 'var(--gradient-secondary)',
                borderRadius: '50%',
                opacity: '0.6'
              }} className="animate-float" />
            </div>

            {/* Stats Grid */}
            <div className="grid-2" style={{ width: '100%', maxWidth: '400px' }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card animate-scale-in"
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem 1rem',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="heading-md text-gradient" style={{ marginBottom: '0.5rem' }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.unit}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)'
                  }}>
                    {stat.label}
                  </div>
                </div>
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
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{
              color: 'var(--primary-blue)',
              cursor: 'pointer',
              animation: 'float 2s ease-in-out infinite'
            }}
          >
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
     