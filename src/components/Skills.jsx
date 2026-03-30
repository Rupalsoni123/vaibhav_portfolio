import React, { useState, useMemo } from "react";
import { useOS } from "../system/OSContext";
import skills from "../data/skills";

const Skills = () => {
  const { isOverviewOpen } = useOS();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(skills.map(s => s.category))];
    return ["All", ...uniqueCategories];
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col h-full bg-[#1c1c1e] text-gray-100 font-sans select-none overflow-hidden sm:rounded-b-xl">
      {/* Header - Ubuntu Inspired */}
      <div className="px-8 py-10 bg-[#1a1a1b] border-b border-black/40">
        <h2 className="text-2xl font-black text-white tracking-tight leading-none mb-3">Technical Arsenal</h2>
        <div className="flex items-center gap-3">
           <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Building, Automating & Operating Cloud-Native Infra</p>
        </div>
      </div>

      {/* Categories Toolbar - Ubuntu breadcrumb style */}
      <div className="px-6 py-4 bg-[#1e1e1f] border-b border-black/20 flex items-center gap-2 overflow-x-auto custom-scrollbar no-scrollbar scroll-smooth">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-[11px] font-bold transition-all border ${
              activeCategory === cat
                ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20"
                : "text-gray-500 bg-white/5 border-transparent hover:bg-white/10 hover:text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Content - Humanized Design */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#1c1c1e]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-12">
          {filteredSkills.map(skill => (
            <div 
              key={skill.id} 
              className="group relative bg-[#252526] border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-5 transition-all hover:bg-[#2a2a2b] hover:border-indigo-500/30 hover:-translate-y-2 shadow-xl shadow-black/20"
            >
              {/* Original Icon - Preserved but re-styled */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#1c1c1e] text-4xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                <span className="filter group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                   {skill.icon || skill.name.charAt(0)}
                </span>
              </div>

              <div className="text-center w-full">
                <h3 className="text-white font-bold text-[14px] leading-tight tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </h3>
                <div className="inline-block text-[9px] text-gray-500 font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/20 border border-white/5">
                  {skill.category.split(' ')[0]}
                </div>
              </div>

              {/* Sophisticated Level Indicator */}
              <div className="w-full mt-2 h-1 bg-black/40 rounded-full overflow-hidden border border-white/5">
                 <div 
                   className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 transition-all duration-1000 ease-out" 
                   style={{ width: isOverviewOpen ? '0%' : `${skill.level}%` }} 
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
