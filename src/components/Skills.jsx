import React, { useState } from "react";
import GridLayout from "./GridLayout";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";
import Skill from "./Skill";
import AnimatedWrapper from "./ui/AnimatedWrapper";

// Define skill categories with icons
const skillCategories = [
  { name: "All", icon: "🚀", count: 0 },
  { name: "Cloud", icon: "☁️", count: 0 },
  { name: "Infrastructure as Code", icon: "🏗️", count: 0 },
  { name: "Containers", icon: "🐳", count: 0 },
  { name: "CI/CD", icon: "⚡", count: 0 },
  { name: "Monitoring", icon: "📊", count: 0 },
  { name: "Databases", icon: "🗄️", count: 0 }
];

// Helper function to determine if a skill belongs to a category
const skillBelongsToCategory = (skill, category) => {
  if (category === "All") return true;
  
  const name = skill.name.toLowerCase();
  
  switch(category) {
    case "Cloud":
      return ["aws", "azure", "digitalocean", "cloud"].some(cloud => name.includes(cloud));
    case "Infrastructure as Code":
      return ["terraform", "terragrunt", "cdk", "cloudformation"].some(iac => name.includes(iac));
    case "Containers":
      return ["docker", "kubernetes", "helm", "container"].some(container => name.includes(container));
    case "CI/CD":
      return ["actions", "gitlab", "jenkins", "bitbucket", "pipeline", "ci", "cd"].some(cicd => name.includes(cicd));
    case "Monitoring":
      return ["grafana", "prometheus", "elk", "cloudwatch", "monitor", "observability"].some(monitoring => name.includes(monitoring));
    case "Databases":
      return ["sql", "mongo", "redis", "postgres", "mysql", "database"].some(db => name.includes(db));
    default:
      return false;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Calculate counts for each category
  const categoriesWithCounts = skillCategories.map(category => ({
    ...category,
    count: category.name === "All" ? skills.length : skills.filter(skill => skillBelongsToCategory(skill, category.name)).length
  }));
  
  const filteredSkills = skills.filter(skill => skillBelongsToCategory(skill, activeCategory));

  return (
    <div
      name="Skills"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 bg-pattern"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Technical Skills"
            secondHeading="Technologies and tools I use to build scalable infrastructure"
          />
        </AnimatedWrapper>

        {/* Enhanced Category Filter */}
        <AnimatedWrapper delay={0.2}>
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categoriesWithCounts.map(category => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    activeCategory === category.name 
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-cyan-500/25' 
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800'
                  }`}
                  aria-pressed={activeCategory === category.name}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.name 
                        ? 'bg-white/20 text-white' 
                        : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeCategory === category.name && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Skills Grid */}
        <AnimatedWrapper delay={0.3}>
          <div className="content-card">
            <div className="flex items-center justify-between mb-8">
              <h3 className="section-heading text-2xl">
                {activeCategory} Technologies
                <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-3">
                  ({filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'})
                </span>
              </h3>
              
              {activeCategory !== "All" && (
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors duration-300"
                  aria-label="Show all skills"
                >
                  View All →
                </button>
              )}
            </div>
            
            <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
              {filteredSkills.map((skill, i) => (
                <AnimatedWrapper
                  key={skill.name}
                  animateFrom="bottom"
                  delay={0.05 * (i % 8)}
                >
                  <div className="skill-card group">
                    <Skill skill={skill} />
                  </div>
                </AnimatedWrapper>
              ))}
            </GridLayout>
          </div>
        </AnimatedWrapper>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <AnimatedWrapper delay={0.4}>
            <div className="text-center py-16 content-card">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                No skills found in this category
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try selecting a different category or view all skills.
              </p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="btn-primary"
                aria-label="Show all skills"
              >
                Show All Skills
              </button>
            </div>
          </AnimatedWrapper>
        )}

        {/* Skills Summary */}
        <AnimatedWrapper delay={0.5}>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl border border-cyan-200/50 dark:border-cyan-800/50">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {skills.length}+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Technologies Mastered
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                3
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Industry Certifications
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/50 dark:border-green-800/50">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                2+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Skills;




