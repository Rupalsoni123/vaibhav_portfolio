// Button utility functions to ensure proper functionality

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
  } else {
    console.warn(`Section with id "${sectionId}" not found`);
  }
};

export const downloadFile = (url, filename) => {
  try {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: open in new tab
    window.open(url, '_blank');
  }
};

export const openExternalLink = (url) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export const handleContactMethod = (method, value) => {
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

export const preventDefaultAndExecute = (event, callback) => {
  event.preventDefault();
  event.stopPropagation();
  if (typeof callback === 'function') {
    callback();
  }
};

// Button click handlers
export const buttonHandlers = {
  scrollToContact: () => scrollToSection('contact'),
  scrollToProjects: () => scrollToSection('projects'),
  scrollToAbout: () => scrollToSection('about'),
  scrollToSkills: () => scrollToSection('skills'),
  scrollToHome: () => scrollToSection('home'),
  scrollToTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  
  downloadResume: (resumeUrl) => downloadFile(resumeUrl, 'Vaibhav_Soni_Resume.pdf'),
  
  openGitHub: () => openExternalLink('https://github.com/vaibhav21soni'),
  openLinkedIn: () => openExternalLink('https://linkedin.com/in/vaibhavsonii21'),
  
  contactEmail: () => handleContactMethod('email', 'vaibhavsoni5567@gmail.com'),
  contactPhone: () => handleContactMethod('phone', '+918890944027'),
  contactLocation: () => handleContactMethod('location', 'Ahmedabad, India')
};

export default buttonHandlers;
