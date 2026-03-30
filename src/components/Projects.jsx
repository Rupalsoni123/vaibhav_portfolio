import React, { useState, useEffect } from "react";
import { Code, ExternalLink, Rocket, Cloud, Server, ChevronRight, Layout, CheckCircle2, Clock, Globe, Shield, Terminal } from "lucide-react";
import projectsData from "../data/projects";
import { GitHub as Github } from "./Icons";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0]?.id);
  const [displayProjectId, setDisplayProjectId] = useState(projectsData[0]?.id);
  const [isAnimate, setIsAnimate] = useState(false);

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = activeCategory === "All" ? projectsData : projectsData.filter(p => p.category === activeCategory);
  
  const selectedProject = projectsData.find(p => p.id === displayProjectId) || projectsData[0];

  const handleProjectSelect = (id) => {
    if (id === selectedProjectId) return;
    
    // 1. Kick off exit animation
    setIsAnimate(true);
    setSelectedProjectId(id);
    
    // 2. Wait for fade out, then swap data and trigger fade in
    setTimeout(() => {
      setDisplayProjectId(id);
      setIsAnimate(false);
    }, 400); // Slightly less than CSS duration for overlap
  };

  const getProjectIcon = (iconName, color = "text-indigo-400") => {
    const iconMap = {
      rocket: <Rocket size={20} className={color} />,
      cloud: <Cloud size={20} className={color} />,
      server: <Server size={20} className={color} />,
      shield: <Shield size={20} className={color} />,
      terminal: <Terminal size={20} className={color} />,
      globe: <Globe size={20} className={color} />
    };
    return iconMap[iconName.toLowerCase()] || <Layout size={20} className={color} />;
  };

  return (
    <div className="flex h-full bg-[#1c1c1e] text-gray-100 font-sans select-none overflow-hidden sm:rounded-b-xl border border-black/10">
      
      {/* LEFT PANEL: Ubuntu Dashboard Style */}
      <div className="w-[340px] flex-shrink-0 bg-[#1a1a1b] border-r border-black/40 flex flex-col p-6 lg:p-8">
        <h2 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] mb-6 px-1">Project Registry</h2>
        
        {/* Navigation Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/20"
                  : "bg-white/5 text-gray-600 border border-transparent hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 pr-1">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              onClick={() => handleProjectSelect(project.id)}
              className={`group flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
                selectedProjectId === project.id 
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-[1.02]" 
                  : "bg-white/5 border border-white/5 hover:bg-white/10"
              }`}
            >
              <div className={`p-2.5 rounded-xl ${selectedProjectId === project.id ? "bg-white/20" : "bg-[#111119]"} transition-colors`}>
                {getProjectIcon(project.icon, selectedProjectId === project.id ? "text-white" : "text-indigo-400")}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-[13px] font-bold truncate leading-none mb-1.5 ${selectedProjectId === project.id ? "text-white" : "text-gray-200 group-hover:text-indigo-400 transition-colors"}`}>
                  {project.title}
                </h3>
                <p className={`text-[10px] font-medium uppercase tracking-widest ${selectedProjectId === project.id ? "text-white/60" : "text-gray-600"}`}>
                  {project.category.split(' ')[0]}
                </p>
              </div>
              {selectedProjectId === project.id && (
                 <ChevronRight size={14} className="opacity-60" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: Professional Case Study Detail */}
      <div className="flex-1 flex flex-col bg-[#1c1c1e] overflow-hidden lg:p-4">
        {selectedProject ? (
          <div className={`flex flex-col h-full bg-[#252526] lg:rounded-3xl shadow-2xl border border-white/5 overflow-hidden transition-all duration-400 ease-in-out ${isAnimate ? 'opacity-0 scale-[0.98] translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
            
            {/* Header: Ubuntu Gradient Style */}
            <div className="p-8 lg:p-12 border-b border-black/20 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-500/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  {selectedProject.status === 'Completed' 
                    ? <CheckCircle2 size={12} className="text-emerald-500" /> 
                    : <Clock size={12} className="text-amber-500" />}
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    {selectedProject.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold font-mono">
                  <span className="text-indigo-400 opacity-50">#</span> {selectedProject.id.toString().padStart(3, '0')}
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-8">
                {selectedProject.title}
              </h1>
              
              <div className="flex flex-wrap gap-4">
                {selectedProject.github !== undefined && (
                  <button 
                    onClick={() => selectedProject.github && window.open(selectedProject.github, '_blank')}
                    className="flex items-center gap-3 px-6 py-3 bg-white text-[#1c1c1e] hover:bg-gray-200 rounded-xl text-[12px] font-black transition-all shadow-xl shadow-white/5 active:scale-95"
                  >
                    <Github width={16} height={16} /> REPOSITORY
                  </button>
                )}
                {selectedProject.live && (
                  <button 
                    onClick={() => window.open(selectedProject.live, '_blank')}
                    className="flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[12px] font-black transition-all shadow-2xl shadow-indigo-600/20 active:scale-95"
                  >
                    <ExternalLink size={16} /> VIEW LIVE DEMO
                  </button>
                )}
              </div>
            </div>

            {/* Content: High Fidelity Details */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar space-y-12 bg-[#252526]">
              {/* Mission/Goal */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1 h-5 bg-indigo-500 rounded-full"></div>
                   <h3 className="text-[11px] font-black text-indigo-400 uppercase tracking-widest">Core Mission</h3>
                </div>
                <p className="text-base text-gray-400 leading-relaxed font-medium">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Stack: Styled Bricks */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-3">
                   <Code size={14}/> Integrated Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-[12px] text-gray-300 font-bold hover:bg-indigo-600/20 hover:border-indigo-500/30 hover:text-white transition-all cursor-crosshair text-center uppercase tracking-tighter"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full opacity-10 flex-col gap-6">
             <Rocket size={48} />
             <p className="text-sm font-black uppercase tracking-[0.4em] ml-[0.4em]">Select an Operation</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
