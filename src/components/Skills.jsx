import React, { useState, useMemo } from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import skillsData from "../data/skills";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
      label: "TECHNOLOGIES",
      description: "Tools & Frameworks",
      status: "LOADED"
    },
    {
      icon: "🚀",
      value: "04+",
      label: "CATEGORIES",
      description: "Skill Domains",
      status: "ACTIVE"
    },
    {
      icon: "📈",
      value: "90%",
      label: "PROFICIENCY",
      description: "Average Level",
      status: "ONGOING"
    },
    {
      icon: "🎯",
      value: "03+",
      label: "CERTIFICATIONS",
      description: "Industry Validated",
      status: "VERIFIED"
    }
  ];

  return (
    <section name="Skills" className="section-cyber matrix-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Tech Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green opacity-10 font-mono text-lg animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['⚙️', '🔧', '📦', '☁️', '🐳', '⚡'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="terminal-window max-w-3xl mx-auto">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                skills-inventory.sh
              </div>
            </div>
            <div className="terminal-content">
              <div className="font-mono text-sm space-y-2">
                <div className="text-neon-blue">$ ./scan_skills.sh --verbose</div>
                <div className="text-neon-green">Scanning technical capabilities...</div>
                <div className="text-white">Cloud Platforms: <span className="text-neon-green">LOADED</span></div>
                <div className="text-white">DevOps Tools: <span className="text-neon-green">LOADED</span></div>
                <div className="text-white">Programming: <span className="text-neon-green">LOADED</span></div>
                <div className="text-neon-green">All systems operational. Ready for deployment.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillStats.map((stat, index) => (
            <div key={index} className="stat-card group">
              <div className="stat-icon group-hover:shadow-neon">
                {stat.icon}
              </div>
              <div className="neon-text text-2xl font-bold font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-white font-mono text-xs uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 font-mono text-xs mb-2">
                {stat.description}
              </div>
              <div className={`font-mono text-xs px-2 py-1 rounded`} style={{
                backgroundColor: stat.status === 'LOADED' ? 'rgba(0, 255, 65, 0.2)' :
                stat.status === 'ACTIVE' ? 'rgba(0, 212, 255, 0.2)' :
                stat.status === 'ONGOING' ? 'rgba(191, 0, 255, 0.2)' :
                'rgba(255, 0, 128, 0.2)',
                color: stat.status === 'LOADED' ? '#00ff41' :
                stat.status === 'ACTIVE' ? '#00d4ff' :
                stat.status === 'ONGOING' ? '#bf00ff' :
                '#ff0080'
              }}>
                [{stat.status}]
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="cyber-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                <span className="text-neon-green font-mono text-sm">$</span>
              </div>
              <h3 className="neon-text-blue font-cyber text-xl">FILTER_CATEGORIES</h3>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-mono text-sm px-4 py-2 rounded border-2 transition-all duration-300 hover:scale-105`}
                  style={{
                    borderColor: activeCategory === category ? '#00d4ff' : '#00ff41',
                    backgroundColor: activeCategory === category ? 'rgba(0, 212, 255, 0.2)' : 'transparent',
                    color: activeCategory === category ? '#00d4ff' : '#00ff41'
                  }}
                >
                  {category === "All" ? "ALL" : category.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Active Filter Display */}
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0, 255, 65, 0.3)' }}>
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm text-neon-blue">
                  ACTIVE: <span className="text-neon-green">{activeCategory}</span>
                </div>
                <div className="font-mono text-sm text-gray-400">
                  SHOWING: <span className="text-neon-green">{filteredSkills.length}</span> skills
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div key={skill.id} className="skill-card group">
              {/* Skill Icon */}
              <div className="skill-icon group-hover:scale-110 group-hover:shadow-neon">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-white font-mono text-lg font-bold mb-2 group-hover:text-neon-green transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Skill Category */}
              <div className="project-badge mb-3">
                {skill.category}
              </div>
              
              {/* Skill Level */}
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-neon-green to-neon-blue h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level || 85}%` }}
                ></div>
              </div>
              
              {/* Skill Status */}
              <div className={`font-mono text-xs px-2 py-1 rounded text-center`} style={{
                backgroundColor: skill.status === 'EXPERT' ? 'rgba(0, 255, 65, 0.2)' :
                skill.status === 'ADVANCED' ? 'rgba(0, 212, 255, 0.2)' :
                skill.status === 'INTERMEDIATE' ? 'rgba(191, 0, 255, 0.2)' :
                'rgba(255, 0, 128, 0.2)',
                color: skill.status === 'EXPERT' ? '#00ff41' :
                skill.status === 'ADVANCED' ? '#00d4ff' :
                skill.status === 'INTERMEDIATE' ? '#bf00ff' :
                '#ff0080'
              }}>
                [{skill.status}]
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 text-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-neon-green">CURRENT_FOCUS</span>
            </div>
            <div className="font-mono text-white font-bold mb-2">Cloud-Native DevOps</div>
            <div className="font-mono text-xs text-gray-400">Kubernetes & Microservices</div>
          </div>
          
          <div className="cyber-card p-6 text-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-neon-purple">LEARNING</span>
            </div>
            <div className="font-mono text-white font-bold mb-2">GitOps & ArgoCD</div>
            <div className="font-mono text-xs text-gray-400">Continuous Deployment</div>
          </div>
          
          <div className="cyber-card p-6 text-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-neon-blue">NEXT_TARGET</span>
            </div>
            <div className="font-mono text-white font-bold mb-2">Service Mesh & Istio</div>
            <div className="font-mono text-xs text-gray-400">Microservices Architecture</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
