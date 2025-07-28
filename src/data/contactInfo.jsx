import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf";

const contactInfo = {
  email: "vaibhavsoni5567@gmail.com",
  phone: "+91 8890944027",
  location: "Ahmedabad, India",
  socialLinks: [
    {
      id: 1,
      platform: "LinkedIn",
      url: "https://linkedin.com/in/vaibhavsonii21",
      icon: <LinkedIn />,
    },
    {
      id: 2,
      platform: "GitHub", 
      url: "https://github.com/vaibhav21soni",
      icon: <GitHub />,
    },
    {
      id: 3,
      platform: "Email",
      url: "mailto:vaibhavsoni5567@gmail.com",
      icon: <GMail />,
    },
    {
      id: 4,
      platform: "Resume",
      url: ResumeLink,
      icon: <Resume />,
      download: true
    }
  ],
  // Legacy array format for backward compatibility
  links: [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://linkedin.com/in/vaibhavsonii21",
      icon: <LinkedIn />,
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/vaibhav21soni",
      icon: <GitHub />,
    },
    {
      id: 3,
      name: "Mail",
      link: "mailto:vaibhavsoni5567@gmail.com",
      icon: <GMail />,
    },
    {
      id: 5,
      name: "Resume",
      link: ResumeLink,
      icon: <Resume />,
      download: true
    }
  ]
};

export default contactInfo;