import React, { useState, useEffect } from 'react';
import { useOS } from '../OSContext';
import Dock from '../Dock';

const ActivitiesOverview = () => {
  const { windows, isOverviewOpen, toggleOverview, focusWindow, APP_REGISTRY, openWindow } = useOS();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOverviewOpen) toggleOverview();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOverviewOpen, toggleOverview]);

  if (!isOverviewOpen) return null;

  const filteredApps = Object.entries(APP_REGISTRY).filter(([id, app]) => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="os-overview select-none" onClick={toggleOverview}>
      {/* Search Header */}
      <div className="os-overview__search" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center mb-6">
           <div className="w-16 h-16 rounded-full bg-white/5 p-1 border border-white/10 ring-4 ring-white/5 animate-glow">
              <img src="/images/caricature.png" alt="Vaibhav" className="w-full h-full object-cover rounded-full" />
           </div>
        </div>
        <input 
          autoFocus
          className="os-overview__search-input"
          placeholder="Search apps or windows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Grid of Windows and Apps */}
      <div className="os-overview__grid">
        {windows.length > 0 && (
           <div className="col-span-full border-b border-white/5 pb-2 mb-4">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[3px]">Running Applications</span>
           </div>
        )}
        
        {windows.map(win => (
          <div 
            key={win.id} 
            className="os-overview__item group"
            onClick={() => { focusWindow(win.id); toggleOverview(); }}
          >
            <div className="os-overview__window-preview flex flex-col items-center justify-center gap-2">
               <div className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity">🪟</div>
               <span className="text-[9px] font-bold text-gray-500 uppercase">Window</span>
            </div>
            <div className="os-overview__window-title">{win.title}</div>
          </div>
        ))}

        <div className="col-span-full border-b border-white/5 pb-2 mt-8 mb-4">
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[3px]">System Applications</span>
        </div>

        {filteredApps.map(([id, app]) => (
          <div 
            key={id} 
            className="os-overview__item group"
            onClick={() => { openWindow(id); toggleOverview(); }}
          >
            <div className="os-overview__window-preview bg-white/5 flex flex-col items-center justify-center gap-1">
               <span className="text-2xl group-hover:scale-110 transition-transform">🚀</span>
               <span className="text-[8px] font-bold text-gray-600 uppercase">App Launcher</span>
            </div>
            <div className="os-overview__window-title">{app.title}</div>
          </div>
        ))}
      </div>

      {/* FOOTER DOCK (GNOME 40+ Style) */}
      <div onClick={(e) => e.stopPropagation()}>
        <Dock />
      </div>
    </div>
  );
};

export default ActivitiesOverview;
