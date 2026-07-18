import React, { useState } from "react";
import attendance2026Pdf from "../assets/CERTIFICATE OF ATTENDANCE 2026 Interest Group Event  April 23, 2026  AIM Conference Center, Makati City.pdf";

const certificates = [
  {
    title: "Certificate of Attendance - 2026 Interest Group Event",
    issuer: "AIM Conference Center",
    date: "April 23, 2026",
    image: attendance2026Pdf,
    isPdf: true,
  },
  {
    title: "React Hook Redux",
    issuer: "Udemy",
    date: "July 2025",
    image: "/certificates/react.jpg",
    isPdf: false,
  },
  {
    title: "Cloud Essential Learning Plan",
    issuer: "AWS Training and Certification",
    date: "January 2023",
    image: "/certificates/AWS Learning Plan Completion Certificate-4.png",
    isPdf: false,
  },
  {
    title: "AWS Cloud Essentials",
    issuer: "AWS Training and Certification",
    date: "January 2023",
    image: "/certificates/AWS Course Completion Certificate-3.png",
    isPdf: false,
  },
  {
    title: "AWS Cloud Practioner Essentials",
    issuer: "AWS Training and Certification",
    date: "January 2023",
    image: "/certificates/AWS Course Completion Certificate-2.png",
    isPdf: false,
  },
  {
    title: "AWS Billing and Cost Management",
    issuer: "AWS Training and Certification",
    date: "January 2023",
    image: "/certificates/AWS Course Completion Certificate-1.png",
    isPdf: false,
  },
  {
    title: "Python Programming with Data Science",
    issuer: "Udemy",
    date: "Feb 2022",
    image: "/certificates/python cert.jpg",
    isPdf: false,
  },
  {
    title: "Full-Stack Dev Road Map",
    issuer: "Filta",
    date: "March 2021",
    image: "/certificates/Full stact dev.png",
    isPdf: false,
  },
];

function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState("AWS Training and Certification"); // Default to Cloud issuer

  const issuers = ["All", ...new Set(certificates.map((cert) => cert.issuer))];

  const filteredCertificates =
    filter === "All"
      ? certificates
      : certificates.filter((cert) => cert.issuer === filter);

  return (
    <div className="content-box pb-20">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-10 text-left">
        Certificate
      </h2>

      <div className="max-w-6xl mx-auto w-full glass-card border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl overflow-hidden">
        {/* macOS Window Title Bar */}
        <div className="bg-slate-100/40 dark:bg-slate-900/40 px-5 py-3.5 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center text-[7px] text-rose-900 font-bold cursor-pointer">&times;</span>
            <span className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center text-[7px] text-amber-900 font-bold cursor-pointer">&minus;</span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center text-[6px] text-emerald-950 font-bold cursor-pointer">&#43;</span>
          </div>
          <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i className="fas fa-file-invoice text-[11px] text-blue-500"></i>
            <span>certificates.xml</span>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-10">
          {/* Dropdown Filter Bar */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 px-1">
        <label className="font-mono text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">
          Filter by Issuer:
        </label>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto appearance-none bg-white dark:bg-brandDarkCard text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 py-2.5 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-sm cursor-pointer"
          >
            {issuers.map((issuer, idx) => (
              <option key={idx} value={issuer}>
                {issuer}
              </option>
            ))}
          </select>
          {/* Custom selector dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
        </div>
      </div>

      {/* Grid of Certificates */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCertificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="glass-card p-6 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50 rounded-2xl cursor-pointer group hover:scale-[1.02]"
          >
            <div className="space-y-3">
              {/* Badge Icon */}
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center text-blue-500 dark:text-lightblue text-lg">
                <i className="fas fa-award"></i>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2">
                {cert.title}
              </h3>
            </div>
            
            <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/40 flex justify-between items-end">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {cert.date}
                </p>
              </div>
              <span className="text-xs font-mono font-medium text-blue-500 dark:text-lightblue flex items-center gap-1 group-hover:underline">
                View <i className="fas fa-arrow-right text-[10px]"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>

      {/* Lighbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl max-w-3xl w-full relative shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 z-10 focus:outline-none"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white leading-tight">
                {selectedCert.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                {selectedCert.issuer} &bull; {selectedCert.date}
              </p>
            </div>

            {/* Image Preview Container */}
            {/* Preview Container */}
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-center w-full aspect-[4/3] max-h-[60vh]">
              {selectedCert.isPdf ? (
                <iframe
                  src={`${selectedCert.image}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full border-0 min-h-[40vh]"
                />
              ) : (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[60vh] object-contain shadow-sm"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificatePage;
