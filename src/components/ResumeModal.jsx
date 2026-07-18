import React from "react";
import html2pdf from "html2pdf.js";
import logoPic from "../assets/rq.jpg";

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById("resume-print-area");
    const opt = {
      margin:       [0.3, 0.3, 0.3, 0.3],
      filename:     'Lester_Quinones_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2.5, useCORS: true, logging: false },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-0 sm:p-4 overflow-y-auto">
      {/* Modal Card wrapper */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-5xl rounded-none sm:rounded-3xl shadow-2xl relative flex flex-col my-auto h-full sm:h-auto max-h-screen sm:max-h-[92vh] overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 sticky top-0 z-20">
          <h3 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <i className="fas fa-file-invoice text-blue-500"></i> My Resume
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownloadPdf}
              className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors duration-200"
            >
              <i className="fas fa-download"></i> Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-blue-500/10 transition-colors duration-200"
            >
              <i className="fas fa-print"></i> Save / Print PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Close resume"
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document Area */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1 bg-slate-100 dark:bg-slate-950/40">
          
          {/* Printable Document Sheet (Always White) */}
          <div 
            id="resume-print-area"
            className="bg-white text-slate-800 p-6 sm:p-12 mx-auto shadow-sm max-w-[850px] border border-slate-200 rounded-2xl leading-relaxed text-sm text-left"
          >
            {/* Header Block */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-8 mb-8">
              <div className="text-center md:text-left space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
                  Quiñones, Lester L.
                </h1>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-bold text-blue-600 tracking-wider uppercase font-mono">
                  Web Developer
                </div>
              </div>
              <div className="mt-6 md:mt-0 relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur"></div>
                <img
                  src={logoPic}
                  alt="Lester Quiñones"
                  className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md relative"
                />
              </div>
            </div>

            {/* Document Content Split Layout */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Stats & Contact Info) */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Contact */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
                    <i className="fas fa-id-card text-blue-500"></i> Contact Details
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-600">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                        <i className="fas fa-phone text-[10px]"></i>
                      </div>
                      <span className="font-semibold text-slate-700">09065162908</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                        <i className="fas fa-envelope text-[10px]"></i>
                      </div>
                      <a href="mailto:lehzter@gmail.com" className="font-semibold text-slate-700 hover:text-blue-500 hover:underline">
                        lehzter@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                        <i className="fas fa-map-marker-alt text-[10px]"></i>
                      </div>
                      <span className="font-semibold text-slate-700">Libertad, Pasay City</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                        <i className="fab fa-linkedin text-[10px]"></i>
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-700 hover:text-blue-500 hover:underline truncate"
                      >
                        LinkedIn Profile
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
                    <i className="fas fa-tools text-blue-500"></i> Professional Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Design",
                      "Design Thinking",
                      "Front-End Dev",
                      "Back-End Dev",
                      "Problem-Solving",
                      "Computer Literacy",
                      "Strong Communication"
                    ].map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-100 text-[10px] sm:text-[11px] font-semibold text-slate-700 border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Software Proficiency */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
                    <i className="fas fa-laptop-code text-blue-500"></i> Software Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MS Office Suite",
                      "Jira Workflow",
                      "Adobe Photoshop",
                      "Adobe Premiere",
                      "Git & GitHub"
                    ].map((tool, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-100 text-[10px] sm:text-[11px] font-semibold text-slate-700 border border-slate-200/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
                    <i className="fas fa-graduation-cap text-blue-500"></i> Education
                  </h4>
                  <div className="space-y-5 text-xs">
                    <div className="relative pl-4 border-l-2 border-blue-500/30">
                      <div className="absolute w-2 h-2 rounded-full bg-blue-500 -left-[5px] top-1"></div>
                      <p className="font-bold text-slate-800 leading-tight">Central Luzon State University</p>
                      <p className="text-slate-500 mt-0.5">BS in Information Technology</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">2016 – 2021</p>
                    </div>
                    <div className="relative pl-4 border-l-2 border-blue-500/30">
                      <div className="absolute w-2 h-2 rounded-full bg-blue-500 -left-[5px] top-1"></div>
                      <p className="font-bold text-slate-800 leading-tight">Doña Juana Chioconational HS</p>
                      <p className="text-slate-500 mt-0.5">Secondary Education</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">2011 - 2015</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (Overview & Professional History) */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Overview */}
                <div className="space-y-3">
                  <h4 className="font-extrabold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
                    <i className="fas fa-user-tie text-blue-500"></i> Executive Summary
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-4 border-blue-500/80">
                    Skilled Web Developer with over five years of experience in building responsive, user-focused websites. Strong creative and analytical abilities, detail-oriented, and a reliable team player committed to delivering high-quality solutions.
                  </p>
                </div>

                {/* Experience */}
                <div className="space-y-6">
                  <h4 className="font-extrabold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wider text-[11px] font-mono flex items-center gap-2">
                    <i className="fas fa-briefcase text-blue-500"></i> Professional Experience
                  </h4>
                  
                  <div className="space-y-6 pl-2 border-l border-slate-200">
                    
                    {/* Job 1: PhilLife */}
                    <div className="relative pl-6 space-y-2">
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-blue-500/20 border-2 border-blue-500 -left-[7px] top-0.5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="flex flex-wrap justify-between items-start gap-1">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">Web Developer</p>
                          <p className="text-xs font-semibold text-blue-600">PhilLife Financial</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 font-mono">
                          Sept 2025 - Present
                        </span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 leading-normal">
                        <li>Develop and maintain secure, high-performance pure backend RESTful APIs.</li>
                        <li>Design, implement, and optimize database schemas and server-side processing for corporate platforms.</li>
                        <li>Collaborate with multi-functional development teams to integrate clean endpoints, handle server-side flows, and enforce security guidelines.</li>
                      </ul>
                    </div>

                    {/* Job 2: StorageMart Corporation Consolidated */}
                    <div className="relative pl-6 space-y-3">
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-slate-100 border-2 border-slate-400 -left-[7px] top-0.5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      </div>
                      <div className="flex flex-wrap justify-between items-start gap-1">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">StorageMart Corporation</p>
                          <p className="text-xs font-semibold text-slate-500">Enterprise Storage Solutions</p>
                        </div>
                      </div>

                      {/* Role 1: IT Officer */}
                      <div className="space-y-1.5 pl-2 mt-2">
                        <div className="flex justify-between items-start">
                          <p className="font-bold text-slate-800 text-xs uppercase tracking-wide">IT Officer</p>
                          <span className="text-[10px] font-mono font-medium text-slate-500">
                            Feb 2025 - July 2025
                          </span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-xs text-slate-650">
                          <li>Website maintenance through WPBakery Builder and SEO optimization.</li>
                          <li>Ensure all installed plugins are updated to maintain security and compatibility.</li>
                          <li>Perform weekly scheduled backups and manage IT asset inventory tracking.</li>
                        </ul>
                      </div>

                      {/* Role 2: IT Support Associate */}
                      <div className="space-y-1.5 pl-2 mt-2">
                        <div className="flex justify-between items-start">
                          <p className="font-bold text-slate-800 text-xs uppercase tracking-wide">IT Support Associate</p>
                          <span className="text-[10px] font-mono font-medium text-slate-500">
                            Feb 2024 - Feb 2025
                          </span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-xs text-slate-650">
                          <li>WordPress core/plugin updates, customizations, and hardware/software troubleshooting support.</li>
                          <li>Served as a technical support specialist for overall company operations.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Job 3: Junior .NET Developer */}
                    <div className="relative pl-6 space-y-2">
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-slate-105 border-2 border-slate-400 -left-[7px] top-0.5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      </div>
                      <div className="flex flex-wrap justify-between items-start gap-1">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">Junior .Net Developer</p>
                          <p className="text-xs font-semibold text-blue-600">BCS Technology International Pty Ltd</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 font-mono">
                          Feb 2022 - Oct 2023
                        </span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 leading-normal">
                        <li>Serverless cloud engineering in AWS (Lambda, API Gateway, CloudWatch).</li>
                        <li>Developed frontend logic in Vue.js and maintained pages with Elementor and WPBakery builders.</li>
                      </ul>
                    </div>

                    {/* Job 4: Ruby on Rails Freelance */}
                    <div className="relative pl-6 space-y-2">
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-slate-105 border-2 border-slate-400 -left-[7px] top-0.5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      </div>
                      <div className="flex flex-wrap justify-between items-start gap-1">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">Ruby on Rails Developer</p>
                          <p className="text-xs font-semibold text-blue-600">Freelance</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 font-mono">
                          Aug 2021 - Jan 2022
                        </span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 leading-normal">
                        <li>Developed and refactored Ruby on Rails backends, writing tests in RSpec.</li>
                        <li>Managed requirements, standups, sprint schedules, and task metrics inside Jira.</li>
                      </ul>
                    </div>

                    {/* Job 5: IT Support CLSU */}
                    <div className="relative pl-6 space-y-2">
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-slate-105 border-2 border-slate-400 -left-[7px] top-0.5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      </div>
                      <div className="flex flex-wrap justify-between items-start gap-1">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">IT Support</p>
                          <p className="text-xs font-semibold text-blue-600">CLSU Working Student</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 font-mono">
                          Aug 2019 - Dec 2019
                        </span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 leading-normal">
                        <li>Network maintenance and data encoder operations.</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeModal;
