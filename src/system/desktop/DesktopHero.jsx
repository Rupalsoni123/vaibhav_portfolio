import React, { useState, useEffect } from 'react';

const DesktopHero = () => {
  const [text, setText] = useState('');
  const fullText = "VAIBHAV SONI — DEVOPS ENGINEER";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="os-desktop__hero">
      <div className="hero-content">
        <div className="hero-avatar">
          {/* Caricature integration */}
          <img src="/images/caricature.png" alt="Vaibhav Soni" className="hero-img" onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://ui-avatars.com/api/?name=Vaibhav+Soni&background=E95420&color=fff";
          }} />
        </div>
        <h1 className="hero-name">{text}<span className="hero-cursor">|</span></h1>
        <p className="hero-tagline">Architect of the Multi-Cloud Kingdom</p>
      </div>
    </div>
  );
};

export default DesktopHero;
