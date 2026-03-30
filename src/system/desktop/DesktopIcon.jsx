import React, { useRef, useState, useEffect } from 'react';
import { useOS } from '../OSContext';
import * as LucideIcons from 'lucide-react';

const DesktopIcon = ({ appId, icon, label, onContextMenu }) => {
  const { openWindow } = useOS();
  
  // Dynamic Icon Loading (Lucide)
  const Icon = LucideIcons[icon] || LucideIcons['File'];
  const itemRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsSelected(true);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    openWindow(appId);
    setIsSelected(false);
  };

  useEffect(() => {
    const deselect = () => setIsSelected(false);
    document.addEventListener('click', deselect);
    return () => document.removeEventListener('click', deselect);
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSelected(true);
    if (onContextMenu) {
      onContextMenu({
        type: 'icon',
        appId,
        x: Math.min(e.clientX, window.innerWidth - 200),
        y: Math.min(e.clientY, window.innerHeight - 260)
      });
    }
  };

  return (
    <div 
      ref={itemRef}
      className={`os-desktop__icon group w-[80px] flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer transition-all select-none pointer-events-auto ${
        isSelected ? 'bg-white/20 shadow-md ring-1 ring-white/10' : 'hover:bg-white/5'
      }`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleRightClick}
      title={label}
    >
      {/* Icon: 28px as per user request */}
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
        isSelected ? 'bg-white/10' : 'bg-[#1a1a1b]/40 backdrop-blur-md'
      }`}>
        <Icon size={28} className={isSelected ? 'text-white' : 'text-gray-300'} strokeWidth={1.5} />
      </div>

      {/* Label: text-xs */}
      <span className={`text-[10.5px] text-center tracking-tight leading-none drop-shadow-md transition-all font-medium ${
        isSelected ? 'text-white' : 'text-gray-200'
      }`}>
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
