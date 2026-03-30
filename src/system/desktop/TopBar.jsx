import React, { useState, useEffect } from 'react';
import { useOS } from '../OSContext';

const TopBar = () => {
  const { osTheme, setOsTheme, openWindow } = useOS();
  const [time, setTime] = useState(new Date());
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [battery] = useState(Math.floor(Math.random() * 30) + 70);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  });

  return (
    <div className="os-topbar">
      {/* Left section */}
      <div className="topbar-left">
        <button className="topbar-btn topbar-activities" onClick={() => {}}>
          <span className="topbar-logo">✦</span>
          <span>Activities</span>
        </button>
      </div>

      {/* Center - time */}
      <div className="topbar-center">
        <span className="topbar-date">{formattedDate}</span>
        <span className="topbar-time">{formattedTime}</span>
      </div>

      {/* Right section */}
      <div className="topbar-right">
        {/* Network */}
        <div className="topbar-indicator" title="Connected">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
          </svg>
        </div>

        {/* Battery */}
        <div className="topbar-indicator topbar-battery" title={`Battery: ${battery}%`}>
          <div className="battery-icon">
            <div className="battery-body">
              <div className="battery-level" style={{ width: `${battery}%` }}></div>
            </div>
            <div className="battery-cap"></div>
          </div>
          <span className="battery-text">{battery}%</span>
        </div>

        {/* Volume */}
        <div className="topbar-indicator" title="Volume">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>

        {/* User Menu */}
        <div className="topbar-user-area">
          <button 
            className="topbar-btn topbar-user-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="topbar-avatar">VS</div>
          </button>
          
          {showUserMenu && (
            <div className="topbar-user-menu" onClick={() => setShowUserMenu(false)}>
              <div className="topbar-menu-header">
                <div className="topbar-menu-avatar">VS</div>
                <div>
                  <div className="topbar-menu-name">Vaibhav Soni</div>
                  <div className="topbar-menu-email">vaibhavsoni5567@gmail.com</div>
                </div>
              </div>
              <div className="topbar-menu-divider"></div>
              <button className="topbar-menu-item" onClick={() => openWindow('settings')}>
                <span>⚙️</span> Settings
              </button>
              <button className="topbar-menu-item" onClick={() => openWindow('terminal')}>
                <span>⌨️</span> Terminal
              </button>
              <button className="topbar-menu-item" onClick={() => setOsTheme(osTheme === 'dark' ? 'light' : 'dark')}>
                <span>{osTheme === 'dark' ? '☀️' : '🌙'}</span> {osTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <div className="topbar-menu-divider"></div>
              <button className="topbar-menu-item" onClick={() => window.location.reload()}>
                <span>🔄</span> Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
