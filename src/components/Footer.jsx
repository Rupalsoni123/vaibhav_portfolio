import React from "react";
import { Link } from "react-scroll";
import { Heart, Code, Mail, Phone, MapPin } from "./Icons";
import contactInfo from "../data/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-2 border-neon-green">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Terminal Characters */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/10 font-mono text-xs animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['$', '>', '~', '#', '/', '\\', '|', '-'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-xl font-bold">V</span>
                  </div>
                  <div>
                    <h3 className="neon-text font-cyber text-xl">VAIBHAV.SONI</h3>
                    <p className="font-mono text-xs text-gray-400">&lt;/DevOps_Engineer&gt;</p>
                  </div>
                </div>
                <p className="font-mono text-sm text-gray-300 leading-relaxed mb-4">
                  Building scalable infrastructure and automating deployment pipelines for the future.
                </p>
                <div className="flex items-center gap-2 px-3 py-2 border border-neon-green/30 rounded bg-black/50">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-neon-green">AVAILABLE_FOR_HIRE</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="neon-text-blue font-cyber text-lg mb-4">NAVIGATION</h4>
                <div className="space-y-3">
                  {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                    <Link
                      key={link}
                      to={link}
                      smooth
                      duration={500}
                      className="block font-mono text-sm text-gray-400 hover:text-neon-green transition-colors duration-300 cursor-pointer relative group"
                    >
                      <span className="group-hover:text-neon-green">$ cd /{link.toLowerCase()}</span>
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="neon-text-blue font-cyber text-lg mb-4">CONTACT_INFO</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neon-green" />
                    <a 
                      href="mailto:vaibhavsoni5567@gmail.com"
                      className="font-mono text-sm text-gray-400 hover:text-neon-green transition-colors duration-300"
                    >
                      vaibhavsoni5567@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-neon-blue" />
                    <a 
                      href="tel:+918890944027"
                      className="font-mono text-sm text-gray-400 hover:text-neon-blue transition-colors duration-300"
                    >
                      +91 8890944027
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-neon-purple" />
                    <span className="font-mono text-sm text-gray-400">
                      Ahmedabad, Gujarat, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="neon-text-blue font-cyber text-lg mb-4">SOCIAL_LINKS</h4>
                <div className="grid grid-cols-2 gap-3">
                  {contactInfo.filter(item => item.name !== 'Resume').map(({ id, link, name, icon }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon hover:bg-neon-blue/20 hover:border-neon-blue hover:text-neon-blue group"
                      aria-label={name}
                      title={name}
                    >
                      <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                        {icon}
                      </div>
                    </a>
                  ))}
                  <a
                    href={contactInfo.find(item => item.name === 'Resume')?.link}
                    download="Vaibhav_Soni_DevOps_Resume.pdf"
                    className="social-icon hover:bg-neon-purple/20 hover:border-neon-purple hover:text-neon-purple group"
                    aria-label="Download Resume"
                    title="Download Resume"
                  >
                    <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                      📄
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Command Line */}
          <div className="mt-8 pt-6 border-t border-neon-green/30">
            <div className="cyber-card p-4">
              <div className="font-mono text-sm text-neon-blue mb-2">
                $ echo "Thanks for visiting my portfolio!"
              </div>
              <div className="font-mono text-sm text-neon-green">
                Thanks for visiting my portfolio!
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="mt-6 pt-4 border-t border-neon-green/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Left - Copyright */}
              <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                <span>© {currentYear} Vaibhav Soni</span>
                <span>•</span>
                <span>Built with</span>
                <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
                <span>&</span>
                <Code className="w-4 h-4 text-neon-blue" />
              </div>

              {/* Center - Tech Stack */}
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <span>React</span>
                <span>•</span>
                <span>Tailwind CSS</span>
                <span>•</span>
                <span>Vite</span>
              </div>

              {/* Right - Version & Status */}
              <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                <span>Version: 2.0.24</span>
                <span>•</span>
                <span>Last updated: {new Date().toLocaleDateString()}</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
