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
    { label: "Technologies", value: "20+", icon: "⚙️", description: "DevOps Tools & Platforms", color: "from-blue-500 to-cyan-500" },
    { label: "Cloud Platforms", value: "3", icon: "☁️", description: "AWS, Azure, DigitalOcean", color: "from-orange-500 to-red-500" },
    { label: "Years Learning", value: "2+", icon: "📚", description: "Continuous Learning Journey", color: "from-green-500 to-emerald-500" },
    { label: "Certifications", value: "3", icon: "🏆", description: "Industry Certifications", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section
      name="Skills"
      className="section-padding bg-secondary-50 dark:bg-secondary-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise in modern DevOps tools, cloud platforms, and automation technologies
            </p>
          </div>
        </AnimatedWrapper>

        {/* Skills Stats */}
        <AnimatedWrapper animation="slide-up" delay={0.4}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className={`stat-icon bg-gradient-to-br ${stat.color} text-white`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-secondary-800 dark:text-secondary-200 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-secondary-500 dark:text-secondary-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Category Filter */}
        <AnimatedWrapper animation="slide-up" delay={0.6}>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === category 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <AnimatedWrapper 
              key={skill.id} 
              animation="scale-in" 
              delay={0.1 * (index % 8)}
            >
              <div className="skill-card">
                {/* Skill Icon */}
                <div className="skill-icon bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
                  {skill.name}
                </h3>
                
                {/* Skill Category */}
                <div className="project-badge mb-3">
                  {skill.category}
                </div>
                
                {/* Skill Level */}
                <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level || 85}%` }}
                  ></div>
                </div>
                
                {/* Skill Description */}
                {skill.description && (
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Skills Summary */}
        <AnimatedWrapper animation="fade-in" delay={1.0}>
          <div className="mt-16 text-center">
            <div className="card-modern p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-secondary-800 dark:text-secondary-200 mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                My technical expertise spans across cloud platforms, infrastructure automation, 
                container orchestration, and monitoring solutions. I'm constantly learning new 
                technologies and best practices to stay current with the rapidly evolving DevOps landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Currently Learning: <strong className="text-primary-600 dark:text-primary-400">GitOps & ArgoCD</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span>Next Focus: <strong className="text-accent-600 dark:text-accent-400">Service Mesh & Istio</strong></span>
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

      