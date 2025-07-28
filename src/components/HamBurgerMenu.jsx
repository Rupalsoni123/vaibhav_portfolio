import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons';

const HamBurgerMenu = ({ handleClick, navOpen, ...props }) => {
    return (
        <button
            className='group lg:hidden z-50 cursor-pointer text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 p-3 rounded-xl bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 hover:scale-105 min-w-[44px] min-h-[44px] flex items-center justify-center'
            onClick={handleClick}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            {...props}
        >
            {navOpen ? (
                <div className='group'>
                    <Cancel className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                </div>
            ) : (
                <div className='group'>
                    <Menu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
            )}
        </button>
    )
}

export default HamBurgerMenu;

