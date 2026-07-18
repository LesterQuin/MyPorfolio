import React, { useLayoutEffect, useEffect, useRef, useState } from "react";

import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatePage from "./pages/CertificatePage";

import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Loader from "./components/Loader";
import RightPanel from "./components/RightPanel";
import ScrollReveal from "./components/ScrollReveal";
import ResumeModal from "./components/ResumeModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const aboutmeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const certificateRef = useRef(null);

  const scrollDown = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // reduced loader slightly for snappy UX, but keeping it visible and elegant
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track Mouse Spotlight Position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track Active Navigation Link
  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutmeRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
      { id: "certificate", ref: certificateRef },
      { id: "contact", ref: contactRef },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = sections.find((s) => s.ref.current === entry.target);
          if (matched) {
            setActiveSection(matched.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => {
      sections.forEach((s) => {
        if (s.ref.current) observer.unobserve(s.ref.current);
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (loading === true) {
    return <Loader theme={theme} />;
  }

  const spotlightStyle = {
    backgroundImage: theme === "dark"
      ? `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
      : `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.04), transparent 80%)`
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-brandDark dark:text-slate-100 transition-colors duration-300 font-sans relative overflow-x-hidden">
      {/* Spotlight backdrop overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300" 
        style={spotlightStyle} 
      />
      <Header theme={theme} toggleTheme={toggleTheme}>
        <button
          className={`text-left font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
            activeSection === "about"
              ? "bg-slate-200 dark:bg-slate-800 text-blue-500 dark:text-lightblue font-bold"
              : "text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-lightblue hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
          }`}
          onClick={() => scrollDown(aboutmeRef)}
        >
          <i className="fas fa-user text-[10px] sm:text-xs"></i>
          <span>About Me</span>
        </button>
        <button
          className={`text-left font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
            activeSection === "experience"
              ? "bg-slate-200 dark:bg-slate-800 text-blue-500 dark:text-lightblue font-bold"
              : "text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-lightblue hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
          }`}
          onClick={() => scrollDown(experienceRef)}
        >
          <i className="fas fa-briefcase text-[10px] sm:text-xs"></i>
          <span>Experience</span>
        </button>
        <button
          className={`text-left font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
            activeSection === "projects"
              ? "bg-slate-200 dark:bg-slate-800 text-blue-500 dark:text-lightblue font-bold"
              : "text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-lightblue hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
          }`}
          onClick={() => scrollDown(projectsRef)}
        >
          <i className="fas fa-code text-[10px] sm:text-xs"></i>
          <span>Projects</span>
        </button>
        <button
          className={`text-left font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
            activeSection === "certificate"
              ? "bg-slate-200 dark:bg-slate-800 text-blue-500 dark:text-lightblue font-bold"
              : "text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-lightblue hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
          }`}
          onClick={() => scrollDown(certificateRef)}
        >
          <i className="fas fa-award text-[10px] sm:text-xs"></i>
          <span>Certificate</span>
        </button>
        <button
          className={`text-left font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
            activeSection === "contact"
              ? "bg-slate-200 dark:bg-slate-800 text-blue-500 dark:text-lightblue font-bold"
              : "text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-lightblue hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
          }`}
          onClick={() => scrollDown(contactRef)}
        >
          <i className="fas fa-envelope text-[10px] sm:text-xs"></i>
          <span>Contact</span>
        </button>
      </Header>
      
      <RightPanel theme={theme} />
      <LeftPanel theme={theme} />
      
      <main className="relative z-10">
        <div>
          <HomePage 
            scrollDown={scrollDown} 
            projectsRef={projectsRef} 
            contactRef={contactRef} 
          />
        </div>
        <div ref={aboutmeRef}>
          <ScrollReveal>
            <AboutMePage />
          </ScrollReveal>
        </div>
        <div ref={experienceRef}>
          <ScrollReveal>
            <ExperiencePage />
          </ScrollReveal>
        </div>
        <div ref={projectsRef}>
          <ScrollReveal>
            <ProjectsPage />
          </ScrollReveal>
        </div>
        <div ref={certificateRef}>
          <ScrollReveal>
            <CertificatePage />
          </ScrollReveal>
        </div>
        <div ref={contactRef}>
          <ScrollReveal>
            <ContactPage onOpenResume={() => setIsResumeOpen(true)} />
          </ScrollReveal>
        </div>
      </main>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App; 