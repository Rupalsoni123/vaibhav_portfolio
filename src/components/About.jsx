import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download, Award, MapPin, Calendar, Code } from "./Icons";
import resume from "../assets/resume.pdf";
import techStack from "../data/techStack";

const About = () => {
  const systemInfo = [
    {
      icon: "🏆",
      label: "CERTIFICATIONS",
      value: "03",
      description: "Industry Validated",
      status: "ACTIVE"
    },
    {
      icon: "📍",
      label: "LOCATION",
      value: "AHMEDABAD",
      description: "Gujarat, India",
      status: "ONLINE"
    },
    {
      icon: "⚡",
      label: "EXPERIENCE",
      value: "01+ YEAR",
      description: "Professional DevOps",
      status: "GROWING"
    },
    {
      icon: "🏢",
      label: "COMPANY",
      value: "INEXTURE",
      description: "Solutions Pvt Ltd",
      status: "EMPLOYED"
    }
  ];

  const certifications = [
    {
      id: "CERT_001",
      name: "HashiCorp Terraform Associate (003)",
      year: "2024",
      status: "VERIFIED",
      level: "ASSOCIATE",
      description: "Infrastructure as Code expertise"
    },
    {
      id: "CERT_002", 
      name: "AWS Certified Cloud Practitioner",
      year: "2023",
      status: "VERIFIED",
      level: "FOUNDATIONAL",
      description: "Cloud fundamentals and services"
    },
    {
      id: "CERT_003",
      name: "Red Hat Certified System Administrator",
      year: "2022", 
      status: "VERIFIED",
      level: "PROFESSIONAL",
      description: "Linux system administration"
    }
  ];

  const journey = [
    {
      phase: "INITIALIZATION",
      year: "2022",
      command: "sudo systemctl start career.service",
      description: "Started with Linux system administration, earned RHCSA certification",
      status: "COMPLETED"
    },
    {
      phase: "CLOUD_MIGRATION", 
      year: "2023",
      command: "aws configure --profile devops-engineer",
      description: "Transitioned to cloud technologies, earned AWS Cloud Practitioner",
      status: "COMPLETED"
    },
    {
      phase: "INFRASTRUCTURE_CODE",
      year: "2024", 
      command: "terraform init && terraform apply",
      description: "Specialized in Terraform and infrastructure automation",
      status: "COMPLETED"
    },
    {
      phase: "PRODUCTION_READY",
      year: "CURRENT",
      command: "kubectl apply -f devops-engineer.yaml",
      description: "Contributing to enterprise DevOps projects at Inexture Solutions",
      status: "RUNNING"
    }
  ];

  return (
    <section name="About" className="section-cyber matrix-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Code Snippets */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/20 font-mono text-xs animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['kubectl', 'terraform', 'docker', 'aws', 'azure'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
          <div className="text-center mb-16">
            <div className="terminal-window max-w-2xl mx-auto">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                  about-vaibhav.sh
                </div>
              </div>
              <div className="terminal-content">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-neon-blue">$ cat /proc/engineer/info</div>
                  <div className="text-white">Name: Vaibhav Soni</div>
                  <div className="text-white">Role: DevOps Engineer</div>
                  <div className="text-white">Status: <span className="text-neon-green">ACTIVE</span></div>
                  <div className="text-neon-blue">$ ./load_profile.sh --verbose</div>
                  <div className="text-neon-green">Loading professional profile...</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Profile & Journey */}
          <div className="space-y-8">
            {/* System Information */}
            <AnimatedWrapper animation="slide-right" delay={0.4}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">i</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">SYSTEM_INFO</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {systemInfo.map((info, index) => (
                    <div key={index} className="cyber-card p-4 hover:border-neon-blue transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{info.icon}</span>
                        <span className={`font-mono text-xs px-2 py-1 rounded ${
                          info.status === 'ACTIVE' ? 'bg-neon-green/20 text-neon-green' :
                          info.status === 'ONLINE' ? 'bg-neon-blue/20 text-neon-blue' :
                          info.status === 'GROWING' ? 'bg-neon-purple/20 text-neon-purple' :
                          'bg-neon-pink/20 text-neon-pink'
                        }`}>
                          {info.status}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-gray-400 mb-1">{info.label}</div>
                      <div className="neon-text font-mono text-sm font-bold mb-1">{info.value}</div>
                      <div className="font-mono text-xs text-gray-500">{info.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Professional Journey */}
            <AnimatedWrapper animation="slide-right" delay={0.6}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">$</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">CAREER_LOG</h3>
                </div>

                <div className="space-y-4">
                  {journey.map((phase, index) => (
                    <div key={index} className="border-l-2 border-neon-green/30 pl-6 pb-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-black border-2 border-neon-green rounded-full flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${
                          phase.status === 'RUNNING' ? 'bg-neon-green animate-pulse' : 'bg-neon-blue'
                        }`}></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="neon-text font-mono text-sm font-bold">{phase.phase}</h4>
                          <span className="font-mono text-xs text-gray-400">{phase.year}</span>
                        </div>
                        <div className="font-mono text-xs text-neon-blue bg-black/50 p-2 rounded border border-neon-blue/30">
                          $ {phase.command}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                        <div className={`font-mono text-xs ${
                          phase.status === 'RUNNING' ? 'text-neon-green' : 'text-neon-blue'
                        }`}>
                          [{phase.status}]
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Download Resume */}
            <AnimatedWrapper animation="slide-right" delay={0.8}>
              <div className="text-center">
                <a
                  href={resume}
                  download="Vaibhav_Soni_DevOps_Resume.pdf"
                  className="cyber-button inline-flex items-center gap-3 group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>DOWNLOAD_RESUME.pdf</span>
                </a>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Column - Certifications & Skills */}
          <div className="space-y-8">
            {/* Certifications */}
            <AnimatedWrapper animation="slide-left" delay={0.4}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">🏆</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">CERTIFICATIONS</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="cyber-card p-4 hover:border-neon-blue transition-colors duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs text-neon-green">{cert.id}</span>
                            <span className={`font-mono text-xs px-2 py-1 rounded ${
                              cert.level === 'PROFESSIONAL' ? 'bg-neon-purple/20 text-neon-purple' :
                              cert.level === 'ASSOCIATE' ? 'bg-neon-blue/20 text-neon-blue' :
                              'bg-neon-green/20 text-neon-green'
                            }`}>
                              {cert.level}
                            </span>
                          </div>
                          <h4 className="text-white font-mono text-sm font-bold mb-1">{cert.name}</h4>
                          <p className="text-gray-400 text-xs mb-2">{cert.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-xs text-gray-400">{cert.year}</div>
                          <div className="font-mono text-xs text-neon-green">{cert.status}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Tech Stack Preview */}
            <AnimatedWrapper animation="slide-left" delay={0.6}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">⚙</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">TECH_STACK</h3>
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-sm text-neon-blue mb-4">$ ls -la /usr/local/skills/</div>
                  <div className="grid grid-cols-2 gap-2">
                    {techStack.slice(0, 8).map((tech, index) => (
                      <div
                        key={index}
                        className="font-mono text-xs text-white bg-black/50 px-3 py-2 rounded border border-neon-green/30 hover:border-neon-green hover:text-neon-green transition-colors duration-300"
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                  <div className="font-mono text-xs text-gray-400 mt-4">
                    Total: {techStack.length} technologies loaded
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Contact CTA */}
            <AnimatedWrapper animation="slide-left" delay={0.8}>
              <div className="cyber-card p-6 text-center border-2 border-neon-blue">
                <h4 className="neon-text-blue font-cyber text-xl mb-4">
                  INITIATE_COLLABORATION
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                  Ready to discuss your next DevOps project? Let's build something amazing together.
                </p>
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="cyber-button-secondary inline-flex items-center gap-2"
                >
                  <span>SEND_MESSAGE.sh</span>
                  <span className="text-lg">📡</span>
                </a>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   