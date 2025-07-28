import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4" aria-label="Loading content">
      {/* Modern Spinner */}
      <div className="relative">
        {/* Outer Ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-secondary-200 dark:border-secondary-700`}></div>
        
        {/* Animated Ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-transparent border-t-primary-600 border-r-primary-600 animate-spin absolute top-0 left-0`}></div>
        
        {/* Inner Glow */}
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 absolute top-0 left-0 animate-pulse`}></div>
        
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
      </div>
      
      {/* Loading Text */}
      {text && (
        <div className="text-secondary-600 dark:text-secondary-400 font-medium text-sm animate-pulse">
          {text}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
