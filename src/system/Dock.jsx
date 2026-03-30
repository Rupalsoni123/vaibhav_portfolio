import React from 'react';
import { useOS } from './OSContext';
import * as LucideIcons from 'lucide-react';

const DOCK_ITEMS = [
  { appId: 'about',    icon: 'User', label: 'About' },
  { appId: 'skills',   icon: 'Cpu', label: 'Skills' },
  { appId: 'projects', icon: 'Folder', label: 'Projects' },
  { appId: 'blog',     icon: 'FileText', label: 'Blog' },
  { appId: 'contact',  icon: 'Mail', label: 'Contact' },
  { appId: 'terminal', icon: 'Terminal', label: 'Terminal' },
  { appId: 'games',    icon: 'Gamepad2', label: 'Arcade' },
];

const DynamicIcon = ({ name, size = 20 }) => {
  const Icon = LucideIcons[name] || LucideIcons['Activity'];
  if (!Icon) return <span>?</span>;
  return <Icon size={size} strokeWidth={2} />;
};

const Dock = () => {
  const { openWindow, windows, activeWindowId } = useOS();

  return (
    <div className="os-dock">
      {DOCK_ITEMS.map(item => {
        const isOpen = windows.some(w => w.appId === item.appId);
        const isActive = windows.some(w => w.appId === item.appId && w.id === activeWindowId);

        return (
          <button
            key={item.appId}
            className={`os-dock__item ${isActive ? 'os-dock__item--active' : ''}`}
            onClick={() => openWindow(item.appId)}
            title={item.label}
          >
            <span className="os-dock__icon">
              <DynamicIcon name={item.icon} />
            </span>
            {isOpen && <span className={`os-dock__dot ${isActive ? 'os-dock__dot--active' : ''}`} />}
          </button>
        );
      })}
    </div>
  );
};

export default Dock;
