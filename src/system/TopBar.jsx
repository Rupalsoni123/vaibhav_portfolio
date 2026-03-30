import React, { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { useOS } from './OSContext';

const AVATAR_URL = "/images/caricature.png";

const GetIcon = ({ name, size = 18, className = "" }) => {
  const Icon = LucideIcons[name] || LucideIcons['Layout'] || LucideIcons['Activity'] || (() => <span>?</span>);
  return <Icon size={size} className={className} strokeWidth={2} />;
};

const CalendarPanel = ({ isOpen }) => {
  if (!isOpen) return null;
  const now = new Date();
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const date = now.getDate();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="absolute top-9 left-1/2 -translate-x-1/2 w-[480px] bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl flex p-6 gap-8 z-[2000] animate-fade-in origin-top">
      <div className="flex-1 space-y-4 text-left">
        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">Notifications</h3>
        <div className="space-y-3 opacity-60">
           <div className="bg-white/5 p-3 rounded-lg border border-white/5">
              <p className="text-[11px] font-bold text-gray-200">System Information</p>
              <p className="text-[10px] text-gray-400">Vaibhav Soni: Software Engineer session.</p>
           </div>
           <p className="text-center py-6 text-[10px] italic text-gray-600">No recent notifications</p>
        </div>
      </div>

      <div className="w-[200px] border-l border-white/5 pl-8 text-center px-4">
        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">{dayName}</p>
        <p className="text-xl font-bold mb-4 tracking-tight">{monthName.split(' ')[0]} {date}</p>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-4 text-gray-200">
          {days.map((d, idx) => <span key={`${d}-${idx}`} className="text-[9px] font-bold text-gray-600">{d}</span>)}
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className={`text-[10px] py-1.5 rounded-full transition-colors ${i + 1 === date ? 'bg-indigo-600 text-white font-bold' : 'text-gray-400 hover:bg-white/5 cursor-pointer'}`}>
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SystemMenu = ({ isOpen }) => {
  const { openWindow, toggleSystemMenu, setBooted } = useOS();
  const menuRef = useRef(null);

  if (!isOpen) return null;

  const MenuItem = ({ iconName, label, onClick, className = "" }) => (
    <button 
      onClick={onClick}
      className={`w-full px-4 py-[7px] flex items-center gap-3 hover:bg-white/[0.08] text-gray-200 rounded-md transition-colors duration-150 ease-out group ${className}`}
    >
      {/* Real Ubuntu Style Icons: gray-400 default */}
      <span className="text-gray-400 group-hover:text-white transition-colors">
        <GetIcon name={iconName} size={18} />
      </span>
      <span className="text-sm font-normal">{label}</span>
    </button>
  );

  return (
    <div 
      ref={menuRef}
      className="absolute top-9 right-2 w-[280px] bg-[#1c1c1e]/95 backdrop-blur-lg border border-white/[0.08] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden z-[3000] animate-fade-in origin-top-right py-2 select-none"
    >
      {/* Profile Section (GNOME Style) */}
      <div className="px-4 py-3 flex items-center gap-3 mb-1 border-b border-white/[0.08]">
         <div className="w-8 h-8 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0 shadow-sm">
            <img src="/images/caricature.png" alt="Profile" className="w-full h-full object-cover" />
         </div>
         <div className="text-left overflow-hidden">
            <p className="text-sm font-medium text-white truncate leading-none mb-1">Vaibhav Soni</p>
            <p className="text-[10px] text-gray-400 font-medium truncate">System Administrator</p>
         </div>
      </div>
      
      {/* Application Actions */}
      <div className="px-1">
        <MenuItem iconName="FileText" label="Open Resume" onClick={(e) => { e.stopPropagation(); toggleSystemMenu(); window.open('/resume/Vaibhav_Soni_Resume.pdf', '_blank'); }} />
        <MenuItem iconName="Linkedin" label="LinkedIn Profile" onClick={(e) => { e.stopPropagation(); toggleSystemMenu(); window.open('https://linkedin.com/in/vaibhavsonii21', '_blank'); }} />
        <MenuItem iconName="Github" label="GitHub Marketplace" onClick={(e) => { e.stopPropagation(); toggleSystemMenu(); window.open('https://github.com/vaibhav21soni', '_blank'); }} />
        <MenuItem iconName="Settings" label="Settings" onClick={(e) => { e.stopPropagation(); toggleSystemMenu(); openWindow('settings'); }} />
      </div>

      <div className="h-[1px] bg-white/[0.08] my-2 mx-1" />

      {/* System Actions */}
      <div className="px-1">
        <MenuItem iconName="RotateCcw" label="Restart System" className="text-gray-400" onClick={() => { 
          toggleSystemMenu();
          window.location.reload(); 
        }} />
        <MenuItem iconName="Power" label="Power Off" className="text-gray-400 hover:text-red-400" onClick={() => { 
          toggleSystemMenu();
          setTimeout(() => setBooted(false), 500);
        }} />
      </div>
    </div>
  );
};

const TopBar = () => {
  const { 
    toggleOverview, 
    toggleCalendar, isCalendarOpen,
    toggleSystemMenu, isSystemMenuOpen 
  } = useOS();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-US', {
    month: 'short', day: 'numeric',
  });
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: false
  });

  return (
    <div className="os-topbar h-8 px-2 flex items-center justify-between bg-black/30 backdrop-blur-md text-gray-200 select-none shadow-sm border-b border-black/10">
      {/* Activities Section */}
      <div className="flex-1 flex items-center h-full">
        <button 
          className="px-3 h-full hover:bg-white/[0.08] transition-colors font-bold text-[13px] tracking-tight"
          onClick={toggleOverview}
        >
          Activities
        </button>
      </div>

      {/* Clock Section */}
      <div className="relative h-full flex items-center">
        <button 
          className={`px-4 h-full transition-colors flex items-center justify-center font-bold text-[13px] tracking-tight ${isCalendarOpen ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'}`}
          onClick={toggleCalendar}
        >
          {formattedDate} {formattedTime}
        </button>
        <CalendarPanel isOpen={isCalendarOpen} />
      </div>

      {/* Status Icons */}
      <div className="flex-1 flex items-center justify-end h-full gap-4">
        <div className="flex items-center gap-3.5 opacity-80 h-full">
          <GetIcon name="Wifi" size={14} className="hover:text-white transition-colors cursor-pointer" />
          <GetIcon name="Volume2" size={14} className="hover:text-white transition-colors cursor-pointer" />
          <div className="rotate-90">
             <GetIcon name="Battery" size={15} className="hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* System Toggle */}
        <div className="relative h-full flex items-center">
          <button 
            className={`flex items-center justify-center gap-2 h-7 px-2 rounded-md transition-all ${isSystemMenuOpen ? 'bg-white/10' : 'hover:bg-white/5'}`}
            onClick={toggleSystemMenu}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10">
              <img src={AVATAR_URL} alt="U" className="w-full h-full object-cover" />
            </div>
            <GetIcon name="ChevronDown" size={12} className={`opacity-40 transition-transform ${isSystemMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          <SystemMenu isOpen={isSystemMenuOpen} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
