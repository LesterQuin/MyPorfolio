import React, { useState } from "react";

import axaImg from "../assets/storagemart1.png";
import pfImg from "../assets/attendance.png";
import wmImg from "../assets/bcs.png";
import wlImg from "../assets/wealthlander.png";
import crImg from "../assets/cameron.png";

const ProjectImage = ({ url, fallbackImg, title, forceStatic }) => {
  const screenshotUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;
  const [src, setSrc] = useState(forceStatic ? fallbackImg : screenshotUrl);

  return (
    <img
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      src={src}
      alt={title}
      onError={() => {
        setSrc(fallbackImg);
      }}
    />
  );
};

function ProjectsPage() {
  const projectsList = [
    {
      img: wlImg,
      title: "Heritage Capital Brew (PhilLife)",
      desc: "A corporate web platform developed for PhilLife's Heritage Capital Brew division. Built with a pure backend API to handle secure financial transaction records, corporate accounting logs, and reporting tools.",
      tech: "Node.js (Express)",
      link: "https://capitalbrew.com.ph/",
      role: "Designed and developed the pure backend RESTful API infrastructure, authentication protocols, and database schema mappings in Node.js"
    },
    {
      img: axaImg,
      title: "StorageMart Corporation",
      desc: `StorageMart is an online platform designed to streamline and modernize storage facility operations, catering to both individual and enterprise users. It provides real-time access to size availability, booking management, payment processing, and merchandise – all from one intuitive dashboard.`,
      tech: "WordPress (WPBakery)",
      link: "https://www.storagemart.com.ph/",
      role: "Website maintenance, page building, UI content placement, bug fixing, plugin integration"
    },
    {
      img: pfImg,
      title: "Attendance Storagemart Monitoring",
      desc: `A custom-built, web-based timekeeping solution that enables StorageMart to monitor employee attendance across all locations. Provides real-time logging and reporting.`,
      tech: "PHP & HTML",
      link: "https://www.attendance.storagemart.com.ph/",
      role: "Developed full backend and frontend system with real-time attendance logging and export reports",
      forceStatic: true
    },
    {
      img: wmImg,
      title: "BCS Technology International Pty Ltd",
      desc: `The company website enhances global outreach for enterprise clients, allowing them to discover innovation-driven services and solutions.`,
      tech: "WordPress (Elementor)",
      link: "https://bcstechnology.com.au/",
      role: "Maintained WordPress pages, optimized loading speed, and handled updates with Elementor"
    },
    {
      img: wlImg,
      title: "Wealthlander",
      desc: `Investor-focused platform for presenting alternative investment opportunities with transparency, regulatory compliance, and educational content.`,
      tech: "WordPress (WPBakery)",
      link: "https://wealthlander.com.au/",
      role: "Assisted in theme customization, branding consistency, and plugin configurations"
    },
    {
      img: crImg,
      title: "Cameron Crick Racing",
      desc: `The official website of Australian racer Cameron Crick featuring news, sponsorship info, and behind-the-scenes insights.`,
      tech: "WordPress (Elementor)",
      link: "https://www.cameroncrickracing.com.au/",
      role: "Managed updates, content upload, race blog formatting, and responsive adjustments"
    }
  ];

  return (
    <div className="content-box">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-10 text-left">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto w-full glass-card border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl overflow-hidden">
        {/* macOS Window Title Bar */}
        <div className="bg-slate-100/40 dark:bg-slate-900/40 px-5 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center text-[7px] text-rose-900 font-bold cursor-pointer">&times;</span>
            <span className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center text-[7px] text-amber-900 font-bold cursor-pointer">&minus;</span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center text-[6px] text-emerald-950 font-bold cursor-pointer">&#43;</span>
          </div>
          <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i className="fab fa-python text-[11px] text-blue-500"></i>
            <span>my_projects.py</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((proj, index) => (
          <div
            key={index}
            className="glass-card flex flex-col h-full border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden group transition-all duration-300"
          >
            {/* Image Header (Simulated Browser window layout) */}
            <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 flex flex-col">
              {/* Mock Browser Header Bar */}
              <div className="bg-slate-200/30 dark:bg-[#121319]/40 px-3 py-1.5 border-b border-slate-200/30 dark:border-slate-800/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-450 dark:bg-rose-500"></span>
                <span className="w-2 h-2 rounded-full bg-amber-450 dark:bg-amber-500"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-450 dark:bg-emerald-500"></span>
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 ml-2 truncate max-w-[180px]">
                  {proj.link.replace("https://", "")}
                </span>
              </div>
              
              <div className="relative flex-1 overflow-hidden group">
                <ProjectImage
                  url={proj.link}
                  fallbackImg={proj.img}
                  title={proj.title}
                  forceStatic={proj.forceStatic}
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Visit Website <i className="fas fa-external-link-alt text-xs"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card Content (Redesigned as simulated Terminal output block) */}
            <div className="p-6 flex flex-col flex-1 space-y-4 font-mono text-xs sm:text-sm bg-slate-55 dark:bg-[#0c0d12]">
              <div className="text-[#10b981] font-semibold">
                $ git show {proj.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
              </div>
              
              <div className="space-y-4 font-sans flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white font-sans group-hover:text-blue-500 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-lightblue border border-blue-500/20">
                    {proj.tech}
                  </span>
                </div>

                <div className="space-y-3 pl-2 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-[#10b981] font-semibold block text-[10px] uppercase tracking-wider font-mono">$ cat role.txt</span>
                    <p className="text-slate-650 dark:text-slate-350 pl-2 leading-relaxed text-xs sm:text-sm font-sans">{proj.role}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#10b981] font-semibold block text-[10px] uppercase tracking-wider font-mono">$ cat desc.txt</span>
                    <p className="text-slate-650 dark:text-slate-350 pl-2 leading-relaxed text-xs sm:text-sm font-sans">{proj.desc}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#10b981] font-semibold block text-[10px] uppercase tracking-wider font-mono">$ cat link.url</span>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 pl-2 break-all text-xs sm:text-sm font-mono"
                    >
                      {proj.link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}

export default ProjectsPage;
