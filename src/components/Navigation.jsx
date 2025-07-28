import React from 'react'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'

const Navigation = ({ mobile, onItemClick }) => {
    return (
        <ul className={mobile ? 'flex flex-col gap-6' : 'flex items-center gap-8'}>
            {navLinks.map(({ id, link, href }) => {
                return (
                    <li key={id}>
                        {href ? (
                            <a 
                                href={href} 
                                target="_blank" 
                                rel='noopener noreferrer'
                                className={`nav-link capitalize font-medium transition-all duration-300 ${
                                    mobile 
                                        ? 'text-lg text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 border-b border-transparent hover:border-primary-600 dark:hover:border-primary-400' 
                                        : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20'
                                }`}
                                onClick={mobile ? onItemClick : undefined}
                            >
                                {link}
                            </a>
                        ) : (
                            <Link
                                onClick={mobile ? onItemClick : undefined}
                                to={link} 
                                smooth 
                                duration={500}
                                className={`nav-link capitalize cursor-pointer font-medium transition-all duration-300 ${
                                    mobile 
                                        ? 'text-lg text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 border-b border-transparent hover:border-primary-600 dark:hover:border-primary-400' 
                                        : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20'
                                }`}
                                activeClass="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
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
