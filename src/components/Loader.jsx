import React from "react";
import logo from "../assets/logo.png";

function Loader({ theme }) {
  return (
    <div className="w-screen h-screen bg-slate-50 dark:bg-brandDark flex items-center justify-center transition-colors duration-300">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative flex items-center justify-center w-28 h-28">
          <div className="loader-spinner absolute"></div>
          <img className="w-16 h-16 animate-float z-10" src={logo} alt="logo" />
        </div>
        <h2 className="text-xl font-semibold tracking-wider text-slate-800 dark:text-slate-200 animate-pulse font-mono">
          LQ
        </h2>
      </div>
    </div>
  );
}

export default Loader;
