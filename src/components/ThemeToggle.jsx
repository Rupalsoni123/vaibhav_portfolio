import React, { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-lg bg-black border-2 border-neon-green text-neon-green hover:border-neon-blue hover:text-neon-blue transition-all duration-300 focus:outline-none hover:scale-105 min-w-[44px] min-h-[44px] flex items-center justify-center group overflow-hidden font-mono"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Background Scan Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon Container */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {theme === 'dark' ? (
          // Sun icon for dark mode (switch to light)
          <div className="flex items-center gap-1">
            <span className="text-sm">☀</span>
            <span className="text-xs hidden sm:block">LIGHT</span>
          </div>
        ) : (
          // Moon icon for light mode (switch to dark)
          <div className="flex items-center gap-1">
            <span className="text-sm">🌙</span>
            <span className="text-xs hidden sm:block">DARK</span>
          </div>
        )}
      </div>

      {/* Scan Line Effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default ThemeToggle;

