import React, { useState } from "react";
import LinkedIn, { Mail, Phone, MapPin, Send, Loader, GitHub } from "./Icons";

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
      const endpoint = 'https://getform.io/f/bjjowvwb';
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
    { icon: <Mail size={22} />, label: "Email Address", value: "vaibhavsoni5567@gmail.com", link: "mailto:vaibhavsoni5567@gmail.com", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: <Phone size={22} />, label: "Phone & WhatsApp", value: "+91 8890944027", link: "tel:+918890944027", color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { icon: <MapPin size={22} />, label: "Current Location", value: "Ahmedabad, India", link: "https://maps.google.com/?q=Ahmedabad", color: "text-emerald-500", bg: "bg-emerald-500/10" }
  ];

  return (
    <div className="flex h-full bg-[#1c1c1e] text-gray-100 font-sans select-none overflow-hidden sm:rounded-b-2xl">
      {/* High-Fidelity Sidebar */}
      <div className="w-[360px] bg-[#1a1a1b] border-r border-black/40 flex flex-col p-10 shrink-0">
        <h2 className="text-3xl font-black text-white mb-10 tracking-tighter leading-none">Let's Talk</h2>
        
        <div className="flex-1 space-y-6 overflow-y-auto no-scrollbar">
          {contactMethods.map((cm, idx) => (
            <a 
              key={idx} 
              href={cm.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-6 p-5 rounded-2xl hover:bg-white/5 transition-all border border-white/5 hover:border-indigo-500/30 group bg-[#252526]"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cm.bg} ${cm.color} group-hover:scale-110 transition-all duration-300 shadow-xl shadow-black/40 shrink-0`}>
                {cm.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] leading-none mb-2">{cm.label}</p>
                <p className="text-[13px] text-gray-200 font-bold truncate">{cm.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Bridge */}
        <div className="mt-8 pt-8 border-t border-black/40">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-6">Network Nodes</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/vaibhavsonii21" target="_blank" rel="noreferrer" className="flex-1 group flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all shadow-sm">
              <LinkedIn style={{ width: '18px', height: '18px' }} />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0077b5] group-hover:text-white">LinkedIn</span>
            </a>
            <a href="https://github.com/vaibhav21soni" target="_blank" rel="noreferrer" className="flex-1 group flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white hover:text-black transition-all shadow-sm">
              <GitHub width={18} height={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modern Centered Form Area */}
      <div className="flex-1 bg-[#1c1c1e] overflow-y-auto custom-scrollbar flex items-start justify-center p-8 lg:p-12">
        <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="bg-[#252526] p-10 rounded-[2.5rem] border border-white/10 shadow-3xl shadow-black/60 relative overflow-hidden group">
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
                 <h3 className="text-2xl font-black text-white tracking-tight">Direct Transmission</h3>
              </div>
              <p className="text-[13px] text-gray-400 mb-8 leading-relaxed font-medium">Infrastructure challenge or career opportunity? Transmit your data below.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Identity</label>
                    <input 
                      type="text" name="name" required value={formData.name} onChange={handleChange} 
                      placeholder="Your Name"
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-3.5 text-[13px] text-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all placeholder-gray-600 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Frequency</label>
                    <input 
                      type="email" name="email" required value={formData.email} onChange={handleChange} 
                      placeholder="Email Address"
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-3.5 text-[13px] text-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all placeholder-gray-600 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Protocol / Subject</label>
                  <input 
                    type="text" name="subject" value={formData.subject} onChange={handleChange} 
                    placeholder="Briefly describe the inquiry"
                    className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-3.5 text-[13px] text-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all placeholder-gray-600 font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Data / Message</label>
                  <textarea 
                    name="message" required value={formData.message} onChange={handleChange} rows="4"
                    placeholder="Detailed message regarding migration, automation, or role..."
                    className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-[13px] text-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all resize-none placeholder-gray-600 font-medium"
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl text-[12px] font-bold border animate-in fade-in zoom-in duration-300 ${status.type === 'success' ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-red-500/5 border-red-500/20 text-red-400'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${status.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} animate-pulse`}></div>
                      {status.message}
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] disabled:bg-gray-700/50 text-white h-14 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] transition-all shadow-2xl shadow-indigo-600/30 disabled:shadow-none"
                >
                  {isSubmitting ? (
                     <><Loader size={16} className="animate-spin" /> Transmission...</>
                  ) : (
                     <><Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Commit & Send</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
