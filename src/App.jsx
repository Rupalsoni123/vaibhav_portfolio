import React, { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./utils/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import SkipLink from "./components/ui/SkipLink";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Lazy load non-critical components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTopButton = lazy(() => import("./components/BackToTopButton"));

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`transition-all duration-300 ${theme}`}>
      <SkipLink />
      <div style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        minHeight: '100vh'
      }}>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        
        <main id="main-content" role="main" className="relative">
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
          
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
              <Contact />
            </ErrorBoundary>
          </Suspense>
        </main>
        
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
      </div>
    </div>
  );
};

export default App;



