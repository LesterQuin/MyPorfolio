import React, { useState, useEffect } from "react";

function HomePage({ scrollDown, projectsRef, contactRef }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Full Stack Developer", "IT Specialist", "Problem Solver"];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(40);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && text === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), 1500); // pause at full word
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300); // pause before starting next word
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="content-box flex items-center justify-center min-h-screen">
      <div className="max-w-3xl w-full text-left space-y-8 sm:space-y-10">
        <div>
          <span className="font-mono text-lightblue text-xs sm:text-sm tracking-widest font-semibold px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/15">
            Hi, my name is
          </span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-slate-800 dark:text-white">
            Lester Quiñones
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 min-h-[48px] sm:min-h-[58px] md:min-h-[72px]">
            {text}
            <span className="inline-block w-1.5 h-[0.85em] bg-blue-500 dark:bg-lightblue ml-1.5 animate-pulse align-middle"></span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          I build responsive, high-performance web applications from front to back, designing seamless user experiences with solid backend architectures.
        </p>

        {/* Call to Actions */}
        {scrollDown && (
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollDown(projectsRef)}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center space-x-2.5"
            >
              <span>View Projects</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
            <button
              onClick={() => scrollDown(contactRef)}
              className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="flex flex-wrap gap-6 pt-6">
          <div className="flex items-center space-x-4 glass-card px-6 py-4 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl shadow-inner">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-slate-800 dark:text-white font-mono leading-none">5+</span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Years Experience
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 glass-card px-6 py-4 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-xl shadow-inner">
              <i className="fas fa-check-double"></i>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-indigo-500 dark:text-indigo-400 font-mono leading-none">100%</span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Clean Code Commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
