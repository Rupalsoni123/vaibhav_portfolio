import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

const ProgressRing = ({ 
  progress = 0, 
  size = 120, 
  strokeWidth = 8, 
  color = 'var(--primary-blue)',
  backgroundColor = 'var(--bg-tertiary)',
  duration = 1000,
  children,
  className = '',
  style = {}
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '0px'
  });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    if (!hasIntersected) return;

    let startTime = null;
    const startProgress = 0;
    const endProgress = progress;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progressRatio, 3);
      const currentProgress = startProgress + (endProgress - startProgress) * easeOutCubic;
      
      setAnimatedProgress(currentProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasIntersected, progress, duration]);

  return (
    <div
      ref={ref}
      className={`progress-ring-container ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      <svg
        width={size}
        height={size}
        className="progress-ring"
        style={{
          transform: 'rotate(-90deg)',
          filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.3))'
        }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.1s ease',
            filter: 'drop-shadow(0 0 4px currentColor)'
          }}
        />
        
        {/* Animated glow effect */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth / 2}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          opacity="0.5"
          style={{
            transition: 'stroke-dashoffset 0.1s ease',
            filter: 'blur(2px)'
          }}
        />
      </svg>
      
      {/* Content in the center */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '70%',
          height: '70%'
        }}
      >
        {children || (
          <>
            <span
              style={{
                fontSize: `${size * 0.15}px`,
                fontWeight: '700',
                color: 'var(--text-primary)',
                lineHeight: 1
              }}
            >
              {Math.round(animatedProgress)}%
            </span>
            <span
              style={{
                fontSize: `${size * 0.08}px`,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginTop: '2px'
              }}
            >
              Progress
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressRing;
