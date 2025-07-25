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
                className='fixed w-full max-w-[100vw] h-20 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50'
                role="navigation"
                aria-label="Main navigation"
            >
                <div className='w-full h-full'>
                    <div className='flex justify-between items-center px-6 max-w-screen-2xl mx-auto h-full'>
                        {/* Logo */}
                        <div className='text-2xl duration-500 font-bold group cursor-pointer'>
                            <h1 className='font-signature'>
                                <span className='text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text animatedHeading'>
                                    Vaibhav Soni
                                </span>
                                <span className='block text-xs font-medium text-gray-600 dark:text-gray-400 mt-1'>
                                    DevOps Engineer
                                </span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Navigation ulClass="flex items-center gap-1" liClass="" />
                            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                            <ThemeToggle />
                        </div>
                        
                        {/* Mobile Navigation */}
                        <div className="md:hidden flex items-center gap-4">
                            <ThemeToggle />
                            <HamBurgerMenu 
                                handleClick={handleClick} 
                                navOpen={navOpen}
                                aria-expanded={navOpen}
                                aria-controls="mobile-menu"
                            />
                        </div>

                        {/* Mobile Menu */}
                        <Navigation 
                            handleClick={handleClick} 
                            ulClass={`${navOpen ? "-translate-x-0":"translate-x-full"} duration-500 flex flex-col h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-md w-screen xs:w-80 top-0 right-0 absolute items-center justify-center md:scale-0 border-l border-gray-200/50 dark:border-gray-700/50`} 
                            liClass="my-6 py-2 text-xl"
                            id="mobile-menu"
                            aria-hidden={!navOpen}
                        />
                    </div>
                </div>
            </nav>
            
            {/* Spacer for fixed navbar */}
            <div className="h-20 w-full"></div>
        </>
    )
}

export default Navbar;






