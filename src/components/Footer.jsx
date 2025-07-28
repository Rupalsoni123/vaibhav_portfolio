import React from "react";
import { Link } from "react-scroll";
import { ArrowUp, Heart, Code } from "./Icons";
import contactInfo from "../data/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "HOME", to: "Home", command: "./home.exe" },
    { name: "ABOUT", to: "About", command: "./about.sh" },
    { name: "SKILLS", to: "Skills", command: "./skills.sh" },
    { name: "PROJECTS", to: "Projects", command: "./projects.sh" },
    { name: "CONTACT", to: "Contact", command: "./contact.sh" }
  ];

  const services = [
    "Cloud Infrastructure",
    "DevOps Automation", 
    "CI/CD Pipelines",
    "Container Orchestration",
    "Infrastructure as Code",
    "System Administration"
  ];

  const systemInfo = [
    { label: "UPTIME", value: "24/7", status: "ACTIVE" },
    { label: "LOCATION", value: "AHMEDABAD", status: "ONLINE" },
    { label: "RESPONSE", value: "< 24H", status: "READY" },
    { label: "STATUS", value: "AVAILABLE", status: "HIRING" }
  ];

  return (
    <footer className="relative bg-black border-t-2 border-neon-green overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines opacity-30"></div>
        {/* Matrix Rain Effect */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/10 font-mono text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm font-bold">V</span>
                  </div>
                  <h3 className="neon-text font-cyber text-xl">
                    VAIBHAV.SONI
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed font-mono text-sm mb-6">
                  DevOps Engineer specializing in cloud infrastructure, automation, 
                  and scalable solutions that empower development teams to deliver faster and more reliably.
                </p>
                
                {/* System Status */}
                <div className="space-y-3 mb-6">
                  <div className="font-mono text-xs text-neon-blue mb-2">SYSTEM_STATUS:</div>
                  {systemInfo.map((info, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="font-mono text-gray-400">{info.label}:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-neon-green">{info.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          info.status === 'ACTIVE' ? 'bg-neon-green animate-pulse' :
                          info.status === 'ONLINE' ? 'bg-neon-blue animate-pulse' :
                          info.status === 'READY' ? 'bg-neon-purple animate-pulse' :
                          'bg-neon-pink animate-pulse'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="border-t border-neon-green/30 pt-4">
                  <div className="font-mono text-xs text-neon-blue mb-3">SOCIAL_LINKS:</div>
                  <div className="flex gap-3">
                    {contactInfo.filter(item => item.name !== 'Resume').slice(0, 3).map(({ id, link, name, icon }) => (
                      <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon group"
                        aria-label={name}
                        title={name}
                      >
                        <span className="text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                          {icon}
                        </span>
                      </a>
                    ))}
                    {/* Resume Download Link */}
                    <a
                      href={contactInfo.find(item => item.name === 'Resume')?.link}
                      download="Vaibhav_Soni_DevOps_Resume.pdf"
                      className="social-icon group"
                      aria-label="Download Resume"
                      title="Download Resume"
                    >
                      <span className="text-neon-green group-hover:text-neon-purple transition-colors duration-300">
                        📄
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm"></span>
                </div>
                <h4 className="neon-text-blue font-cyber text-lg">NAVIGATION</h4>
              </div>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth
                    duration={500}
                    className="block text-gray-300 hover:text-neon-green transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 font-mono text-sm p-2 rounded hover:bg-neon-green/10 transition-colors duration-300">
                      <span className="text-neon-blue">$</span>
                      <span className="group-hover:text-neon-green transition-colors duration-300">
                        {link.command}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">⚙</span>
                </div>
                <h4 className="neon-text-blue font-cyber text-lg">SERVICES</h4>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={service} className="flex items-center gap-3 text-gray-300 font-mono text-sm p-2 rounded hover:bg-neon-green/10 transition-colors duration-300">
                    <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                    <span className="hover:text-neon-green transition-colors duration-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">@</span>
                </div>
                <h4 className="neon-text-blue font-cyber text-lg">CONTACT_INFO</h4>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-mono text-xs text-neon-blue">EMAIL_PROTOCOL:</div>
                  <a 
                    href="mailto:vaibhavsoni5567@gmail.com"
                    className="font-mono text-sm text-gray-300 hover:text-neon-green transition-colors duration-300 block p-2 rounded hover:bg-neon-green/10"
                  >
                    vaibhavsoni5567@gmail.com
                  </a>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-xs text-neon-blue">VOICE_CHANNEL:</div>
                  <a 
                    href="tel:+918890944027"
                    className="font-mono text-sm text-gray-300 hover:text-neon-green transition-colors duration-300 block p-2 rounded hover:bg-neon-green/10"
                  >
                    +91 8890944027
                  </a>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-xs text-neon-blue">LOCATION_DATA:</div>
                  <span className="font-mono text-sm text-gray-300 block p-2">Ahmedabad, Gujarat, India</span>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-xs text-neon-blue">TIMEZONE:</div>
                  <span className="font-mono text-sm text-gray-300 block p-2">UTC +5:30 (IST)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Terminal Bar */}
        <div className="border-t-2 border-neon-green bg-black/80">
          <div className="py-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                  footer-info.sh
                </div>
              </div>
              <div className="terminal-content py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>© {currentYear} VAIBHAV.SONI</span>
                    <span className="text-neon-pink">|</span>
                    <span>Built with</span>
                    <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
                    <span>and</span>
                    <Code className="w-4 h-4 text-neon-blue" />
                  </div>
                  
                  <div className="flex items-center gap-6 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <span>STACK:</span>
                      <span className="text-neon-green">React + Tailwind</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="text-neon-green">AVAILABLE_FOR_HIRE</span>
                    </div>
                  </div>
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
              
           