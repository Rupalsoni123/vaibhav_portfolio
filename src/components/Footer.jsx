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
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Vaibhav Soni
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  DevOps Engineer passionate about building scalable infrastructure and automating workflows to empower development teams.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {contactInfo.map(({ id, link, name, icon }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="group w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 border border-gray-700 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        {icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      className="group text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <a 
                    href="mailto:vaibhavsoni5567@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    vaibhavsoni5567@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <a 
                    href="tel:+918890944027"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +91 8890944027
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <span className="text-gray-400">Ahmedabad, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} Vaibhav Soni. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Code className="w-4 h-4 text-blue-500" />
                <span>in India</span>
              </div>

              {/* Back to Top */}
              <Link
                to="Home"
                smooth
                duration={500}
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 border border-gray-700 hover:border-transparent rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">
                  Back to Top
                </span>
                <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;
