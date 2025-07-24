import React, { useState } from "react";
import GridLayout from "./GridLayout";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";
import Skill from "./Skill";
import AnimatedWrapper from "./ui/AnimatedWrapper";

// Define skill categories
const skillCategories = [
  "All",
  "Cloud",
  "Infrastructure as Code",
  "Containers",
  "CI/CD",
  "Monitoring",
  "Databases"
];

// Helper function to determine if a skill belongs to a category
const skillBelongsToCategory = (skill, category) => {
  if (category === "All") return true;
  
  const name = skill.name.toLowerCase();
  
  switch(category) {
    case "Cloud":
      return ["aws", "azure", "digitalocean"].some(cloud => name.includes(cloud));
    case "Infrastructure as Code":
      return ["terraform", "terragrunt", "cdk"].some(iac => name.includes(iac));
    case "Containers":
      return ["docker", "kubernetes", "helm"].some(container => name.includes(container));
    case "CI/CD":
      return ["actions", "gitlab", "jenkins", "bitbucket", "pipeline"].some(cicd => name.includes(cicd));
    case "Monitoring":
      return ["grafana", "prometheus", "elk", "cloudwatch", "monitor"].some(monitoring => name.includes(monitoring));
    case "Databases":
      return ["sql", "mongo", "redis", "postgres", "mysql"].some(db => name.includes(db));
    default:
      return false;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(skill => skillBelongsToCategory(skill, activeCategory));

  return (
    <div
      name="Skills"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b to-white from-white dark:to-gray-800 dark:from-black"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Skills"
            secondHeading="These are the Technologies I've worked with"
          />
        </AnimatedWrapper>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {skillCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-md transition-all duration-300 shadow-sm ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md scale-105' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatedWrapper>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white pl-2 border-l-4 border-cyan-500">
              {activeCategory} Technologies
            </h3>
            <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {filteredSkills.map((skill, i) => (
                <AnimatedWrapper
                  key={skill.name}
                  animateFrom="bottom"
                  delay={0.1 * (i % 6)}
                >
                  <Skill skill={skill} />
                </AnimatedWrapper>
              ))}
            </GridLayout>
          </div>
        </AnimatedWrapper>

        {filteredSkills.length === 0 && (
          <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-xl text-gray-800 dark:text-gray-200 mb-4">No skills found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="btn-primary"
              aria-label="Show all skills"
            >
              Show All Skills
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;




