import React, { useContext } from "react";
import { ThemeContext } from "./utils/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div style={{
      background: theme === 'dark' ? '#171717' : '#fafafa',
      color: theme === 'dark' ? '#fafafa' : '#171717',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Vaibhav Soni - DevOps Engineer
      </h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        Portfolio is loading... If you see this, the basic React app is working!
      </p>
      <div style={{
        padding: '1rem',
        background: theme === 'dark' ? '#262626' : '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2>Current Theme: {theme}</h2>
        <p>This is a test to ensure the app renders correctly.</p>
      </div>
      
      {/* Test navigation */}
      <nav style={{ marginBottom: '2rem' }}>
        <a href="#home" style={{ marginRight: '1rem', color: '#2563eb' }}>Home</a>
        <a href="#about" style={{ marginRight: '1rem', color: '#2563eb' }}>About</a>
        <a href="#skills" style={{ marginRight: '1rem', color: '#2563eb' }}>Skills</a>
        <a href="#projects" style={{ marginRight: '1rem', color: '#2563eb' }}>Projects</a>
        <a href="#contact" style={{ color: '#2563eb' }}>Contact</a>
      </nav>
      
      {/* Test sections */}
      <section id="home" style={{ marginBottom: '3rem', padding: '2rem', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white', borderRadius: '12px' }}>
        <h2>Home Section</h2>
        <p>Welcome to my DevOps portfolio. I specialize in cloud infrastructure, automation, and scalable solutions.</p>
      </section>
      
      <section id="about" style={{ marginBottom: '3rem', padding: '2rem', background: theme === 'dark' ? '#262626' : '#f5f5f5', borderRadius: '12px' }}>
        <h2>About Section</h2>
        <p>DevOps Engineer with experience in AWS, Azure, Kubernetes, and Infrastructure as Code.</p>
      </section>
      
      <section id="skills" style={{ marginBottom: '3rem', padding: '2rem', background: theme === 'dark' ? '#262626' : '#f5f5f5', borderRadius: '12px' }}>
        <h2>Skills Section</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ padding: '1rem', background: theme === 'dark' ? '#404040' : '#e5e5e5', borderRadius: '8px' }}>AWS</div>
          <div style={{ padding: '1rem', background: theme === 'dark' ? '#404040' : '#e5e5e5', borderRadius: '8px' }}>Kubernetes</div>
          <div style={{ padding: '1rem', background: theme === 'dark' ? '#404040' : '#e5e5e5', borderRadius: '8px' }}>Terraform</div>
          <div style={{ padding: '1rem', background: theme === 'dark' ? '#404040' : '#e5e5e5', borderRadius: '8px' }}>Docker</div>
        </div>
      </section>
      
      <section id="projects" style={{ marginBottom: '3rem', padding: '2rem', background: theme === 'dark' ? '#262626' : '#f5f5f5', borderRadius: '12px' }}>
        <h2>Projects Section</h2>
        <p>Featured projects including Azure Infrastructure Migration, Kubernetes clusters, and CI/CD automation.</p>
      </section>
      
      <section id="contact" style={{ padding: '2rem', background: 'linear-gradient(135deg, #0d9488, #2563eb)', color: 'white', borderRadius: '12px' }}>
        <h2>Contact Section</h2>
        <p>Email: vaibhavsoni5567@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/vaibhavsonii21</p>
        <p>GitHub: github.com/vaibhav21soni</p>
      </section>
    </div>
  );
};

export default App;



