import React, { useState, useEffect } from "react";

function HomePage({ scrollDown, projectsRef, contactRef }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [statusText, setStatusText] = useState("");

  const words = ["Full Stack Developer", "IT Specialist", "Problem Solver"];
  useEffect(() => {
    const targetStatus = "Open for new roles";
    let isDeleting = false;
    let index = 0;
    let timer;

    const handleType = () => {
      if (!isDeleting) {
        setStatusText(targetStatus.substring(0, index + 1));
        index++;
        
        if (index === targetStatus.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            handleType();
          }, 3000); // pause for 3 seconds at full text
          return;
        }
      } else {
        setStatusText(targetStatus.substring(0, index - 1));
        index--;
        
        if (index === 0) {
          isDeleting = false;
          timer = setTimeout(handleType, 500);
          return;
        }
      }
      
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(handleType, speed);
    };

    handleType();
    return () => clearTimeout(timer);
  }, []);

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
    <div className="w-full min-h-screen bg-grid-pattern flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-3xl w-full bg-white dark:bg-[#0a0b0d] border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl overflow-hidden animate-fade-in-up">
        
        {/* macOS Window Title Bar */}
        <div className="bg-slate-100/50 dark:bg-[#121319] px-5 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          {/* macOS window dots */}
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer"></span>
          </div>
          
          {/* Simulated File Tab */}
          <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i className="fas fa-terminal text-[10px] text-blue-500 dark:text-lightblue"></i>
            <span>lester_quinones.sh</span>
          </div>
          
          {/* Spacing placeholder */}
          <div className="w-12"></div>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-10 space-y-8 text-left font-mono">
          
          {/* Prompt 1: Whoami */}
          <div className="space-y-3">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ whoami
            </div>
            <div className="pl-4 space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-800 dark:text-white font-sans">
                Lester Quiñones
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-500 dark:text-slate-400">
                {text}
                <span className="inline-block w-1.5 h-[0.85em] bg-blue-500 dark:bg-lightblue ml-1.5 animate-pulse align-middle"></span>
              </div>
            </div>
          </div>

          {/* Prompt 2: Focus info */}
          <div className="space-y-3">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ cat focus.txt
            </div>
            <div className="pl-4">
              <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed max-w-2xl font-sans">
                I build responsive, high-performance web applications from front to back, designing seamless user experiences with solid backend architectures.
              </p>
            </div>
          </div>

          {/* Prompt 3: CTAs */}
          {scrollDown && (
            <div className="space-y-3">
              <div className="text-[#10b981] text-sm sm:text-base font-semibold">
                $ explore --actions
              </div>
              <div className="pl-4 flex flex-wrap gap-4 font-sans">
                <button
                  onClick={() => scrollDown(projectsRef)}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center space-x-2.5 focus:outline-none"
                >
                  <span>View Projects</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
                <button
                  onClick={() => scrollDown(contactRef)}
                  className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none"
                >
                  Contact Me
                </button>
              </div>
            </div>
          )}

          {/* Prompt 4: Stats */}
          <div className="space-y-3">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ cat stats.log
            </div>
            <div className="pl-4 font-mono text-xs sm:text-sm space-y-2.5 border-l-2 border-slate-200 dark:border-slate-800 ml-1">
              <div className="flex items-start gap-2">
                <span className="text-slate-400 dark:text-slate-550">[13:37:42]</span>
                <span className="text-blue-500 dark:text-lightblue font-bold">[INFO]</span>
                <span className="text-slate-750 dark:text-slate-350">Reading system statistics...</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-400 dark:text-slate-550">[13:37:42]</span>
                <span className="text-[#10b981] font-bold">[OK]</span>
                <span className="text-slate-750 dark:text-slate-200">
                  <span className="text-[#10b981] font-bold">Experience:</span> 5+ Years active web programming
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-400 dark:text-slate-550">[13:37:43]</span>
                <span className="text-[#10b981] font-bold">[OK]</span>
                <span className="text-slate-750 dark:text-slate-200">
                  <span className="text-[#10b981] font-bold">Philosophy:</span> 100% Clean Code Commitment
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-400 dark:text-slate-550">[13:37:43]</span>
                <span className="text-[#10b981] font-bold">[OK]</span>
                <span className="text-slate-750 dark:text-slate-200">
                  <span className="text-[#10b981] font-bold">Stack:</span> Node.js, React, Ruby on Rails, WordPress, .NET
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-400 dark:text-slate-550">[13:37:43]</span>
                <span className="text-amber-500 font-bold">[STATUS]</span>
                <span className="text-slate-750 dark:text-slate-350">
                  {statusText}
                  <span className="inline-block w-1.5 h-[0.85em] bg-amber-500 ml-1 animate-pulse align-middle"></span>
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HomePage;
