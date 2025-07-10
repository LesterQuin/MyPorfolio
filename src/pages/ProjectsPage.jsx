import React from "react";

import axaImg from "../assets/storagemart1.png";
import pfImg from "../assets/attendance.png";
import wmImg from "../assets/bcs.png";
import wlImg from "../assets/wealthlander.png";
import crImg from "../assets/cameron.png";

function ProjectsPage() {
  return (
    <div className="content-box">
      <div className="text-5xl text-left">Projects</div>
      <div className="flex flex-wrap py-5">
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={axaImg} alt="RQ" />
            <div className="text-xl text-justify">
              {" "}
              StorageMart Corporation{" "}
            </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
            StorageMart is an online platform designed to streamline and modernize storage facility operations,
            catering to both individual and enterprise users. It provides real-time access to unit availability, booking
            management, payment processing, and facility updates – all from one intuitive dashboard.
            </p>
            <p>
              Storagemart - is developed using Wordpress WPbakery 
            </p>
            <p>
              Project Website: <span></span>
              <a
                target="blank"
                href="https://www.storagemart.com.ph/"
              >
                <u>https://www.storagemart.com.ph/</u>
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4 w-[100%]" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={pfImg} alt="RQ" />
            <div className="text-xl text-justify"> Attendance Storagemart Monitoring </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
            StorageMart – Attendance Monitoring is a custom-built, web-based timekeeping solution designed to
            streamline employee attendance tracking across all StorageMart locations. Developed using PHP and HTML,
            the system provides real-time monitoring, logs, and reporting capabilities to support efficient HR and
            operational management.
            </p>
            <p>
              The website is developed using PHP/HTML
            </p>
            <p>
              Project Website: <span></span>
              <a target="blank" href="https://www.attendance.storagemart.com.ph/">
                <u>https://www.attendance.storagemart.com.ph/</u>
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4 w-[100%]" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={wmImg} alt="RQ" />
            <div className="text-xl text-justify"> BCS Technology International Pty Ltd</div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
            BCS Technology website is designed to support the company’s global outreach, enabling prospective
            clients, partners, and recruits to learn more about its enterprise solutions, innovation-driven services, and
            business values.
            </p>
            <p>
              The system is developed using Wordpress using Elementor
            </p>
            <p>
              Project Website: <span></span>
              <a target="blank" href="https://bcstechnology.com.au/">
                <u>https://bcstechnology.com.au/</u>
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4 w-[100%]" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={wlImg} alt="RQ" />
            <div className="text-xl text-justify"> Wealthlander </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
            WealthLander’s site serves as both a brand hub and investor gateway, ensuring transparency, education,
            and regulatory compliance while presenting its alternative investment approach clearly to potential clients
            and partners.
            </p>
            <p>
              The system is developed using wordpress in WPBakery.
            </p>
            <p>
              Project Website: <span></span>
              <a target="blank" href="https://wealthlander.com.au/">
                <u>https://wealthlander.com.au/</u>
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4 w-[100%]" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={crImg} alt="RQ" />
            <div className="text-xl text-justify"> Cameron Crick Racing </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
            Cameron Crick Racing is the official digital platform representing Australian racing driver Cameron Crick.
            Built on WordPress and designed with Elementor, the site provides fans, sponsors, and motorsport
            enthusiasts with a central hub for race updates, sponsorship opportunities, media content, and personal
            insights into Cameron’s journey.
            </p>
            <p>
              The system is developed using wordpress in Elementor.
            </p>
            <p>
              Project Website: <span></span>
              <a target="blank" href="https://www.cameroncrickracing.com.au/">
                <u>https://www.cameroncrickracing.com.au/</u>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 py-1">
        <a
          className="hover:text-lightblue flex items-center gap-1"
          href="https://github.com/LesterQuin"
          target="_blank"
        >
          GitHub <i className="fab fa-github fa-lg"></i>
        </a>

        <a
          className="hover:text-lightblue flex items-center gap-1"
          href="https://facebook.com/ryanquin"
          target="_blank"
        >
          Facebook <i className="fab fa-facebook fa-lg"></i>
        </a>

        <a
          className="hover:text-lightblue flex items-center gap-1"
          href="https://www.instagram.com/acether.png"
          target="_blank"
        >
          Instagram <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default ProjectsPage;
