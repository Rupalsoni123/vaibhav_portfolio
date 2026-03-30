import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader } from "./Icons";
import LinkedIn, { GitHub } from "./Icons";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const endpoint = import.meta.env.VITE_GETFORM_ENDPOINT || 'https://getform.io/f/bjjowvwb';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _gotcha: '' })
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent! I'll reply within 24 hours." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      } else {
        throw new Error("HTTP error");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try email." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: <Mail size={20} />, label: "Email", value: "vaibhavsoni5567@gmail.com", link: "mailto:vaibhavsoni5567@gmail.com", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 8890944027", link: "tel:+918890944027", color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { icon: <MapPin size={20} />, label: "Location", value: "Ahmedabad, India", link: "https://maps.google.com/?q=Ahmedabad", color: "text-emerald-500", bg: "bg-emerald-500/10" }
  ];

  return (
    <div className="flex h-full bg-[#1e1e2e] text-gray-100 font-sans overflow-hidden">
      {/* Left Sidebar - Contact Info */}
      <div className="w-1/3 min-w-[280px] bg-[#111119] border-r border-white/5 flex flex-col p-8">
        <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Let's Connect</h2>
        
        <div className="space-y-4 mb-auto">
          {contactMethods.map((cm, idx) => (
            <a 
              key={idx} 
              href={cm.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cm.bg} ${cm.color} group-hover:scale-110 transition-transform`}>
                {cm.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">{cm.label}</p>
                <p className="text-sm text-gray-200 mt-0.5">{cm.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-4">Social Profiles</p>
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/vaibhavsonii21" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm">
              <LinkedIn style={{ width: '18px', height: '18px' }} />
            </a>
            <a href="https://github.com/vaibhav21soni" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all shadow-sm">
              <GitHub style={{ width: '18px', height: '18px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Content - Form */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#1e1e2e]">
        <div className="max-w-2xl mx-auto bg-[#2b2b3b] border border-white/5 p-8 rounded-2xl shadow-xl">
          <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
          <p className="text-sm text-gray-400 mb-6">Have a project or opportunity? Reach out directly.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-semibold tracking-wide text-gray-300">Name</label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleChange} 
                  placeholder="John Doe"
                  className="w-full bg-[#111119] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder-gray-600"
                />
              </div>
              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-semibold tracking-wide text-gray-300">Email</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange} 
                  placeholder="john@example.com"
                  className="w-full bg-[#111119] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1.5 flex flex-col pt-1">
              <label className="text-xs font-semibold tracking-wide text-gray-300">Subject</label>
              <input 
                type="text" name="subject" value={formData.subject} onChange={handleChange} 
                placeholder="What is this regarding?"
                className="w-full bg-[#111119] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder-gray-600"
              />
            </div>

            <div className="space-y-1.5 flex flex-col pt-1">
              <label className="text-xs font-semibold tracking-wide text-gray-300">Message</label>
              <textarea 
                name="message" required value={formData.message} onChange={handleChange} rows="5"
                placeholder="Type your message here..."
                className="w-full bg-[#111119] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none placeholder-gray-600"
              />
            </div>

            {status.message && (
              <div className={`p-3 rounded-lg text-xs font-medium border ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-gray-700 text-white py-3 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-indigo-600/20 disabled:shadow-none"
            >
              {isSubmitting ? (
                 <><Loader size={16} className="animate-spin" /> Sending...</>
              ) : (
                 <><Send size={16} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
