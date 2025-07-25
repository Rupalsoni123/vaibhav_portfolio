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
      description: "HashiCorp Terraform Associate, AWS Cloud Practitioner, RHCSA"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in Ahmedabad",
      description: "Contributing to DevOps projects at Inexture Solutions"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "2+ Years Experience",
      description: "Hands-on experience with cloud-native technologies"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack DevOps",
      description: "From infrastructure to deployment automation"
    }
  ];

  const achievements = [
    "🏆 HashiCorp Certified Terraform Associate (003) - 2024",
    "☁️ AWS Certified Cloud Practitioner - 2023", 
    "🐧 Red Hat Certified System Administrator (RHCSA) - 2022",
    "🚀 15+ successful project deployments",
    "⚡ Reduced deployment time by 70% through automation",
    "🔧 Expertise in multi-cloud environments (AWS, Azure, DigitalOcean)"
  ];

  return (
    <div
      name="About"
      className="pt-8 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 bg-pattern"
    >
      <div className="section justify-between">
        <AnimatedWrapper>
          <SectionHeading heading="About Me" />
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <AnimatedWrapper animateFrom="left">
              <div className="content-card">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl xs:text-4xl font-bold mb-4">
                      I'm{" "}
                      <span className="text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text">
                        Vaibhav Soni
                      </span>
                    </h2>
                    <p className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                      DevOps Engineer & Cloud Enthusiast
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      Aspiring DevOps Engineer based in Ahmedabad, India, currently contributing to DevOps related projects at 
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400"> Inexture Solutions</span>. 
                      Passionate about streamlining workflows, embracing cloud-native technologies, and building resilient, 
                      scalable infrastructure that empowers development teams to deliver faster and more reliably.
                    </p>
                    
                    <p>
                      Despite coming from a non-CS academic background, I have gained extensive experience through real-world projects, 
                      industry certifications, and continuous learning. I believe in always learning, thinking creatively, and working 
                      together to solve complex infrastructure challenges.
                    </p>
                    
                    <p>
                      My approach combines technical expertise with a deep understanding of business needs, ensuring that every 
                      solution I build not only works well technically but also delivers real value to the organization.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Highlights Grid */}
            <AnimatedWrapper animateFrom="left" delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-cyan-600 dark:text-cyan-400 mt-1">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Column - Tech Stack & Achievements */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <AnimatedWrapper animateFrom="right">
              <div className="content-card">
                <h3 className="section-heading text-xl mb-6">Tech Stack That Drives Me</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-4">
                  {techStack.map(({ id, icon, name }) => (
                    <div key={id} className="group relative flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {icon}
                        </span>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Achievements */}
            <AnimatedWrapper animateFrom="right" delay={0.2}>
              <div className="content-card">
                <h3 className="section-heading text-xl mb-6">Key Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200/50 dark:border-cyan-800/50">
                      <span className="text-lg flex-shrink-0">{achievement.split(' ')[0]}</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement.substring(achievement.indexOf(' ') + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        {/* Resume Download */}
        <AnimatedWrapper delay={0.4}>
          <div className="flex justify-center pt-8">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              download={true}
              className="btn-primary group inline-flex items-center gap-3"
              aria-label="Download resume"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                Download Resume
              </span>
              <span className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                <Download />
              </span>
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default About;
