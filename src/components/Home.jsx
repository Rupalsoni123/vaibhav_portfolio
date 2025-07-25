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
    { label: "Years Experience", value: "2+", icon: "⚡" },
    { label: "Projects Deployed", value: "15+", icon: "🚀" },
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
      className="relative pt-8 h-full min-h-screen w-full flex items-center hero-gradient bg-pattern overflow-hidden code-rain particles"
    >
      {/* Animated background elements - more masculine */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/15 via-indigo-700/10 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/10 via-cyan-500/15 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-32 w-20 h-20 border-2 border-cyan-500/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-blue-500/30 rotate-12 animate-bounce"></div>
        
        {/* Matrix-style lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="section gap-12 md:gap-8 md:justify-between items-center md:flex-row-reverse relative z-10">
        {/* Profile Image Section */}
        <div className="flex flex-col justify-center md:w-2/5 max-w-[380px]">
          <AnimatedWrapper delay={0.8} animateFrom="right">
            <div className="relative group">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Secondary glow */}
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <img
                src={Avatar}
                alt="Vaibhav Soni - DevOps Engineer"
                width="380"
                height="380"
                loading="eager"
                title="Vaibhav Soni - DevOps Engineer"
                className="relative rounded-full mx-auto w-full border-4 border-gray-700/50 dark:border-gray-600/50 shadow-2xl float-animation hover:scale-105 transition-transform duration-500 z-10"
              />
              
              {/* Floating tech badges around image */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce border border-cyan-400/50">
                <span className="neon-text">DevOps</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce delay-500 border border-purple-400/50">
                <span className="neon-text">AWS</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-600 to-red-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl animate-pulse border border-orange-400/50">
                K8s
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-8 justify-center text-gray-100 dark:text-gray-100 w-full md:w-3/5">
          <AnimatedWrapper delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for DevOps Opportunities
              </p>
              <h1 className="text-5xl xs:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-gray-100 dark:text-white">I'm</span>
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animatedHeading font-black">
                  Vaibhav Soni
                </span>
              </h1>
              <div className="flex flex-wrap gap-2 mt-4">
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
            <div className="space-y-4">
              <p className="text-xl xs:text-2xl lg:text-3xl font-bold text-gray-200 dark:text-gray-200">
                Specializing in
              </p>
              <div className="text-2xl xs:text-3xl lg:text-4xl font-bold text-cyan-400 dark:text-cyan-400 min-h-[4rem] neon-text">
                <TypeAnimation
                  sequence={interest}
                  speed={50}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="font-mono"
                />
              </div>
              <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl leading-relaxed">
                Building <span className="font-bold text-cyan-400">scalable infrastructure</span> and automating workflows to empower development teams. 
                Currently contributing to DevOps projects at <span className="font-bold text-blue-400">Inexture Solutions</span>.
              </p>
            </div>
          </AnimatedWrapper>

          {/* Enhanced Stats Section */}
          <AnimatedWrapper delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center p-6 content-card hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 dark:text-cyan-400 neon-text">{stat.value}</div>
                  <div className="text-sm text-gray-300 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Social Links */}
          <AnimatedWrapper delay={0.45}>
            <div className="flex items-center gap-6 justify-start">
              <p className="text-sm font-semibold text-gray-300 dark:text-gray-300 mr-2">Connect:</p>
              <ul className="flex items-center gap-4">
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
                        <span className="group-hover:text-white transition-colors duration-300 text-lg">
                          {icon}
                        </span>
                      </a>
                      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-gray-600/50">
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
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link
                to="About"
                smooth
                duration={500}
                className="btn-primary group cursor-pointer inline-flex items-center justify-center gap-3 w-fit"
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
                className="btn-secondary group cursor-pointer inline-flex items-center justify-center gap-3 w-fit"
              >
                <span>View Projects</span>
                <span className="text-lg group-hover:animate-bounce">⚡</span>
              </Link>
            </div>
          </AnimatedWrapper>

          {/* Achievement Banner */}
          <AnimatedWrapper delay={0.65}>
            <div className="mt-8 p-4 glass-card">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <strong className="text-cyan-400">240+</strong> Azure Resources Migrated
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <strong className="text-blue-400">70%</strong> Code Reduction
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  <strong className="text-purple-400">6</strong> AWS Accounts Managed
                </span>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-cyan-500/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-3 animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute -bottom-6 text-xs text-gray-400 whitespace-nowrap">Scroll Down</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
