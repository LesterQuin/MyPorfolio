import React from "react";
import ResumePDF from "../assets/Lester_Quinones_Resume.pdf";

function ContactPage() {
  return (
    <div className="content-box">
      <h2 className="text-5xl text-left mb-4">Contact</h2>

      <div className="flex h-[70vh]">
        <div className="w-full max-w-2xl m-auto text-center space-y-6">
          <p className="text-lg leading-relaxed">
            Interested in working together? I’m always open to new projects and opportunities
            where I can contribute, learn, and grow. Feel free to reach out —
            I'll get back to you as soon as I can!
          </p>

          {/* Row for Email + LinkedIn */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lehzter@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-xl border border-lightblue text-white font-bold hover:text-navy hover:bg-lightblue transition duration-300"
            >
              <i className="fa fa-envelope mr-2"></i> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-xl border border-lightblue text-white font-bold hover:text-navy hover:bg-lightblue transition duration-300"
            >
              <i className="fab fa-linkedin mr-2"></i> Message Me
            </a>
          </div>

          {/* Resume Download button - placed below */}
          <div>
            <a
              href={ResumePDF}
              download="Lester_Quinones_Resume.pdf"
              className="inline-block mt-2 px-6 py-3 rounded-lg text-xl border border-lightblue text-white font-bold hover:text-navy hover:bg-lightblue transition duration-300"
            >
              <i className="fa fa-download mr-2"></i> Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Links with bottom margin */}
      <div className="flex justify-center mt-10 gap-6 mb-8">
        <a
          href="https://github.com/LesterQuin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lightblue text-xl flex items-center gap-2"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.facebook.com/lester.quin17/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lightblue text-xl flex items-center gap-2"
        >
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a
          href="https://www.instagram.com/acether.png"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lightblue text-xl flex items-center gap-2"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
