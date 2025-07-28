import React, { useState } from "react";
import { Download, Certificate, Cloud, Server, User, Rocket } from "./Icons";
import resume from "../assets/resume.pdf";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabKey, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Tab clicked:', tabKey);
    setActiveTab(tabKey);
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Download resume clicked');
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Vaibhav_Soni_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Get In Touch clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 

  const journey = [
    {
      year: "2025",
      title: "DevOps Engineer",
      company: "Inexture Solutions",
      description: "Working on cloud infrastructure, CI/CD pipelines, and container orchestration."
    },
    {
      year: "2023",
      title: "Cloud Practitioner",
      company: "AWS Certification",
      description: "Achieved AWS Cloud Practitioner certification, focusing on cloud fundamentals."
    },
    {
      year: "2022",
      title: "System Administrator",
      company: "RHCSA Certification",
      description: "Completed Red Hat Certified System Administrator certification."
    }
  ];

  const certifications = [
    {
      name: "HashiCorp Certified: Terraform Associate (003)",
      issuer: "HashiCorp",
      year: "2024",
      badge: <Certificate size={48} color="#f59e0b" />
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      badge: <Cloud size={48} color="#2563eb" />
    },
    {
      name: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      year: "2022",
      badge: <Server size={48} color="#dc2626" />
    }
  ];

  const tabContent = {
    overview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Professional Summary
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Results-driven DevOps Engineer with 2+ years of hands-on experience in cloud infrastructure automation, containerization, and CI/CD pipeline optimization across AWS, Azure, and DigitalOcean platforms. Proven track record of migrating 240+ Azure resources to Terraform-based Infrastructure as Code, reducing code duplication by 70% through reusable dynamic modules and standardized deployment practices.
            Expert in Kubernetes orchestration and Docker containerization, with experience designing production-grade clusters and custom container solutions for enterprise clients. Skilled in implementing comprehensive DevOps workflows using Terragrunt, GitLab CI/CD, and Bitbucket Pipelines, ensuring consistent and secure deployments across multiple environments.
            Demonstrated expertise in AWS Organizations management, handling 6 AWS accounts with centralized governance, SSO integration, and role-based access control. Proficient in monitoring and observability solutions including Prometheus, Grafana, and ELK Stack for maintaining system reliability and performance.
            Strong foundation in security best practices, implementing IAM policies, secret management, and policy-as-code frameworks to ensure compliance and operational security. Continuously expanding skillset through industry certifications including HashiCorp Terraform Associate, AWS Cloud Practitioner, and pursuing CKA certification.
            Self-driven professional who transitioned from non-CS background to DevOps through practical project experience, certifications, and continuous learning. Currently focused on advancing Kubernetes expertise and AWS CDK with TypeScript to deliver scalable, enterprise-grade cloud-native solutions.
          </p>
        </div>
      </div>
    ),
    
    journey: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {journey.map((item, index) => (
          <div key={index} style={{
            padding: '1.5rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
            borderLeft: '4px solid #2563eb'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.title}</h3>
              <span style={{ 
                background: '#2563eb', 
                color: 'white', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '1rem', 
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {item.year}
              </span>
            </div>
            <div style={{ color: '#2563eb', fontWeight: '500', marginBottom: '0.5rem' }}>
              {item.company}
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    ),
    
    certifications: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem',
        justifyItems: 'center',
        alignItems: 'start'
      }}>
        {certifications.map((cert, index) => (
          <div key={index} style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '1rem',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            width: '100%',
            maxWidth: '350px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            e.target.style.borderColor = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
            e.target.style.borderColor = 'var(--border-color)';
          }}
          >
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1rem' 
              }}>
                {cert.badge}
              </div>
              <h3 style={{ 
                fontWeight: '600', 
                color: 'var(--text-primary)', 
                marginBottom: '1rem',
                fontSize: '1.125rem',
                lineHeight: '1.4'
              }}>
                {cert.name}
              </h3>
            </div>
            <div>
              <div style={{ 
                color: '#2563eb', 
                fontWeight: '600', 
                marginBottom: '0.5rem',
                fontSize: '1rem'
              }}>
                {cert.issuer}
              </div>
              <div style={{ 
                color: 'var(--text-tertiary)', 
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {cert.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section id="about" className="section" style={{
      background: 'var(--bg-secondary)',
      padding: '5rem 0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Get to know more about my background, journey, and certifications in DevOps and cloud technologies.
          </p>
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
            { key: 'overview', label: 'Overview', icon: <User size={16} /> },
            { key: 'journey', label: 'Journey', icon: <Rocket size={16} /> },
            { key: 'certifications', label: 'Certifications', icon: <Certificate size={16} /> }
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={(e) => handleTabClick(tab.key, e)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: activeTab === tab.key 
                  ? 'none' 
                  : '1px solid var(--border-color)',
                background: activeTab === tab.key 
                  ? 'linear-gradient(135deg, #f59e0b, #f97316)' 
                  : 'var(--card-bg)',
                color: activeTab === tab.key 
                  ? 'white' 
                  : 'var(--text-secondary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab.key 
                  ? '0 4px 12px rgba(245, 158, 11, 0.3)' 
                  : 'none',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.borderColor = '#f59e0b';
                  e.target.style.color = '#f59e0b';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
              aria-label={`Switch to ${tab.label} tab`}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {tab.icon}
              </div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ minHeight: '400px', marginBottom: '4rem' }}>
          {tabContent[activeTab]}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'var(--card-bg)',
          borderRadius: '1rem',
          border: '1px solid var(--border-color)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Let's Work Together
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Ready to discuss your next DevOps project or need help with cloud infrastructure?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleDownloadResume}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Download size={16} />
              Download Resume
            </button>
            
            <button
              type="button"
              onClick={handleGetInTouch}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#2563eb',
                border: '2px solid #2563eb',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
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
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .container > div:last-child > div {
            max-width: 100% !important;
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .container > div:last-child > div {
            min-height: 180px !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
    
  );
};

export default About;
