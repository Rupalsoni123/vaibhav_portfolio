import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: 'var(--primary-blue)',
        color: 'white',
        padding: '8px 16px',
        textDecoration: 'none',
        borderRadius: '4px',
        zIndex: 1000,
        transition: 'top 0.3s ease',
        fontSize: '14px',
        fontWeight: '500'
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
