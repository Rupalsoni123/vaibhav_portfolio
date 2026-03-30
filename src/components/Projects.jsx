import React, { useState } from "react";
import { Code, ExternalLink, Rocket, Cloud, Server, ChevronRight, Layout, CheckCircle2, Clock } from "lucide-react";
import projectsData from "../data/projects";
import { GitHub as Github } from "./Icons";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0]?.id);

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = activeCategory === "All" ? projectsData : projectsData.filter(p => p.category === activeCategory);
  
  const selectedProject = projectsData.find(p => p.id === selectedProjectId) || projectsData[0];

  const getProjectIcon = (iconName, color = "text-indigo-400") => {
    const iconMap = {
      rocket: <Rocket size={18} className={color} />,
      cloud: <Cloud size={18} className={color} />,
      server: <Server size={18} className={color} />
    };
    return iconMap[iconName] || <Layout size={18} className={color} />;
  };

  return (
    <div className="flex h-full bg-[#1c1c1e] text-gray-100 font-sans select-none overflow-hidden rounded-b-lg">
      
      {/* LEFT PANEL: Project Explorer */}
      <div className="w-[320px] flex-shrink-0 border-r border-black/40 bg-[#1a1a1b] flex flex-col">
        {/* Sidebar Header (Categories) */}
        <div className="p-4 border-b border-black/20">
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Explorer</h2>
          <div className="flex flex-wrap gap-1.5">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2 py-1 rounded text-[9px] font-bold uppercase transition-all border ${
                  activeCategory === cat
                    ? "bg-indigo-600/20 text-indigo-400 border-indigo-500/30"
                    : "bg-white/5 text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProjectId(project.id)}
              className={`group flex flex-col p-3 rounded-md cursor-pointer transition-all border ${
                selectedProjectId === project.id 
                  ? "bg-indigo-600/10 border-indigo-500/20 shadow-sm" 
                  : "bg-transparent border-transparent hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                {getProjectIcon(project.icon, selectedProjectId === project.id ? "text-indigo-400" : "text-gray-500")}
                <span className={`text-[12px] font-bold truncate ${selectedProjectId === project.id ? "text-white" : "text-gray-400 transition-colors group-hover:text-gray-200"}`}>
                  {project.title}
                </span>
              </div>
              <p className="text-[10px] text-gray-600 leading-tight line-clamp-1 pl-[30px]">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: Project Details */}
      <div className="flex-1 flex flex-col bg-[#1c1c1e] overflow-hidden">
        {selectedProject ? (
          <div className="flex flex-col h-full animate-fade-in">
            {/* Detail Header */}
            <div className="p-8 border-b border-black/20 bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded border border-white/5">
                  {selectedProject.status === 'Completed' 
                    ? <CheckCircle2 size={12} className="text-green-500" /> 
                    : <Clock size={12} className="text-yellow-500" />}
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    {selectedProject.status}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter">
                  ID: PRJ-{selectedProject.id.toString().padStart(3, '0')}
                </span>
              </div>

              <h1 className="text-2xl font-black text-white tracking-tight leading-none mb-4">
                {selectedProject.title}
              </h1>
              
              <div className="flex gap-3">
                {selectedProject.github !== undefined && (
                  <button 
                    onClick={() => selectedProject.github && window.open(selectedProject.github, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-[11px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-600/20"
                  >
                    <Github width={14} height={14} /> Open Repository
                  </button>
                )}
                {selectedProject.live && (
                  <button 
                    onClick={() => window.open(selectedProject.live, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-md text-[11px] font-bold border border-white/10 transition-all"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </button>
                )}
              </div>
            </div>

            {/* Detail Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
              {/* Description Section */}
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Overview</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Stack Section */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="px-3 py-1.5 bg-white/5 border border-white/5 rounded text-[11px] text-gray-300 font-bold hover:bg-indigo-600/20 hover:border-indigo-500/30 hover:text-indigo-400 transition-all cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Snapshot (Placeholder Image logic if needed) */}
              <div className="pt-8">
                <div className="w-full aspect-video bg-gradient-to-br from-indigo-900/20 to-black/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                   <div className="relative text-center">
                      <div className="text-4xl mb-2 opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700">🖥️</div>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[4px]">Project Environment</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full opacity-20 flex-col gap-4">
             <Layout size={48} />
             <p className="text-xs font-bold uppercase tracking-widest">Select a project to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
