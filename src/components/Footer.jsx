import React from "react";
import { Link } from "react-scroll";
import { ArrowUp, Heart, Code } from "./Icons";
import contactInfo from "../data/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Projects", to: "Projects" },
    { name: "Contact", to: "Contact" }
  ];

  const services = [
    "Cloud Infrastructure",
    "DevOps Automation",
    "CI/CD Pipelines",
    "Container Orchestration",
    "Infrastructure as Code",
    "System Administration"
  ];

  return (
    <footer className="relative bg-secondary-900 dark:bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Vaibhav Soni
                </h3>
                <p className="text-secondary-400 leading-relaxed">
                  DevOps Engineer passionate about building scalable infrastructure and automating workflows to empower development teams.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {contactInfo.slice(0, 4).map(({ id, link, name, icon }) => (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    aria-label={name}
                  >
                    <span className="text-secondary-400 group-hover:text-primary-400 transition-colors duration-300">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-secondary-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-500 rounded-full"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary-400">
                  <span className="text-primary-400">📧</span>
                  <a 
                    href="mailto:vaibhavsoni5567@gmail.com"
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    vaibhavsoni5567@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-secondary-400">
                  <span className="text-primary-400">📱</span>
                  <a 
                    href="tel:+918890944027"
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    +91 8890944027
                  </a>
                </div>
                <div className="flex items-center gap-3 text-secondary-400">
                  <span className="text-primary-400">📍</span>
                  <span>Ahmedabad, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-secondary-400 text-sm">
                <span>© {currentYear} Vaibhav Soni. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Code className="w-4 h-4 text-primary-400" />
              </div>
              
              <div className="flex items-center gap-6 text-sm text-secondary-400">
                <span>Built with React & Tailwind CSS</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for opportunities</span>
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
              
           