import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import AnimatedWrapper from "./ui/AnimatedWrapper";

import { ArrowDown } from "./Icons";
import Avatar from "../assets/profile.jpg";
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
    { 
      label: "Years Experience", 
      value: "1+", 
      icon: "⚡", 
      description: "Professional DevOps Experience"
    },
    { 
      label: "Projects Deployed", 
      value: "4+", 
      icon: "🚀", 
      description: "Successful Infrastructure Projects"
    },
    { 
      label: "Technologies", 
      value: "20+", 
      icon: "⚙️", 
      description: "DevOps Tools & Platforms"
    },
    { 
      label: "Certifications", 
      value: "3", 
      icon: "🏆", 
      description: "Industry Certifications"
    }
  ];

  const techStack = [
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
    { name: "Terraform", icon: "🏗️", color: "from-purple-400 to-purple-600" },
    { name: "Kubernetes", icon: "⚓", color: "from-blue-400 to-blue-600" },
    { name: "Docker", icon: "🐳", color: "from-cyan-400 to-cyan-600" },
    { name: "Jenkins", icon: "🔧", color: "from-green-400 to-green-600" },
    { name: "Ansible", icon: "🎯", color: "from-red-400 to-red-600" }
  ];

  return (
    <div
      name="Home"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-32 w-20 h-20 border-2 border-primary-400/30 rotate-45 animate-spin opacity-60" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-purple-400/30 rotate-12 animate-bounce opacity-60"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary-400 rounded-full opacity-30"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Section */}
            <div className="order-2 lg:order-1 space-y-8">
              
              {/* Status Badge */}
              <AnimatedWrapper delay={0.2}>
                <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="font-semibold text-sm text-green-700 dark:text-green-300">
                    Available for DevOps Opportunities
                  </span>
                </div>
              </AnimatedWrapper>
              
              {/* Main Heading */}
              <AnimatedWrapper delay={0.3}>
                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow">
                    <span className="block text-secondary-800 dark:text-white mb-2">
                      Hi, I'm
                    </span>
                    <span className="block text-gradient font-black">
                      Vaibhav Soni
                    </span>
                  </h1>
                  
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className={`group px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-default`}
                      >
                        <span className="mr-2 group-hover:animate-bounce inline-block">{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Specialization */}
              <AnimatedWrapper delay={0.4}>
                <div className="space-y-6">
                  <p className="text-2xl sm:text-3xl font-bold text-secondary-700 dark:text-secondary-300">
                    Specializing in
                  </p>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-blue min-h-[4rem]">
                    <TypeAnimation
                      sequence={interest}
                      speed={50}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="font-mono"
                    />
                  </div>
                  <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl leading-relaxed">
                    Building <span className="font-bold text-gradient">scalable infrastructure</span> and automating workflows to empower development teams. 
                    Currently contributing to DevOps projects at <span className="font-bold text-gradient-purple">Inexture Solutions</span>.
                  </p>
                </div>
              </AnimatedWrapper>

              {/* Stats Grid */}
              <AnimatedWrapper delay={0.5}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative card-gradient p-6 rounded-2xl text-center hover:scale-105 transform transition-all duration-300">
                        <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                        <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-2">{stat.label}</div>
                        <div className="text-xs text-secondary-500 dark:text-secondary-500">{stat.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Social Links */}
              <AnimatedWrapper delay={0.6}>
                <div className="flex items-center gap-6">
                  <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">Connect:</p>
                  <div className="flex items-center gap-4">
                    {contactInfo.map(({ id, link, name, icon, download }) => (
                      <a
                        key={id}
                        href={link}
                        download={download}
                        target="_blank"
                        rel="noferrer"
                        aria-label={name}
                        className="group relative w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-600"
                      >
                        <span className="text-secondary-600 dark:text-secondary-400 group-hover:text-white transition-colors duration-300 text-lg">
                          {icon}
                        </span>
                        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 glass text-secondary-800 dark:text-secondary-200 text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                          {name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* CTA Buttons */}
              <AnimatedWrapper delay={0.7}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="About"
                    smooth
                    duration={500}
                    className="btn-primary cursor-pointer inline-flex items-center justify-center gap-3"
                  >
                    <span>Explore My Journey</span>
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </Link>
                  
                  <Link
                    to="Projects"
                    smooth
                    duration={500}
                    className="btn-secondary cursor-pointer inline-flex items-center justify-center gap-3"
                  >
                    <span>View Projects</span>
                    <span className="text-xl group-hover:animate-bounce">⚡</span>
                  </Link>
                </div>
              </AnimatedWrapper>

              {/* Achievement Banner */}
              <AnimatedWrapper delay={0.8}>
                <div className="card-gradient p-6 rounded-2xl">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        <strong className="text-gradient">240+</strong> Azure Resources Migrated
                      </span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-secondary-300 dark:bg-secondary-600"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        <strong className="text-gradient-blue">70%</strong> Code Reduction
                      </span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-secondary-300 dark:bg-secondary-600"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        <strong className="text-gradient-purple">6</strong> AWS Accounts Managed
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Profile Image Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <AnimatedWrapper delay={0.9} animateFrom="right">
                <div className="relative group">
                  {/* Glow Effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-glow"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/40 via-purple-400/40 to-cyan-400/40 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Avatar Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/80 dark:border-secondary-700/80 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                    <img
                      src={Avatar}
                      alt="Vaibhav Soni - DevOps Engineer"
                      loading="eager"
                      title="Vaibhav Soni - DevOps Engineer"
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay for better image quality */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute -top-6 -right-6 glass px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce border border-white/50">
                    <span className="text-gradient">DevOps</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 glass px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce border border-white/50" style={{ animationDelay: '0.5s' }}>
                    <span className="text-gradient-blue">AWS</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 glass px-3 py-1 rounded-full text-xs font-bold shadow-xl animate-pulse border border-white/50">
                    <span className="text-gradient-purple">K8s</span>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-10 -left-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute bottom-10 -right-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-600/60 dark:border-primary-500/50 rounded-full flex justify-center relative glass">
          <div className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 animate-pulse shadow-lg shadow-primary-400/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
