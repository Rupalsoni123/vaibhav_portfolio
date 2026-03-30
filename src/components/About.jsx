import React, { useState } from "react";
import { Download, Award, Rocket, User, Briefcase, MapPin, Mail, Phone, Globe, Server, Layers, Cpu, Cloud, CheckCircle2 } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleDownloadResume = (e) => {
    e.preventDefault();
    window.open('https://vaibhavsoni21.vercel.app/resume/Vaibhav_Soni_Resume.pdf', '_blank');
  };

  const experience = [
    {
      period: "May 2025 - Present",
      title: "DevOps Engineer",
      company: "Inexture Solutions",
      location: "Ahmedabad, India",
      points: [
        "Operated production-grade Kubernetes workloads on private GKE clusters within a secured VPC.",
        "Administered Istio service mesh for ingress routing, traffic management, and secure mTLS communication.",
        "Managed CI/CD pipelines for 10+ services across Backend, Frontend, and AI workloads using Jenkins and GitHub Actions.",
        "Migrated legacy Jenkins bare-metal infrastructure to a containerized Docker-based architecture.",
        "Deployed and secured cloud-native applications on AWS using Docker, Nginx, SSL/TLS, and CloudFront CDN."
      ]
    },
    {
      period: "Feb 2023 - Feb 2024",
      title: "DevOps Engineer",
      company: "Highskyit Solutions",
      location: "Ahmedabad, India",
      points: [
        "Led the migration of 240+ Azure resources to Terraform-based Infrastructure as Code.",
        "Designed reusable Terraform modules, reducing infrastructure code duplication by approximately 70%.",
        "Provisioned multi-account AWS environments using Terragrunt, AWS Organizations, and Service Control Policies (SCPs).",
        "Automated cross-platform infrastructure deployments via peer-reviewed Bitbucket CI/CD pipelines."
      ]
    },
    {
      period: "March 2024 - May 2025",
      title: "Professional Development (Sabbatical)",
      company: "Independent Learning",
      location: "India",
      points: [
        "Completed HashiCorp Terraform Associate (003) certification.",
        "Strengthened AWS cloud architecture knowledge through targeted labs and deep-dives into Kubernetes internals.",
        "Maintained family healthcare responsibilities while continuing technical growth."
      ]
    }
  ];

  const coreSkills = [
    { category: "Cloud", items: ["AWS", "GCP", "Azure", "DigitalOcean"], icon: <Cloud size={16}/> },
    { category: "Orchestration", items: ["Kubernetes", "Docker", "Helm", "Istio"], icon: <Layers size={16}/> },
    { category: "Automation (IaC)", items: ["Terraform", "Terragrunt", "Ansible", "AWS CDK"], icon: <Server size={16}/> },
    { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "Bitbucket"], icon: <Cpu size={16}/> }
  ];

  const certifications = [
    { name: "HashiCorp Certified Terraform Associate (003)", issuer: "HashiCorp", year: "2024", icon: <Award size={24} className="text-orange-400" /> },
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023", icon: <Award size={24} className="text-blue-400" /> },
    { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", year: "2022", icon: <Award size={24} className="text-red-500" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
                 <h2 className="text-xl font-bold text-gray-100 tracking-tight">Executive Summary</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-[14px]">
                DevOps Engineer with 2+ years of hands-on experience building, automating, and operating cloud-native infrastructure across AWS, Azure, and GCP. Strong expertise in Infrastructure as Code (Terraform, Terragrunt), container orchestration (Kubernetes, Istio), and CI/CD automation. 
              </p>
              <p className="text-gray-400 leading-relaxed text-[14px]">
                Proven ability to migrate legacy systems to containerized and microservices-based architectures while improving deployment reliability, security, and scalability across SaaS, fintech, and AI workloads. Transitioned from a non-CS background through rigorous practical experience and top-tier certifications.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {coreSkills.map((skill, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors group">
                    <div className="flex items-center gap-3 mb-3 text-indigo-400 font-bold uppercase tracking-widest text-[10px]">
                       {skill.icon} {skill.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {skill.items.map(item => (
                         <span key={item} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-[11px] rounded font-medium border border-indigo-500/20">
                            {item}
                         </span>
                       ))}
                    </div>
                 </div>
               ))}
            </section>

            <div className="pt-6 border-t border-white/5">
               <button 
                onClick={handleDownloadResume}
                className="group flex items-center gap-3 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all font-bold text-sm shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" /> 
                Download Professional HQ Resume
              </button>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <h2 className="text-xl font-bold text-gray-100 tracking-tight flex items-center gap-3">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              Professional Experience
            </h2>
            <div className="space-y-12 ml-2">
              {experience.map((job, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#1c1c1e]" />
                  <div className="mb-4">
                    <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                       <h3 className="text-lg font-bold text-gray-100">{job.title}</h3>
                       <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                       <span className="flex items-center gap-1.5"><Briefcase size={12}/> {job.company}</span>
                       <span className="flex items-center gap-1.5"><MapPin size={12}/> {job.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-[13px] text-gray-400 leading-relaxed">
                         <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-1" strokeWidth={3} />
                         <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <h2 className="text-xl font-bold text-gray-100 tracking-tight flex items-center gap-3">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              Industry Certifications
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.08] hover:border-indigo-500/40 flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <h3 className="text-gray-100 font-bold text-base leading-tight mb-1.5">{cert.name}</h3>
                       <span className="text-xs font-bold text-gray-500">{cert.year}</span>
                    </div>
                    <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">{cert.issuer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-green-400 font-bold uppercase">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Verified Credential
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const navItems = [
    { id: 'overview', icon: <User size={18} />, label: 'Profile' },
    { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
    { id: 'certifications', icon: <Award size={18} />, label: 'Credentials' }
  ];

  return (
    <div className="flex h-full bg-[#1c1c1e] text-gray-100 overflow-hidden select-none font-sans">
      {/* Visual Sidebar */}
      <div className="w-[300px] bg-[#1a1a1b] border-r border-black/20 flex flex-col p-8 lg:p-10">
        <div className="flex flex-col items-center mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-2xl bg-[#252526] p-1 shadow-2xl border border-white/10 overflow-hidden mb-6">
               <img src="/images/caricature.png" alt="Vaibhav" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-gray-100 mb-1 tracking-tight">Vaibhav Soni</h1>
          <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
             <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.2em]">DevOps Engineer</p>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all text-[13px] font-bold ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'text-gray-500 hover:text-gray-100 hover:bg-white/5'
              }`}
            >
              <div className={`${activeTab === item.id ? 'text-white' : 'text-gray-500 group-hover:text-indigo-400'} transition-colors`}>
                 {item.icon}
              </div>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
           <div className="flex flex-col gap-2 text-[11px] text-gray-500 font-medium">
              <p className="flex items-center gap-3"><MapPin size={14}/> Ahmedabad, India</p>
              <p className="flex items-center gap-3"><Mail size={14}/> vaibhavsoni5567@gmail.com</p>
              <p className="flex items-center gap-3"><Phone size={14}/> +91 8890944027</p>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-12 lg:p-16 custom-scrollbar bg-[#1c1c1e] scroll-smooth">
        <div className="max-w-3xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;
