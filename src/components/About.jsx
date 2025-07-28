import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download } from "./Icons";
import resume from "../assets/resume.pdf";

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
            className="absolute text-neon-green opacity-20 font-mono text-xs animate-float-slow"
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Profile & Journey */}
          <div className="space-y-8">
            {/* System Information */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">i</span>
                </div>
                <h3 className="neon-text-blue font-cyber text-xl">SYSTEM_INFO</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {systemInfo.map((info, index) => (
                  <div key={index} className="cyber-card p-4 hover:border-neon-blue transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{info.icon}</span>
                      <span 
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{ 
                          backgroundColor: info.status === 'ACTIVE' ? 'rgba(0, 255, 65, 0.2)' :
                          info.status === 'ONLINE' ? 'rgba(0, 212, 255, 0.2)' :
                          info.status === 'GROWING' ? 'rgba(191, 0, 255, 0.2)' :
                          'rgba(255, 0, 128, 0.2)',
                          color: info.status === 'ACTIVE' ? '#00ff41' :
                          info.status === 'ONLINE' ? '#00d4ff' :
                          info.status === 'GROWING' ? '#bf00ff' :
                          '#ff0080'
                        }}
                      >
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

            {/* Professional Journey - Career Log */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">$</span>
                </div>
                <h3 className="neon-text-blue font-cyber text-xl">CAREER_LOG</h3>
              </div>

              <div className="space-y-6">
                {journey.map((phase, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline line */}
                    {index !== journey.length - 1 && (
                      <div 
                        className="absolute left-2 top-8 bottom-0 w-0.5" 
                        style={{ backgroundColor: 'rgba(0, 255, 65, 0.3)' }}
                      ></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-4 h-4 bg-black border-2 border-neon-green rounded-full flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full ${
                        phase.status === 'RUNNING' ? 'bg-neon-green animate-pulse' : 'bg-neon-blue'
                      }`}></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="neon-text font-mono text-sm font-bold">{phase.phase}</h4>
                        <span className="font-mono text-xs text-gray-400">{phase.year}</span>
                      </div>
                      <div 
                        className="font-mono text-xs text-neon-blue p-3 rounded border" 
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 212, 255, 0.3)' }}
                      >
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

            {/* Download Resume */}
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
          </div>

          {/* Right Column - Certifications & Tech Stack */}
          <div className="space-y-8">
            {/* Certifications */}
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
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-xs text-neon-green">{cert.id}</span>
                          <span 
                            className="font-mono text-xs px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: cert.level === 'PROFESSIONAL' ? 'rgba(191, 0, 255, 0.2)' :
                              cert.level === 'ASSOCIATE' ? 'rgba(0, 212, 255, 0.2)' :
                              'rgba(0, 255, 65, 0.2)',
                              color: cert.level === 'PROFESSIONAL' ? '#bf00ff' :
                              cert.level === 'ASSOCIATE' ? '#00d4ff' :
                              '#00ff41'
                            }}
                          >
                            {cert.level}
                          </span>
                        </div>
                        <h4 className="text-white font-mono text-sm font-bold mb-2">{cert.name}</h4>
                        <p className="text-gray-400 text-xs">{cert.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-mono text-xs text-gray-400">{cert.year}</div>
                        <div className="font-mono text-xs text-neon-green">{cert.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                  <span className="text-neon-green font-mono text-sm">⚙</span>
                </div>
                <h3 className="neon-text-blue font-cyber text-xl">TECH_STACK</h3>
              </div>

              <div className="space-y-6">
                <div className="font-mono text-sm text-neon-blue mb-4">$ ls -la /usr/local/skills/</div>
                
                {/* Primary Technologies */}
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-neon-purple mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                      CLOUD_PLATFORMS/
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['AWS', 'Azure', 'DigitalOcean'].map((tech, index) => (
                        <div
                          key={index}
                          className="font-mono text-xs text-white px-3 py-2 rounded border hover:border-neon-blue hover:text-neon-blue transition-colors duration-300 text-center"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 255, 65, 0.3)' }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-neon-purple mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                      DEVOPS_TOOLS/
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Terraform', 'Kubernetes', 'Docker', 'Jenkins'].map((tech, index) => (
                        <div
                          key={index}
                          className="font-mono text-xs text-white px-3 py-2 rounded border hover:border-neon-blue hover:text-neon-blue transition-colors duration-300 text-center"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 255, 65, 0.3)' }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-neon-purple mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                      MONITORING/
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'].map((tech, index) => (
                        <div
                          key={index}
                          className="font-mono text-xs text-white px-3 py-2 rounded border hover:border-neon-blue hover:text-neon-blue transition-colors duration-300 text-center"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 255, 65, 0.3)' }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-neon-purple mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                      PROGRAMMING/
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Python', 'Bash', 'JavaScript', 'TypeScript', 'YAML', 'JSON'].map((tech, index) => (
                        <div
                          key={index}
                          className="font-mono text-xs text-white px-3 py-2 rounded border hover:border-neon-blue hover:text-neon-blue transition-colors duration-300 text-center"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 255, 65, 0.3)' }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="border-t pt-4" style={{ borderColor: 'rgba(0, 255, 65, 0.3)' }}>
                  <div className="font-mono text-xs text-gray-400 space-y-1">
                    <div>Total: <span className="text-neon-green">25+</span> technologies loaded</div>
                    <div>Status: <span className="text-neon-blue">PRODUCTION_READY</span></div>
                    <div>Last Updated: <span className="text-neon-purple">2024-CURRENT</span></div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  <button className="cyber-button-secondary text-xs px-3 py-2 flex-1">
                    VIEW_ALL.sh
                  </button>
                  <button className="cyber-button-secondary text-xs px-3 py-2 flex-1">
                    SKILLS.json
                  </button>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
