import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons';

const HamBurgerMenu = ({ handleClick, navOpen, ...props }) => {
    return (
        <button
            className='group lg:hidden z-50 cursor-pointer p-3 rounded-lg bg-black border-2 border-neon-green text-neon-green hover:border-neon-blue hover:text-neon-blue transition-all duration-300 focus:outline-none hover:scale-105 min-w-[44px] min-h-[44px] flex items-center justify-center relative overflow-hidden'
            onClick={handleClick}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            {...props}
        >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon Container */}
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {navOpen ? (
                    <div className='flex items-center gap-1'>
                        <Cancel className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                        <span className="text-xs font-mono hidden sm:block">CLOSE</span>
                    </div>
                ) : (
                    <div className='flex items-center gap-1'>
                        <Menu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-xs font-mono hidden sm:block">MENU</span>
                    </div>
                )}
            </div>

            {/* Scan Line Effect */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
    )
}

export default HamBurgerMenu;

