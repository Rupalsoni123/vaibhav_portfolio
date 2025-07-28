import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always use dark theme for cyberpunk design
  const [theme, setTheme] = useState('dark');

  // Set up dark theme on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.color = '#00ff41';
  }, []);

  // Dummy toggle function (theme stays dark)
  const toggleTheme = () => {
    // Keep dark theme only
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
