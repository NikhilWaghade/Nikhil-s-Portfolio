// Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero");
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Bubble Background */}
      <div className="bubble-container absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-100">
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
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-28">
        <motion.div
          className="w-full text-center md:text-left px-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 animate-text-flash hover:text-[#24CFA6] transition-colors"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Nikhil
          </motion.h1>

          <div className="mt-4 text-4xl text-gray-300">{/* Typewriter here */}</div>

          <p className="text-3xl text-gray-200 leading-relaxed max-w-5xl mx-auto md:mx-0">
            I specialize in crafting modern, scalable, and responsive web applications. From intuitive front-end interfaces using React to robust backend systems with Node.js, MongoDB, and Express, I deliver complete solutions optimized for performance and user experience.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
