import React from "react";
import { GMail, Map, CopyRight, ArrowRightLong } from "./Icons";
import { Link } from "react-scroll";
import navLinks from "../data/navlinks";
import contactInfo from "../data/contactInfo";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="relative w-full">
      {/* Gradient divider for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-200 to-transparent dark:from-gray-900 dark:to-transparent" />
      
      {/* Main footer content */}
      <div className="relative bg-slate-100/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="section pb-5">
          <div className="flex flex-wrap justify-between gap-8">
            {/* About Section */}
            <div className="w-full sm:w-3/5 lg:w-2/5">
              <AnimatedWrapper>
                <div className="space-y-4">
                  <h3 className="text-gray-800 dark:text-white text-[1.75rem] font-bold flex items-center">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-3" />
                    Vaibhav Soni
                  </h3>
                  <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">
                    DevOps Engineer
                  </p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>Thank you for visiting My Portfolio.</p>
                    <p>You can connect with me over socials.</p>
                    <p>Have any suggestions? Type it above.</p>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Quick Links */}
            <div className="w-full xs:w-2/5 sm:w-2/5 lg:w-[30%]">
              <AnimatedWrapper>
                <div className="space-y-4">
                  <h3 className="text-gray-800 dark:text-white text-xl font-bold flex items-center">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-3" />
                    Quick Links
                  </h3>
                  <nav className="space-y-2" aria-label="Footer navigation">
                    {navLinks.map(({ link, id }) => (
                      <div key={id} className="group">
                        <Link 
                          to={link} 
                          smooth 
                          duration={500}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                        >
                          <ArrowRightLong className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          <span>{link}</span>
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Contact Info */}
            <div className="w-full xs:w-3/5 sm:w-full lg:w-[30%]">
              <AnimatedWrapper>
                <div className="space-y-4">
                  <h3 className="text-gray-800 dark:text-white text-xl font-bold flex items-center">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-3" />
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-3 text-gray-600 dark:text-gray-400">
                      <a 
                        href="mailto:vaibhavsoni5567@gmail.com"
                        className="flex items-center gap-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        <GMail />
                        <span>vaibhavsoni5567@gmail.com</span>
                      </a>
                      <p className="flex items-center gap-3">
                        <Map />
                        <span>Ahmedabad, Gujarat, India</span>
                      </p>
                    </div>
                    <ul className="flex items-center gap-4" aria-label="Social media links">
                      {contactInfo.map(({ id, link, name, icon, download }) => (
                        <li key={id} className="group relative">
                          <a
                            href={link}
                            download={download}
                            target="_blank"
                            rel="noferrer"
                            aria-label={name}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-110"
                          >
                            {icon}
                          </a>
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            {name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="section py-4">
            <AnimatedWrapper animateFrom="bottom">
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                <CopyRight />
                <span>{`2022-${year} | All Rights Reserved`}</span>
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
