import React, { useLayoutEffect, useRef, useState } from "react";

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

function App() {
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  if (loading == true) {
    return <Loader />;
  }
  return (
    <div className="app">
      <Header>
        <button
          className="text-left hover:text-lightblue focus:text-lightblue"
          onClick={() => scrollDown(aboutmeRef)}
        >
          <span className="text-lightblue"> </span>About Me
        </button>
        <button
          className="text-left hover:text-lightblue focus:text-lightblue"
          onClick={() => scrollDown(experienceRef)}
        >
          <span className="text-lightblue"> </span>Experience
        </button>
        <button
          className="text-left hover:text-lightblue focus:text-lightblue"
          onClick={() => scrollDown(projectsRef)}
        >
          <span className="text-lightblue"> </span>Projects
        </button>
        <button
         className="text-left hover:text-lightblue focus:text-lightblue"
         onClick={() => scrollDown(certificateRef)}
        >
           <span className="text-lightblue"> </span>Certificate
        </button>
        <button
          className="text-left hover:text-lightblue focus:text-lightblue"
          onClick={() => scrollDown(contactRef)}
        >
          <span className="text-lightblue"> </span>Contact
        </button>
      </Header>
      <RightPanel />
      <LeftPanel />
      <div className="container">
        <HomePage />
      </div>
      <div className="container" ref={aboutmeRef}>
        <AboutMePage />
      </div>
      <div className="container" ref={experienceRef}>
        <ExperiencePage />
      </div>
      <div className="container" ref={projectsRef}>
        <ProjectsPage />
      </div>
      <div className="container" ref={certificateRef}>
        <CertificatePage />
    </div>
      <div className="container" ref={contactRef}>
        <ContactPage />
      </div>
    </div>
  );
}

export default App; 