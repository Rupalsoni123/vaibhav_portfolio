import React, { useState, useRef } from 'react';
import { useScrollAnimation } from '../../utils/useIntersectionObserver';

const InteractiveCard = ({ 
  children, 
  className = '', 
  style = {}, 
  hoverEffect = true,
  magneticEffect = false,
  ...props 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const { ref: animationRef, isVisible } = useScrollAnimation();

  const handleMouseMove = (e) => {
    if (!magneticEffect || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;
    
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: magneticEffect 
      ? `translate(${mousePosition.x}px, ${mousePosition.y}px) ${isHovered ? 'translateY(-8px) scale(1.02)' : ''}` 
      : isHovered && hoverEffect ? 'translateY(-8px) scale(1.02)' : '',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isVisible ? 1 : 0,
    transform: `${isVisible ? 'translateY(0)' : 'translateY(30px)'} ${cardStyle?.transform || ''}`,
    ...style
  };

  return (
    <div
      ref={(node) => {
        cardRef.current = node;
        animationRef.current = node;
      }}
      className={`card interactive-card ${className}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      
      {/* Hover overlay effect */}
      {hoverEffect && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(124, 58, 237, 0.05))',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            borderRadius: 'inherit'
          }}
        />
      )}
    </div>
  );
};

export default InteractiveCard;
