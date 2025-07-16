import React, { useState } from "react";

const certificates = [
  {
    title: "React Hook Redux",
    issuer: "Udemy",
    date: "July 2025",
    image: "/certificates/react.jpg",
  },
  {
    title: "Detect, Defend, and Protect Introduction to Cybersecurity",
    issuer: "TECHNOLOGY MANAGEMENT CENTER UNIVERSITY OF THE PHILIPPINES DILIMAN",
    date: "November 2024",
    image: "/certificates/Detect, Defend, and Protect Introduction to Cybersecurity Cert.png",
  },
  {
    title: "Python Programming with Data Science",
    issuer: "Udemy",
    date: "Feb 2022",
    image: "/certificates/python cert.jpg",
  },
  {
    title:"Full-Stack Dev Roam Map",
    issuer: "Filta",
    date: "March 2021",
    image: "/certificates/Full stact dev.png",
  },
];

function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="content-box pb-20">
      <div className="text-5xl text-left mb-6">Certificates</div>

      <div className="flex min-h-[70vh]">
        <div className="w-full m-auto">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="bg-gray-800 rounded-2xl shadow-lg p-5 border border-gray-700 hover:border-lightblue cursor-pointer transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} — {cert.date}
                </p>
                <p className="text-sm text-lightblue mt-2 underline">
                  Click to view
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gray-900 p-4 rounded-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold hover:text-lightblue"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold text-lightblue mb-4">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificatePage;
