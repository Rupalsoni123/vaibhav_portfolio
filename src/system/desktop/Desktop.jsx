import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useOS } from '../OSContext';
import TopBar from './TopBar';
import Dock from './Dock';
import DesktopIcon from './DesktopIcon';
import ContextMenu from './ContextMenu';

const DESKTOP_ICONS = [
  { id: 'about', label: 'About Me', icon: '👤', appId: 'about', x: 30, y: 30 },
  { id: 'projects', label: 'Projects', icon: '📂', appId: 'projects', x: 30, y: 130 },
  { id: 'skills', label: 'Skills', icon: '🛠️', appId: 'skills', x: 30, y: 230 },
  { id: 'blog', label: 'Blog', icon: '📝', appId: 'blog', x: 30, y: 330 },
  { id: 'contact', label: 'Contact', icon: '📧', appId: 'contact', x: 30, y: 430 },
  { id: 'terminal', label: 'Terminal', icon: '⌨️', appId: 'terminal', x: 140, y: 30 },
  { id: 'games', label: 'Arcade', icon: '🎮', appId: 'games', x: 140, y: 130 },
  { id: 'ai', label: 'AI Assistant', icon: '🤖', appId: 'ai', x: 140, y: 230 },
  { id: 'settings', label: 'Settings', icon: '⚙️', appId: 'settings', x: 140, y: 330 },
];

const Desktop = () => {
  const { openWindow, wallpaper, animationsEnabled } = useOS();
  const [contextMenu, setContextMenu] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const desktopRef = useRef(null);
  const particlesRef = useRef(null);

  // Mouse parallax for wallpaper
  const handleMouseMove = useCallback((e) => {
    if (!animationsEnabled) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, [animationsEnabled]);

  // Context menu
  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  }, []);

  const closeContextMenu = useCallback(() => setContextMenu(null), []);

  // Click to close context menu
  useEffect(() => {
    const handler = () => setContextMenu(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Particles
  useEffect(() => {
    if (!animationsEnabled || !particlesRef.current) return;
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [animationsEnabled]);

  return (
    <div
      ref={desktopRef}
      className="os-desktop"
      onMouseMove={handleMouseMove}
      onContextMenu={handleContextMenu}
    >
      {/* Animated wallpaper layers */}
      <div className="desktop-wallpaper" data-wallpaper={wallpaper}>
        <div
          className="wallpaper-parallax-layer"
          style={{
            transform: animationsEnabled
              ? `translate(${mousePos.x}px, ${mousePos.y}px)`
              : 'none'
          }}
        >
          <div className="wallpaper-grid"></div>
        </div>
      </div>

      {/* Particles */}
      <canvas ref={particlesRef} className="desktop-particles" />

      {/* Welcome overlay */}
      <div className="desktop-welcome-overlay">
        <div className="desktop-welcome-name">VAIBHAV SONI</div>
        <div className="desktop-welcome-role">CLOUD ARCHITECT — DevOps Engineer</div>
        <div className="desktop-welcome-tagline">Building scalable cloud infrastructure</div>
      </div>

      {/* Top Bar */}
      <TopBar />

      {/* Desktop Icons */}
      <div className="desktop-icons-area">
        {DESKTOP_ICONS.map(icon => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            onDoubleClick={() => openWindow(icon.appId)}
          />
        ))}
      </div>

      {/* Dock */}
      <Dock />

      {/* Context Menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
        />
      )}
    </div>
  );
};

export default Desktop;
