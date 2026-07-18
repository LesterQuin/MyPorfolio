import React from "react";
import logo from "../assets/logo.png";

const Header = ({ children, theme, toggleTheme }) => {
  const reloadPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-brandDark/80 border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-2 sm:mr-4">
            <img
              onClick={reloadPage}
              src={logo}
              alt="Lester Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
            />
          </div>

          {/* Navigation and Theme Switcher (visible everywhere as a row) */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto scrollbar-none py-1">
            <div className="flex items-center space-x-2.5 sm:space-x-4 md:space-x-5 text-[10px] sm:text-sm md:text-base font-semibold whitespace-nowrap">
              {children}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-200 focus:outline-none flex-shrink-0"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <i className="fas fa-sun text-yellow-500 text-xs sm:text-sm md:text-base"></i>
              ) : (
                <i className="fas fa-moon text-indigo-600 text-xs sm:text-sm md:text-base"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
