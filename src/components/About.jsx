import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download } from "./Icons";
import resume from "../assets/resume.pdf";
import SectionHeading from "./SectionHeading";
import techStack from "../data/techStack";

const About = () => {
  return (
    <div
      name="About"
      className="pt-8 h-full min-h-screen w-full flex items-center bg-gradient-to-b to-white via-white from-gray-200 dark:to-black dark:via-black dark:from-gray-800"
    >
      <div className="section justify-between">
        <AnimatedWrapper>
          <SectionHeading heading="About Me" />
        </AnimatedWrapper>
        <div className="flex flex-col justify-center w-full px-2 xs: sm:px-12 md:px-4 lg:px-14 text-gray-800 dark:text-white">
          <AnimatedWrapper animateFrom="bottom">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 mb-6">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
                I'm{" "}
                <span className="text-cyan-600 dark:text-cyan-500 block xs:inline">
                  Vaibhav Soni
                </span>
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 font-medium text-justify">
                <AnimatedWrapper>
                  <p className="leading-relaxed">
                    Aspiring DevOps Engineer based in Ahmedabad, India, currently contributing to DevOps related projects at Inexture Solutions.
                    Passionate about streamlining workflows, embracing cloud-native technologies, and building resilient, scalable infrastructure that empowers development teams to deliver faster and more reliably.
                  </p>
                </AnimatedWrapper>
                <AnimatedWrapper>
                  <p className="leading-relaxed">
                    I believe in always learning, thinking creatively, and working together to solve problems.
                    I enjoy coming up with new ideas, improving workflows, and building DevOps solutions that work well and make a real difference.
                  </p>
                </AnimatedWrapper>
              </div>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 mb-6">
              <div className="py-3 text-gray-700 dark:text-gray-50 flex flex-col sm:flex-row font-semibold gap-3 sm:gap-5 sm:items-center">
                <div className="whitespace-nowrap">
                  <p className="text-lg font-semibold border-l-4 border-cyan-500 pl-3">Tech That Drives Me</p>
                </div>
                <AnimatedWrapper>
                  <ul className="px-2 flex gap-5 z-40 flex-wrap" aria-label="Technologies I work with">
                    {techStack.map(({ id, icon, name }) => {
                      return (
                        <li key={id} className="relative list-none group">
                          <span className="z-20 transform transition-transform duration-300 group-hover:scale-125">{icon}</span>
                          <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 left-1/2 -translate-x-1/2 w-auto h-6 py-2 px-3 bg-gray-200 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-300 rounded shadow-md">
                            {name}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </AnimatedWrapper>
              </div>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper>
            <div className="py-5">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download={true}
                className="btn-primary z-30 group flex items-center justify-center gap-3 w-36 relative"
                aria-label="Download resume"
              >
                <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out">
                  Resume
                </span>
                <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500">
                  <Download />
                </span>
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
