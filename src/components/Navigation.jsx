import React from 'react'
import { Link } from 'react-scroll'
import navLinks from '../data/navlinks'

const Navigation = ({ mobile, onItemClick }) => {
    return (
        <ul className={mobile ? 'flex flex-col gap-4' : 'flex items-center gap-2'}>
            {navLinks.map(({ id, link, href }) => {
                return (
                    <li key={id}>
                        {href ? (
                            <a 
                                href={href} 
                                target="_blank" 
                                rel='noferrer'
                                className="nav-link capitalize"
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
                                className="nav-link capitalize cursor-pointer"
                                activeClass="active"
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
