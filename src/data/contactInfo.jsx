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
      icon: <LinkedIn style={{ width: '20px', height: '20px' }} />,
    },
    {
      id: 2,
      platform: "GitHub",
      url: "https://github.com/vaibhav21soni",
      icon: <GitHub style={{ width: '20px', height: '20px' }} />,
    },
    {
      id: 3,
      platform: "Email",
      url: "mailto:vaibhavsoni5567@gmail.com",
      icon: <GMail style={{ width: '20px', height: '20px' }} />,
    },
    {
      id: 4,
      platform: "Resume",
      url: ResumeLink,
      icon: <Resume style={{ width: '20px', height: '20px' }} />,
    }
  ]
}
export default contactInfo;