import React, { useState, useContext, useEffect } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../utils/ThemeContext';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useContext(ThemeContext);
    
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
                className={`cyber-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-black/95 border-neon-green shadow-neon' 
                        : 'bg-black/80 border-neon-green/50'
                }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="cyber-container">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <div className="text-2xl font-bold group cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                                        <span className="text-neon-green font-mono text-sm font-bold">V</span>
                                    </div>
                                    <div>
                                        <h1 className="font-cyber text-lg neon-text hover:neon-text-blue transition-colors duration-300">
                                            VAIBHAV.SONI
                                        </h1>
                                        <div className="text-xs font-mono text-gray-400 -mt-1">
                                            &lt;/DevOps_Engineer&gt;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Navigation />
                            <div className="flex items-center space-x-4">
                                <ThemeToggle />
                                
                                {/* Status Indicator */}
                                <div className="flex items-center space-x-2 px-3 py-1 border border-neon-green rounded bg-black/50">
                                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                                    <span className="font-mono text-xs text-neon-green">ONLINE</span>
                                </div>

                                {/* Contact Button */}
                                <a
                                    href="mailto:vaibhavsoni5567@gmail.com"
                                    className="cyber-button text-sm px-4 py-2 inline-flex items-center gap-2 group"
                                >
                                    <span>CONTACT.exe</span>
                                    <span className="text-lg group-hover:animate-pulse">⚡</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-4">
                            <ThemeToggle />
                            <HamBurgerMenu 
                                navOpen={navOpen} 
                                handleClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div 
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
                    navOpen 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                }`}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    onClick={() => setNavOpen(false)}
                />
                
                {/* Mobile Menu */}
                <div 
                    className={`absolute top-16 left-0 right-0 cyber-card mx-4 transform transition-transform duration-300 ${
                        navOpen 
                            ? 'translate-y-0' 
                            : '-translate-y-full'
                    }`}
                >
                    <div className="p-6">
                        {/* Terminal Header */}
                        <div className="border-b border-neon-green pb-4 mb-6">
                            <div className="font-mono text-sm text-neon-green">
                                root@mobile-nav:~$ ls -la menu/
                            </div>
                        </div>

                        <Navigation mobile onItemClick={() => setNavOpen(false)} />
                        
                        {/* Mobile Status & CTA */}
                        <div className="mt-8 pt-6 border-t border-neon-green/30 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                                    <span className="font-mono text-xs text-neon-green">STATUS: ONLINE</span>
                                </div>
                                <div className="font-mono text-xs text-gray-400">
                                    {new Date().toLocaleTimeString()}
                                </div>
                            </div>
                            
                            <a
                                href="mailto:vaibhavsoni5567@gmail.com"
                                className="cyber-button w-full text-center inline-flex items-center justify-center gap-2"
                                onClick={() => setNavOpen(false)}
                            >
                                <span>INITIATE_CONTACT.sh</span>
                                <span className="text-lg">📡</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
