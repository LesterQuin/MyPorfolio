import React from "react";

import pic from "../assets/rq.jpg";

function AboutMePage() {
  return (
    <div className="content-box">
      <div className="text-5xl text-left">About Me</div>
      <div className="flex mobile-lg:!block gap-5">
        <div className="w-3/5 mobile-lg:!w-[100%] mt-10 mobile-lg:!mt-5">
          <div className="block mobile-lg:!flex">
            <p className="mobile-lg:!text-sm mobile-lg:!w-[50%] mobile-lg:!my-auto">
            Hi! I'm Lester, a dedicated Full Stack Developer with a passion for building web applications.
            </p>
            <img
              className="hidden mobile-lg:!block mobile-lg:!h-[120px] mobile-lg:!w-[100px] mobile-lg:!mx-2"
              src={pic}
              alt="RQ"
            />
          </div>
          <p className="mobile-lg:!text-sm">
            With hands-on experience in both front-end and back-end development, 
            I’ve successfully contributed ton
            several projects from inception to completion.
          </p>
          <p className="mobile-lg:!text-sm">
            I thrive on solving complex problems and continuously seek
            opportunities to learn and embrace new technologies.
          </p>
        </div>
        <div className="w-2/5 mobile-lg:!hidden">
          <img src={pic} alt="RQ" />
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
