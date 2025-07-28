import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // For cyberpunk theme, default to dark mode
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
    }
    return 'dark'; // Default to dark for cyberpunk theme
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Update theme in localStorage and document when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme class and add new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Save theme to localStorage
    localStorage.setItem('color-theme', theme);
    
    // Update body background for cyberpunk theme
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#00ff41';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
