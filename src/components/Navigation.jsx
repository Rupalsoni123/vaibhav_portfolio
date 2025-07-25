import React from 'react'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'

const Navigation = ({ ulClass, liClass, handleClick }) => {
    return (
        <ul className={ulClass}>
            {navLinks.map(({ id, link, href }) => {
                return (
                    <li key={id} className={`${liClass}`}>
                        {href ? (
                            <a 
                                href={href} 
                                target="_blank" 
                                rel='noferrer'
                                className="nav-link px-4 py-2 rounded-lg capitalize font-medium transition-all duration-300"
                            >
                                {link}
                            </a>
                        ) : (
                            <Link
                                onClick={handleClick}
                                to={link} 
                                smooth 
                                duration={500}
                                className="nav-link px-4 py-2 rounded-lg capitalize font-medium cursor-pointer transition-all duration-300"
                                activeClass="text-cyan-600 dark:text-cyan-400 after:w-full"
                                spy={true}
                                offset={-80}
                            > 
                                {link}
                            </Link>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigation
