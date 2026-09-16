import React, { useState } from "react";

import phillifeImg from "../assets/phillife.png";
import storagemartImg from "../assets/storagemart1.png";
import bcsImg from "../assets/bcs.png";

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
  const workList = [
    {
      img: phillifeImg,
      title: "PhilLife Financial",
      badge: "Latest / Present",
      isLatest: true,
      period: "Sep 2025 - Present",
      desc: "A premier life insurance and corporate financial institution in the Philippines. Developed pure backend RESTful API infrastructure, architected secure transaction endpoints, and optimized database models.",
      tech: "Node.js (Express) • MS SQL",
      link: "https://phillife.com.ph/",
      role: "Designed and developed high-performance RESTful API endpoints, secure authentication, corporate business logic, and SQL Server schema architecture.",
      forceStatic: true
    },
    {
      img: storagemartImg,
      title: "StorageMart Corporation",
      badge: "2024 - 2025",
      isLatest: false,
      period: "Feb 2024 - Jul 2025",
      desc: "A leading self-storage provider streamlining facility bookings and operations. Maintained customer-facing portals, performed regular backups, managed security updates, and developed internal attendance tracking systems.",
      tech: "WordPress • WPBakery • PHP",
      link: "https://www.storagemart.com.ph/",
      role: "Platform maintenance, on-page SEO optimization, responsive layout enhancements, plugin updates, and custom employee timekeeping solutions.",
      forceStatic: true
    },
    {
      img: bcsImg,
      title: "BCS Technology International",
      badge: "2022 - 2023",
      isLatest: false,
      period: "Feb 2022 - Oct 2023",
      desc: "A global digital solutions and IT consulting company delivering enterprise cloud innovations. Built serverless APIs, background automation scripts, and managed client web platforms.",
      tech: "AWS Lambda • Node.js • REST APIs",
      link: "https://bcstechnology.com.au/",
      role: "Engineered and deployed RESTful APIs using AWS Lambda & API Gateway, developed Node.js automation scripts, and maintained responsive layouts.",
      forceStatic: true
    }
  ];

  return (
    <div className="content-box">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 text-left">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white">
            Featured Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 font-normal">
            Production platforms and enterprise web solutions delivered for the companies I've worked with.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full glass-card border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl overflow-hidden">
        {/* macOS Window Title Bar */}
        <div className="bg-slate-100/40 dark:bg-slate-900/40 px-5 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center text-[7px] text-rose-900 font-bold cursor-pointer">&times;</span>
            <span className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center text-[7px] text-amber-900 font-bold cursor-pointer">&minus;</span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center text-[6px] text-emerald-950 font-bold cursor-pointer">&#43;</span>
          </div>
          <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i className="fas fa-briefcase text-[11px] text-blue-500"></i>
            <span>company_work.sh</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {workList.map((item, index) => (
              <div
                key={index}
                className={`glass-card flex flex-col h-full border rounded-2xl overflow-hidden group transition-all duration-300 ${
                  item.isLatest 
                    ? "border-emerald-500/40 dark:border-emerald-500/30 shadow-lg shadow-emerald-500/5" 
                    : "border-slate-200/50 dark:border-slate-800/50"
                }`}
              >
                {/* Image Header (Simulated Browser window layout) */}
                <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 flex flex-col">
                  {/* Mock Browser Header Bar */}
                  <div className="bg-slate-200/30 dark:bg-[#121319]/40 px-3 py-1.5 border-b border-slate-200/30 dark:border-slate-800/30 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-450 dark:bg-rose-500"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-450 dark:bg-amber-500"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-450 dark:bg-emerald-500"></span>
                      <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 ml-2 truncate max-w-[140px]">
                        {item.link.replace("https://", "").replace("www.", "")}
                      </span>
                    </div>

                    {item.isLatest && (
                      <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        CURRENT
                      </span>
                    )}
                  </div>
                  
                  <div className="relative flex-1 overflow-hidden group">
                    <ProjectImage
                      url={item.link}
                      fallbackImg={item.img}
                      title={item.title}
                      forceStatic={item.forceStatic}
                    />
                    <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Visit Website <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Content (Simulated Terminal block) */}
                <div className="p-6 flex flex-col flex-1 space-y-4 font-mono text-xs bg-slate-55 dark:bg-[#0c0d12]">
                  <div className="flex items-center justify-between text-[#10b981] font-semibold">
                    <span>$ git show {item.title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 18)}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">
                      {item.period}
                    </span>
                  </div>
                  
                  <div className="space-y-4 font-sans flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white font-sans group-hover:text-blue-500 transition-colors">
                          {item.title}
                        </h3>
                        <div>
                          <span className="inline-block text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-lightblue border border-blue-500/20">
                            {item.tech}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 pl-2 border-l-2 border-slate-200 dark:border-slate-800">
                        <div className="space-y-0.5">
                          <span className="text-[#10b981] font-semibold block text-[10px] uppercase tracking-wider font-mono">$ cat role.txt</span>
                          <p className="text-slate-650 dark:text-slate-350 pl-2 leading-relaxed text-xs font-sans">{item.role}</p>
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[#10b981] font-semibold block text-[10px] uppercase tracking-wider font-mono">$ cat desc.txt</span>
                          <p className="text-slate-650 dark:text-slate-350 pl-2 leading-relaxed text-xs font-sans">{item.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-mono text-xs hover:underline"
                      >
                        <i className="fas fa-link text-[10px]"></i>
                        <span>{item.link}</span>
                      </a>
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

