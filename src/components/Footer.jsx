import React from "react";
import { GMail, Map, CopyRight, ArrowRightLong } from "./Icons";
import { Link } from "react-scroll";
import navLinks from "../data/navlinks";
import contactInfo from "../data/contactInfo";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <div className="bg-gradient-to-t from-blue-200 via-blue-100 to-gray-100 dark:from-black dark:via-black dark:to-gray-700 w-full text-gray-700 dark:text-gray-300">
      <div className="section pb-5">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-3/5 lg:w-2/5 pr-2 mb-6 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-gray-800 dark:text-white text-[1.75rem] font-bold pb-2 flex items-center">
                  <span className="w-1.5 h-8 bg-cyan-500 rounded-full mr-3"></span>
                  Vaibhav Soni
                </h3>
                <p className="text-lg text-cyan-600 dark:text-cyan-400 pb-5 font-semibold">DevOps Engineer</p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Thank you for visiting My Portfolio.</p>
                  <p>You can connect with me over socials.</p>
                  <p>Have any Suggestions? Type it above.</p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
          
          <div className="w-full xs:w-2/5 sm:w-2/5 lg:w-[30%] sm:pl-20 lg:pl-12 justify-start mb-6 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-gray-800 dark:text-white text-[1.35rem] xs:text-2xl font-bold pb-4 flex items-center">
                  <span className="w-1.5 h-6 bg-cyan-500 rounded-full mr-3"></span>
                  Quick Links
                </h3>
                <nav aria-label="Quick navigation links">
                  {navLinks.map(({ link, id }) => {
                    return (
                      <div key={id} className="group w-fit px-3 mb-2">
                        <Link to={link} smooth duration={500} className="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                          <div className="flex items-center justify-between w-fit gap-2 font-medium text-gray-800 dark:text-white cursor-pointer">
                            <ArrowRightLong />
                            <span className="bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 group-hover:text-transparent duration-500 group-hover:animate-pulse link-hover">
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
          
          <div className="w-full xs:w-3/5 sm:w-full lg:w-[30%] lg:pl-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-gray-800 dark:text-white text-2xl font-bold pb-4 flex items-center">
                  <span className="w-1.5 h-6 bg-cyan-500 rounded-full mr-3"></span>
                  Contact Info
                </h3>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-5 xs:gap-10 sm:gap-5 md:gap-10 justify-between">
                  <div className="text-[0.9rem] font-medium">
                    <p className="flex items-center gap-3 mb-3 text-gray-700 dark:text-gray-300">
                      <GMail />
                      <a href="mailto:vaibhavsoni5567@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        vaibhavsoni5567@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Map />
                      <span className="pt-1">Ahmedabad, Gujarat, India</span>
                    </p>
                  </div>
                  <ul className="flex items-center gap-5 md:gap-8 lg:gap-4 justify-start" aria-label="Social media links">
                    {contactInfo.map(({ id, link, name, icon, download }) => {
                      return (
                        <li
                          key={id}
                          className="group relative w-10 h-10 flex justify-center items-center rounded-full p-1 cursor-pointer duration-[450ms] transition ease-in hover:scale-110 focus:scale-110 active:scale-110 bg-gray-700 dark:bg-gray-700 hover:bg-cyan-600 dark:hover:bg-cyan-600 text-white"
                        >
                          <a
                            href={link}
                            download={download}
                            target="_blank"
                            rel="noferrer"
                            aria-label={name}
                            className="flex items-center justify-center w-full h-full"
                          >
                            {icon}
                          </a>
                          <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                            {name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      <div className="section py-2 font-medium">
        <div className="">
          <AnimatedWrapper animateFrom="bottom">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex justify-center items-center">
              <span className="px-1 pb-[0.2rem]">
                <CopyRight />
              </span>
              {`2025- ${year}`} | All Rights Reserved
            </p>
          </AnimatedWrapper>
        </div>
      </div>
    </div>  );
};

export default Footer;
