import React from "react";

function ContactPage({ onOpenResume }) {
  return (
    <div className="content-box">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-10 text-left">
        Contact
      </h2>

      <div className="max-w-4xl mx-auto w-full bg-white dark:bg-[#0a0b0d] border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl overflow-hidden animate-fade-in-up">
        {/* macOS Window Title Bar */}
        <div className="bg-slate-100/50 dark:bg-[#121319] px-5 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer"></span>
          </div>
          <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i className="fas fa-terminal text-[10px] text-blue-500 dark:text-lightblue"></i>
            <span>contact.sh</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-10 space-y-8 text-left font-mono">
          
          {/* Prompt 1: Info */}
          <div className="space-y-2">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ contact --info
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans pl-4">
              Let's Connect
            </h3>
          </div>

          {/* Prompt 2: Current Location */}
          <div className="space-y-2">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ location --current
            </div>
            <div className="pl-4 flex items-center gap-2 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-sans">
              <i className="fas fa-map-marker-alt text-rose-500"></i>
              <span>Pasay City, Philippines</span>
            </div>
          </div>

          {/* Prompt 3: Email */}
          <div className="space-y-2">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ contact --email
            </div>
            <div className="pl-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lehzter@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#10b981]/30 dark:border-[#10b981]/20 bg-[#10b981]/5 dark:bg-[#10b981]/5 text-[#10b981] font-semibold text-sm hover:bg-[#10b981]/10 transition-colors font-sans"
              >
                <i className="fas fa-envelope"></i> lehzter@gmail.com
              </a>
            </div>
          </div>

          {/* Prompt 4: Resume download */}
          <div className="space-y-2">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ cat resume.md
            </div>
            <div className="pl-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#10b981] text-white font-bold hover:bg-[#0fa06e] shadow-md shadow-[#10b981]/10 transition-all duration-200 cursor-pointer font-sans focus:outline-none"
              >
                <i className="fas fa-file-alt"></i> Click Me !!
              </button>
            </div>
          </div>

          {/* Prompt 5: Social list */}
          <div className="space-y-3">
            <div className="text-[#10b981] text-sm sm:text-base font-semibold">
              $ ls -la ./social-links
            </div>
            <div className="pl-4 space-y-2 font-mono text-xs sm:text-sm">
              <div className="text-slate-400 dark:text-slate-500">total 4</div>
              
              <a
                href="https://github.com/lesterquin"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center gap-y-1.5 gap-x-3 py-2 px-3 rounded-xl hover:bg-[#10b981]/5 transition-all duration-150"
              >
                <span className="text-slate-500 group-hover:text-[#10b981] transition-colors">-rwxr-xr-x</span>
                <span className="text-slate-400 group-hover:text-white transition-colors">1 lester staff</span>
                <span className="text-slate-650 dark:text-slate-200 font-bold flex items-center gap-1.5 min-w-[120px]">
                  <i className="fab fa-github text-slate-800 dark:text-slate-200"></i> github.sh
                </span>
                <span className="text-slate-450 dark:text-slate-400 group-hover:text-[#10b981] transition-colors">&rarr; @lesterquin</span>
              </a>

              <a
                href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center gap-y-1.5 gap-x-3 py-2 px-3 rounded-xl hover:bg-[#10b981]/5 transition-all duration-150"
              >
                <span className="text-slate-500 group-hover:text-[#10b981] transition-colors">-rwxr-xr-x</span>
                <span className="text-slate-400 group-hover:text-white transition-colors">1 lester staff</span>
                <span className="text-[#0a66c2] font-bold flex items-center gap-1.5 min-w-[120px]">
                  <i className="fab fa-linkedin-in"></i> linkedin.sh
                </span>
                <span className="text-slate-450 dark:text-slate-400 group-hover:text-[#10b981] transition-colors">&rarr; Lester Quiñones</span>
              </a>

              <a
                href="https://www.facebook.com/lester.quin17/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center gap-y-1.5 gap-x-3 py-2 px-3 rounded-xl hover:bg-[#10b981]/5 transition-all duration-150"
              >
                <span className="text-slate-500 group-hover:text-[#10b981] transition-colors">-rwxr-xr-x</span>
                <span className="text-slate-400 group-hover:text-white transition-colors">1 lester staff</span>
                <span className="text-[#1877f2] font-bold flex items-center gap-1.5 min-w-[120px]">
                  <i className="fab fa-facebook-f"></i> facebook.sh
                </span>
                <span className="text-slate-450 dark:text-slate-400 group-hover:text-[#10b981] transition-colors">&rarr; @lester.quin17</span>
              </a>

              <a
                href="https://www.instagram.com/acether.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center gap-y-1.5 gap-x-3 py-2 px-3 rounded-xl hover:bg-[#10b981]/5 transition-all duration-150"
              >
                <span className="text-slate-500 group-hover:text-[#10b981] transition-colors">-rwxr-xr-x</span>
                <span className="text-slate-400 group-hover:text-white transition-colors">1 lester staff</span>
                <span className="text-[#c13584] font-bold flex items-center gap-1.5 min-w-[120px]">
                  <i className="fab fa-instagram"></i> instagram.sh
                </span>
                <span className="text-slate-450 dark:text-slate-400 group-hover:text-[#10b981] transition-colors">&rarr; @acether.png</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;
