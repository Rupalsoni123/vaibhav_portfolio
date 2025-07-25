import React, { useState, useContext } from 'react';
import HamBurgerMenu from './HamBurgerMenu';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../utils/ThemeContext';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    
    const handleClick = () => {
        setNavOpen(prevValue => !prevValue)
    }
    
    return (
        <>
            <nav 
                className='nav-modern'
                role="navigation"
                aria-label="Main navigation"
            >
                <div className='w-full h-full'>
                    <div className='flex justify-between items-center px-6 container-custom h-20'>
                        {/* Logo */}
                        <div className='text-2xl duration-500 font-bold group cursor-pointer'>
                            <h1 className='font-signature'>
                                <span className='text-gradient font-black'>
                                    Vaibhav Soni
                                </span>
                                <span className='block text-xs font-medium text-secondary-600 dark:text-secondary-400 mt-1'>
                                    DevOps Engineer
                                </span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex items-center gap-8'>
                            <Navigation />
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden flex items-center gap-4'>
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
            {navOpen && (
                <div className='fixed inset-0 z-40 md:hidden'>
                    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm' onClick={handleClick}></div>
                    <div className='fixed top-20 left-0 right-0 glass p-6 mx-4 rounded-2xl shadow-2xl'>
                        <Navigation mobile onItemClick={handleClick} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
