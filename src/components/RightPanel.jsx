import React from "react";

const RightPanel = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 right-8 z-40 space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate-300 dark:after:bg-slate-700 after:mt-4 transition-all duration-300">
      <div 
        className="text-slate-400 hover:text-lightblue dark:text-slate-500 dark:hover:text-lightblue hover:-translate-y-1 transition-all duration-200 font-mono text-sm tracking-widest select-none cursor-pointer"
        style={{ writingMode: "vertical-rl" }}
      >
        <a href="mailto:lehzter@gmail.com">lehzter@gmail.com</a>
      </div>
    </div>
  );
};

export default RightPanel;