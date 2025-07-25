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
    { label: "Years Experience", value: "1", icon: "⚡", color: "from-yellow-400 to-orange-500" },
    { label: "Projects Deployed", value: "4+", icon: "🚀", color: "from-blue-400 to-purple-500" },
    { label: "Technologies", value: "20+", icon: "⚙️", color: "from-green-400 to-cyan-500" },
    { label: "Certifications", value: "3", icon: "🏆", color: "from-purple-400 to-pink-500" }
  ];

  const techHighlights = [
    { name: "AWS", gradient: "from-orange-400 to-red-500", shadow: "shadow-orange-500/25" },
    { name: "Terraform", gradient: "from-purple-500 to-indigo-600", shadow: "shadow-purple-500/25" },
    { name: "Kubernetes", gradient: "from-blue-500 to-cyan-500", shadow: "shadow-blue-500/25" },
    { name: "Docker", gradient: "from-cyan-500 to-teal-500", shadow: "shadow-cyan-500/25" }
  ];

  return (
    <div
      name="Home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-cyan-400/20 dark:from-blue-500/10 dark:via-purple-500/8 dark:to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-blue-400/20 dark:from-purple-500/10 dark:via-pink-500/8 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/15 via-blue-400/20 to-purple-400/15 dark:from-cyan-500/8 dark:via-blue-500/10 dark:to-purple-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-32 w-20 h-20 border-2 border-blue-400/30 dark:border-blue-500/20 rotate-45 animate-spin opacity-60" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-purple-400/30 dark:border-purple-500/20 rotate-12 animate-bounce opacity-60"></div>
        
        {/* Simple dot pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute top-20 left-32 w-1 h-1 bg-purple-400 rounded-full"></div>
          <div className="absolute top-32 left-16 w-1 h-1 bg-cyan-400 rounded-full"></div>
          <div className="absolute top-40 left-48 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute top-16 right-20 w-1 h-1 bg-purple-400 rounded-full"></div>
          <div className="absolute top-36 right-40 w-1 h-1 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-1 h-1 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-1 h-1 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Content Section */}
            <div className="order-2 lg:order-1 space-y-8">
              
              <AnimatedWrapper delay={0.2}>
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-700 shadow-lg shadow-green-500/10">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="font-semibold text-sm">Available for DevOps Opportunities</span>
                  </div>
                  
                  {/* Main Heading */}
                  <div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
                      <span className="block text-gray-800 dark:text-white mb-2">I'm</span>
                      <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent font-black">
                        Vaibhav Soni
                      </span>
                    </h1>
                    
                    {/* Tech Highlights */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {techHighlights.map((tech, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 bg-gradient-to-r ${tech.gradient} text-white rounded-lg font-semibold text-sm shadow-lg ${tech.shadow} hover:scale-105 transform transition-all duration-300 cursor-default`}
                        >
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.35}>
                <div className="space-y-6">
                  <p className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300">
                    Specializing in
                  </p>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent min-h-[4rem]">
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
                    Building <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">scalable infrastructure</span> and automating workflows to empower development teams. 
                    Currently contributing to DevOps projects at <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Inexture Solutions</span>.
                  </p>
                </div>
              </AnimatedWrapper>

              {/* Enhanced Stats Section */}
              <AnimatedWrapper delay={0.4}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
                  {stats.map((stat, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                        <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Social Links */}
              <AnimatedWrapper delay={0.45}>
                <div className="flex items-center gap-6 mb-8">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Connect:</p>
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
                            className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent group backdrop-blur-sm"
                          >
                            <span className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300 text-lg">
                              {icon}
                            </span>
                          </a>
                          <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="About"
                    smooth
                    duration={500}
                    className="group cursor-pointer inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative group-hover:-translate-x-1 transition-transform duration-300">
                      Explore My Journey
                    </span>
                    <ArrowDown className="relative w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </Link>
                  
                  <Link
                    to="Projects"
                    smooth
                    duration={500}
                    className="group cursor-pointer inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white font-bold rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
                  >
                    <span>View Projects</span>
                    <span className="text-xl group-hover:animate-bounce">⚡</span>
                  </Link>
                </div>
              </AnimatedWrapper>

              {/* Achievement Banner */}
              <AnimatedWrapper delay={0.65}>
                <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">240+</strong> Azure Resources Migrated
                      </span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">70%</strong> Code Reduction
                      </span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">6</strong> AWS Accounts Managed
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Profile Image Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <AnimatedWrapper delay={0.8} animateFrom="right">
                <div className="relative group">
                  {/* Enhanced glow effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-cyan-400/40 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Avatar container with perfect circle */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-700/80 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                    <img
                      src={Avatar}
                      alt="Vaibhav Soni - DevOps Engineer"
                      loading="eager"
                      title="Vaibhav Soni - DevOps Engineer"
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Enhanced floating badges */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce border-2 border-white/50 backdrop-blur-sm">
                    DevOps
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce delay-500 border-2 border-white/50 backdrop-blur-sm">
                    AWS
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl animate-pulse border-2 border-white/50 backdrop-blur-sm">
                    K8s
                  </div>
                  
                  {/* Additional decorative elements */}
                  <div className="absolute top-10 -left-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute bottom-10 -right-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-ping delay-1000"></div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
