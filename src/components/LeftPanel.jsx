import React from "react";

const LeftPanel = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 left-8 z-40 space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate-300 dark:after:bg-slate-700 after:mt-4 transition-all duration-300">
      <a
        href="https://github.com/LesterQuin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-lightblue dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
        aria-label="GitHub"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-lightblue dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a
        href="https://www.facebook.com/lester.quin17/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-lightblue dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook text-xl"></i>
      </a>
      <a
        href="https://www.instagram.com/acether.png"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-lightblue dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>
    </div>
  );
};

export default LeftPanel;