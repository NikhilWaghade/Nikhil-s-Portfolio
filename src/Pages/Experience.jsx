import React, { useEffect, useState } from "react";
import { GraduationCap, School, Calendar, Percent } from "lucide-react";
import diploma from "../assets/Diploma certificate(nik).jpg";
import tally from "../assets/Tally Certificate.jpg";
import fullstack from "../assets/Full Stack Certificate.jpg";
import intership from "../assets/Intership Certificate.jpg";
import network from "../assets/Network & CCNA.jpg";
import hackathon1 from "../assets/Hackathon1st(SVP CLG).jpg";
import hackathon2 from "../assets/Hackathon2nd(Sheriyansh with Bansal).jpg";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 px-4 bg-gray-900 overflow-hidden"
    >
      {/* Bubble Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 overflow-hidden ${
          isVisible
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
        }`}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="bubble rounded-full bg-[#24CFA6] absolute bottom-[-150px] opacity-60 animate-bubble"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-[#24CFA6] mb-12">
          Education & Experience
        </h2>

        {/* Academic Details */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">Academic Details</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* 10th Class */}
            <article className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">10th Class</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <GraduationCap className="text-[#24CFA6]" />
                  <span>
                    <strong>Name:</strong> Nikhil Waghade
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <School className="text-[#24CFA6]" />
                  <span>
                    <strong>School Name:</strong> Govt. High School Aawlajhari, District- Balaghat, State - Madhya Pradesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="text-[#24CFA6]" />
                  <span>
                    <strong>Passout Year:</strong> 2019
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Percent className="text-[#24CFA6]" />
                  <span>
                    <strong>Percentage:</strong> 83.2%
                  </span>
                </li>
              </ul>
            </article>

            {/* 12th Class */}
            <article className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">12th Class</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <GraduationCap className="text-[#24CFA6]" />
                  <span>
                    <strong>Name:</strong> Nikhil Waghade
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <School className="text-[#24CFA6]" />
                  <span>
                    <strong>School Name:</strong> Govt. Excellence School Balaghat, State - Madhya Pradesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="text-[#24CFA6]" />
                  <span>
                    <strong>Passout Year:</strong> 2021
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Percent className="text-[#24CFA6]" />
                  <span>
                    <strong>Percentage:</strong> 82.8%
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Diploma & Tally Certificates */}
        <section className="grid md:grid-cols-2 gap-10 mb-16 relative z-10">
          {/* Diploma */}
          <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">
              Diploma - Govt Polytechnic College Balaghat
            </h3>
            <p className="text-sm">Batch: 2019 - 2021</p>
            <img
              src={diploma}
              alt="Diploma Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div>

          {/* Tally */}
          <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">
              Tally Advance - Basic Computer Balaghat
            </h3>
            <p className="text-sm">Batch: 2021</p>
            <img
              src={tally}
              alt="Tally Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div>
        </section>

        {/* Course and Internship Certificates */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                  Completed Courses Certificate
                </h3>
                <img
                  src={fullstack}
                  alt="Completed Courses Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>

              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                  Internship Certificate
                </h3>
                <img
                  src={intership}
                  alt="Internship Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>

              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                  Network, CCNA & Cloud Certificate
                </h3>
                <img
                  src={network}
                  alt="Network, CCNA & Cloud Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-[#24CFA6] mb-6">
            Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-200 dark:text-white mb-2">
                2021 State Level Hackathon - Sardar VallabhBhai Patel Polytechnic College Bhopal
              </h4>
              <img
                src={hackathon1}
                alt="2021 Hackathon Certificate"
                className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-200 dark:text-white mb-2">
                2025 State Level Hackathon - Bansal Institute of Science Technology Bhopal
              </h4>
              <img
                src={hackathon2}
                alt="2025 Hackathon Certificate"
                className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
