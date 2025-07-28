import React, { useState, useContext, useEffect } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';
import { ThemeContext } from '../utils/ThemeContext';
import { Sun, Moon } from './Icons';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const handleMenuClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu clicked');
        setNavOpen(prevValue => !prevValue);
    };

    const handleThemeToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme toggle clicked');
        if (toggleTheme) {
            toggleTheme();
        }
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: scrolled 
                        ? 'rgba(var(--bg-primary-rgb), 0.95)' 
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled 
                        ? '1px solid var(--border-color)' 
                        : 'none',
                    transition: 'all 0.3s ease',
                    padding: '1rem 0'
                }}
            >
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Logo */}
                    <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)'
                    }}>
                        <span style={{ color: 'var(--primary-blue)' }}>Vaibhav</span>
                        <span style={{ color: 'var(--text-primary)' }}>Soni</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        <div style={{ display: 'none' }} className="md:block">
                            <Navigation />
                        </div>

                        {/* Theme Toggle */}
                        <button
                            type="button"
                            onClick={handleThemeToggle}
                            style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '50%',
                                border: '1px solid var(--border-color)',
                                background: 'var(--card-bg)',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--primary-blue)';
                                e.target.style.color = 'var(--primary-blue)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--border-color)';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={handleMenuClick}
                            className="md:hidden"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                padding: '0.5rem'
                            }}
                            aria-label="Toggle mobile menu"
                        >
                            <HamBurgerMenu />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {navOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    className="md:hidden"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setNavOpen(false);
                    }}
                >
                    <div style={{
                        background: 'var(--card-bg)',
                        borderRadius: 'var(--border-radius-lg)',
                        padding: '2rem',
                        maxWidth: '90vw',
                        width: '400px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                    >
                        <Navigation mobile onLinkClick={() => setNavOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
