import React, { useState, useMemo } from "react";
import skills from "../data/skills";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Get unique categories from skills data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(skills.map(skill => skill.category))];
    return ["All", ...uniqueCategories];
  }, []);

  // Filter skills based on active category
  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }
    return skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Category clicked:', category);
    setActiveCategory(category);
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

  const handleViewWork = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('View Work clicked');
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "25+", label: "Technologies", description: "Mastered across cloud, containers, and automation" },
    { number: "3", label: "Certifications", description: "AWS, Terraform, and Red Hat validated expertise" },
    { number: "04+", label: "Projects", description: "Successfully deployed and maintained" },
    { number: "24/7", label: "Monitoring", description: "Always ensuring system reliability" }
  ];

  return (
    <section id="skills" className="section" style={{
      background: 'var(--bg-primary)',
      padding: '5rem 0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A comprehensive toolkit of technologies I use to build, deploy, and maintain scalable infrastructure.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="gradient-box">
              <div className="gradient-box-inner" style={{
                textAlign: 'center',
                padding: '2rem 1rem'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  background: 'var(--gradient-primary)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}>
                  {stat.description}
                </div>
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
              type="button"
              onClick={(e) => handleCategoryClick(category, e)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: activeCategory === category 
                  ? 'none' 
                  : '1px solid var(--border-color)',
                background: activeCategory === category 
                  ? 'linear-gradient(135deg, #2563eb, #3b82f6)' 
                  : 'var(--card-bg)',
                color: activeCategory === category 
                  ? 'white' 
                  : 'var(--text-secondary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === category 
                  ? '0 4px 12px rgba(37, 99, 235, 0.3)' 
                  : 'none',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.color = '#2563eb';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)';
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

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              style={{
                padding: '2rem 1rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                e.target.style.borderColor = '#2563eb';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'var(--border-color)';
              }}
            >
              {/* Skill Icon */}
              <div style={{
                width: '4rem',
                height: '4rem',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1rem',
                background: hoveredSkill === skill.name 
                  ? 'linear-gradient(135deg, #2563eb, #3b82f6)' 
                  : 'var(--bg-tertiary)',
                color: hoveredSkill === skill.name ? 'white' : 'var(--text-primary)',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}>
                {skill.icon || skill.name.charAt(0)}
              </div>

              {/* Skill Name */}
              <h3 style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                fontSize: '1rem'
              }}>
                {skill.name}
              </h3>

              {/* Category Badge */}
              <div style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: skill.category === 'Cloud Platforms' ? '#2563eb' :
                           skill.category === 'Containers' ? '#059669' :
                           skill.category === 'CI/CD' ? '#dc2626' :
                           skill.category === 'Monitoring' ? '#7c3aed' :
                           '#f59e0b',
                color: 'white',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {skill.category}
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
            Ready to Build Something Amazing?
          </h3>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
            Let's leverage these technologies to create scalable, reliable infrastructure for your next project.
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
              onClick={handleViewWork}
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
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
