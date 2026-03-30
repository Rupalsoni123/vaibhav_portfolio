import React from 'react';
import TopBar from './TopBar';
import WindowManager from './WindowManager';
import DesktopHero from './desktop/DesktopHero';
import DesktopIcon from './desktop/DesktopIcon';
import ActivitiesOverview from './desktop/ActivitiesOverview';
import FloatingAssistant from './ai/FloatingAssistant';
import { useOS } from './OSContext';
import { Terminal, Folder, User, RefreshCw, Settings, FolderPlus, Image, Edit2, Trash2, Info } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';

const ContextMenu = ({ type, x, y, onClose, openWindow, appId }) => {
  const handleAction = (action) => {
    onClose();
    action();
  };

  const desktopOptions = [
    { icon: Terminal, label: 'Open Terminal', action: () => openWindow('terminal') },
    { icon: Folder, label: 'Open Projects', action: () => openWindow('projects') },
    { icon: User, label: 'Open About Me', action: () => openWindow('about') },
    { divider: true },
    { icon: RefreshCw, label: 'Refresh', action: () => window.location.reload() },
    { icon: FolderPlus, label: 'New Folder', action: () => console.log('Fake new folder') },
    { icon: Image, label: 'Change Wallpaper', action: () => console.log('Fake wallpaper') },
    { divider: true },
    { icon: Settings, label: 'Settings', action: () => openWindow('settings') }
  ];

  const iconOptions = [
    { icon: Folder, label: 'Open', action: () => openWindow(appId) },
    { icon: Terminal, label: 'Open in Terminal', action: () => openWindow('terminal') },
    { divider: true },
    { icon: Edit2, label: 'Rename', action: () => console.log('Rename icon ' + appId) },
    { icon: Trash2, label: 'Delete', action: () => console.log('Delete icon ' + appId) },
    { divider: true },
    { icon: Info, label: 'Properties', action: () => alert('Properties for ' + appId) }
  ];

  const options = type === 'desktop' ? desktopOptions : iconOptions;

  return (
    <div 
      className="fixed z-[9999] bg-[#1e1e1e]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] w-[200px] py-1 cursor-default"
      style={{ left: x, top: y, animation: 'fadeIn 0.15s ease-out', transformOrigin: 'top left' }}
      onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      {options.map((opt, i) => 
        opt.divider ? (
          <div key={`div-${i}`} className="h-px bg-white/10 my-1 mx-2" />
        ) : (
          <button 
            key={i}
            onClick={(e) => { e.stopPropagation(); handleAction(opt.action); }}
            className="w-full flex items-center gap-3 px-4 py-1.5 text-[13px] text-gray-200 hover:bg-white/10 transition-colors text-left"
          >
            <opt.icon size={16} className="text-gray-400" />
            {opt.label}
          </button>
        )
      )}
    </div>
  );
};


const Desktop = () => {
  const { isOverviewOpen, isCalendarOpen, isSystemMenuOpen, openWindow, settings } = useOS();
  const [contextMenu, setContextMenu] = useState(null);

  const getWallpaper = () => {
    switch(settings.wallpaper) {
      case 'dark': return 'linear-gradient(135deg, #0f172a 0%, #020617 100%)';
      case 'indigo': return 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)';
      case 'glass': return 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)';
      default: return null;
    }
  };
  
  const desktopApps = [
    // Row 1: Identity & Contact
    { id: 'about', label: 'About Me', icon: 'User' },
    { id: 'resume', label: 'Resume', icon: 'FileText' },
    { id: 'contact', label: 'Contact', icon: 'Mail' },
    // Row 2: Portfolio Work
    { id: 'skills', label: 'Skills', icon: 'Cpu' },
    { id: 'projects', label: 'Projects', icon: 'Folder' },
    { id: 'blog', label: 'Blog', icon: 'FileText' },
    // Row 3: Tools & Arcade
    { id: 'terminal', label: 'Terminal', icon: 'Terminal' },
    { id: 'games', label: 'Games', icon: 'Gamepad2' },
    { id: 'settings', label: 'Settings', icon: 'Settings' },
  ];

  const handleDesktopContextMenu = useCallback((e) => {
    e.preventDefault();
    if (e.target.closest('.os-desktop__icon') || e.target.closest('.os-window') || e.target.closest('.os-top-bar')) return;
    const { clientX, clientY } = e;
    setContextMenu({
      type: 'desktop',
      x: Math.min(clientX, window.innerWidth - 200),
      y: Math.min(clientY, window.innerHeight - 260)
    });
  }, []);

  useEffect(() => {
    const handleGlobalClick = () => setContextMenu(null);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setContextMenu(null);
    }
    
    if (contextMenu) {
      document.addEventListener('click', handleGlobalClick);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('click', handleGlobalClick);
        document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [contextMenu]);

  const desktopClasses = [
    'os-desktop',
    isOverviewOpen ? 'os-desktop--zoom' : '',
    (isCalendarOpen || isSystemMenuOpen) ? 'os-desktop--blurred' : '',
    !settings.animations ? 'no-animations' : ''
  ].join(' ');

  const wallpaperStyle = getWallpaper() ? { background: getWallpaper(), animation: 'none' } : {};

  return (
    <div className={desktopClasses} onContextMenu={handleDesktopContextMenu}>
      <div className="os-desktop__wallpaper" style={wallpaperStyle} />
      <div className="os-desktop__vignette" />
      
      {/* 
         CLEAN VERTICAL GRID: 
         Left side stack - primary app launcher
      */}
      <div className="os-desktop__icons-grid relative z-0">
        {desktopApps.map(app => (
          <DesktopIcon 
            key={app.id}
            appId={app.id}
            label={app.label}
            icon={app.icon}
            onContextMenu={setContextMenu}
          />
        ))}
      </div>
      
      <DesktopHero />
      <TopBar />
      
      {/* Dock REMOVED as per user request */}
      
      <WindowManager />
      <ActivitiesOverview />
      
      {/* Re-designed System Assistant */}
      <FloatingAssistant />

      {contextMenu && (
        <ContextMenu
          {...contextMenu}
          onClose={() => setContextMenu(null)}
          openWindow={openWindow}
        />
      )}
    </div>
  );
};

export default Desktop;
