import React, { useState } from "react";

function ExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);
  
  const workExperiences = [
    {
      company: "PhilLife Financial",
      roles: [
        {
          role: "Web Developer",
          duration: "September 2025 - Present",
          description: [
            "Develop and maintain secure, high-performance pure backend RESTful APIs.",
            "Design, implement, and optimize database schemas and server-side processing for corporate platforms.",
            "Collaborate with multi-functional development teams to integrate clean endpoints, handle server-side flows, and enforce security guidelines.",
          ],
        }
      ]
    },
    {
      company: "StorageMart Corporation",
      roles: [
        {
          role: "IT Officer",
          duration: "February 2025 - July 2025",
          description: [
            "Currently handling the website maintenance through WPBakery.",
            "Ensure all installed plugins are updated to their latest versions to maintain security and compatibility.",
            "Perform scheduled backups weekly to avoid data loss.",
            "Regularly test contact forms, subscription forms, and other interactive elements to ensure they work properly.",
            "Use SEO tools or plugins (e.g., Yoast SEO or Rank Math) to review and improve on-page SEO.",
            "Keep the WordPress core system updated to the latest version for security and feature improvements.",
            "Check site design and elements in mobile view using WPBakery’s responsive settings.",
            "Manage IT Asset Inventory track devices, licenses, serial numbers, and maintenance records.",
            "Document Technical Processes create SOPs for recurring tasks (e.g., creating new email, onboarding users, software installation).",
          ],
        },
        {
          role: "IT Associate",
          duration: "February 2024 - January 2025",
          description: [
            "Update WordPress Core, Plugins, and Themes",
            "Provide End-User Support",
          ],
        }
      ]
    },
    {
      company: "BCS Technology International Pty Ltd",
      roles: [
        {
          role: "Junior .Net Developer",
          duration: "February 2022 - October 2023",
          description: [
            "Develop and deploy RESTful APIs using AWS Lambda & API Gateway.",
            "Build serverless functions to handle form submissions, authentication, or scheduled tasks.",
            "Write Node.js scripts to process background jobs or automate tasks.",
            "Debug, log, and monitor Lambda functions using CloudWatch.",
            "Consume RESTful APIs using Axios or Fetch in Vue.",
            "Build admin panels, dashboards, or CRUD applications.",
            "Create custom page layouts using Elementor and WPBakery.",
            "Customize themes without breaking updates using child themes.",
            "Install, configure, and update plugins.",
            "Fix layout issues or responsive design bugs.",
            "Set up contact forms, popups, and basic marketing integrations (e.g., Mailchimp).",
            "Troubleshoot plugin/theme conflicts and console errors.",
            "Build landing pages or micro-sites for campaigns.",
          ]
        }
      ]
    },
    {
      company: "Ruby on Rails",
      roles: [
        {
          role: "Freelance",
          duration: "August 2021 - January 2022",
          description: [
            "Build and maintain web applications using Ruby or Ruby on Rails.",
            "Write unit, integration, and functional tests using RSpec or Minitest.",
            "Refactor legacy Ruby code for performance and readability.",
            "Collaborate with frontend developers (Vue.js integrations).",
            "Gather and define project requirements with stakeholders or clients",
            "Create detailed project plans, timelines, and milestones",
            "Facilitate daily standups, sprint planning, and retrospectives",
            "Track progress using Jira",
            "Prioritize backlog items based on tech constraints and business needs",
          ]
        }
      ]
    },
  ];

  return (
    <div className="content-box">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-10 text-left">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto w-full glass-card border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl overflow-hidden">
        {/* macOS Window Title Bar */}
        <div className="bg-slate-100/40 dark:bg-slate-900/40 px-5 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center text-[7px] text-rose-900 font-bold cursor-pointer">&times;</span>
            <span className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center text-[7px] text-amber-900 font-bold cursor-pointer">&minus;</span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center text-[6px] text-emerald-950 font-bold cursor-pointer">&#43;</span>
          </div>
          <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i className="fas fa-file-code text-[11px] text-blue-500"></i>
            <span>work_experience.json</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-10">
          <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Tab Buttons (Left Column on Desktop, Top Scroll on Mobile) */}
        <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800 pb-2 md:pb-0 scrollbar-none">
          {workExperiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-3 px-4 text-sm sm:text-base font-semibold text-left whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 -mb-[2px] md:-ml-[2px] ${
                activeTab === index
                  ? "border-blue-500 text-blue-500 bg-blue-50/50 dark:bg-blue-950/20"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {experience.company}
            </button>
          ))}
        </div>

        {/* Timeline Details (Right Column) */}
        <div className="md:col-span-8 glass-card p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl">
          <div className="space-y-10 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {workExperiences[activeTab].roles.map((r, rIdx) => (
              <div key={rIdx} className="relative pl-8">
                {/* Timeline node dot */}
                <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-50 dark:bg-brandDarkCard border-4 border-blue-500 dark:border-blue-400 flex items-center justify-center z-10 transition-colors duration-300"></span>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>{r.role}</span>
                    <span className="text-sm font-mono text-lightblue font-medium bg-blue-500/10 px-2 py-0.5 rounded">
                      {workExperiences[activeTab].company}
                    </span>
                  </h3>
                  
                  <p className="text-sm font-mono text-slate-400 dark:text-slate-500 mt-1 mb-4 flex items-center gap-2">
                    <i className="far fa-calendar-alt"></i>
                    {r.duration}
                  </p>

                  <ul className="space-y-3">
                    {r.description.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">
                          <i className="fas fa-caret-right text-xs"></i>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ExperiencePage;
