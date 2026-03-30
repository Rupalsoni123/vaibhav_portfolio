import React from 'react';
import { useOS } from '../OSContext';

const DOCK_ITEMS = [
  { id: 'filemanager', icon: '📁', label: 'Files', appId: 'filemanager' },
  { id: 'terminal', icon: '⌨️', label: 'Terminal', appId: 'terminal' },
  { id: 'projects', icon: '📂', label: 'Projects', appId: 'projects' },
  { id: 'ai', icon: '🤖', label: 'AI Assistant', appId: 'ai' },
  { id: 'games', icon: '🎮', label: 'Arcade', appId: 'games' },
  { id: 'settings', icon: '⚙️', label: 'Settings', appId: 'settings' },
];

const Dock = () => {
  const { openWindow, windows } = useOS();

  return (
    <div className="os-dock">
      {DOCK_ITEMS.map(item => {
        const isOpen = windows.some(w => w.appId === item.appId && !w.minimized);
        return (
          <button
            key={item.id}
            className={`dock-item ${isOpen ? 'active' : ''}`}
            onClick={() => openWindow(item.appId)}
            title={item.label}
          >
            <span className="dock-item-icon">{item.icon}</span>
            {isOpen && <div className="dock-item-indicator"></div>}
          </button>
        );
      })}

      <div className="dock-separator"></div>

      {/* Show minimized windows */}
      {windows.filter(w => w.minimized).map(w => (
        <button
          key={w.id}
          className="dock-item minimized"
          onClick={() => {
            const { restoreWindow } = useOS();
          }}
          title={w.title}
        >
          <span className="dock-item-icon">{w.icon}</span>
          <div className="dock-item-indicator minimized-indicator"></div>
        </button>
      ))}
    </div>
  );
};

export default Dock;
