import React from 'react';
// Example using react-icons (install: npm install react-icons)
// import { SiReact, SiJavascript, SiNextdotjs } from 'react-icons/si';

// Optimized skill icon component
const OptimizedSkillIcon = ({ skill, size = 40 }) => {
  // Map skill names to optimized icons
  const iconMap = {
    // react: <SiReact size={size} color="#61DAFB" />,
    // javascript: <SiJavascript size={size} color="#F7DF1E" />,
    // nextjs: <SiNextdotjs size={size} color="#000000" />,
  };

  // Fallback for custom icons
  const fallbackIcon = (
    <div 
      className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded"
      style={{ width: size, height: size }}
    >
      <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
        {skill.name.charAt(0).toUpperCase()}
      </span>
    </div>
  );

  return iconMap[skill.name.toLowerCase()] || skill.icon || fallbackIcon;
};

export default OptimizedSkillIcon;
