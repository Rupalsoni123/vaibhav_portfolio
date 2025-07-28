import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader } from "./Icons";
import LinkedIn, { GitHub } from "./Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Form submitted:', formData);
    
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });
    
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
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    }, 2000);
  };

  const handleQuickTopic = (topic, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Quick topic selected:', topic);
    setFormData({ ...formData, subject: topic });
  };

  const handleContactMethod = (method, value, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Contact method clicked:', method, value);
    
    switch (method) {
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      case 'location':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
        break;
      default:
        console.warn(`Unknown contact method: ${method}`);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "vaibhavsoni5567@gmail.com",
      method: "email",
      description: "Drop me a line anytime",
      color: "#2563eb"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8890944027",
      method: "phone",
      description: "Let's have a conversation",
      color: "#7c3aed"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Ahmedabad, India",
      method: "location",
      description: "Gujarat, India",
      color: "#059669"
    }
  ];

  const quickTopics = [
    "DevOps Consultation",
    "Infrastructure Setup",
    "CI/CD Pipeline",
    "Cloud Migration",
    "Monitoring Setup",
    "General Inquiry"
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/vaibhavsonii21",
      icon: <LinkedIn style={{ width: '20px', height: '20px' }} />
    },
    {
      platform: "GitHub",
      url: "https://github.com/vaibhav21soni",
      icon: <GitHub style={{ width: '20px', height: '20px' }} />
    }
  ];

  return (
    <section id="contact" className="section" style={{
      background: 'var(--bg-primary)',
      padding: '5rem 0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to discuss your next DevOps project? Let's connect and build something amazing together.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 style={{ 
              fontWeight: '600', 
              marginBottom: '2rem',
              color: 'var(--text-primary)',
              fontSize: '1.25rem'
            }}>
              Let's Connect
            </h3>

            {/* Contact Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {contactMethods.map((method, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleContactMethod(method.method, method.value, e)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)',
                    textAlign: 'left',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = method.color;
                    e.currentTarget.style.boxShadow = `0 10px 25px ${method.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: `${method.color}20`,
                    color: method.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {method.title}
                    </h4>
                    <p style={{
                      color: method.color,
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
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Follow Me
              </h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.platform}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                      fontSize: '1.25rem',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      transform: 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.color = '#2563eb';
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '1rem'
            }}>
              <h3 style={{
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                fontSize: '1.25rem'
              }}>
                Send Message
              </h3>

              {/* Quick Topic Selection */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  fontSize: '0.875rem'
                }}>
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
                      onClick={(e) => handleQuickTopic(topic, e)}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid var(--border-color)',
                        background: formData.subject === topic 
                          ? '#2563eb' 
                          : 'var(--card-bg)',
                        color: formData.subject === topic 
                          ? 'white' 
                          : 'var(--text-secondary)',
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)'
                      }}
                      onMouseEnter={(e) => {
                        if (formData.subject !== topic) {
                          e.target.style.borderColor = '#2563eb';
                          e.target.style.color = '#2563eb';
                          e.target.style.transform = 'translateY(-1px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (formData.subject !== topic) {
                          e.target.style.borderColor = 'var(--border-color)';
                          e.target.style.color = 'var(--text-secondary)';
                          e.target.style.transform = 'translateY(0)';
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
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
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
                    placeholder="Your full name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `2px solid ${focusedField === 'name' ? '#2563eb' : 'var(--border-color)'}`,
                      borderRadius: '0.5rem',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
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
                    placeholder="your.email@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `2px solid ${focusedField === 'email' ? '#2563eb' : 'var(--border-color)'}`,
                      borderRadius: '0.5rem',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" style={{
                    display: 'block',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
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
                    placeholder="What's this about?"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `2px solid ${focusedField === 'subject' ? '#2563eb' : 'var(--border-color)'}`,
                      borderRadius: '0.5rem',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" style={{
                    display: 'block',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `2px solid ${focusedField === 'message' ? '#2563eb' : 'var(--border-color)'}`,
                      borderRadius: '0.5rem',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    background: status.type === 'success' ? '#10b98120' : '#ef444420',
                    border: `1px solid ${status.type === 'success' ? '#10b981' : '#ef4444'}`,
                    color: status.type === 'success' ? '#10b981' : '#ef4444',
                    fontSize: '0.875rem'
                  }}>
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: isSubmitting 
                      ? 'var(--bg-tertiary)' 
                      : 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    color: isSubmitting ? 'var(--text-tertiary)' : 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)',
                    fontSize: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} />
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
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
