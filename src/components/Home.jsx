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
    "System Administration",
    2500,
    "Monitoring & Observability",
    2500,
  ];

  const stats = [
    { label: "Years Experience", value: "1", icon: "⚡" },
    { label: "Projects Deployed", value: "4+", icon: "🚀" },
    { label: "Technologies", value: "20+", icon: "⚙️" },
    { label: "Certifications", value: "3", icon: "🏆" }
  ];

  const techHighlights = [
    { name: "AWS", color: "from-orange-500 to-yellow-500" },
    { name: "Terraform", color: "from-purple-500 to-indigo-500" },
    { name: "Kubernetes", color: "from-blue-500 to-cyan-500" },
    { name: "Docker", color: "from-blue-600 to-blue-400" }
  ];

  return (
    <div
      name="Home"
      className="relative pt-20 min-h-screen w-full flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs - better contrast for light mode */}
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-600/30 dark:from-cyan-500/20 dark:via-blue-600/15 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-500/30 via-indigo-600/20 to-cyan-400/30 dark:from-purple-600/15 dark:via-indigo-700/10 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[700px] md:h-[700px] bg-gradient-to-br from-blue-500/20 via-cyan-400/30 to-purple-500/20 dark:from-blue-600/10 dark:via-cyan-500/15 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric shapes - better visibility */}
        <div className="hidden md:block absolute top-32 right-32 w-20 h-20 border-2 border-cyan-600/40 dark:border-cyan-500/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="hidden md:block absolute bottom-32 left-32 w-16 h-16 border-2 border-blue-600/40 dark:border-blue-500/30 rotate-12 animate-bounce"></div>
        
        {/* Matrix-style lines - improved contrast */}
        <div className="hidden lg:block absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-600/30 dark:via-cyan-500/20 to-transparent"></div>
        <div className="hidden lg:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-600/30 dark:via-blue-500/20 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="section gap-8 md:gap-12 lg:gap-16 md:justify-between items-center md:flex-row-reverse relative z-10">
        
        {/* Profile Image Section */}
        <div className="flex flex-col justify-center items-center md:w-2/5 w-full max-w-[320px] md:max-w-[380px] mx-auto md:mx-0">
          <AnimatedWrapper delay={0.8} animateFrom="right">
            <div className="relative group">
              {/* Glowing ring effect - improved for light mode */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-2xl opacity-30 dark:opacity-40 group-hover:opacity-50 dark:group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Secondary glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Avatar with proper circular shape */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-700/50 shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10">
                <img
                  src={Avatar}
                  alt="Vaibhav Soni - DevOps Engineer"
                  loading="eager"
                  title="Vaibhav Soni - DevOps Engineer"
                  className="w-full h-full object-cover object-center float-animation"
                />
              </div>
              
              {/* Floating tech badges around image */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-xl animate-bounce border border-cyan-400/50">
                <span className="neon-text">DevOps</span>
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-xl animate-bounce delay-500 border border-purple-400/50">
                <span className="neon-text">AWS</span>
              </div>
              <div className="absolute top-1/2 -right-6 md:-right-8 bg-gradient-to-r from-orange-600 to-red-700 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold shadow-xl animate-pulse border border-orange-400/50">
                K8s
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 md:gap-8 justify-center w-full md:w-3/5 text-center md:text-left">
          
          <AnimatedWrapper delay={0.2}>
            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for DevOps Opportunities
              </p>
              <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-gray-800 dark:text-gray-100">I'm</span>
                <span className="block text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text animatedHeading font-black">
                  Vaibhav Soni
                </span>
              </h1>
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                {techHighlights.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${tech.color} text-white shadow-lg hover:scale-105 transition-transform duration-300`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.35}>
            <div className="space-y-3 md:space-y-4">
              <p className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200">
                Specializing in
              </p>
              <div className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-600 dark:text-cyan-400 min-h-[3rem] md:min-h-[4rem] neon-text">
                <TypeAnimation
                  sequence={interest}
                  speed={50}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="font-mono"
                />
              </div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
                Building <span className="font-bold text-cyan-600 dark:text-cyan-400">scalable infrastructure</span> and automating workflows to empower development teams. 
                Currently contributing to DevOps projects at <span className="font-bold text-blue-600 dark:text-blue-400">Inexture Solutions</span>.
              </p>
            </div>
          </AnimatedWrapper>

          {/* Enhanced Stats Section */}
          <AnimatedWrapper delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-6 md:my-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center p-4 md:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-2xl md:text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 neon-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Social Links */}
          <AnimatedWrapper delay={0.45}>
            <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-start flex-wrap">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mr-2">Connect:</p>
              <ul className="flex items-center gap-3 md:gap-4">
                {contactInfo.map(({ id, link, name, icon, download }) => {
                  return (
                    <li key={id} className="group relative">
                      <a
                        href={link}
                        download={download}
                        target="_blank"
                        rel="noferrer"
                        aria-label={name}
                        className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-xl border border-gray-200/50 dark:border-gray-600/50 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-700 hover:text-white hover:border-cyan-500/50 backdrop-blur-sm"
                      >
                        <span className="group-hover:text-white transition-colors duration-300 text-lg text-gray-600 dark:text-gray-300">
                          {icon}
                        </span>
                      </a>
                      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-gray-600/50 z-20">
                        {name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimatedWrapper>

          {/* Enhanced CTA Buttons */}
          <AnimatedWrapper delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6 justify-center md:justify-start">
              <Link
                to="About"
                smooth
                duration={500}
                className="group cursor-pointer inline-flex items-center justify-center gap-3 w-full sm:w-fit px-8 py-3 bg-gradient-to-r from-gray-800 via-cyan-600 to-blue-700 text-white font-bold rounded-xl shadow-xl border border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-gray-700 hover:via-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 active:scale-95 relative overflow-hidden hover:border-cyan-400/50 hover:shadow-cyan-500/30"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  Explore My Journey
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowDown className="rotate-0 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                to="Projects"
                smooth
                duration={500}
                className="group cursor-pointer inline-flex items-center justify-center gap-3 w-full sm:w-fit px-8 py-3 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 font-bold rounded-xl shadow-xl border border-gray-300/50 dark:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 active:scale-95 backdrop-blur-sm"
              >
                <span>View Projects</span>
                <span className="text-lg group-hover:animate-bounce">⚡</span>
              </Link>
            </div>
          </AnimatedWrapper>

          {/* Achievement Banner */}
          <AnimatedWrapper delay={0.65}>
            <div className="mt-6 md:mt-8 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <strong className="text-cyan-600 dark:text-cyan-400">240+</strong> Azure Resources Migrated
                </span>
                <span className="hidden sm:block text-gray-400">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <strong className="text-blue-600 dark:text-blue-400">70%</strong> Code Reduction
                </span>
                <span className="hidden sm:block text-gray-400">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  <strong className="text-purple-600 dark:text-purple-400">6</strong> AWS Accounts Managed
                </span>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      {/* Enhanced scroll indicator - now visible */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-cyan-600/60 dark:border-cyan-500/50 rounded-full flex justify-center relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2 md:mt-3 animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute -bottom-8 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap font-medium">Scroll Down</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
