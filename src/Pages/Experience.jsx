import React, { useEffect, useState } from "react";

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

        {/* Diploma & B-tech Certificate  */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 relative z-10 hover:border-[#24CFA6]">
          {/* Left - Diploma */}
          <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">Diploma - Govt Polytechnic College Balaghat</h3>
            <p className="text-sm">Batch: 2019 - 2021</p>
            <img
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
              alt="Diploma Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div>

          {/* Right - B.Tech */}
          <div className="relative z-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#24CFA6] mb-2">B.Tech - Sagar Institute of Research & Technology Excellence</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Batch: 2021 - 2027</p>
            <img
              src="https://t3.ftcdn.net/jpg/02/48/28/66/240_F_248286658_aLJe77cZ4Sx5JcU9Zkn1IEQl9w0J1xIR.jpg"
              alt="B.Tech Certificate"
              className="mt-4 rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
            />
          </div>
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
                  src="https://t4.ftcdn.net/jpg/06/47/03/05/240_F_647030563_x46hQEn4KDbuB2LecH8eKTiMbZRSCu3e.jpg"
                  alt="Courses Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-[#24CFA6] mb-2">
                  Internship Certificate
                </h3>
                <img
                  src="https://t4.ftcdn.net/jpg/02/72/87/55/240_F_272875584_t5vaHGCliCsYwZAJDom9rIF5qhlocj5L.jpg"
                  alt="Internship Certificate"
                  className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Participation Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Participation</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                2021 State Level Hackathon - Sardar VallabhBhai Patel Polytechnic College Bhopal
              </h4>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
                alt="2021 Hackathon Certificate"
                className="rounded-lg shadow-md w-full h-auto hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                2025 State Level Hackathon - Bansal Institute of Science Technology Bhopal
              </h4>
              <img
                src="https://t3.ftcdn.net/jpg/02/07/32/14/240_F_207321441_c4DdEqB7N5wJ8JpxDsQIwcatZuxTIk5k.jpg"
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
