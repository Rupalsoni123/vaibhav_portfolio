import React, { useState } from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "./Icons";
import contactInfo from "../data/contactInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vaibhavsoni5567@gmail.com",
      link: "mailto:vaibhavsoni5567@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8890944027",
      link: "tel:+918890944027",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ahmedabad, India",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div
      name="Contact"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container-custom section-padding">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <AnimatedWrapper>
              <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full shadow-lg mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm text-green-700 dark:text-green-300">Get In Touch</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow mb-8">
                Let's Build{" "}
                <span className="text-gradient">Something Amazing</span>
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-4xl mx-auto leading-relaxed">
                Ready to discuss your next DevOps project? I'm always excited to collaborate on innovative solutions
              </p>
            </AnimatedWrapper>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              
              {/* Contact Methods */}
              <AnimatedWrapper delay={0.2}>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="group block"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{method.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Social Links */}
              <AnimatedWrapper delay={0.3}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Connect With Me
                  </h3>
                  <div className="flex justify-center gap-4">
                    {contactInfo.map(({ id, link, name, icon }) => (
                      <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="group w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <span className="text-white text-lg group-hover:animate-bounce">
                          {icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Quick Info */}
              <AnimatedWrapper delay={0.4}>
                <div className="bg-gradient-to-r from-green-50 via-blue-50 to-cyan-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Quick Response
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    I typically respond to emails within 24 hours. For urgent matters, feel free to call me directly.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Available for freelance projects</span>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <AnimatedWrapper delay={0.5}>
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Send Me a Message
                  </h3>
                  
                  {/* Status Message */}
                  {status.message && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      status.type === 'success' 
                        ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                        : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{status.message}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Project discussion, collaboration, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                        placeholder="Tell me about your project or how we can work together..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full px-8 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 hover:from-green-700 hover:via-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <span>Send Message</span>
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
