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
    { label: "Technologies", value: "20+", icon: "⚙️", description: "DevOps Tools & Platforms" },
    { label: "Cloud Platforms", value: "3", icon: "☁️", description: "AWS, Azure, DigitalOcean" },
    { label: "Years Learning", value: "2+", icon: "📚", description: "Continuous Learning Journey" },
    { label: "Certifications", value: "3", icon: "🏆", description: "Industry Certifications" }
  ];

  return (
    <div
      name="Skills"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom section-padding">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <AnimatedWrapper>
              <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full shadow-lg mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm text-green-700 dark:text-green-300">Technical Skills</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow mb-8">
                Technologies &{" "}
                <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
                Comprehensive skill set in modern DevOps tools, cloud platforms, and automation technologies
              </p>
            </AnimatedWrapper>
          </div>

          {/* Skills Stats */}
          <AnimatedWrapper delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {skillStats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-purple-600/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative card-gradient p-6 rounded-2xl text-center hover:scale-105 transform transition-all duration-300">
                    <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-2">{stat.label}</div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-500">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Category Filter */}
          <AnimatedWrapper delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => (
              <AnimatedWrapper key={skill.id} delay={0.1 * (index % 8)} animateFrom="bottom">
                <div className="skill-card group">
                  <div className="card-gradient p-6 rounded-2xl hover:scale-105 hover:-translate-y-2 transform transition-all duration-300">
                    
                    {/* Skill icon */}
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    
                    {/* Skill name */}
                    <h3 className="text-lg font-bold text-secondary-800 dark:text-white text-center mb-2 group-hover:text-gradient transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Skill category */}
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 text-center mb-4">
                      {skill.category}
                    </p>
                    
                    {/* Skill level */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-secondary-700 dark:text-secondary-300">Proficiency</span>
                        <span className="text-xs font-bold text-gradient">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Skills Summary */}
          <AnimatedWrapper delay={0.8}>
            <div className="mt-20 card-gradient p-12 rounded-3xl text-center border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-3xl font-bold text-gradient mb-6">
                Continuous Learning Journey
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies in the DevOps ecosystem. 
                My goal is to build robust, scalable, and efficient infrastructure solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Let's Collaborate</span>
                </a>
                <a
                  href="https://github.com/vaibhav21soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-3"
                >
                  <span>View Projects</span>
                  <span className="text-lg">🚀</span>
                </a>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
