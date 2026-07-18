import React from "react";
import ResumePDF from "../assets/Lester_Quinones_Resume.pdf";

function ContactPage() {
  return (
    <div className="content-box">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-10 text-left">
        Contact
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Intro Message */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Interested in working together? I’m always open to new projects and opportunities where I can contribute, learn, and grow. Feel free to reach out — I'll get back to you as soon as I can!
        </p>

        {/* CTA cards layout */}
        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          {/* Card 1: Email */}
          <div className="glass-card p-6 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl flex flex-col justify-between items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center text-blue-500 dark:text-lightblue text-xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Email Address</h3>
              <p className="text-sm text-slate-400 font-mono mt-1">lehzter@gmail.com</p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lehzter@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-blue-500 text-blue-500 dark:border-blue-400 dark:text-lightblue font-semibold hover:bg-blue-500/10 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Email Me <i className="fas fa-paper-plane text-xs"></i>
            </a>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="glass-card p-6 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl flex flex-col justify-between items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-500 dark:text-indigo-400 text-xl">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Professional Profile</h3>
              <p className="text-sm text-slate-400 font-mono mt-1">LinkedIn Network</p>
            </div>
            <a
              href="https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-indigo-500 text-indigo-500 dark:border-indigo-400 dark:text-indigo-300 font-semibold hover:bg-indigo-500/10 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Message Me <i className="fab fa-linkedin text-xs"></i>
            </a>
          </div>
        </div>

        {/* Resume Action */}
        <div className="pt-4">
          <a
            href={ResumePDF}
            download="Lester_Quinones_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 shadow-md dark:shadow-blue-500/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>

        {/* Social Media Footer Shortcuts */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/LesterQuin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightblue dark:hover:text-lightblue flex items-center gap-2 transition-colors"
          >
            <i className="fab fa-github text-base"></i> GitHub
          </a>
          <a
            href="https://www.facebook.com/lester.quin17/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightblue dark:hover:text-lightblue flex items-center gap-2 transition-colors"
          >
            <i className="fab fa-facebook text-base"></i> Facebook
          </a>
          <a
            href="https://www.instagram.com/acether.png"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightblue dark:hover:text-lightblue flex items-center gap-2 transition-colors"
          >
            <i className="fab fa-instagram text-base"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
