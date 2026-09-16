import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = ({ children, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const reloadPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 lg:left-64 xl:left-72 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-brandDark/80 border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding (Visible on mobile & tablet, LeftPanel handles desktop) */}
          <div 
            onClick={reloadPage}
            className="flex items-center space-x-2.5 cursor-pointer lg:hidden group"
          >
            <img
              src={logo}
              alt="Lester Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 hover:scale-105 active:scale-95 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight font-sans tracking-tight group-hover:text-blue-500 transition-colors">
                Lester Quiñones
              </span>
              <span className="text-[10px] sm:text-xs text-blue-500 dark:text-lightblue font-mono font-medium">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Horizontal Nav buttons for medium screens (sm to md) */}
            <div className="hidden sm:flex lg:hidden items-center space-x-2 text-xs sm:text-sm font-semibold overflow-x-auto scrollbar-none py-1">
              {children}
            </div>

            {/* Mobile Hamburger Toggle button (extra small screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-sm`}></i>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-200 focus:outline-none flex-shrink-0"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <i className="fas fa-sun text-yellow-500 text-sm md:text-base"></i>
              ) : (
                <i className="fas fa-moon text-indigo-600 text-sm md:text-base"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (extra small screens) */}
        {mobileMenuOpen && (
          <div className="sm:hidden pb-4 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col space-y-2 px-2">
            {children}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
