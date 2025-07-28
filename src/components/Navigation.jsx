import React, { useState } from 'react';
import { Link } from 'react-scroll';
import navLinks from '../data/navlinks';

const Navigation = ({ mobile = false, onItemClick }) => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (to) => {
    setActiveSection(to);
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
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onItemClick}
                style={{
                  display: 'block',
                  padding: '1rem 1.5rem',
                  borderRadius: 'var(--border-radius-md)',
                  color: 'var(--text-secondary)',
                  background: 'transparent',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary-blue)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'transparent';
                }}
              >
                {link}
              </a>
            );
          }

          return (
            <Link
              key={id}
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onSetActive={handleSetActive}
              onClick={onItemClick}
              style={{
                display: 'block',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
                color: activeSection === link ? 'var(--primary-blue)' : 'var(--text-secondary)',
                background: activeSection === link ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: activeSection === link ? '1px solid rgba(37, 99, 235, 0.2)' : '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link) {
                  e.target.style.color = 'var(--primary-blue)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link) {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {link}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      {navLinks.map(({ id, link, href }) => {
        if (href) {
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {link}
            </a>
          );
        }

        return (
          <Link
            key={id}
            to={link}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onSetActive={handleSetActive}
            className="nav-link"
            style={{
              color: activeSection === link ? 'var(--primary-blue)' : 'var(--text-secondary)',
              background: activeSection === link ? 'rgba(37, 99, 235, 0.1)' : 'transparent'
            }}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
