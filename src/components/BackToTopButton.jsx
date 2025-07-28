import React, { useEffect, useState } from 'react'
import { ArrowUp } from "./Icons"
import { Link } from 'react-scroll'

const BackToTopButton = () => {
    const [btnVisibility, setBtnVisibility] = useState(false)
    
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    useEffect(() => {
        const toggleVisibility = () => {
            window.pageYOffset > 250 ? setBtnVisibility(true) : setBtnVisibility(false);
        }
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    return (
        <Link 
            onClick={handleScroll} 
            to="Home" 
            smooth 
            duration={500} 
            className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
                btnVisibility 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16 pointer-events-none'
            }`}
        >
            <div className="cyber-button p-3 group relative overflow-hidden">
                {/* Scan Line Effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                
                {/* Terminal Text */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="bg-black border border-neon-green rounded px-2 py-1">
                        <span className="font-mono text-xs text-neon-green">$ cd /</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BackToTopButton;
