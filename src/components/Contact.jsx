import React, { useState } from "react";
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
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields."
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you within 24 hours."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "vaibhavsoni5567@gmail.com",
      link: "mailto:vaibhavsoni5567@gmail.com",
      description: "Drop me a line anytime",
      color: "var(--primary-blue)"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8890944027",
      link: "tel:+918890944027",
      description: "Let's have a conversation",
      color: "var(--primary-purple)"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Ahmedabad, India",
      link: "https://maps.google.com/?q=Ahmedabad,India",
      description: "Gujarat, India",
      color: "var(--primary-teal)"
    }
  ];

  const quickTopics = [
    "DevOps Consultation",
    "Infrastructure Setup",
    "CI/CD Implementation",
    "Cloud Migration",
    "Automation Solutions",
    "General Inquiry"
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge badge-accent" style={{ marginBottom: '1rem' }}>
            📬 Let's Connect
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Get In <span className="text-gradient-accent">Touch</span>
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Ready to discuss your next project? I'm here to help you build 
            scalable, reliable infrastructure solutions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="heading-md" style={{ marginBottom: '2rem' }}>
              Let's Start a Conversation
            </h3>
            
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Whether you need help with cloud infrastructure, DevOps automation, 
              or just want to discuss technology, I'm always excited to connect 
              with fellow professionals and potential collaborators.
            </p>

            {/* Contact Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = method.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--border-radius-lg)',
                    background: `linear-gradient(135deg, ${method.color}, ${method.color}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexShrink: 0
                  }}>
                    {method.icon}
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {method.title}
                    </h4>
                    <p style={{
                      color: 'var(--primary-blue)',
                      fontWeight: '500',
                      marginBottom: '0.25rem'
                    }}>
                      {method.value}
                    </p>
                    <p style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '0.875rem'
                    }}>
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Connect on Social Media
              </h4>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {contactInfo.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={link.platform}
                    style={{
                      width: '3rem',
                      height: '3rem',
                      fontSize: '1.25rem'
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="card" style={{ padding: '2rem' }}>
              <h3 className="heading-md" style={{ marginBottom: '1.5rem' }}>
                Send a Message
              </h3>

              {/* Quick Topic Selection */}
              <div style={{ marginBottom: '2rem' }}>
                <label className="form-label">
                  Quick Topics (Optional)
                </label>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {quickTopics.map((topic, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: topic })}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid var(--border-color)',
                        background: formData.subject === topic 
                          ? 'var(--primary-blue)' 
                          : 'var(--card-bg)',
                        color: formData.subject === topic 
                          ? 'white' 
                          : 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (formData.subject !== topic) {
                          e.target.style.borderColor = 'var(--primary-blue)';
                          e.target.style.color = 'var(--primary-blue)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (formData.subject !== topic) {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.color = 'var(--text-secondary)';
                        }
                      }}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="Your full name"
                    required
                    style={{
                      borderColor: focusedField === 'name' ? 'var(--primary-blue)' : 'var(--border-color)',
                      boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(37, 99, 235, 0.1)' : 'none'
                    }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                    style={{
                      borderColor: focusedField === 'email' ? 'var(--primary-blue)' : 'var(--border-color)',
                      boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(37, 99, 235, 0.1)' : 'none'
                    }}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                    placeholder="What's this about?"
                    style={{
                      borderColor: focusedField === 'subject' ? 'var(--primary-blue)' : 'var(--border-color)',
                      boxShadow: focusedField === 'subject' ? '0 0 0 3px rgba(37, 99, 235, 0.1)' : 'none'
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    style={{
                      borderColor: focusedField === 'message' ? 'var(--primary-blue)' : 'var(--border-color)',
                      boxShadow: focusedField === 'message' ? '0 0 0 3px rgba(37, 99, 235, 0.1)' : 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={status.type === 'success' ? 'status-success' : 'status-error'}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {status.type === 'success' ? (
                        <CheckCircle size={16} />
                      ) : (
                        <AlertCircle size={16} />
                      )}
                      {status.message}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid transparent',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--border-radius-xl)'
        }}>
          <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
            Response Time
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            I typically respond to all inquiries within 24 hours. For urgent matters, 
            feel free to reach out via phone or LinkedIn.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div className="heading-sm text-gradient">
                &lt; 24h
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                Email Response
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="heading-sm text-gradient">
                &lt; 2h
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                Urgent Inquiries
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="heading-sm text-gradient">
                100%
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                Response Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add spin animation for loading spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
     