import React, { useContext } from "react";
import { ThemeContext } from "./utils/ThemeContext";
import Navbar from "./components/Navbar";

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div style={{
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      minHeight: '100vh'
    }}>
      <Navbar />
      
      <main style={{ paddingTop: '5rem' }}>
        <div style={{
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
            Vaibhav Soni - DevOps Engineer
          </h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Navbar is now loaded! Testing component by component...
          </p>
          <div style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            marginBottom: '2rem'
          }}>
            <h2>Current Theme: {theme}</h2>
            <p>CSS Variables are working correctly.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;



