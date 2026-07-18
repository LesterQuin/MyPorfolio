import React from "react";

function AboutMePage() {
  const expertiseData = [
    {
      category: "Frontend Development",
      icon: "fas fa-desktop text-blue-500",
      focus: "Full Stack Competence: Designing interactive React/Vue pages and responsive layout structures.",
      skills: ["React.js", "Vue.js", "HTML5 & CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      category: "Backend Development",
      icon: "fas fa-terminal text-indigo-500",
      focus: "Full Stack Competence: Writing performant RESTful APIs and server-side processing scripts.",
      skills: [".NET Core", "Node.js", "Ruby on Rails", "PHP", "RESTful APIs"],
    },
    {
      category: "Cloud & Serverless",
      icon: "fas fa-cloud text-purple-500",
      focus: "Infrastructure Management: Deploying Lambdas, API Gateways, and system logging in AWS.",
      skills: ["AWS Lambda", "API Gateway", "CloudWatch", "Serverless Architecture"],
    },
    {
      category: "CMS & Page Builders",
      icon: "fab fa-wordpress text-teal-500",
      focus: "Infrastructure Management: WordPress theme customizations, page layouts, and updates.",
      skills: ["WordPress", "WPBakery", "Elementor", "Theme Customization"],
    },
    {
      category: "Agile & Workflows",
      icon: "fas fa-tasks text-pink-500",
      focus: "Agile Workflows: Coordinating tasks, standups, sprint plans, and tracking work using Jira.",
      skills: ["Jira", "Sprint Planning", "Standups", "Agile Collaboration"],
    },
  ];

  return (
    <div className="content-box">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-12 text-left">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* Intro bio card */}
        <div className="border-l-4 border-blue-500 pl-6 space-y-4">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 leading-snug">
            Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">Lester</span>, a dedicated Full Stack Developer with a passion for building high-quality web applications.
          </p>
          <div className="space-y-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            <p>
              With hands-on experience in both front-end and back-end development, I’ve successfully contributed to several projects from inception to completion.
            </p>
            <p>
              I thrive on solving complex problems and continuously seek opportunities to learn and embrace new technologies.
            </p>
          </div>
        </div>

        {/* Unified Capabilities Table */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Capabilities & Technical Expertise
          </h3>
          
          <div className="glass-card border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm">
            <div className="w-full overflow-x-auto scrollbar-none">
              <table className="min-w-[700px] w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-slate-800/30 border-b border-slate-200/50 dark:border-slate-800/50">
                    <th className="py-4 px-6 font-semibold text-sm text-slate-600 dark:text-slate-300 w-[45%]">
                      Category & Focus Area
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm text-slate-600 dark:text-slate-300 w-[55%]">
                      Technologies & Tools
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expertiseData.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b last:border-0 border-slate-200/40 dark:border-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-colors"
                    >
                      <td className="py-5 px-6 space-y-2 align-top">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">
                            <i className={item.icon}></i>
                          </div>
                          <span className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-10">
                          {item.focus}
                        </p>
                      </td>
                      <td className="py-5 px-6 align-top">
                        <div className="flex flex-wrap gap-2 pt-1 pl-2">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMePage;
