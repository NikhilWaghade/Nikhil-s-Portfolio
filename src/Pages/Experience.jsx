import React, { useEffect, useState } from "react";
import { GraduationCap, School, Calendar, Percent } from 'lucide-react';


const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Bubble Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 overflow-hidden ${
          isVisible ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
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
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          Education & Experience
        </h2>
        {/* 10th & 12th School  */}
      <section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-4xl font-bold text-center mb-12">Academic Details</h2>
  <div className="grid md:grid-cols-2 gap-10">
    {/* 10th Class Box */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold mb-6 text-white text-center">10th Class</h3>
      <ul className="space-y-4 text-gray-300">
        <li className="flex items-center gap-3">
          <GraduationCap className="text-[#24CFA6]" />
          <span><strong>Name:</strong> Nikhil Waghade</span>
        </li>
        <li className="flex items-center gap-3">
          <School className="text-[#24CFA6]" />
          <span><strong>School Name:</strong> Govt. High School Aawlajhari, Distict- Balaghat, State - Madhay Pradesh</span>
        </li>
        <li className="flex items-center gap-3">
          <Calendar className="text-[#24CFA6]" />
          <span><strong>Passout Year:</strong> 2019</span>
        </li>
        <li className="flex items-center gap-3">
          <Percent className="text-[#24CFA6]" />
          <span><strong>Percentage:</strong> 83.2 %</span>
        </li>
      </ul>
    </div>

    {/* 12th Class Box */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold mb-6 text-white text-center">12th Class</h3>
      <ul className="space-y-4 text-gray-300">
        <li className="flex items-center gap-3">
          <GraduationCap className="text-[#24CFA6]" />
          <span><strong>Name:</strong> Nikhil Waghade</span>
        </li>
        <li className="flex items-center gap-3">
          <School className="text-[#24CFA6]" />
          <span><strong>School Name:</strong> Govt. Excellence School Balaghat, State - Madhay Pradesh</span>
        </li>
        <li className="flex items-center gap-3">
          <Calendar className="text-[#24CFA6]" />
          <span><strong>Passout Year:</strong> 2021</span>
        </li>
        <li className="flex items-center gap-3">
          <Percent className="text-[#24CFA6]" />
          <span><strong>Percentage:</strong> 82.8 %</span>
        </li>
      </ul>
    </div>
  </div>
</section>


        {/* Diploma & B-tech Certificate  */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 relative z-10 hover:border-[#24CFA6]">
          {/* Left - Diploma */}
          <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">Diploma - Govt Polytechnic College Balaghat</h3>
            <p className="text-sm">Batch: 2019 - 2021</p>
            <img
              src="src\assets\Diploma certificate.jpg"
              alt="Diploma Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div>
          <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">Tally Advance - Basic Computer Balaghat</h3>
            <p className="text-sm">Batch: 2021 </p>
            <img
              src="src\assets\Tally Certificate.jpg"
              alt="Diploma Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div>
            

          {/* Right - B.Tech */}
          {/* <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">B.Tech - Sagar Institute of Research & Technology Excellence</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Batch: 2021 - 2027</p>
            <img
              src="https://t3.ftcdn.net/jpg/02/48/28/66/240_F_248286658_aLJe77cZ4Sx5JcU9Zkn1IEQl9w0J1xIR.jpg"
              alt="B.Tech Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div> */}


        </div>

        {/* Course and Internship Certificates */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                  Completed Courses Certificate
                </h3>
                <img
                  src="src\assets\Full Stack Certificate.jpg"
                  alt="Courses Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                  Internship Certificate
                </h3>
                <img
                  src="src\assets\Intership Certificate.jpg"
                  alt="Internship Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                   Network ,CCNA & Cloud Certificate
                </h3>
                <img
                  src="src\assets\Network & CCNA.jpg"
                  alt="Internship Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Achievment Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Activities</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                2021 State Level Hackathon - Sardar VallabhBhai Patel Polytechnic College Bhopal
              </h4>
              <img
                src="src\assets\Hackathon1st(SVP CLG).jpg"
                alt="2021 Hackathon Certificate"
                className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                2025 State Level Hackathon - Bansal Institute of Science Technology Bhopal
              </h4>
              <img
                src="src\assets\Hackathon2nd(Sheriyansh with Bansal).jpg"
                alt="2025 Hackathon Certificate"
                className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
