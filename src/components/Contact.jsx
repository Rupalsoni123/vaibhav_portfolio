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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <AnimatedWrapper animateFrom="right" delay={0.4}>
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
                      <div className="cyber-card p-4 hover:border-neon-blue transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-neon-green group-hover:text-neon-blue transition-colors duration-300 border border-neon-green group-hover:border-neon-blue flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 212, 255, 0.2))' }}>
                            {method.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-mono text-sm font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                                {method.title}
                              </h4>
                              <span className={`font-mono text-xs px-2 py-1 rounded ${
                                method.status === 'ACTIVE' ? 'text-neon-green' :
                                method.status === 'AVAILABLE' ? 'text-neon-blue' :
                                'text-neon-purple'
                              }`} style={{ 
                                backgroundColor: method.status === 'ACTIVE' ? 'rgba(0, 255, 65, 0.2)' :
                                method.status === 'AVAILABLE' ? 'rgba(0, 212, 255, 0.2)' :
                                'rgba(191, 0, 255, 0.2)'
                              }}>
                                [{method.status}]
                              </span>
                            </div>
                            <p className="text-gray-300 font-mono text-sm mb-2 break-all">
                              {method.value}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs text-gray-400">Response time:</span>
                              <span className="font-mono text-xs text-neon-green">{method.response}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Social Networks */}
            <AnimatedWrapper animateFrom="right" delay={0.6}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">#</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">SOCIAL_NETWORKS</h3>
                </div>

                <div className="space-y-4">
                  {contactInfo.filter(item => item.name !== 'Resume').slice(0, 3).map(({ id, link, name, icon }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 cyber-card hover:border-neon-blue transition-all duration-300 group"
                      aria-label={name}
                    >
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-neon-green group-hover:text-neon-blue transition-colors duration-300 border border-neon-green group-hover:border-neon-blue text-xl flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 212, 255, 0.2))' }}>
                        {icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-sm font-bold text-white group-hover:text-neon-blue transition-colors duration-300 mb-1">
                          {name.toUpperCase()}
                        </div>
                        <div className="font-mono text-xs text-gray-400">
                          {name === 'LinkedIn' ? 'Professional Network' : 
                           name === 'GitHub' ? 'Code Repositories' : 
                           'Direct Communication'}
                        </div>
                      </div>
                      <div className="text-neon-green group-hover:text-neon-blue transition-colors duration-300 text-lg flex-shrink-0">
                        →
                      </div>
                    </a>
                  ))}
                  
                  {/* Resume Download */}
                  <a
                    href={contactInfo.find(item => item.name === 'Resume')?.link}
                    download="Vaibhav_Soni_DevOps_Resume.pdf"
                    className="flex items-center gap-4 p-4 cyber-card hover:border-neon-purple transition-all duration-300 group"
                    aria-label="Download Resume"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-neon-purple group-hover:text-neon-pink transition-colors duration-300 border border-neon-purple group-hover:border-neon-pink text-xl flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(191, 0, 255, 0.2), rgba(255, 0, 128, 0.2))' }}>
                      📄
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-sm font-bold text-white group-hover:text-neon-purple transition-colors duration-300 mb-1">
                        RESUME.PDF
                      </div>
                      <div className="font-mono text-xs text-gray-400">
                        Download CV Document
                      </div>
                    </div>
                    <div className="text-neon-purple group-hover:text-neon-pink transition-colors duration-300 text-lg flex-shrink-0">
                      ↓
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            {/* Contact Form */}
            <AnimatedWrapper animateFrom="left" delay={0.4}>
              <div className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-green rounded bg-black flex items-center justify-center">
                    <span className="text-neon-green font-mono text-sm">✉</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">SEND_MESSAGE</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">
                        NAME_INPUT
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your name..."
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">
                        EMAIL_ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="your.email@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">
                      MESSAGE_SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Brief subject line..."
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">
                      MESSAGE_CONTENT
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Type your message here..."
                      rows="6"
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <div className={`${
                      status.type === 'success' ? 'status-success' : 'status-error'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="font-mono text-sm">{status.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full inline-flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="cyber-loading"></div>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:animate-pulse" />
                        <span>SEND_MESSAGE.exe</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedWrapper>

            {/* Collaboration Protocol */}
            <AnimatedWrapper animateFrom="left" delay={0.6}>
              <div className="cyber-card p-6 border-2 border-neon-blue">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 border-2 border-neon-blue rounded bg-black flex items-center justify-center">
                    <span className="text-neon-blue font-mono text-sm">🤝</span>
                  </div>
                  <h3 className="neon-text-blue font-cyber text-xl">COLLABORATION_PROTOCOL</h3>
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-sm text-neon-blue mb-4">$ cat collaboration_guidelines.txt</div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-neon-green mt-1 text-base flex-shrink-0">✓</span>
                      <span className="text-gray-300 font-mono text-sm leading-relaxed">
                        <strong className="text-white">Project Discussion:</strong> Initial consultation to understand requirements and scope
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-neon-green mt-1 text-base flex-shrink-0">✓</span>
                      <span className="text-gray-300 font-mono text-sm leading-relaxed">
                        <strong className="text-white">Technical Planning:</strong> Architecture design and technology stack selection
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-neon-green mt-1 text-base flex-shrink-0">✓</span>
                      <span className="text-gray-300 font-mono text-sm leading-relaxed">
                        <strong className="text-white">Implementation:</strong> Agile development with regular progress updates
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-neon-green mt-1 text-base flex-shrink-0">✓</span>
                      <span className="text-gray-300 font-mono text-sm leading-relaxed">
                        <strong className="text-white">Deployment & Support:</strong> Production deployment with ongoing maintenance
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-6" style={{ borderColor: 'rgba(0, 212, 255, 0.3)' }}>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                      Ready to start your next DevOps project? Let's build something amazing together that scales, performs, and delivers real business value.
                    </p>
                    <a
                      href="mailto:vaibhavsoni5567@gmail.com"
                      className="cyber-button-secondary w-full inline-flex items-center justify-center gap-2"
                    >
                      <span>INITIATE_PROJECT.sh</span>
                      <span className="text-lg">🚀</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        {/* Separate CTA Section with proper spacing */}
        <div className="mt-16">
          <AnimatedWrapper animateFrom="bottom" delay={1.0}>
            <div className="text-center">
              <div className="cyber-card p-8 max-w-4xl mx-auto border-2 border-neon-purple">
                <h3 className="neon-text-purple font-cyber text-2xl mb-6">
                  READY_TO_COLLABORATE
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
      </div>
    </section>
  );
};

export default Contact;
