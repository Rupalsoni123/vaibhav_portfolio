import ReactJs, { AWS, Terraform, Jenkins, Git, Kubernetes, Nginx } from "../components/SkilIcons"


const iconStyle = {
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TechStack = [
  {
    id: 1,
    icon: <div style={iconStyle}><AWS /></div>,
    name: "AWS",
  },
  {
    id: 2,
    icon: <div style={iconStyle}><Terraform /></div>,
    name: "Terraform",
  },
  {
    id: 3,
    icon: <div style={iconStyle}><Jenkins /></div>,
    name: "Jenkins",
  },
  {
    id: 4,
    icon: <div style={iconStyle}><Kubernetes /></div>,
    name: "Kubernetes",
  },
  {
    id: 5,
    icon: <div style={iconStyle}><Git /></div>,
    name: "Git",
  },
  {
    id: 6,
    icon: <div style={iconStyle}><Nginx /></div>,
    name: "Nginx",
  },
]


export default TechStack;

