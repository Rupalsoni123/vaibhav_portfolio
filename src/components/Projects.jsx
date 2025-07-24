import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import personalProjects from "../data/projects";
import GridLayout from "./GridLayout";
import AnimatedWrapper from "./ui/AnimatedWrapper";

// Define project categories based on technologies used
const getCategories = () => {
  const categories = new Set();
  personalProjects.forEach(project => {
    // Extract categories from project description or add your own categorization logic
    if (project.description.toLowerCase().includes('aws')) categories.add('AWS');
    if (project.description.toLowerCase().includes('terraform')) categories.add('Terraform');
    if (project.description.toLowerCase().includes('kubernetes') || project.description.toLowerCase().includes('k8s')) categories.add('Kubernetes');
    if (project.description.toLowerCase().includes('docker')) categories.add('Docker');
    if (project.description.toLowerCase().includes('ci/cd') || project.description.toLowerCase().includes('pipeline')) categories.add('CI/CD');
    // Add more category extraction logic as needed
  });
  return ['All', ...Array.from(categories)];
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(personalProjects);
  const categories = getCategories();

  // Filter projects based on search term and active category
  useEffect(() => {
    const results = personalProjects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || 
                             (activeCategory === 'AWS' && project.description.toLowerCase().includes('aws')) ||
                             (activeCategory === 'Terraform' && project.description.toLowerCase().includes('terraform')) ||
                             (activeCategory === 'Kubernetes' && (project.description.toLowerCase().includes('kubernetes') || project.description.toLowerCase().includes('k8s'))) ||
                             (activeCategory === 'Docker' && project.description.toLowerCase().includes('docker')) ||
                             (activeCategory === 'CI/CD' && (project.description.toLowerCase().includes('ci/cd') || project.description.toLowerCase().includes('pipeline')));
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(results);
  }, [searchTerm, activeCategory]);

  return (
    <div
      name="Projects"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-white via-white to-gray-200 dark:from-black dark:via-black dark:to-gray-800 text-gray-900 dark:text-white"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Projects"
            secondHeading="Check Out Some of my work"
          />
        </AnimatedWrapper>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              {searchTerm && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeCategory === category 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3 gap-2">
            {filteredProjects.map((project, i) => (
              <AnimatedWrapper
                key={project.name}
                animateFrom="bottom"
                delay={0.2 * (i % 3)}
              >
                <Project key={project.name} project={project} />
              </AnimatedWrapper>
            ))}
          </GridLayout>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
              className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

