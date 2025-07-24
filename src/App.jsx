import React, { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./utils/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import SkipLink from "./components/ui/SkipLink";

// Lazy load non-critical components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTopButton = lazy(() => import("./components/BackToTopButton"));

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${theme} transition-colors duration-300`}>
      <SkipLink />
      <div className="bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main id="main-content" role="main">
          <Home />
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center bg-slate-200 dark:bg-gray-900">
              <LoadingSpinner />
            </div>
          }>
            <About />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={
          <div className="h-32 flex items-center justify-center bg-slate-200 dark:bg-gray-900">
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



