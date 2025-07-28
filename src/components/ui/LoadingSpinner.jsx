import React from 'react';

const LoadingSpinner = ({ 
  size = 40, 
  color = 'var(--primary-blue)', 
  className = '',
  style = {},
  text = ''
}) => {
  return (
    <div 
      className={`loading-spinner-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        ...style
      }}
      aria-label="Loading content"
    >
      <div
        className="spinner"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `4px solid var(--bg-tertiary)`,
          borderTop: `4px solid ${color}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      
      {text && (
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.875rem',
          margin: 0,
          textAlign: 'center'
        }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
