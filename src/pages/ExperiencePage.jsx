import React, { useState } from "react";

function ExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);
  const workExperiences = [
    {
      company: "StorageMart Corporation",
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
      company: "StorageMart Corporation",
      role: "IT Associate",
      duration: "February 2024 - January 2025",
      description: [
        "Update WordPress Core, Plugins, and Themes",
        "Provide End-User Support",
      ],
    },
    {
      company: "BCS Technology International Pty Ltd",
      role: "Junior .Net Developer",
      duration: "February 2022 - October  2023",
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
      ],
    },
    {
      company: "Ruby on Rails",
      role: "Freelance",
      duration: " August 2021 - January 202",
      description: [
        "Build and maintain web applications using Ruby or Ruby on Rails.",
        "Write unit, integration, and functional tests using RSpec or Minitest.",
        "Refactor legacy Ruby code for performance and readability.",
        "Collaborate with frontend developers Vue.js integrations).",
        "Gather and define project requirements with stakeholders or clients",
        "Create detailed project plans, timelines, and milestones",
        "Facilitate daily standups, sprint planning, and retrospectives",
        "Track progress using Jira",
        "Prioritize backlog items based on tech constraints and business needs",
      ],
    },
  ];
  return (
    <div className="content-box">
      <div className="text-5xl text-left">Experience</div>
      <div className="block py-5">
        <div className="w-100">
          <div className="flex flex-wrap space-x-8">
            <div className="flex flex-col mobile-lg:![w-100%] space-y-4">
              {workExperiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 px-4 text-lg text-left font-semibold ${
                    activeTab === index
                      ? "border-l-4 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {experience.company}
                </button>
              ))}
            </div>
            <div className="flex-1">
              <div className="p-6 border-l-2">
                <p className="text-xl font-semibold">
                  {workExperiences[activeTab].role}
                </p>
                <p className="text-sm text-gray-500">
                  {workExperiences[activeTab].duration}
                </p>
                <ul className="mt-4 list-disc pl-5">
                  {workExperiences[activeTab].description.map((item, index) => (
                    <li key={index} className="p-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
