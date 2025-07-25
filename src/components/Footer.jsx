import React from "react";
import { GMail, Map, CopyRight, ArrowRightLong } from "./Icons";
import { Link } from "react-scroll";
import navLinks from "../data/navlinks";
import contactInfo from "../data/contactInfo";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 dark:from-black dark:via-gray-900 dark:to-gray-800 w-full text-gray-300 dark:text-gray-300">
      <div className="section pb-5">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-3/5 lg:w-2/5 pr-2 mb-6 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-white dark:text-white text-[1.75rem] font-bold pb-2 flex items-center">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></span>
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                    Vaibhav Soni
                  </span>
                </h3>
                <p className="text-lg text-cyan-400 dark:text-cyan-400 pb-5 font-semibold">DevOps Engineer</p>
                <div className="space-y-2 text-gray-300 dark:text-gray-300 leading-relaxed">
                  <p>Thank you for visiting my portfolio.</p>
                  <p>Let's connect and build something amazing together!</p>
                  <p>Open to DevOps opportunities and collaborations.</p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {contactInfo.slice(0, 4).map(({ id, link, name, icon, download }) => (
                    <a
                      key={id}
                      href={link}
                      download={download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={name}
                    >
                      <span className="text-lg group-hover:text-white transition-colors duration-300">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          </div>
          
          <div className="w-full xs:w-2/5 sm:w-2/5 lg:w-[30%] sm:pl-20 lg:pl-12 justify-start mb-6 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-white dark:text-white text-[1.35rem] xs:text-2xl font-bold pb-4 flex items-center">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></span>
                  Quick Links
                </h3>
                <nav aria-label="Quick navigation links">
                  {navLinks.map(({ link, id }) => {
                    return (
                      <div key={id} className="group w-fit px-3 mb-2">
                        <Link to={link} smooth duration={500} className="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                          <div className="flex items-center justify-between w-fit gap-2 font-medium text-gray-300 hover:text-white cursor-pointer transition-colors duration-300">
                            <ArrowRightLong className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                            <span className="bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-400 to-blue-500 group-hover:text-transparent duration-500 group-hover:animate-pulse link-hover">
                              {link}
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </AnimatedWrapper>
          </div>
          
          <div className="w-full xs:w-3/5 sm:w-2/5 lg:w-[30%] mb-6 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-white dark:text-white text-[1.35rem] xs:text-2xl font-bold pb-4 flex items-center">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></span>
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <GMail className="mr-3 text-cyan-400" />
                    <a 
                      href="mailto:vaibhavsoni5567@gmail.com"
                      className="hover:text-cyan-400 transition-colors duration-300"
                    >
                      vaibhavsoni5567@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3 text-lg">📱</span>
                    <a 
                      href="tel:+918890944027"
                      className="hover:text-cyan-400 transition-colors duration-300"
                    >
                      +91 8890944027
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Map className="mr-3 text-cyan-400" />
                    <span>Ahmedabad, India</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-green-400">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
        
        {/* Bottom Section */}
        <AnimatedWrapper>
          <div className="border-t border-gray-600 dark:border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <CopyRight className="mr-2" />
                <span>{year} Vaibhav Soni. All rights reserved. </span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                
                <span className="text-cyan-400">DevOps Engineer</span>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Footer;
