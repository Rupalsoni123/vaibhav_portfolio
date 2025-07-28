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
    { label: "Years Experience", value: "1+", icon: "⚡", color: "from-primary-500 to-primary-600" },
    { label: "Projects Deployed", value: "4+", icon: "🚀", color: "from-accent-500 to-accent-600" },
    { label: "Technologies", value: "20+", icon: "⚙️", color: "from-warning-500 to-warning-600" },
    { label: "Certifications", value: "3", icon: "🏆", color: "from-purple-500 to-purple-600" }
  ];

  const techHighlights = [
    { name: "AWS", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", icon: "☁️" },
    { name: "Terraform", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", icon: "🏗️" },
    { name: "Kubernetes", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", icon: "⚓" },
    { name: "Docker", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300", icon: "🐳" }
  ];

  return (
    <section
      name="Home"
      className="hero-gradient min-h-screen w-full flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main Content Container */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatedWrapper animation="fade-in" delay={0.2}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
                  Available for DevOps opportunities
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-text font-signature text-6xl lg:text-8xl">
                    Vaibhav Soni
                  </span>
                </h1>
                
                <div className="text-xl lg:text-2xl text-secondary-600 dark:text-secondary-300 font-medium">
                  <span>Passionate about </span>
                  <TypeAnimation
                    sequence={interest}
                    wrapper="span"
                    speed={50}
                    className="gradient-text font-semibold"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slide-up" delay={0.4}>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-2xl">
                DevOps Engineer based in Ahmedabad, India, specializing in cloud-native technologies, 
                infrastructure automation, and building scalable, resilient systems that empower 
                development teams to deliver faster and more reliably.
              </p>
            </AnimatedWrapper>

            {/* Tech Highlights */}
            <AnimatedWrapper animation="slide-up" delay={0.6}>
              <div className="flex flex-wrap gap-3">
                {techHighlights.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`px-4 py-2 rounded-xl ${tech.color} font-medium text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span>{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </AnimatedWrapper>

            {/* Action Buttons */}
            <AnimatedWrapper animation="slide-up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="Projects"
                  smooth
                  duration={500}
                  className="btn-primary inline-flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>View My Work</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <a
                  href={contactInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </AnimatedWrapper>

            {/* Stats */}
            <AnimatedWrapper animation="slide-up" delay={1.0}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-secondary-800 dark:text-secondary-200">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <AnimatedWrapper animation="scale-in" delay={0.6}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full opacity-30 animate-spin-slow"></div>
                
                {/* Avatar Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-secondary-800 shadow-2xl hover:scale-105 transition-transform duration-500">
                    <img
                      src={Avatar}
                      alt="Vaibhav Soni - DevOps Engineer"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-bounce-slow">
                    ☁️
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                    ⚙️
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatedWrapper animation="fade-in" delay={1.2}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link
              to="About"
              smooth
              duration={500}
              className="flex flex-col items-center gap-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
              </div>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Home;
        