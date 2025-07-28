import React, { useState, useContext, useEffect } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';
import { ThemeContext } from '../utils/ThemeContext';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const handleClick = () => {
        setNavOpen(prevValue => !prevValue)
    }

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
                    zIndex: 50,
                    background: scrolled 
                        ? 'rgba(var(--bg-primary-rgb, 255, 255, 255), 0.95)' 
                        : 'rgba(var(--bg-primary-rgb, 255, 255, 255), 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
                }}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '4rem',
                        padding: '0 1rem'
                    }}>
                        {/* Logo */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                background: 'var(--gradient-primary)',
                                borderRadius: 'var(--border-radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1.125rem',
                                fontFamily: 'Space Grotesk, sans-serif'
                            }}>
                                V
                            </div>
                            <div>
                                <h1 style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'var(--text-primary)',
                                    margin: 0,
                                    lineHeight: 1
                                }}>
                                    Vaibhav Soni
                                </h1>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-tertiary)',
                                    fontFamily: 'JetBrains Mono, monospace',
                                    marginTop: '-2px'
                                }}>
                                    DevOps Engineer
                                </div>
                            </div>
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
                                onClick={toggleTheme}
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
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.borderColor = 'var(--border-color)';
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            >
                                {theme === 'dark' ? '☀️' : '🌙'}
                            </button>

                            {/* Mobile Menu Button */}
                            <div style={{ display: 'block' }} className="md:hidden">
                                <HamBurgerMenu 
                                    navOpen={navOpen} 
                                    handleClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {navOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '4rem',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--bg-primary)',
                        zIndex: 40,
                        padding: '2rem 1rem',
                        backdropFilter: 'blur(12px)'
                    }}
                    className="md:hidden"
                >
                    <Navigation mobile onItemClick={() => setNavOpen(false)} />
                </div>
            )}

            {/* Mobile Backdrop */}
            {navOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 35
                    }}
                    className="md:hidden"
                    onClick={() => setNavOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
                                          