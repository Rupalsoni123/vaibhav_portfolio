import React, { useState, useMemo } from "react";
import skillsData from "../data/skills";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Get unique categories from skills data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(skillsData.map(skill => skill.category))];
    return ["All", ...uniqueCategories];
  }, []);

  // Filter skills based on active category
  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skillsData;
    }
    return skillsData.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const skillStats = [
    {
      icon: "⚡",
      value: "25+",
      label: "Technologies",
      description: "Tools & Frameworks",
      color: "var(--primary-blue)"
    },
    {
      icon: "🚀",
      value: "4+",
      label: "Categories",
      description: "Skill Domains",
      color: "var(--primary-purple)"
    },
    {
      icon: "📈",
      value: "90%",
      label: "Proficiency",
      description: "Average Level",
      color: "var(--primary-teal)"
    },
    {
      icon: "🎯",
      value: "3+",
      label: "Certifications",
      description: "Industry Validated",
      color: "var(--accent-pink)"
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
            💻 Technical Expertise
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            A comprehensive toolkit of modern technologies and frameworks that power 
            scalable, reliable infrastructure and seamless development workflows.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid-responsive" style={{ marginBottom: '4rem' }}>
          {skillStats.map((stat, index) => (
            <div
              key={index}
              className="card animate-scale-in"
              style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                animationDelay: `${index * 0.1}s`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${stat.color}, transparent)`,
                opacity: 0.8
              }} />
              
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                {stat.icon}
              </div>
              <div className="heading-md text-gradient" style={{ marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-tertiary)'
              }}>
                {stat.description}
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
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
                border: 'none',
                background: activeCategory === category 
                  ? 'var(--gradient-primary)' 
                  : 'var(--card-bg)',
                color: activeCategory === category 
                  ? 'white' 
                  : 'var(--text-secondary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === category 
                  ? 'var(--shadow-md)' 
                  : 'none',
                border: activeCategory === category 
                  ? 'none' 
                  : '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--primary-blue)';
                  e.target.style.color = 'var(--primary-blue)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id || index}
              className="card animate-fade-in-up"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                animationDelay: `${index * 0.05}s`,
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredSkill === skill.name ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredSkill === skill.name ? 'var(--shadow-xl)' : 'var(--shadow-md)'
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Icon/Logo */}
              <div style={{
                width: '4rem',
                height: '4rem',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--border-radius-lg)',
                background: hoveredSkill === skill.name 
                  ? 'var(--gradient-primary)' 
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

              {/* Skill Level */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Proficiency
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--primary-blue)'
                  }}>
                    {skill.level || '90%'}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '4px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: skill.level || '90%',
                    height: '100%',
                    background: hoveredSkill === skill.name 
                      ? 'var(--gradient-primary)' 
                      : 'var(--primary-blue)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    animation: hoveredSkill === skill.name ? 'pulse 1s ease-in-out infinite' : 'none'
                  }} />
                </div>
              </div>

              {/* Category Badge */}
              <div className={`badge ${
                skill.category === 'Cloud Platforms' ? 'badge-primary' :
                skill.category === 'Containers' ? 'badge-secondary' :
                skill.category === 'CI/CD' ? 'badge-accent' : 'badge-primary'
              }`} style={{ fontSize: '0.6875rem' }}>
                {skill.category}
              </div>

              {/* Hover Effect Overlay */}
              {hoveredSkill === skill.name && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(124, 58, 237, 0.05))',
                  pointerEvents: 'none',
                  borderRadius: 'var(--border-radius-lg)'
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem 2rem',
          background: 'var(--gradient-primary)',
          borderRadius: 'var(--border-radius-xl)',
          color: 'white'
        }}>
          <h3 className="heading-md" style={{ marginBottom: '1rem', color: 'white' }}>
            Ready to Build Something Amazing?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's leverage these technologies to create scalable, reliable infrastructure 
            that powers your next big project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              className="btn"
              style={{
                background: 'white',
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="btn"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                textDecoration: 'none'
              }}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
 