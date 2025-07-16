import React from "react";

import axaImg from "../assets/storagemart1.png";
import pfImg from "../assets/attendance.png";
import wmImg from "../assets/bcs.png";
import wlImg from "../assets/wealthlander.png";
import crImg from "../assets/cameron.png";

function ProjectsPage() {
  return (
    <div className="content-box text-white">
      <div className="text-5xl text-left">Projects</div>
      <div className="flex flex-wrap py-5">
        {/* Project Item Template */}
        {[
          {
            img: axaImg,
            title: "StorageMart Corporation",
            desc: `StorageMart is an online platform designed to streamline and modernize storage facility operations,
              catering to both individual and enterprise users. It provides real-time access to size availability, booking
              management, payment processing, and merchandise – all from one intuitive dashboard.`,
            tech: "Developed using WordPress (WPBakery)",
            link: "https://www.storagemart.com.ph/",
            role: "Website maintenance, page building, UI content placement, bug fixing, plugin integration"
          },
          {
            img: pfImg,
            title: "Attendance Storagemart Monitoring",
            desc: `A custom-built, web-based timekeeping solution that enables StorageMart to monitor employee
              attendance across all locations. Provides real-time logging and reporting.`,
            tech: "Developed using PHP and HTML",
            link: "https://www.attendance.storagemart.com.ph/",
            role: "Developed full backend and frontend system with real-time attendance logging and export reports"
          },
          {
            img: wmImg,
            title: "BCS Technology International Pty Ltd",
            desc: `The company website enhances global outreach for enterprise clients, allowing them to discover
              innovation-driven services and solutions.`,
            tech: "Developed using WordPress (Elementor)",
            link: "https://bcstechnology.com.au/",
            role: "Maintained WordPress pages, optimized loading speed, and handled updates with Elementor"
          },
          {
            img: wlImg,
            title: "Wealthlander",
            desc: `Investor-focused platform for presenting alternative investment opportunities with transparency,
              regulatory compliance, and educational content.`,
            tech: "Developed using WordPress (WPBakery)",
            link: "https://wealthlander.com.au/",
            role: "Assisted in theme customization, branding consistency, and plugin configurations"
          },
          {
            img: crImg,
            title: "Cameron Crick Racing",
            desc: `The official website of Australian racer Cameron Crick featuring news, sponsorship info,
              and behind-the-scenes insights.`,
            tech: "Developed using WordPress (Elementor)",
            link: "https://www.cameroncrickracing.com.au/",
            role: "Managed updates, content upload, race blog formatting, and responsive adjustments"
          }
        ].map((proj, index) => (
          <React.Fragment key={index}>
            <div className="w-full flex flex-wrap">
              <div className="w-1/2 mobile-lg:!w-full p-3 flex justify-center items-center">
                <div className="text-center">
                  <img
                    className="w-auto h-auto max-h-60 rounded-xl shadow-md transform transition duration-300 hover:scale-105 mx-auto"
                    src={proj.img}
                    alt={proj.title}
                  />
                  <div className="text-xl text-justify mt-2">{proj.title}</div>
                </div>
              </div>
              <div className="w-1/2 mobile-lg:!w-full p-3 flex items-center">
                <div className="space-y-4">
                  <p>{proj.desc}</p>
                  <p className="italic text-sm text-gray-300">{proj.tech}</p>
                  <p>
                    Project Website:{" "}
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-400 hover:text-blue-300"
                    >
                      {proj.link}
                    </a>
                  </p>
                  <p>
                    <strong>My Role:</strong> {proj.role}
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-4 w-full" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
