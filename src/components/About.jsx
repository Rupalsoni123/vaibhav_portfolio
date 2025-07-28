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
      stats: "3 Certifications",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in Ahmedabad",
      description: "Contributing to DevOps projects at Inexture Solutions",
      gradient: "from-green-400 to-emerald-500",
      stats: "India",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "1+ Years Experience",
      description: "Hands-on experience with cloud-native technologies",
      gradient: "from-blue-400 to-cyan-500",
      stats: "Professional",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack DevOps",
      description: "From infrastructure to deployment automation",
      gradient: "from-purple-400 to-pink-500",
      stats: "End-to-End",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "HashiCorp Certified Terraform Associate (003)",
      year: "2024",
      description: "Infrastructure as Code expertise",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: "☁️",
      title: "AWS Certified Cloud Practitioner",
      year: "2023",
      description: "Cloud fundamentals and services",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: "🐧",
      title: "Red Hat Certified System Administrator (RHCSA)",
      year: "2022",
      description: "Linux system administration",
      color: "text-red-600 dark:text-red-400"
    }
  ];

  const journey = [
    {
      phase: "Foundation",
      period: "2022",
      description: "Started with Linux system administration and earned RHCSA certification",
      icon: "🚀"
    },
    {
      phase: "Cloud Journey",
      period: "2023",
      description: "Transitioned to cloud technologies, earned AWS Cloud Practitioner",
      icon: "☁️"
    },
    {
      phase: "Infrastructure as Code",
      period: "2024",
      description: "Specialized in Terraform and infrastructure automation",
      icon: "🏗️"
    },
    {
      phase: "DevOps Professional",
      period: "Present",
      description: "Contributing to enterprise DevOps projects at Inexture Solutions",
      icon: "⚡"
    }
  ];

  return (
    <section name="About" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Passionate DevOps Engineer with a unique journey from non-CS background to 
              cloud-native expertise, driven by continuous learning and real-world project experience.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <AnimatedWrapper animation="slide-right" delay={0.4}>
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-800 dark:text-secondary-200">
                  My Journey
                </h3>
                <div className="space-y-6">
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    Despite coming from a non-Computer Science academic background, I've built my 
                    expertise through hands-on experience, real-world projects, and continuous learning. 
                    My journey into DevOps began with a fascination for automation and scalable systems.
                  </p>
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    Currently contributing to DevOps projects at <span className="font-semibold text-primary-600 dark:text-primary-400">Inexture Solutions</span>, 
                    I specialize in streamlining workflows, embracing cloud-native technologies, and 
                    building resilient infrastructure that empowers development teams.
                  </p>
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    My approach combines technical expertise with a deep understanding of business needs, 
                    ensuring that every solution I implement drives real value and efficiency.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 group"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Journey Timeline */}
            <AnimatedWrapper animation="slide-right" delay={0.6}>
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-800 dark:text-secondary-200">
                  Professional Journey
                </h3>
                <div className="space-y-6">
                  {journey.map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-secondary-800 dark:text-secondary-200">
                            {item.phase}
                          </h4>
                          <span className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Column - Highlights & Achievements */}
          <div className="space-y-8">
            {/* Highlights Grid */}
            <AnimatedWrapper animation="slide-left" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`card-modern p-6 ${highlight.bgColor} hover:scale-105 transition-all duration-300 group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                      {highlight.description}
                    </p>
                    <div className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                      {highlight.stats}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedWrapper>

            {/* Certifications */}
            <AnimatedWrapper animation="slide-left" delay={0.6}>
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-800 dark:text-secondary-200">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-300 group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 text-sm">
                            {achievement.title}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${achievement.color} bg-current bg-opacity-10`}>
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-xs text-secondary-600 dark:text-secondary-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Tech Stack Preview */}
            <AnimatedWrapper animation="slide-left" delay={0.8}>
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-800 dark:text-secondary-200">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.slice(0, 8).map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 text-primary-700 dark:text-primary-300 rounded-xl text-sm font-medium border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                      {tech.name}
                    </div>
                  ))}
                  <div className="px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 rounded-xl text-sm font-medium border border-secondary-200 dark:border-secondary-700">
                    +12 more
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
