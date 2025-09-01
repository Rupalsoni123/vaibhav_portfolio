import React, { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./utils/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import SEO from "./components/ui/SEO";
import SimpleChatbot from "./components/SimpleChatbot";

// Lazy load non-critical components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTopButton = lazy(() => import("./components/BackToTopButton"));

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`transition-all duration-300 ${theme}`}>
      {/* SEO Optimization */}
      <SEO />
      
      <div style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        minHeight: '100vh'
      }}>
        {/* Navigation */}
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        
        {/* Main Content */}
        <main id="main-content" role="main" className="relative">
          {/* Hero Section */}
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
          
          {/* Lazy Loaded Sections */}
          <Suspense fallback={
            <div className="section" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-primary)',
              minHeight: '50vh'
            }}>
              <LoadingSpinner text="Loading content..." />
            </div>
          }>
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
            <ErrorBoundary>
              <Skills />
            </ErrorBoundary>
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
            <ErrorBoundary>
              <Blog />
            </ErrorBoundary>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          </Suspense>
        </main>
        
        {/* Footer and Utilities */}
        <Suspense fallback={
          <div style={{
            height: '8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)'
          }}>
            <LoadingSpinner />
          </div>
        }>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
          <ErrorBoundary>
            <BackToTopButton />
          </ErrorBoundary>
        </Suspense>
        
        {/* AI Chatbot */}
        <ErrorBoundary>
          <SimpleChatbot />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
