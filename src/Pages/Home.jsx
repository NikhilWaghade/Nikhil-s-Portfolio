import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

import selfimg from '../assets/Nikhil_img (1).jpg';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Home = ({ menuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="hero"
        className={`relative px-4 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ${
          menuOpen ? "pt-[280px]" : "pt-[120px] md:pt-[140px]"
        } pb-20`}
      >
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
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
          {/* Left */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
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
              <Typewriter
                words={["Hi, I'm Nikhil", "Full stack developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h1>

            <p className="text-3xl text-gray-200 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I specialize in crafting modern, scalable, and responsive web applications...
            </p>

            <a
              href="#projects"
              className="mt-6 inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
              View Projects
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={selfimg}
              alt="Developer"
              className="decagon-img object-cover hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:border-4 hover:border-[#24CFA6] rounded-lg"
              style={{ width: "350px", height: "430px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Other sections included directly here */}
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
