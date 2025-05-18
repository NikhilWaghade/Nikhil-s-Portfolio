import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {  FaLinkedin,  FaHtml5,  FaCss3Alt,FaBootstrap,  FaJsSquare,  FaReact,  FaNodeJs,  FaWordpress,  FaFigma,  FaWhatsapp,  FaGithub,  FaInstagram,} from "react-icons/fa";
import { SiTailwindcss, SiMongodb,} from "react-icons/si";
import selfimg from "../assets/Nikhil_img (1).jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (!section) return; // safeguard against null
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML", percent: 95, icon: <FaHtml5 className="text-red-600" /> },
    { name: "CSS", percent: 90, icon: <FaCss3Alt className="text-blue-600" /> },
    {
      name: "JavaScript",
      percent: 90,
      icon: <FaJsSquare className="text-yellow-500" />,
    },
    { name: "React JS", percent: 88, icon: <FaReact className="text-blue-400" /> },
    { name: "Node JS", percent: 85, icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", percent: 80, icon: <SiMongodb className="text-green-500" /> },
    {
      name: "Tailwind CSS",
      percent: 92,
      icon: <SiTailwindcss className="text-cyan-500" />,
    },
    { name: "Bootstrap", percent: 85, icon: <FaBootstrap className="text-purple-600" /> },
    { name: "WordPress", percent: 95, icon: <FaWordpress className="text-blue-700" /> },
    { name: "Figma", percent: 80, icon: <FaFigma className="text-violet-500" /> },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Bubble Background */}
      <div
        className={`bubble-container absolute inset-0 z-0 top-0 left-0 w-full h-full overflow-hidden ${
          isVisible ? "opacity-100" : "opacity-0"
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

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <motion.img
            src={selfimg}
            alt="Developer"
            className="rounded-lg shadow-lg object-cover animate-float hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:border-4 hover:border-[#24CFA6]"
            style={{ width: "350px", height: "430px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 p-8 rounded-lg shadow-lg transition-all hover:border-4 hover:border-[#24CFA6] hover:shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-[#24CFA6] mb-4">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Hello, I am <strong className="text-2xl">Nikhil Waghade</strong>.
            <br />
            "I'm dedicated to developing a cutting-edge, personalized learning
            platform — Connect Shiksha — designed to provide targeted remediation
            and tutoring solutions for learners seeking better outcomes." —{" "}
            <strong>Connect Shiksha & Excellup</strong>.
          </p>

          {/* Colored Separator */}
          <hr className="my-8 border-t-4 border-[#24CFA6] rounded-full w-full" />

          {/* Social Links */}
          <p className="text-lg text-indigo-500 font-semibold mt-6 mb-2">
            Connect With Me:
          </p>
          <div className="flex items-center gap-6 mt-2 text-xl flex-wrap">
            <a
              href="https://www.linkedin.com/in/nikhilwaghade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-[#24CFA6] transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500 hover:text-[#24CFA6] transition-colors"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://github.com/NikhilWaghade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-[#24CFA6] transition-colors"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-500 hover:text-[#24CFA6] transition-colors"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Skill Bars */}
      <div className="mt-8 max-w-xl mx-auto">
        <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Work Experience Technologies
        </h4>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-md font-medium text-gray-800 dark:text-gray-200">
                  {skill.icon}
                </span>
                <span className="text-md font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
              <span className="text-md text-indigo-600 dark:text-indigo-400 font-semibold">
                {skill.percent}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
              <motion.div
                className="h-3 rounded-full bg-[#24CFA6]"
                initial={{ width: 0 }}
                animate={{ width: `${skill.percent}%` }}
                transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
