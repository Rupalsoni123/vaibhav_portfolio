import React from 'react';
import { useOS } from '../OSContext';

const ContextMenu = ({ x, y, onClose }) => {
  const { openWindow, osTheme, setOsTheme, setWallpaper, wallpaper } = useOS();

  const handleAction = (action) => {
    action();
    onClose();
  };

  // Adjust position to stay within viewport
  const adjustedX = Math.min(x, window.innerWidth - 220);
  const adjustedY = Math.min(y, window.innerHeight - 320);

  return (
    <div
      className="os-context-menu"
      style={{ left: adjustedX, top: adjustedY }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="context-menu-item" onClick={() => handleAction(() => openWindow('terminal'))}>
        <span className="context-menu-icon">⌨️</span>
        Open Terminal
      </button>
      <button className="context-menu-item" onClick={() => handleAction(() => openWindow('filemanager'))}>
        <span className="context-menu-icon">📁</span>
        Open File Manager
      </button>
      <div className="context-menu-separator"></div>
      <button className="context-menu-item" onClick={() => handleAction(() => setOsTheme(osTheme === 'dark' ? 'light' : 'dark'))}>
        <span className="context-menu-icon">{osTheme === 'dark' ? '☀️' : '🌙'}</span>
        {osTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="context-menu-submenu">
        <button className="context-menu-item">
          <span className="context-menu-icon">🖼️</span>
          Change Wallpaper
          <span className="context-menu-arrow">›</span>
        </button>
        <div className="context-menu-submenu-content">
          <button className={`context-menu-item ${wallpaper === 'cyber' ? 'active' : ''}`} onClick={() => handleAction(() => setWallpaper('cyber'))}>
            Cyber Grid
          </button>
          <button className={`context-menu-item ${wallpaper === 'aurora' ? 'active' : ''}`} onClick={() => handleAction(() => setWallpaper('aurora'))}>
            Aurora
          </button>
          <button className={`context-menu-item ${wallpaper === 'minimal' ? 'active' : ''}`} onClick={() => handleAction(() => setWallpaper('minimal'))}>
            Minimal Dark
          </button>
        </div>
      </div>
      <div className="context-menu-separator"></div>
      <button className="context-menu-item" onClick={() => handleAction(() => window.location.reload())}>
        <span className="context-menu-icon">🔄</span>
        Refresh Desktop
      </button>
      <button className="context-menu-item" onClick={() => handleAction(() => openWindow('settings'))}>
        <span className="context-menu-icon">⚙️</span>
        Display Settings
      </button>
      <div className="context-menu-separator"></div>
      <button className="context-menu-item" onClick={() => handleAction(() => openWindow('about'))}>
        <span className="context-menu-icon">ℹ️</span>
        About This System
      </button>
    </div>
  );
};

export default ContextMenu;
