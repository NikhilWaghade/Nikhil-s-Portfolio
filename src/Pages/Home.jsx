import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

import About from './About';
import Experience from './Experience';
import Projects from './Projects';
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
  className={`relative px-4  bg-gray-900 overflow-hidden transition-all duration-300 ${
    menuOpen ? "pt-[280px]" : "pt-[160px] md:pt-[200px]"
  } pb-32 min-h-screen`}
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

  {/* Full-width Text Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white animate-text-flash hover:text-[#24CFA6] transition-colors">
        Hi, I'm Nikhil
      </h1>

      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
        <Typewriter
          words={["Full Stack Developer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
        <Typewriter
          words={["Building Scalable Web Apps", "Delivering Modern UI/UX"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
        I specialize in crafting modern, scalable, and responsive web applications that deliver exceptional user experiences across platforms.
      </p>

      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
      >
        View Projects
      </a>
    </motion.div>
  </div>
</section>


      {/* Other sections included directly here */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
