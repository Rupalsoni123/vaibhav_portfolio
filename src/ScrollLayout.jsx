import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PipelineDemo from "./components/PipelineDemo";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

const SimpleChatbot = lazy(() => import("./components/SimpleChatbot"));

const ScrollLayout = ({ onOpenPalette, onOpenHelp }) => {
  useEffect(() => {
    document.body.setAttribute("data-mode", "scroll");
    return () => document.body.removeAttribute("data-mode");
  }, []);

  return (
    <>
      <a
        href="#home"
        style={{
          position: "absolute",
          left: 8,
          top: 8,
          background: "var(--p3-accent)",
          color: "var(--p3-bg-0)",
          padding: "8px 12px",
          borderRadius: 8,
          zIndex: 9999,
          transform: "translateY(-200%)",
          transition: "transform .15s",
        }}
        onFocus={(e) => (e.target.style.transform = "translateY(0)")}
        onBlur={(e) => (e.target.style.transform = "translateY(-200%)")}
      >
        Skip to content
      </a>
      <Navbar onOpenPalette={onOpenPalette} onOpenHelp={onOpenHelp} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <PipelineDemo />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
      <Suspense fallback={null}>
        <SimpleChatbot />
      </Suspense>
    </>
  );
};

export default ScrollLayout;
