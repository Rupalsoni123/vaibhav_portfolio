import React, { createContext, useState, useCallback, useContext, useRef } from 'react';
import projectsData from '../data/projects';

const OSContext = createContext();

const APP_REGISTRY = {
  about: { title: 'About Me', icon: 'User', component: 'About' },
  skills: { title: 'Skills', icon: 'Cpu', component: 'Skills' },
  projects: { title: 'Projects', icon: 'Folder', component: 'Projects' },
  blog: { title: 'Blog', icon: 'FileText', component: 'Blog' },
  contact: { title: 'Contact', icon: 'Mail', component: 'Contact' },
  resume: { title: 'Resume', icon: 'FileText', isExternal: true },
  terminal: { title: 'Terminal', icon: 'Terminal', component: 'Terminal' },
  games: { title: 'Arcade', icon: 'Gamepad2', component: 'GameLauncher', defaultSize: { width: 700, height: 500 } },
  settings: { title: 'Settings', icon: 'Settings', component: 'Settings', defaultSize: { width: 400, height: 550 } },
  tetris: { title: 'Tetris', icon: 'Layout', component: 'Tetris', defaultSize: { width: 500, height: 600 } },
  snake: { title: 'Snake', icon: 'Navigation', component: 'Snake', defaultSize: { width: 450, height: 550 } },
  xo: { title: 'Tic Tac Toe', icon: 'XCircle', component: 'TicTacToe', defaultSize: { width: 400, height: 500 } },
};

export const OSProvider = ({ children }) => {
  const [booted, setBooted] = useState(false);
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [nextZIndex, setNextZIndex] = useState(10);
  
  // Panel States
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const [snapPreview, setSnapPreview] = useState(null);
  
  // Persistence Layer
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('os_settings');
    return saved ? JSON.parse(saved) : {
      theme: 'dark',
      animations: true,
      sounds: true,
      wallpaper: 'ubuntu'
    };
  });

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => {
      const next = { ...prev, [key]: value };
      localStorage.setItem('os_settings', JSON.stringify(next));
      return next;
    });
  }, []);
  
  // Fake Filesystem for Terminal
  const [fileSystem, setFileSystem] = useState(() => {
    const fs = {
      '/': { name: '/', type: 'dir', children: ['about.txt', 'skills.json', 'projects'] },
      '/about.txt': { name: 'about.txt', type: 'file', content: 'Vaibhav Soni - DevOps Engineer\nPassion for cloud-native infra and automation.' },
      '/skills.json': { name: 'skills.json', type: 'file', content: '[\n  "AWS",\n  "Azure",\n  "Kubernetes",\n  "Terraform",\n  "Ansible",\n  "React",\n  "Node.js"\n]' },
      '/projects': { name: 'projects', type: 'dir', children: [] }
    };
    
    projectsData.forEach((p, idx) => {
      const safeName = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.txt';
      const finalName = fs[`/projects/${safeName}`] ? `${safeName.replace('.txt', '')}-${idx}.txt` : safeName;
      
      fs['/projects'].children.push(finalName);
      fs[`/projects/${finalName}`] = {
        name: finalName,
        type: 'file',
        content: `Title: ${p.title}\nCategory: ${p.category}\nStatus: ${p.status}\n\nDescription: ${p.description}\n\nTech Stack: ${p.technologies.join(', ')}\n\nDetails: ${p.longDescription}`
      };
    });
    
    return fs;
  });

  const windowMemory = useRef({});

  const toggleOverview = useCallback(() => {
    setIsOverviewOpen(prev => !prev);
    setIsCalendarOpen(false);
    setIsSystemMenuOpen(false);
  }, []);

  const toggleCalendar = useCallback(() => {
    setIsCalendarOpen(prev => !prev);
    setIsSystemMenuOpen(false);
    setIsOverviewOpen(false);
  }, []);

  const toggleSystemMenu = useCallback(() => {
    setIsSystemMenuOpen(prev => !prev);
    setIsCalendarOpen(false);
    setIsOverviewOpen(false);
  }, []);

  const toggleChat = useCallback(() => {
    setIsChatOpen(prev => !prev);
  }, []);

  const openWindow = useCallback((appId) => {
    if (appId === 'resume') {
      window.open('/resume/Vaibhav_Soni_Resume.pdf', '_blank');
      return;
    }

    const app = APP_REGISTRY[appId];
    if (!app || app.isExternal) return;

    // Close all panels when opening a window
    setIsCalendarOpen(false);
    setIsSystemMenuOpen(false);
    setIsOverviewOpen(false);

    const existing = windows.find(w => w.appId === appId);
    const newZ = nextZIndex + 1;
    setNextZIndex(newZ);

    if (existing) {
      setWindows(prev => prev.map(w =>
        w.id === existing.id ? { ...w, zIndex: newZ, isMinimized: false } : w
      ));
      setActiveWindowId(existing.id);
      return;
    }

    const memory = windowMemory.current[appId];
    const offset = (windows.length % 6) * 30;
    
    const newWindow = {
      id: `win-${Date.now()}`,
      appId,
      title: app.title,
      icon: app.icon,
      component: app.component,
      position: memory?.position || { x: 120 + offset, y: 60 + offset },
      size: memory?.size || app.defaultSize || { width: 850, height: 560 },
      zIndex: newZ,
      isMinimized: false,
      isMaximized: false,
    };

    setWindows(prev => [...prev, newWindow]);
    setActiveWindowId(newWindow.id);
  }, [windows, nextZIndex]);

  const closeWindow = useCallback((windowId) => {
    setWindows(prev => {
      const win = prev.find(w => w.id === windowId);
      if (win) windowMemory.current[win.appId] = { position: win.position, size: win.size };
      return prev.filter(w => w.id !== windowId);
    });
  }, []);

  const focusWindow = useCallback((windowId) => {
    const newZ = nextZIndex + 1;
    setNextZIndex(newZ);
    setWindows(prev => prev.map(w =>
      w.id === windowId ? { ...w, zIndex: newZ, isMinimized: false } : w
    ));
    setActiveWindowId(windowId);
  }, [nextZIndex]);

  const minimizeWindow = useCallback((windowId) => {
    setWindows(prev => prev.map(w =>
      w.id === windowId ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const toggleMaximize = useCallback((windowId) => {
    setWindows(prev => prev.map(w => {
      if (w.id !== windowId) return w;
      return { ...w, isMaximized: !w.isMaximized };
    }));
  }, []);

  const handleSnapWindow = useCallback((windowId, snapType) => {
    setWindows(prev => prev.map(w => {
      if (w.id !== windowId) return w;
      
      const width = window.innerWidth;
      const height = window.innerHeight - 32;

      switch(snapType) {
        case 'LEFT':
          return { ...w, position: { x: 0, y: 0 }, size: { width: width / 2, height }, isMaximized: false };
        case 'RIGHT':
          return { ...w, position: { x: width / 2, y: 0 }, size: { width: width / 2, height }, isMaximized: false };
        case 'TOP':
          return { ...w, isMaximized: true };
        default:
          return w;
      }
    }));
    setSnapPreview(null);
  }, []);

  const value = {
    booted, setBooted,
    windows, activeWindowId,
    openWindow, closeWindow, minimizeWindow, focusWindow, toggleMaximize,
    isOverviewOpen, toggleOverview,
    isCalendarOpen, toggleCalendar,
    isSystemMenuOpen, toggleSystemMenu,
    isChatOpen, toggleChat,
    snapPreview, setSnapPreview, handleSnapWindow,
    fileSystem, setFileSystem,
    settings, updateSetting,
    APP_REGISTRY
  };

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>;
};

export const useOS = () => useContext(OSContext);
export default OSContext;
