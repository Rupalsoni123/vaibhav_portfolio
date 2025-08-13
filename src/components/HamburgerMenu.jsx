import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons';

const HamburgerMenu = ({ handleClick, navOpen, ...props }) => {
    return (
        <button
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.75rem',
                height: '2.75rem',
                padding: '0.75rem',
                borderRadius: 'var(--border-radius-md)',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 50
            }}
            onClick={handleClick}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--primary-blue)';
                e.target.style.color = 'var(--primary-blue)';
                e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.transform = 'scale(1)';
            }}
            {...props}
        >
            {navOpen ? <Cancel size={20} /> : <Menu size={20} />}
        </button>
    )
}

export default HamburgerMenu;

