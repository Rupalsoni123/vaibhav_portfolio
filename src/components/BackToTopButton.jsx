import React, { useEffect, useState } from 'react'
import { ArrowUp } from "./Icons"

const BackToTopButton = () => {
    const [btnVisibility, setBtnVisibility] = useState(false)
    
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    useEffect(() => {
        const toggleVisibility = () => {
            window.pageYOffset > 250 ? setBtnVisibility(true) : setBtnVisibility(false);
        }
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    if (!btnVisibility) return null;

    return (
        <button
            onClick={handleScroll}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-lg)',
                transition: 'all 0.3s ease',
                zIndex: 1000,
                opacity: btnVisibility ? 1 : 0,
                transform: btnVisibility ? 'translateY(0)' : 'translateY(20px)'
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.1)';
                e.target.style.boxShadow = 'var(--shadow-xl)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'var(--shadow-lg)';
            }}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    )
}

export default BackToTopButton
