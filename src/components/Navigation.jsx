import React from 'react';
import navLinks from '../data/navlinks';

const Navigation = ({ mobile = false, onLinkClick }) => {
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Navigation link clicked:', link);
    
    if (link.href) {
      // External link
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else {
      // Internal scroll link
      const element = document.getElementById(link.link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  };

  if (mobile) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem 0'
      }}>
        {navLinks.map(({ id, link, href }) => {
          if (href) {
            return (
              <button
                key={id}
                type="button"
                onClick={(e) => handleLinkClick(e, { href })}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--border-radius-md)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--bg-tertiary)';
                  e.target.style.color = 'var(--primary-blue)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'none';
                  e.target.style.color = 'var(--text-primary)';
                }}
              >
                {link}
              </button>
            );
          }

          return (
            <button
              key={id}
              type="button"
              onClick={(e) => handleLinkClick(e, { link })}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.125rem',
                fontWeight: '500',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: 'var(--border-radius-md)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--bg-tertiary)';
                e.target.style.color = 'var(--primary-blue)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'none';
                e.target.style.color = 'var(--text-primary)';
              }}
            >
              {link}
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop navigation
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      {navLinks.map(({ id, link, href }) => {
        if (href) {
          return (
            <button
              key={id}
              type="button"
              onClick={(e) => handleLinkClick(e, { href })}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: '500',
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                borderRadius: 'var(--border-radius-md)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--primary-blue)';
                e.target.style.background = 'var(--bg-tertiary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.background = 'none';
              }}
            >
              {link}
            </button>
          );
        }

        return (
          <button
            key={id}
            type="button"
            onClick={(e) => handleLinkClick(e, { link })}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontWeight: '500',
              padding: '0.75rem 1rem',
              cursor: 'pointer',
              borderRadius: 'var(--border-radius-md)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--primary-blue)';
              e.target.style.background = 'var(--bg-tertiary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--text-secondary)';
              e.target.style.background = 'none';
            }}
          >
            {link}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
