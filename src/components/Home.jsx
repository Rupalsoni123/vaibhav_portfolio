import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import AnimatedWrapper from "./ui/AnimatedWrapper";

import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/Avatars/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const interest = [
    "DevOps Engineering",
    2500,
    "Cloud Architecture",
    2500,
    "Infrastructure as Code",
    2500,
    "CI/CD Automation",
    2500,
    "Container Orchestration",
    2500,
    "Site Reliability Engineering",
    2500,
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Certifications", value: "3" }
  ];

  return (
    <div
      name="Home"
      className="relative pt-8 h-full min-h-screen w-full flex items-center hero-gradient bg-pattern overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="section gap-12 md:gap-8 md:justify-between items-center md:flex-row-reverse relative z-10">
        {/* Profile Image Section */}
        <div className="flex flex-col justify-center md:w-2/5 max-w-[350px]">
          <AnimatedWrapper delay={0.8} animateFrom="right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={Avatar}
                alt="Vaibhav Soni - DevOps Engineer"
                width="350"
                height="350"
                loading="eager"
                title="Vaibhav Soni - DevOps Engineer"
                className="relative rounded-full mx-auto w-full border-4 border-white/50 dark:border-gray-700/50 shadow-2xl float-animation hover:scale-105 transition-transform duration-500"
              />
              {/* Floating badges around image */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                DevOps
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-500">
                AWS
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 justify-center text-gray-800 dark:text-gray-200 w-full md:w-3/5">
          <AnimatedWrapper delay={0.2}>
            <div className="space-y-2">
              <p className="text-lg font-medium text-cyan-600 dark:text-cyan-400 tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl xs:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">Vaibhav</span>
                <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text animatedHeading">
                  Soni
                </span>
              </h1>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.35}>
            <div className="space-y-3">
              <p className="text-xl xs:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Passionate about
              </p>
              <div className="text-2xl xs:text-3xl lg:text-4xl font-bold text-cyan-600 dark:text-cyan-400 min-h-[3rem]">
                <TypeAnimation
                  sequence={interest}
                  speed={50}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="font-mono"
                />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Building scalable infrastructure and automating workflows to empower development teams. 
                Currently contributing to DevOps projects at <span className="font-semibold text-cyan-600 dark:text-cyan-400">Inexture Solutions</span>.
              </p>
            </div>
          </AnimatedWrapper>

          {/* Stats Section */}
          <AnimatedWrapper delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Social Links */}
          <AnimatedWrapper delay={0.45}>
            <div className="flex items-center gap-4 justify-start">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Connect with me:</p>
              <ul className="flex items-center gap-3">
                {contactInfo.map(({ id, link, name, icon, download }) => {
                  return (
                    <li key={id} className="group relative">
                      <a
                        href={link}
                        download={download}
                        target="_blank"
                        rel="noferrer"
                        aria-label={name}
                        className="social-icon"
                      >
                        <span className="group-hover:text-white transition-colors duration-300">
                          {icon}
                        </span>
                      </a>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap">
                        {name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimatedWrapper>

          {/* CTA Buttons */}
          <AnimatedWrapper delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="About"
                smooth
                duration={500}
                className="btn-primary group cursor-pointer inline-flex items-center justify-center gap-3 w-fit"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  Discover My Journey
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowDown className="rotate-0 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                to="Contact"
                smooth
                duration={500}
                className="btn-secondary group cursor-pointer inline-flex items-center justify-center gap-3 w-fit"
              >
                <span>Let's Collaborate</span>
                <span className="text-lg">🚀</span>
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
