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
            <div className="w-12 h-12 flex justify-center items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 cursor-pointer hover:scale-110 transition-all duration-300 text-white shadow-lg hover:shadow-xl group">
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
        </Link>
    )
}

export default BackToTopButton;
