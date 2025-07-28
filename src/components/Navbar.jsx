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
                className={`nav-modern transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/90 dark:bg-secondary-900/90 shadow-lg backdrop-blur-xl' 
                        : 'bg-white/70 dark:bg-secondary-900/70 backdrop-blur-md'
                }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className='w-full h-full'>
                    <div className='flex justify-between items-center container-custom h-20'>
                        {/* Logo */}
                        <div className='text-2xl duration-500 font-bold group cursor-pointer'>
                            <h1 className='font-signature'>
                                <span className='gradient-text font-black text-3xl hover:scale-105 transition-transform duration-300'>
                                    Vaibhav Soni
                                </span>
                                <span className='block text-xs font-medium text-secondary-600 dark:text-secondary-400 mt-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300'>
                                    DevOps Engineer
                                </span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden lg:flex items-center space-x-8'>
                            <Navigation />
                            <div className='flex items-center space-x-4'>
                                <ThemeToggle />
                                <a
                                    href="mailto:vaibhavsoni5567@gmail.com"
                                    className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-2 group"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>Let's Talk</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='lg:hidden flex items-center space-x-4'>
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
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setNavOpen(false)}
                />
                
                {/* Mobile Menu */}
                <div 
                    className={`absolute top-20 left-0 right-0 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700 shadow-2xl transform transition-transform duration-300 ${
                        navOpen 
                            ? 'translate-y-0' 
                            : '-translate-y-full'
                    }`}
                >
                    <div className="container-custom py-8">
                        <Navigation mobile onItemClick={() => setNavOpen(false)} />
                        
                        {/* Mobile CTA */}
                        <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700">
                            <a
                                href="mailto:vaibhavsoni5567@gmail.com"
                                className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                                onClick={() => setNavOpen(false)}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
