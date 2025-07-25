import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download, Award, MapPin, Calendar, Code } from "./Icons";
import resume from "../assets/resume.pdf";
import techStack from "../data/techStack";

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "HashiCorp Terraform Associate, AWS Cloud Practitioner, RHCSA",
      gradient: "from-yellow-400 to-orange-500",
      stats: "3 Certifications"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in Ahmedabad",
      description: "Contributing to DevOps projects at Inexture Solutions",
      gradient: "from-green-400 to-emerald-500",
      stats: "India"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "1+ Years Experience",
      description: "Hands-on experience with cloud-native technologies",
      gradient: "from-blue-400 to-cyan-500",
      stats: "Professional"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack DevOps",
      description: "From infrastructure to deployment automation",
      gradient: "from-purple-400 to-pink-500",
      stats: "End-to-End"
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "HashiCorp Certified Terraform Associate (003)",
      year: "2024",
      description: "Infrastructure as Code expertise"
    },
    {
      icon: "☁️",
      title: "AWS Certified Cloud Practitioner",
      year: "2023",
      description: "Cloud fundamentals and services"
    },
    {
      icon: "🐧",
      title: "Red Hat Certified System Administrator (RHCSA)",
      year: "2022",
      description: "Linux system administration"
    },
    {
      icon: "🚀",
      title: "4+ Successful Project Deployments",
      year: "2024",
      description: "Production infrastructure projects"
    },
    {
      icon: "⚡",
      title: "70% Deployment Time Reduction",
      year: "2024",
      description: "Through automation and optimization"
    },
    {
      icon: "🔧",
      title: "Multi-Cloud Environment Expertise",
      year: "2024",
      description: "AWS, Azure, DigitalOcean experience"
    }
  ];

  const skills = [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "DigitalOcean"] },
    { category: "Infrastructure as Code", items: ["Terraform", "Terragrunt", "AWS CDK"] },
    { category: "Container Orchestration", items: ["Kubernetes", "Docker", "Helm"] },
    { category: "CI/CD & Automation", items: ["GitHub Actions", "GitLab CI/CD", "Jenkins"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack"] },
    { category: "Programming", items: ["Python", "Bash", "TypeScript"] }
  ];

  return (
    <div
      name="About"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom section-padding">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <AnimatedWrapper>
              <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full shadow-lg mb-8">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm text-purple-700 dark:text-purple-300">About Me</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow mb-8">
                DevOps Engineer &{" "}
                <span className="text-gradient">Cloud Architect</span>
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
                Passionate about building scalable infrastructure and automating workflows to empower development teams with cutting-edge DevOps solutions
              </p>
            </AnimatedWrapper>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column - Story & Highlights */}
            <div className="space-y-12">
              
              {/* My Story */}
              <AnimatedWrapper delay={0.2}>
                <div className="card-gradient p-8 rounded-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      Aspiring DevOps Engineer based in Ahmedabad, India, currently contributing to DevOps related projects at{" "}
                      <span className="font-bold text-gradient">Inexture Solutions</span>. 
                      I'm passionate about streamlining workflows, embracing cloud-native technologies, and building resilient, 
                      scalable infrastructure that empowers development teams to deliver faster and more reliably.
                    </p>
                    
                    <p>
                      Despite coming from a non-CS academic background, I have gained extensive experience through real-world projects, 
                      industry certifications, and continuous learning. I believe in always learning, thinking creatively, and working 
                      together to solve complex infrastructure challenges.
                    </p>

                    <p>
                      My expertise spans across cloud platforms, containerization, infrastructure as code, and CI/CD automation, 
                      with a strong focus on creating efficient, secure, and maintainable systems that scale with business needs.
                    </p>
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Highlights Grid */}
              <AnimatedWrapper delay={0.3}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-purple-600/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative card-gradient p-6 rounded-2xl hover:scale-105 transform transition-all duration-300">
                        <div className={`w-14 h-14 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{highlight.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{highlight.description}</p>
                        <div className="text-xs font-semibold text-gradient">{highlight.stats}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Download Resume */}
              <AnimatedWrapper delay={0.4}>
                <div className="text-center lg:text-left">
                  <a
                    href={resume}
                    download="Vaibhav_Soni_Resume.pdf"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Right Column - Achievements & Skills */}
            <div className="space-y-12">
              
              {/* Achievements Timeline */}
              <AnimatedWrapper delay={0.5}>
                <div className="card-gradient p-8 rounded-3xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">Key Achievements</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-secondary-800 dark:text-white group-hover:text-gradient transition-colors duration-300">
                              {achievement.title}
                            </h4>
                            <span className="text-xs font-semibold text-gradient px-2 py-1 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                              {achievement.year}
                            </span>
                          </div>
                          <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Skills Categories */}
              <AnimatedWrapper delay={0.6}>
                <div className="card-gradient p-8 rounded-3xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">Technical Skills</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="group">
                        <h4 className="font-bold text-secondary-800 dark:text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border border-primary-200 dark:border-primary-700 rounded-lg text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:scale-105 transform transition-all duration-300 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Contact CTA */}
              <AnimatedWrapper delay={0.7}>
                <div className="card-gradient p-8 rounded-3xl text-center border-2 border-primary-200 dark:border-primary-800">
                  <h4 className="text-2xl font-bold text-gradient mb-4">
                    Let's Work Together
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                    Ready to discuss your next DevOps project? I'm always excited to collaborate on innovative solutions that drive business growth.
                  </p>
                  <a
                    href="mailto:vaibhavsoni5567@gmail.com"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <span>Get In Touch</span>
                    <span className="text-lg">💬</span>
                  </a>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
