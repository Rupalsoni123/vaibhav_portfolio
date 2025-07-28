import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/Avatars/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hackerSequence = [
    "root@vaibhav:~$ whoami",
    1000,
    "DevOps Engineer",
    1500,
    "root@vaibhav:~$ cat skills.txt",
    1000,
    "AWS | Azure | Kubernetes",
    1500,
    "root@vaibhav:~$ docker ps",
    1000,
    "Infrastructure as Code",
    1500,
    "root@vaibhav:~$ kubectl get pods",
    1000,
    "CI/CD Automation Expert",
    1500,
    "root@vaibhav:~$ terraform apply",
    1000,
    "Cloud Architecture Specialist",
    1500,
  ];

  const stats = [
    { 
      label: "YEARS_EXP", 
      value: "01+", 
      icon: "⚡", 
      description: "Professional Experience"
    },
    { 
      label: "PROJECTS", 
      value: "06+", 
      icon: "🚀", 
      description: "Deployed Successfully"
    },
    { 
      label: "TECH_STACK", 
      value: "25+", 
      icon: "⚙️", 
      description: "Technologies Mastered"
    },
    { 
      label: "CERTS", 
      value: "03", 
      icon: "🏆", 
      description: "Industry Certifications"
    }
  ];

  const techStack = [
    { name: "AWS", status: "ACTIVE", level: 95 },
    { name: "TERRAFORM", status: "ACTIVE", level: 90 },
    { name: "KUBERNETES", status: "ACTIVE", level: 85 },
    { name: "DOCKER", status: "ACTIVE", level: 92 },
    { name: "AZURE", status: "ACTIVE", level: 80 },
    { name: "CI/CD", status: "ACTIVE", level: 88 }
  ];

  return (
    <section className="min-h-screen matrix-bg relative overflow-hidden">
      {/* Matrix Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Matrix Characters */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green opacity-20 font-mono text-sm animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        <div className="min-h-screen flex items-center justify-center py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 w-full items-center max-w-7xl mx-auto">
            
            {/* Left Column - Terminal Interface */}
            <div className="space-y-8 order-2 lg:order-1">
              <AnimatedWrapper animation="fade-in" delay={0.2}>
                {/* Terminal Header */}
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                      vaibhav@devops-terminal
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {currentTime.toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <div className="terminal-content">
                    <div className="mb-6">
                      <div className="neon-text font-mono text-sm mb-2">
                        ┌─[vaibhav@ahmedabad]─[~/portfolio]
                      </div>
                      <div className="neon-text font-mono text-sm mb-4">
                        └──╼ $ ./introduce.sh
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="text-neon-green font-mono text-base lg:text-lg">
                          ╔══════════════════════════════════════╗
                        </div>
                        <div className="text-neon-green font-mono text-base lg:text-lg">
                          ║              VAIBHAV SONI            ║
                        </div>
                        <div className="text-neon-green font-mono text-base lg:text-lg">
                          ╚══════════════════════════════════════╝
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="font-mono text-sm">
                          <span className="text-neon-blue">[INFO]</span>
                          <span className="text-white ml-2">Initializing DevOps Engineer...</span>
                        </div>
                        <div className="font-mono text-sm">
                          <span className="text-neon-green">[SUCCESS]</span>
                          <span className="text-white ml-2">Location: Ahmedabad, India</span>
                        </div>
                        <div className="font-mono text-sm">
                          <span className="text-neon-green">[SUCCESS]</span>
                          <span className="text-white ml-2">Company: Inexture Solutions</span>
                        </div>
                        <div className="font-mono text-sm">
                          <span className="text-neon-purple">[EXEC]</span>
                          <span className="text-white ml-2">
                            <TypeAnimation
                              sequence={hackerSequence}
                              wrapper="span"
                              speed={50}
                              repeat={Infinity}
                              className="neon-text"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Action Buttons */}
              <AnimatedWrapper animation="slide-up" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="Projects"
                    smooth
                    duration={500}
                    className="cyber-button cursor-pointer inline-flex items-center justify-center gap-3 group"
                  >
                    <span>VIEW_PROJECTS.exe</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  
                  <a
                    href={contactInfo.find(item => item.name === "Resume")?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button-secondary cursor-pointer inline-flex items-center justify-center gap-3 group"
                  >
                    <span>DOWNLOAD_CV.pdf</span>
                    <span className="text-lg group-hover:animate-bounce">↓</span>
                  </a>
                </div>
              </AnimatedWrapper>

              {/* Tech Stack Status */}
              <AnimatedWrapper animation="slide-up" delay={0.8}>
                <div className="cyber-card p-6">
                  <div className="neon-text-blue font-mono text-sm mb-4 uppercase tracking-wider">
                    // SYSTEM STATUS
                  </div>
                  <div className="space-y-3">
                    {techStack.map((tech, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                          <span className="font-mono text-sm text-white">{tech.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-1000"
                              style={{ width: `${tech.level}%` }}
                            ></div>
                          </div>
                          <span className="font-mono text-xs text-neon-green">{tech.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Right Column - Avatar & Stats */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Avatar Section */}
              <AnimatedWrapper animation="scale-in" delay={0.4}>
                <div className="flex justify-center items-center w-full">
                  <div className="relative">
                    {/* Holographic Effect */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple opacity-20 rounded-full blur-2xl animate-pulse-neon"></div>
                    
                    {/* Avatar Container */}
                    <div className="relative z-10">
                      <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-neon-green shadow-neon-lg hover:border-neon-blue transition-all duration-500 mx-auto">
                        <img
                          src={Avatar}
                          alt="Vaibhav Soni - DevOps Engineer"
                          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                          loading="eager"
                        />
                      </div>
                      
                      {/* Floating Status Indicators */}
                      <div className="absolute -top-4 -right-4 cyber-card px-3 py-1 z-20">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                          <span className="font-mono text-xs text-neon-green">ONLINE</span>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-4 -left-4 cyber-card px-3 py-1 z-20">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-neon-blue">DEVOPS_ENG</span>
                          <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Stats Grid */}
              <AnimatedWrapper animation="slide-up" delay={1.0}>
                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="stat-card group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="stat-icon group-hover:shadow-neon mx-auto">
                        {stat.icon}
                      </div>
                      <div className="neon-text text-2xl font-bold font-mono mb-2 text-center">
                        {stat.value}
                      </div>
                      <div className="text-white font-mono text-xs uppercase tracking-wider mb-1 text-center">
                        {stat.label}
                      </div>
                      <div className="text-gray-400 font-mono text-xs text-center leading-tight">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatedWrapper animation="fade-in" delay={1.2}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link
              to="About"
              smooth
              duration={500}
              className="flex flex-col items-center gap-3 text-neon-green hover:text-neon-blue transition-colors duration-300 cursor-pointer group"
            >
              <div className="font-mono text-xs uppercase tracking-wider">SCROLL_DOWN</div>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative">
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
