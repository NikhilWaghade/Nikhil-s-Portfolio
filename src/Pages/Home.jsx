import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Home = ({ menuOpen }) => {

  return (
    <>
 <section
  id="hero"
  className={`relative px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden transition-all duration-300 ${
    menuOpen ? "pt-[280px]" : "pt-[160px] md:pt-[200px]"
  } pb-32 min-h-screen`}
>
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-400/5 via-transparent to-transparent"></div>

  {/* Floating Particles Background */}
  <div className="bubble-container absolute top-0 left-0 w-full h-full overflow-hidden z-0">
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

  {/* Full-width Text Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300">
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

      <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
        Building Scalable Web Apps
      </h2>

      <p className="text-xl md:text-2xl font-medium text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
        I specialize in crafting modern, scalable, and responsive web applications that deliver exceptional user experiences across platforms.
      </p>

      <a
        href="#projects"
        className="inline-block px-8 py-4 bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 text-black text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
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
