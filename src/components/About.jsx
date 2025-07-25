import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download, Award, MapPin, Calendar, Code } from "./Icons";
import resume from "../assets/resume.pdf";
import SectionHeading from "./SectionHeading";
import techStack from "../data/techStack";

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "HashiCorp Terraform Associate, AWS Cloud Practitioner, RHCSA",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in Ahmedabad",
      description: "Contributing to DevOps projects at Inexture Solutions",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "1 Year Experience",
      description: "Hands-on experience with cloud-native technologies",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack DevOps",
      description: "From infrastructure to deployment automation",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const achievements = [
    "🏆 HashiCorp Certified Terraform Associate (003) - 2024",
    "☁️ AWS Certified Cloud Practitioner - 2023", 
    "🐧 Red Hat Certified System Administrator (RHCSA) - 2022",
    "🚀 4+ successful project deployments",
    "⚡ Reduced deployment time by 70% through automation",
    "🔧 Expertise in multi-cloud environments (AWS, Azure, DigitalOcean)"
  ];

  return (
    <div
      name="About"
      className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 via-purple-400/8 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 via-pink-400/8 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedWrapper>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 shadow-lg mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm">About Me</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                DevOps Engineer &{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Cloud Architect
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Passionate about building scalable infrastructure and automating workflows to empower development teams
              </p>
            </AnimatedWrapper>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              
              {/* Main Description */}
              <AnimatedWrapper delay={0.2}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    My Journey
                  </h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      Aspiring DevOps Engineer based in Ahmedabad, India, currently contributing to DevOps related projects at{" "}
                      <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inexture Solutions</span>. 
                      Passionate about streamlining workflows, embracing cloud-native technologies, and building resilient, 
                      scalable infrastructure that empowers development teams to deliver faster and more reliably.
                    </p>
                    
                    <p>
                      Despite coming from a non-CS academic background, I have gained extensive experience through real-world projects, 
                      industry certifications, and continuous learning. I believe in always learning, thinking creatively, and working 
                      together to solve complex infrastructure challenges.
                    </p>

                    <p>
                      My expertise spans across cloud platforms, containerization, infrastructure as code, and CI/CD automation, 
                      with a strong focus on creating efficient, secure, and maintainable systems.
                    </p>
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Highlights Grid */}
              <AnimatedWrapper delay={0.3}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className={`w-12 h-12 bg-gradient-to-r ${highlight.gradient} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Download Resume Button */}
              <AnimatedWrapper delay={0.4}>
                <div className="flex justify-center lg:justify-start">
                  <a
                    href={resume}
                    download="Vaibhav_Soni_Resume.pdf"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Download className="relative w-5 h-5 group-hover:animate-bounce" />
                    <span className="relative">Download Resume</span>
                  </a>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Right Column - Achievements & Tech Stack */}
            <div className="space-y-8">
              
              {/* Achievements */}
              <AnimatedWrapper delay={0.5}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    Key Achievements
                  </h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-600/50 dark:hover:to-gray-500/50 transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Tech Stack */}
              <AnimatedWrapper delay={0.6}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    Tech Stack
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {techStack.slice(0, 12).map((tech, index) => (
                      <div key={index} className="group flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-600/50 dark:hover:to-gray-500/50 transition-all duration-300 hover:scale-105">
                        <div className="w-8 h-8 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Contact CTA */}
              <AnimatedWrapper delay={0.7}>
                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 shadow-lg text-center">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Let's Work Together
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Ready to discuss your next DevOps project? I'm always excited to collaborate on innovative solutions.
                  </p>
                  <a
                    href="mailto:vaibhavsoni5567@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
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
