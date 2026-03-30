import React, { useState, useEffect } from 'react';
import { useOS } from '../OSContext';

const BOOT_LOGS = [
  "Initializing system...",
  "Loading modules...",
  "Starting services...",
  "Launching VaibhavOS..."
];

const TypewriterLog = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) setTimeout(onComplete, 200);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <div className="boot-log-line">{displayText}</div>;
};

const BootSequence = () => {
  const { setBooted, settings } = useOS();
  const [showLogo, setShowLogo] = useState(false);
  const [visibleLogsCount, setVisibleLogsCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1. Black screen for a bit
    // 2. Logo appears after 400ms (Faster)
    const logoTimer = setTimeout(() => setShowLogo(true), 400);
    
    // 3. Start logs after logo is fully in (Faster)
    const logsTimer = setTimeout(() => {
      setVisibleLogsCount(1);
      // Play start sound if enabled
      if (settings.sounds) {
        try {
          const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
          audio.volume = 0.5;
          audio.play().catch(e => console.log('Sound blocked by browser policy'));
        } catch (e) {
          console.error('Audio play failed', e);
        }
      }
    }, 1200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(logsTimer);
    };
  }, [settings.sounds]);

  const handleLogComplete = () => {
    if (visibleLogsCount < BOOT_LOGS.length) {
      setTimeout(() => setVisibleLogsCount(prev => prev + 1), 150);
    } else {
      // All logs done
      setTimeout(() => setIsReady(true), 300);
    }
  };

  useEffect(() => {
    if (isReady) {
      // 5. Final message shown, then fade out (Faster)
      const fadeTimer = setTimeout(() => setFadeOut(true), 800);
      const bootTimer = setTimeout(() => setBooted(true), 1400);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(bootTimer);
      };
    }
  }, [isReady, setBooted]);

  return (
    <div className={`os-boot-v2 ${fadeOut ? 'os-boot-v2--fade' : ''}`}>
      <div className="os-boot-content">
        {/* Logo Section */}
        <div className={`os-boot-logo-v2 ${showLogo ? 'visible' : ''}`}>
          <div className="os-boot-icon-wrapper overflow-hidden">
             <img src="/images/caricature.png" alt="VaibhavOS" className="w-full h-full object-cover" onError={(e) => {
               e.target.onerror = null;
               e.target.src = "https://ui-avatars.com/api/?name=Vaibhav+Soni&background=E95420&color=fff";
             }} />
          </div>
          <h1 className="os-boot-title-v2">VaibhavOS</h1>
        </div>

        {/* Logs Section */}
        <div className="os-boot-logs">
          {[...Array(visibleLogsCount)].map((_, i) => (
            <TypewriterLog 
              key={i} 
              text={BOOT_LOGS[i]} 
              onComplete={i === visibleLogsCount - 1 ? handleLogComplete : null} 
            />
          ))}
          {!isReady && visibleLogsCount > 0 && <span className="boot-cursor-v2">█</span>}
        </div>

        {/* Ready Message */}
        <div className={`os-boot-ready-msg ${isReady ? 'visible' : ''}`}>
          <div className="ready-indicator"></div>
          <span>System Ready</span>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
