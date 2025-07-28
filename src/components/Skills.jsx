import React, { useState } from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import skills from "../data/skills";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Cloud Platforms", "DevOps Tools", "Programming", "Databases", "Monitoring"];
  
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const skillStats = [
    { 
      label: "TECHNOLOGIES", 
      value: "20+", 
      icon: "⚙️", 
      description: "DevOps Tools & Platforms",
      status: "LOADED"
    },
    { 
      label: "CLOUD_PLATFORMS", 
      value: "03", 
      icon: "☁️", 
      description: "AWS, Azure, DigitalOcean",
      status: "ACTIVE"
    },
    { 
      label: "LEARNING_TIME", 
      value: "2+ YRS", 
      icon: "📚", 
      description: "Continuous Learning",
      status: "ONGOING"
    },
    { 
      label: "CERTIFICATIONS", 
      value: "03", 
      icon: "🏆", 
      description: "Industry Validated",
      status: "VERIFIED"
    }
  ];

  return (
    <section
      name="Skills"
      className="section-cyber matrix-bg relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Tech Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/10 font-mono text-lg animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['⚙️', '☁️', '🐳', '⚓', '🔧', '📊'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
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
                  <div className="text-neon-blue">$ ./scan_skills.sh --verbose --all</div>
                  <div className="text-neon-green">Scanning technical capabilities...</div>
                  <div className="text-white">Found: {skills.length} skills loaded</div>
                  <div className="text-white">Categories: {categories.length - 1} active</div>
                  <div className="text-neon-green">Status: READY FOR DEPLOYMENT</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Skills Stats */}
        <AnimatedWrapper animation="slide-up" delay={0.4}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                <div className={`font-mono text-xs px-2 py-1 rounded ${
                  stat.status === 'LOADED' ? 'bg-neon-green/20 text-neon-green' :
                  stat.status === 'ACTIVE' ? 'bg-neon-blue/20 text-neon-blue' :
                  stat.status === 'ONGOING' ? 'bg-neon-purple/20 text-neon-purple' :
                  'bg-neon-pink/20 text-neon-pink'
                }`}>
                  [{stat.status}]
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Category Filter */}
        <AnimatedWrapper animation="slide-up" delay={0.6}>
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
                    className={`font-mono text-sm px-4 py-2 rounded border-2 transition-all duration-300 hover:scale-105 ${
                      activeCategory === category 
                        ? 'border-neon-blue bg-neon-blue/20 text-neon-blue shadow-neon-sm' 
                        : 'border-neon-green bg-black text-neon-green hover:border-neon-blue hover:text-neon-blue'
                    }`}
                  >
                    {category === "All" ? "ALL" : category.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Active Filter Display */}
              <div className="mt-4 pt-4 border-t border-neon-green/30">
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
        </AnimatedWrapper>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <AnimatedWrapper 
              key={skill.id} 
              animation="scale-in" 
              delay={0.1 * (index % 8)}
            >
              <div className="skill-card group">
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
                
                {/* Skill Level Text */}
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-xs text-gray-400">PROFICIENCY</span>
                  <span className="font-mono text-xs text-neon-green font-bold">{skill.level || 85}%</span>
                </div>
                
                {/* Skill Description */}
                {skill.description && (
                  <p className="text-gray-400 text-xs leading-relaxed font-mono">
                    {skill.description}
                  </p>
                )}
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Skills Summary */}
        <AnimatedWrapper animation="fade-in" delay={1.0}>
          <div className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto border-2 border-neon-purple">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-purple rounded bg-black flex items-center justify-center">
                  <span className="text-neon-purple font-mono text-sm">∞</span>
                </div>
                <h3 className="neon-text-purple font-cyber text-2xl">CONTINUOUS_LEARNING</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 font-mono text-sm max-w-3xl mx-auto">
                My technical expertise spans across cloud platforms, infrastructure automation, 
                container orchestration, and monitoring solutions. I'm constantly learning new 
                technologies and best practices to stay current with the rapidly evolving DevOps landscape.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="cyber-card p-4 border border-neon-green/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-neon-green">CURRENTLY_LEARNING</span>
                  </div>
                  <div className="font-mono text-white font-bold">GitOps & ArgoCD</div>
                  <div className="font-mono text-xs text-gray-400">Continuous Deployment</div>
                </div>
                
                <div className="cyber-card p-4 border border-neon-blue/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-neon-blue">NEXT_TARGET</span>
                  </div>
                  <div className="font-mono text-white font-bold">Service Mesh & Istio</div>
                  <div className="font-mono text-xs text-gray-400">Microservices Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Skills;

      