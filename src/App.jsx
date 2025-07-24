import React, { useContext } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import { ThemeContext } from "./utils/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${theme} transition-colors duration-300`}>
      <div className="bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
};

export default App;
