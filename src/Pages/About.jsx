import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {  FaLinkedin,  FaHtml5,  FaCss3Alt,FaBootstrap,  FaJsSquare,  FaReact,  FaNodeJs,  FaWordpress,  FaFigma,  FaWhatsapp,  FaGithub,  FaInstagram,} from "react-icons/fa";
import { SiTailwindcss, SiMongodb,} from "react-icons/si";
import selfimg from "../assets/profile.jpg";

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
      className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-400/5 via-transparent to-transparent"></div>
      
      {/* Floating Particles Background */}
      <div
        className={`absolute inset-0 z-0 top-0 left-0 w-full h-full overflow-hidden ${
          isVisible ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
        }`}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : i % 3 === 1 
                  ? 'rgba(156, 163, 175, 0.2)' 
                  : 'rgba(209, 213, 219, 0.2)'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
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
            className="rounded-lg shadow-lg object-cover animate-float hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border-2 border-white/20 hover:border-white/60"
            style={{ width: "350px", height: "430px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 p-8 rounded-lg shadow-lg transition-all bg-gradient-to-br from-white/5 to-gray-400/5 backdrop-blur-sm border border-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-4"
            animate={{ 
              textShadow: [
                "0 0 15px rgba(255,255,255,0.3)",
                "0 0 30px rgba(255,255,255,0.5)",
                "0 0 15px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About Me
          </motion.h2>

          <p className="text-gray-200 dark:text-gray-300 mb-4 leading-relaxed">
            Hello, I am <strong className="text-2xl text-white">Nikhil Waghade</strong>.
            <br />
            "I'm dedicated to developing a cutting-edge, personalized learning
            platform — Connect Shiksha — designed to provide targeted remediation
            and tutoring solutions for learners seeking better outcomes." —{" "}
            <strong>Connect Shiksha & Excellup</strong>.
          </p>

          <a
            href="/Nikhilresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window.gtag === "function") {
                window.gtag("event", "resume_click", {
                  event_category: "engagement",
                  event_label: "Resume PDF",
                });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-lg bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Download Resume
          </a>

          {/* Colored Separator */}
          <hr className="my-8 border-t-2 border-white/30 rounded-full w-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

          {/* Social Links */}
          <p className="text-lg text-white font-semibold mt-6 mb-2">
            Connect With Me:
          </p>
          <div className="flex items-center gap-6 mt-2 text-xl flex-wrap">
            <a
              href="https://www.linkedin.com/in/nikhilwaghade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://github.com/NikhilWaghade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Skill Bars - Redesigned */}
      <div className="mt-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <motion.h4 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            animate={{ 
              textShadow: [
                "0 0 15px rgba(255,255,255,0.3)",
                "0 0 35px rgba(255,255,255,0.5)",
                "0 0 15px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Work Experience Technologies
          </motion.h4>
          <p className="text-gray-400 text-lg">
            Technical skills and expertise in modern web development
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-gray-400/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header with Icon and Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                      <span className="text-2xl">
                        {skill.icon}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-full border border-white/30">
                    <span className="text-white font-bold text-lg">
                      {skill.percent}%
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative w-full h-3 bg-black/50 rounded-full overflow-hidden border border-white/20">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-gray-300 to-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "500%" }}
                    transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
