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

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((proj, index) => (
          <div
            key={index}
            className="glass-card flex flex-col h-full border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden group transition-all duration-300"
          >
            {/* Image Header */}
            <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
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

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors">
                  {proj.title}
                </h3>
                <span className="text-xs font-mono font-semibold px-2 py-1 rounded bg-blue-500/10 text-lightblue border border-blue-500/20">
                  {proj.tech}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">
                {proj.desc}
              </p>

              {/* Role Details */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <p className="mb-2">
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">My Role:</strong> {proj.role}
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">Link: </strong>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 break-all"
                  >
                    {proj.link}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
