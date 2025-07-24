import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons';

const HamBurgerMenu = ({ handleClick, navOpen, ...props }) => {
    return (
        <button
            className='group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center'
            onClick={handleClick}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            {...props}
        >
            {navOpen &&
                <div className='group'>
                    <span className="group-hover:hidden ">
                        <Cancel color="#6B7280" />
                    </span>
                    <span className="hidden group-hover:block">
                        <Cancel color="#EF4444" />
                    </span>
                </div>
            }
            {!navOpen &&
                <div>
                    <span className="group-hover:hidden ">
                        <Menu />
                    </span>
                    <span className="hidden transition-all delay-75 group-hover:block">
                        <Hamburger />
                    </span>
                </div>
            }
        </button>
    )
}

export default HamBurgerMenu;

