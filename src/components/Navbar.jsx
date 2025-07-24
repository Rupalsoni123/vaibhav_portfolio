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
                className='fixed w-full max-w-[100vw] h-20 z-50 bg-opacity-[0.95]'
                role="navigation"
                aria-label="Main navigation"
            >
                <div className={`w-full h-full ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-transparent' : 'bg-gradient-to-b from-blue-100 via-blue-100 to-transparent'}`}>
                    <div className='flex justify-between items-center px-5 max-w-screen-2xl mx-auto'>
                        <div className='text-[2.5rem] duration-500 font-semibold group cursor-pointer'>
                            <h1 className='animatedHeading font-signature'>
                                <span className='text-transparent'>Vaibhav Soni</span>
                            </h1>
                        </div>

                        <div className="hidden md:flex items-center">
                            <Navigation ulClass="flex mr-4" liClass="" />
                            <ThemeToggle />
                        </div>
                        
                        <div className="md:hidden flex items-center">
                            <ThemeToggle />
                            <HamBurgerMenu 
                                handleClick={handleClick} 
                                navOpen={navOpen}
                                aria-expanded={navOpen}
                                aria-controls="mobile-menu"
                            />
                        </div>

                        <Navigation 
                            handleClick={handleClick} 
                            ulClass={`${navOpen ? "-translate-x-0":"translate-x-full"} duration-500 flex flex-col h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-950 w-screen xs:w-80 top-0 right-0 absolute items-center justify-center md:scale-0`} 
                            liClass="my-4 py-2 text-lg"
                            id="mobile-menu"
                            aria-hidden={!navOpen}
                        />
                    </div>
                </div>
            </nav>
            <div className="md:hidden h-32 w-full bg-blue-100 dark:bg-gray-900"></div>
        </>
    )
}

export default Navbar;






