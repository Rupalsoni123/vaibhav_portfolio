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
        message: "MESSAGE_SENT_SUCCESSFULLY. Response expected within 24 hours."
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
      title: "EMAIL_PROTOCOL",
      value: "vaibhavsoni5567@gmail.com",
      link: "mailto:vaibhavsoni5567@gmail.com",
      status: "ACTIVE",
      response: "< 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "VOICE_CHANNEL",
      value: "+91 8890944027",
      link: "tel:+918890944027",
      status: "AVAILABLE",
      response: "Immediate"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "LOCATION_DATA",
      value: "Ahmedabad, Gujarat, India",
      link: "#",
      status: "TIMEZONE",
      response: "UTC +5:30"
    }
  ];

  return (
    <section
      name="Contact"
      className="section-cyber matrix-bg relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="scan-lines"></div>
        {/* Floating Communication Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/10 font-mono text-xl animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['📡', '💬', '📧', '📱', '🔗', '⚡'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
          <div className="text-center mb-16">
            <div className="terminal-window max-w-3xl mx-auto">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                  contact-interface.sh
                </div>
              </div>
              <div className="terminal-content">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-neon-blue">$ ./establish_connection.sh</div>
                  <div className="text-neon-green">Initializing communication protocols...</div>
                  <div className="text-white">Email: READY</div>
                  <div className="text-white">Phone: STANDBY</div>
                  <div className="text-white">Social: CONNECTED</div>
                  <div className="text-neon-green">All channels operational. Ready for contact.</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <AnimatedWrapper animation="slide-right" delay={0.4}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">@</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">CONTACT_METHODS</h3>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="block group"
                    >
                      <div className="cyber-card p-4 hover:border-neon-blue transition-colors duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg flex items-center justify-center text-neon-green group-hover:text-neon-blue transition-colors duration-300 border border-neon-green group-hover:border-neon-blue">
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-mono text-sm font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                                {method.title}
                              </h4>
                              <span className={`font-mono text-xs px-2 py-1 rounded ${
                                method.status === 'ACTIVE' ? 'bg-neon-green/20 text-neon-green' :
                                method.status === 'AVAILABLE' ? 'bg-neon-blue/20 text-neon-blue' :
                                'bg-neon-purple/20 text-neon-purple'
                              }`}>
                                [{method.status}]
                              </span>
                            </div>
                            <p className="text-gray-300 font-mono text-sm mb-1">{method.value}</p>
                            <p className="text-gray-500 font-mono text-xs">Response: {method.response}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Social Links */}
            <AnimatedWrapper animation="slide-right" delay={0.6}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">#</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">SOCIAL_NETWORKS</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {contactInfo.slice(0, 4).map(({ id, link, name, icon }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-card p-4 hover:border-neon-blue transition-colors duration-300 group flex items-center gap-3"
                      aria-label={name}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg flex items-center justify-center text-neon-green group-hover:text-neon-blue transition-colors duration-300 border border-neon-green group-hover:border-neon-blue">
                        {icon}
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {name.toUpperCase()}
                        </div>
                        <div className="font-mono text-xs text-gray-400">
                          {name === 'LinkedIn' ? 'PROFESSIONAL' : 
                           name === 'GitHub' ? 'REPOSITORIES' : 
                           name === 'Mail' ? 'DIRECT_CONTACT' : 'DOCUMENT'}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Connect */}
                <div className="border-t border-neon-green/30 pt-4">
                  <div className="font-mono text-xs text-neon-blue mb-2">QUICK_CONNECT:</div>
                  <div className="flex gap-2">
                    <a
                      href="https://linkedin.com/in/vaibhavsonii21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button-secondary text-xs px-3 py-1"
                    >
                      LINKEDIN.connect
                    </a>
                    <a
                      href="https://github.com/vaibhav21soni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button-secondary text-xs px-3 py-1"
                    >
                      GITHUB.follow
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Status Information */}
            <AnimatedWrapper animation="slide-right" delay={0.8}>
              <div className="cyber-card p-6 border-2 border-neon-green">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">i</span>
                  </div>
                  <h3 className="neon-text-green font-cyber text-xl">SYSTEM_STATUS</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-white">Availability:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="font-mono text-sm text-neon-green">ONLINE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-white">Response Time:</span>
                    <span className="font-mono text-sm text-neon-blue"> 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-white">Project Status:</span>
                    <span className="font-mono text-sm text-neon-purple">ACCEPTING</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-white">Location:</span>
                    <span className="font-mono text-sm text-neon-pink">GMT+5:30</span>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <AnimatedWrapper animation="slide-left" delay={0.4}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm"></span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">SEND_MESSAGE</h3>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={status.type === 'success' ? 'status-success' : 'status-error'}>
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="font-mono text-sm">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        USER_NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your name..."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        EMAIL_ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="user@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="form-label">
                      MESSAGE_SUBJECT *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Project discussion, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      MESSAGE_BODY *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell me about your project or how we can work together..."
                      rows={6}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="cyber-loading"></div>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>SEND_MESSAGE.sh</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        {/* Additional CTA */}
        <AnimatedWrapper animation="fade-in" delay={1.0}>
          <div className="mt-16 text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto border-2 border-neon-purple">
              <h3 className="neon-text-purple font-cyber text-2xl mb-6">
                COLLABORATION_PROTOCOL
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 font-mono text-sm max-w-2xl mx-auto">
                Whether you need infrastructure automation, cloud migration, CI/CD pipelines, or DevOps consulting, 
                I'm here to help transform your ideas into scalable, reliable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="cyber-button inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>START_PROJECT.exe</span>
                </a>
                <a
                  href="tel:+918890944027"
                  className="cyber-button-secondary inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>SCHEDULE_CALL.sh</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Contact;

