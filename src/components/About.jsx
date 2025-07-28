import React, { useState } from "react";
import { Download } from "./Icons";
import resume from "../assets/resume.pdf";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const systemInfo = [
    {
      icon: "🏆",
      label: "Certifications",
      value: "3",
      description: "Industry Validated",
      color: "var(--primary-blue)"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Ahmedabad",
      description: "Gujarat, India",
      color: "var(--primary-purple)"
    },
    {
      icon: "⚡",
      label: "Experience",
      value: "1+ Year",
      description: "Professional DevOps",
      color: "var(--primary-teal)"
    },
    {
      icon: "🏢",
      label: "Company",
      value: "Inexture",
      description: "Solutions Pvt Ltd",
      color: "var(--accent-pink)"
    }
  ];

  const certifications = [
    {
      id: "CERT_001",
      name: "HashiCorp Terraform Associate (003)",
      year: "2024",
      status: "Active",
      level: "Associate",
      description: "Infrastructure as Code expertise",
      icon: "🏗️"
    },
    {
      id: "CERT_002", 
      name: "AWS Certified Cloud Practitioner",
      year: "2023",
      status: "Active",
      level: "Foundational",
      description: "AWS cloud fundamentals",
      icon: "☁️"
    },
    {
      id: "CERT_003",
      name: "Red Hat Certified System Administrator",
      year: "2022",
      status: "Active", 
      level: "Professional",
      description: "Linux system administration",
      icon: "🐧"
    }
  ];

  const journey = [
    {
      year: "2024",
      title: "DevOps Engineer",
      company: "Inexture Solutions",
      description: "Leading infrastructure automation and cloud deployments",
      achievements: ["Automated CI/CD pipelines", "Reduced deployment time by 60%", "Managed multi-cloud infrastructure"]
    },
    {
      year: "2023",
      title: "Cloud Practitioner Certification",
      company: "AWS",
      description: "Gained foundational knowledge of AWS cloud services",
      achievements: ["Learned cloud fundamentals", "Understood AWS services", "Prepared for advanced certifications"]
    },
    {
      year: "2022",
      title: "System Administrator",
      company: "Red Hat Certified",
      description: "Mastered Linux system administration and server management",
      achievements: ["Linux server management", "Shell scripting automation", "System monitoring and troubleshooting"]
    }
  ];

  const tabContent = {
    overview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
            Professional Summary
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            fontSize: '1rem'
          }}>
            Results-driven DevOps Engineer with a passion for automating infrastructure, 
            scaling cloud-native applications, and optimizing CI/CD workflows. With hands-on 
            experience across AWS, Azure, Kubernetes, Docker, and Terraform, I bridge the gap 
            between development and operations to deliver reliable, scalable solutions.
          </p>
        </div>
        
        <div>
          <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
            Core Expertise
          </h3>
          <div className="grid-2" style={{ gap: '1rem' }}>
            {[
              "Cloud Infrastructure (AWS, Azure)",
              "Container Orchestration (Kubernetes, Docker)",
              "Infrastructure as Code (Terraform, CDK)",
              "CI/CD Automation (GitHub Actions, GitLab)",
              "Monitoring & Observability (Prometheus, Grafana)",
              "Security & Compliance (IAM, Secret Management)"
            ].map((skill, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--border-radius-md)',
                  color: 'var(--text-primary)'
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--primary-blue)',
                  borderRadius: '50%'
                }} />
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    
    journey: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {journey.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              padding: '2rem',
              position: 'relative',
              borderLeft: '4px solid var(--primary-blue)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
                  {item.year}
                </div>
                <h3 style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--primary-blue)',
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}>
                  {item.company}
                </p>
              </div>
            </div>
            
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              {item.description}
            </p>
            
            <div>
              <h4 style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                fontSize: '0.875rem'
              }}>
                Key Achievements:
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {item.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--primary-teal)',
                      borderRadius: '50%'
                    }} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    ),
    
    certifications: (
      <div className="grid-responsive" style={{ gap: '1.5rem' }}>
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="card animate-scale-in"
            style={{
              padding: '2rem',
              textAlign: 'center',
              animationDelay: `${index * 0.1}s`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'var(--gradient-primary)',
              opacity: 0.05,
              borderRadius: '50%'
            }} />
            
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              {cert.icon}
            </div>
            
            <div className="badge badge-secondary" style={{ marginBottom: '1rem' }}>
              {cert.level}
            </div>
            
            <h3 style={{
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              fontSize: '1.125rem'
            }}>
              {cert.name}
            </h3>
            
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              fontSize: '0.875rem'
            }}>
              {cert.description}
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-color)'
            }}>
              <span style={{
                color: 'var(--text-tertiary)',
                fontSize: '0.875rem'
              }}>
                {cert.year}
              </span>
              <div className="badge badge-accent">
                {cert.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge badge-accent" style={{ marginBottom: '1rem' }}>
            👨‍💻 Get to Know Me
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            About <span className="text-gradient-accent">Vaibhav Soni</span>
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Passionate DevOps Engineer transforming ideas into scalable, 
            reliable infrastructure solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid-responsive" style={{ marginBottom: '4rem' }}>
          {systemInfo.map((info, index) => (
            <div
              key={index}
              className="card animate-fade-in-up"
              style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                animationDelay: `${index * 0.1}s`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: info.color,
                opacity: 0.8
              }} />
              
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                {info.icon}
              </div>
              <div className="heading-sm text-gradient" style={{ marginBottom: '0.5rem' }}>
                {info.value}
              </div>
              <div style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                {info.label}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-tertiary)'
              }}>
                {info.description}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {[
            { key: 'overview', label: 'Overview', icon: '👨‍💻' },
            { key: 'journey', label: 'Journey', icon: '🚀' },
            { key: 'certifications', label: 'Certifications', icon: '🏆' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
                border: 'none',
                background: activeTab === tab.key 
                  ? 'var(--gradient-accent)' 
                  : 'var(--card-bg)',
                color: activeTab === tab.key 
                  ? 'white' 
                  : 'var(--text-secondary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab.key 
                  ? 'var(--shadow-md)' 
                  : 'none',
                border: activeTab === tab.key 
                  ? 'none' 
                  : '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.borderColor = 'var(--accent-pink)';
                  e.target.style.color = 'var(--accent-pink)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in-up" style={{ minHeight: '400px' }}>
          {tabContent[activeTab]}
        </div>

        {/* Call to Action - Made 30% smaller */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem 1.5rem',
          background: 'var(--card-bg)',
          borderRadius: 'var(--border-radius-xl)',
          border: '1px solid var(--border-color)',
          maxWidth: '70%',
          margin: '4rem auto 0'
        }}>
          <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
            Ready to Collaborate?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            maxWidth: '500px',
            margin: '0 auto 1.5rem'
          }}>
            Let's discuss how we can work together to build amazing infrastructure 
            solutions that scale and perform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={resume}
              download="Vaibhav_Soni_Resume.pdf"
              className="btn btn-primary"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
     