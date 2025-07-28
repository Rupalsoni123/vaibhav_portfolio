import React from 'react'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'

const Navigation = ({ mobile, onItemClick }) => {
    return (
        <ul className={mobile ? 'flex flex-col gap-4' : 'flex items-center gap-6'}>
            {navLinks.map(({ id, link, href }) => {
                return (
                    <li key={id}>
                        {href ? (
                            <a 
                                href={href} 
                                target="_blank" 
                                rel='noopener noreferrer'
                                className={`nav-link-cyber ${mobile ? 'text-base py-3' : 'text-sm'}`}
                                onClick={mobile ? onItemClick : undefined}
                            >
                                <span className="font-mono">
                                    {mobile && <span className="text-neon-blue mr-2">$</span>}
                                    ./{link.toLowerCase()}.sh
                                </span>
                            </a>
                        ) : (
                            <Link
                                onClick={mobile ? onItemClick : undefined}
                                to={link} 
                                smooth 
                                duration={500}
                                className={`nav-link-cyber cursor-pointer ${mobile ? 'text-base py-3' : 'text-sm'}`}
                                activeClass="active border-neon-blue text-neon-blue shadow-neon-sm"
                                spy={true}
                                offset={-80}
                            >
                                <span className="font-mono">
                                    {mobile && <span className="text-neon-blue mr-2">$</span>}
                                    ./{link.toLowerCase()}.exe
                                </span>
                            </Link>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigation
