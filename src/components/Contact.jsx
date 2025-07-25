import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Person, GMail, Chat, Submit, MapPin, Award } from "./Icons";
import { validateForm } from "../utils/formValidation";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Contact = () => {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const initialErrData = { nameError: "", emailError: "", messageError: "" };
  const [errData, setErrData] = useState(initialErrData);

  const contactInfo = [
    {
      icon: <GMail className="w-6 h-6" />,
      title: "Email",
      value: "vaibhavsoni5567@gmail.com",
      link: "mailto:vaibhavsoni5567@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ahmedabad, India",
      link: null
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Experience",
      value: "1 Year in DevOps",
      link: null
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific error when user starts typing
    if (errData[`${name}Error`]) {
      setErrData({ ...errData, [`${name}Error`]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const isValid = validateForm(formData, setErrData);
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const form = new FormData();
      form.append("name", formData.name.trim());
      form.append("email", formData.email.trim());
      form.append("message", formData.message.trim());

      const response = await fetch(import.meta.env.VITE_GETFORM_URL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        setErrData(initialErrData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      name="Contact"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 bg-pattern"
      aria-labelledby="contact-heading"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Let's Connect"
            secondHeading="Ready to collaborate on your next DevOps project? Let's discuss how I can help."
          />
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <AnimatedWrapper animateFrom="left">
              <div className="content-card">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about DevOps, cloud technologies, and infrastructure automation. 
                  Feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200/50 dark:border-cyan-800/50">
                      <div className="text-cyan-600 dark:text-cyan-400">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Quick Stats */}
            <AnimatedWrapper animateFrom="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Project Success</div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <AnimatedWrapper>
                <div className="status-success" role="alert">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="font-semibold">Message Sent Successfully!</h4>
                      <p className="text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            )}
            
            {submitStatus === 'error' && (
              <AnimatedWrapper>
                <div className="status-error" role="alert">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <h4 className="font-semibold">Oops! Something went wrong</h4>
                      <p className="text-sm">Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            )}
            
            <AnimatedWrapper animateFrom="right">
              <div className="form-container">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send a Message
                </h3>
                
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-label="Contact form"
                  noValidate
                >
                  <AnimatedWrapper delay={0.1}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          className={`form-input ${
                            errData.nameError !== "" ? "border-red-500 focus:border-red-500" : ""
                          }`}
                          value={formData.name}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={errData.nameError !== ""}
                          aria-describedby={errData.nameError ? "name-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <FormIcon name="person" />
                      </div>
                      <ErrorBox message={errData.nameError} id="name-error" />
                    </div>
                  </AnimatedWrapper>
                  
                  <AnimatedWrapper delay={0.2}>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className={`form-input ${
                            errData.emailError !== "" ? "border-red-500 focus:border-red-500" : ""
                          }`}
                          value={formData.email}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={errData.emailError !== ""}
                          aria-describedby={errData.emailError ? "email-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <FormIcon name="gmail" />
                      </div>
                      <ErrorBox message={errData.emailError} id="email-error" />
                    </div>
                  </AnimatedWrapper>

                  <AnimatedWrapper delay={0.3}>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Message *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project or how I can help..."
                          rows="6"
                          className={`form-input resize-none ${
                            errData.messageError !== "" ? "border-red-500 focus:border-red-500" : ""
                          }`}
                          value={formData.message}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={errData.messageError !== ""}
                          aria-describedby={errData.messageError ? "message-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <FormIcon name="chat" />
                      </div>
                      <ErrorBox message={errData.messageError} id="message-error" />
                    </div>
                  </AnimatedWrapper>

                  <AnimatedWrapper delay={0.4}>
                    <button 
                      type="submit"
                      className={`btn-primary w-full group ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-label="Submit contact form"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="spinner"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <span className="group-hover:-translate-x-1 transition-transform duration-300">
                            Send Message
                          </span>
                          <span className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                            <Submit />
                          </span>
                        </div>
                      )}
                    </button>
                  </AnimatedWrapper>
                </form>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const FormIcon = ({ name }) => {
  return (
    <span
      className={`absolute left-4 text-gray-400 dark:text-gray-500 transition-colors duration-300 ${
        name === "chat" ? "top-4" : "top-1/2 -translate-y-1/2"
      }`}
      aria-hidden="true"
    >
      {name === "person" && <Person />}
      {name === "gmail" && <GMail />}
      {name === "chat" && <Chat />}
    </span>
  );
};

const ErrorBox = ({ message, id }) => {
  return message ? (
    <div className="text-sm text-red-500 px-1 flex items-center gap-2" role="alert" id={id}>
      <span className="text-xs">⚠️</span>
      {message}
    </div>
  ) : (
    <div className="text-sm h-5"></div>
  );
};