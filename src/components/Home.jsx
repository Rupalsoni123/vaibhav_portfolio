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
    { name: "AWS", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "Terraform", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Kubernetes", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Docker", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" }
  ];

  return (
    <div
      name="Home"
      className="hero-gradient bg-pattern min-h-screen w-full flex items-center"
    >
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            
            <AnimatedWrapper delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for DevOps Opportunities
                </div>
                
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
                    <span className="block mb-2">I'm</span>
                    <span className="block neon-text animatedHeading bg-clip-text text-transparent font-black">
                      Vaibhav Soni
                    </span>
                  </h1>
                  
                  {/* Tech Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techHighlights.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.35}>
              <div className="space-y-6">
                <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  Specializing in
                </p>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-600 dark:text-cyan-400 min-h-[3rem] neon-text">
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
                  Building <span className="font-semibold text-cyan-600 dark:text-cyan-400 neon-text">scalable infrastructure</span> and automating workflows to empower development teams. 
                  Currently contributing to DevOps projects at <span className="font-semibold text-purple-600 dark:text-purple-400 neon-text">Inexture Solutions</span>.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Stats Section */}
            <AnimatedWrapper delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 glass-card hover:shadow-md transition-shadow duration-300 pulse-glow">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 neon-text">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedWrapper>

            {/* Social Links */}
            <AnimatedWrapper delay={0.45}>
              <div className="flex items-center gap-6 mb-8">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect:</p>
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
                          className="social-icon pulse-glow"
                        >
                          <span className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="About"
                  smooth
                  duration={500}
                  className="btn-primary cursor-pointer inline-flex items-center justify-center gap-3"
                >
                  <span>Explore My Journey</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="Projects"
                  smooth
                  duration={500}
                  className="btn-secondary cursor-pointer inline-flex items-center justify-center gap-3"
                >
                  <span>View Projects</span>
                  <span className="text-lg">⚡</span>
                </Link>
              </div>
            </AnimatedWrapper>

            {/* Achievement Banner */}
            <AnimatedWrapper delay={0.65}>
              <div className="mt-8 p-4 glass-card border border-cyan-500/20">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <strong className="text-cyan-600 dark:text-cyan-400 neon-text">240+</strong> Azure Resources Migrated
                  </span>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <strong className="text-purple-600 dark:text-purple-400 neon-text">70%</strong> Code Reduction
                  </span>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    <strong className="text-green-600 dark:text-green-400 neon-text">6</strong> AWS Accounts Managed
                  </span>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Profile Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <AnimatedWrapper delay={0.8} animateFrom="right">
              <div className="relative float-animation">
                {/* Neon glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl pulse-glow"></div>
                
                {/* Avatar container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50 pulse-glow">
                  <img
                    src={Avatar}
                    alt="Vaibhav Soni - DevOps Engineer"
                    loading="eager"
                    title="Vaibhav Soni - DevOps Engineer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Neon floating badges */}
                <div className="absolute -top-4 -right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg neon-text pulse-glow">
                  DevOps
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg neon-text pulse-glow">
                  AWS
                </div>
                <div className="absolute top-1/2 -right-6 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg neon-text pulse-glow">
                  K8s
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="About"
          smooth
          duration={500}
          className="cursor-pointer flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <span className="text-sm mb-2 neon-text">Scroll Down</span>
          <ArrowDown className="w-6 h-6 pulse-glow" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
