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
    <section
      name="Contact"
      className="section-padding bg-white dark:bg-secondary-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fade-in" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next DevOps project? I'm always excited to collaborate on innovative solutions
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedWrapper animation="slide-right" delay={0.4}>
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-secondary-800 dark:text-secondary-200 mb-6">
                  Get In Touch
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about DevOps and cloud technologies.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary-50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-800 dark:text-secondary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {method.title}
                        </div>
                        <div className="text-sm text-secondary-600 dark:text-secondary-400">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700">
                  <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {contactInfo.slice(0, 4).map(({ id, link, name, icon }) => (
                      <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon group"
                        aria-label={name}
                      >
                        <span className="text-secondary-600 dark:text-secondary-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Contact Form */}
          <div>
            <AnimatedWrapper animation="slide-left" delay={0.6}>
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-secondary-800 dark:text-secondary-200 mb-6">
                  Send Message
                </h3>

                {/* Status Message */}
                {status.message && (
                  <div className={status.type === 'success' ? 'status-success' : 'status-error'}>
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
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
            <div className="card-modern p-8 max-w-4xl mx-auto border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                Whether you need infrastructure automation, cloud migration, or DevOps consulting, 
                I'm here to help turn your ideas into scalable, reliable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vaibhavsoni5567@gmail.com"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start a Project</span>
                </a>
                <a
                  href="tel:+918890944027"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule a Call</span>
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
