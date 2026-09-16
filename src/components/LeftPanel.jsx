import React from "react";
import logo from "../assets/logo.png";

const LeftPanel = ({
  activeSection,
  scrollDown,
  aboutmeRef,
  experienceRef,
  projectsRef,
  certificateRef,
  contactRef,
}) => {
  const navItems = [
    { id: "about", label: "About Me", icon: "fas fa-user", ref: aboutmeRef, num: "01" },
    { id: "experience", label: "Experience", icon: "fas fa-briefcase", ref: experienceRef, num: "02" },
    { id: "projects", label: "Featured Work", icon: "fas fa-laptop-code", ref: projectsRef, num: "03" },
    { id: "certificate", label: "Certificate", icon: "fas fa-award", ref: certificateRef, num: "04" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope", ref: contactRef, num: "05" },
  ];

  return (
    <aside className="hidden lg:flex flex-col justify-between fixed top-0 left-0 bottom-0 z-50 w-64 xl:w-72 bg-white/90 dark:bg-brandDark/95 backdrop-blur-xl border-r border-slate-200/60 dark:border-slate-800/60 p-6 shadow-xl transition-all duration-300">
      {/* Top Branding / Logo */}
      <div className="flex items-center space-x-3 pt-3 pb-6 border-b border-slate-200/50 dark:border-slate-800/50">
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src={logo}
          alt="Lester Logo"
          className="w-10 h-10 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
        />
        <div>
          <h2 className="font-bold text-slate-800 dark:text-white text-base leading-tight font-sans tracking-tight">
            Lester Quiñones
          </h2>
          <p className="text-xs text-blue-500 dark:text-lightblue font-mono font-medium">
            Full Stack Developer
          </p>
        </div>
      </div>

      {/* Navigation Links Menu */}
      <nav className="flex-1 py-8 flex flex-col justify-center space-y-3">
        <p className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase px-3 mb-2">
          Navigation
        </p>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollDown(item.ref)}
              className={`group flex items-center w-full px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-blue-500/10 text-blue-600 dark:text-lightblue dark:bg-lightblue/10 font-bold shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              {/* Active / Hover Indicator Line */}
              <span
                className={`h-0.5 rounded-full mr-3 transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-blue-500 dark:bg-lightblue"
                    : "w-2 bg-slate-300 dark:bg-slate-700 group-hover:w-4 group-hover:bg-slate-400 dark:group-hover:bg-slate-500"
                }`}
              ></span>

              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 mr-2.5 group-hover:text-blue-500 dark:group-hover:text-lightblue transition-colors">
                {item.num}.
              </span>

              <i
                className={`${item.icon} text-xs mr-2.5 transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? "text-blue-500 dark:text-lightblue" : "text-slate-400 dark:text-slate-500"
                }`}
              ></i>

              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Social Links Footer */}
      <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-around">
        <a
          href="https://github.com/LesterQuin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-lg"></i>
        </a>
        <a
          href="https://www.facebook.com/lester.quin17/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook text-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/acether.png"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
      </div>
    </aside>
  );
};

export default LeftPanel;