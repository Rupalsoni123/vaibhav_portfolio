import React, { lazy, Suspense } from 'react';

// Dynamic icon loader - loads icons only when needed
const iconMap = {
  react: lazy(() => import('../icons/ReactIcon')),
  // Add more as needed
};

const DynamicIcon = ({ name, fallback = <div className="w-6 h-6 bg-gray-300 rounded" />, ...props }) => {
  const IconComponent = iconMap[name.toLowerCase()];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return fallback;
  }
  
  return (
    <Suspense fallback={fallback}>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default DynamicIcon;
