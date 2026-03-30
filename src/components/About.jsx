import React, { useState } from "react";
import { Download, Award, Rocket, User, Briefcase } from "lucide-react";
// import resume from "../assets/resume.pdf"; // Re-enable if exists

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleDownloadResume = (e) => {
    e.preventDefault();
    // const link = document.createElement('a');
    // link.href = resume;
    // link.download = 'Vaibhav_Soni_Resume.pdf';
    // link.click();
    window.open('https://vaibhavsoni21.vercel.app/resume/Vaibhav_Soni_Resume.pdf', '_blank');
  };

  const journey = [
    {
      year: "Aug 2025",
      title: "DevOps Engineer",
      company: "Inexture Solutions",
      description: "Working on multi-cloud infrastructure, CI/CD pipelines, SonarQube, and Automation."
    },
    {
      year: "2024",
      title: "Career Break",
      company: "Family & Upskilling",
      description: "Completed HashiCorp Certified: Terraform Associate (003) certification."
    },
    {
      year: "2023",
      title: "DevOps Engineer",
      company: "HighSkyIT Solutions",
      description: "Migrated Azure to Terraform, built K8s clusters, automated AWS with Terragrunt."
    },
    {
      year: "2022",
      title: "Journey into DevOps",
      company: "Non-CS background",
      description: "Completed DevOps training from HighSkyIT and Red Hat certification."
    }
  ];

  const certifications = [
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      year: "2024",
      icon: <Award size={24} className="text-orange-400" />
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Award size={24} className="text-blue-400" />
    },
    {
      name: "Red Hat Certified System Administrator",
      issuer: "Red Hat",
      year: "2022",
      icon: <Award size={24} className="text-red-500" />
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-200">Executive Summary</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-[13px]">
              <p>
                Self-driven professional who transitioned from a non-CS background to DevOps through practical project experience, certifications, and continuous learning. Currently focused on advancing Kubernetes expertise and AWS CDK with TypeScript to deliver scalable, enterprise-grade cloud-native solutions.
              </p>
              <p>
                Results-driven DevOps Engineer with hands-on experience in cloud infrastructure automation, containerization, and CI/CD pipeline optimization across AWS, Azure, and DigitalOcean platforms. Proven track record of migrating 240+ Azure resources to Terraform-based Infrastructure as Code, reducing code duplication by 70%.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/5">
              <button 
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-all font-semibold text-xs shadow-lg shadow-indigo-600/20"
              >
                <Download size={14} /> View Official Resume
              </button>
            </div>
          </div>
        );
      
      case 'journey':
        return (
          <div className="relative">
            <h2 className="text-lg font-bold text-gray-200 mb-6">Professional Timeline</h2>
            <div className="border-l-2 border-indigo-500/20 ml-3 space-y-6 pb-4">
              {journey.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute w-2.5 h-2.5 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-[#1c1c1e]" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                    <h3 className="text-sm font-bold text-gray-200">{item.title}</h3>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{item.year}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-gray-500 mb-2 uppercase tracking-tight">{item.company}</div>
                  <p className="text-[12px] text-gray-400 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div>
            <h2 className="text-lg font-bold text-gray-200 mb-6">Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#2d2d2d] border border-white/5 rounded-lg p-4 transition-all hover:border-indigo-500/30 flex items-center gap-4">
                  <div className="p-2.5 bg-white/5 rounded-lg shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-200 font-bold text-[13px] leading-tight mb-1">{cert.name}</h3>
                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wide">{cert.issuer}</p>
                    <p className="text-[10px] text-gray-500 mt-1 font-medium">{cert.year}</p>
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
    { id: 'overview', icon: <User size={15} />, label: 'Profile' },
    { id: 'journey', icon: <Briefcase size={15} />, label: 'Experience' },
    { id: 'certifications', icon: <Award size={15} />, label: 'Certifications' }
  ];

  return (
    <div className="flex h-full bg-[#1c1c1e] text-gray-100 overflow-hidden select-none">
      {/* Sidebar sidebar */}
      <div className="w-[240px] bg-[#1a1a1b] border-r border-black/20 flex flex-col p-5">
        <div className="flex flex-col items-center mb-10 mt-2">
          <div className="w-20 h-20 rounded-lg bg-[#252526] p-0.5 mb-4 shadow-xl border border-white/5 overflow-hidden">
             <img src="/images/caricature.png" alt="Vaibhav" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-base font-bold text-gray-100 mb-0.5 tracking-tight">Vaibhav Soni</h1>
          <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">DevOps Engineer</p>
        </div>

        <nav className="flex flex-col gap-1.5">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-all text-xs font-bold ${
                activeTab === item.id 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#1c1c1e]">
        <div className="max-w-2xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;
