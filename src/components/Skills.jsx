import React, { useState, useMemo } from "react";
import skills from "../data/skills";

const Skills = () => {
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
    <div className="flex flex-col h-full bg-[#1c1c1e] text-gray-100 font-sans select-none p-6">
      <div className="mb-6 flex flex-col gap-1">
        <h2 className="text-xl font-bold text-gray-100 tracking-tight">Technical Arsenal</h2>
        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">Building, Automating & Operating Cloud-Native Infra</p>
      </div>

      {/* Categories Panel */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#1a1a1b] p-2 rounded-lg border border-black/20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-md text-[10px] font-extrabold uppercase tracking-widest transition-all ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/10"
                : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 pb-8">
          {filteredSkills.map(skill => (
            <div 
              key={skill.id} 
              className="group relative bg-[#2d2d2d] border border-white/5 rounded-lg p-5 flex flex-col items-center gap-4 transition-all hover:bg-[#323232] hover:border-indigo-500/30 hover:-translate-y-1 shadow-sm"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1c1c1e] p-3 text-3xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all">
                {skill.icon || skill.name.charAt(0)}
              </div>
              <div className="text-center">
                <h3 className="text-gray-200 font-bold text-[13px] leading-tight tracking-tight mb-1">{skill.name}</h3>
                <div className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-indigo-500/5 border border-indigo-500/10">
                  {skill.category.split(' ')[0]}
                </div>
              </div>

              {/* Muted Progress Line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-indigo-600/20 w-full rounded-b-lg overflow-hidden">
                 <div className="h-full bg-indigo-600 opacity-60" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
