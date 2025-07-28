import React from "react";
import { Link } from "react-scroll";
import { Heart, Code } from "./Icons";
import contactInfo from "../data/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-neon-green">
      <div className="cyber-container relative z-10">
        {/* Single Row Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Left - Brand & Social */}
            <div className="flex items-center gap-6">
              <h3 className="neon-text font-cyber text-lg">VAIBHAV.SONI</h3>
              <div className="flex gap-3">
                {contactInfo.filter(item => item.name !== 'Resume').slice(0, 3).map(({ id, link, name, icon }) => (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black border border-neon-green rounded flex items-center justify-center text-neon-green hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
                    aria-label={name}
                    title={name}
                  >
                    {icon}
                  </a>
                ))}
                <a
                  href={contactInfo.find(item => item.name === 'Resume')?.link}
                  download="Vaibhav_Soni_DevOps_Resume.pdf"
                  className="w-8 h-8 bg-black border border-neon-green rounded flex items-center justify-center text-neon-green hover:border-neon-purple hover:text-neon-purple transition-colors duration-300"
                  aria-label="Download Resume"
                  title="Download Resume"
                >
                  📄
                </a>
              </div>
            </div>

            {/* Center - Quick Links */}
            <div className="hidden md:flex gap-6">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link}
                  smooth
                  duration={500}
                  className="font-mono text-xs text-gray-400 hover:text-neon-green transition-colors duration-300 cursor-pointer"
                >
                  {link.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Right - Copyright & Status */}
            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span>© {currentYear}</span>
                <Heart className="w-3 h-3 text-neon-pink animate-pulse" />
                <Code className="w-3 h-3 text-neon-blue" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green">AVAILABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
