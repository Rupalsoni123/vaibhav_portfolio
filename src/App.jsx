import React, { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./utils/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import SkipLink from "./components/ui/SkipLink";

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
    <div className="transition-all duration-300">
      <SkipLink />
      <div className="bg-black text-neon-green min-h-screen">
        <Navbar />
        <main id="main-content" role="main" className="relative">
          <Home />
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center bg-black">
              <LoadingSpinner />
            </div>
          }>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={
          <div className="h-32 flex items-center justify-center bg-black">
            <LoadingSpinner />
          </div>
        }>
          <Footer />
          <BackToTopButton />
        </Suspense>
      </div>
    </div>
  );
};

export default App;



