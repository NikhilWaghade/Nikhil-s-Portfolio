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
  className={`relative px-4 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 overflow-hidden transition-all duration-300 ${
    menuOpen ? "pt-[280px]" : "pt-[160px] md:pt-[200px]"
  } pb-32 min-h-screen`}
>
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>

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
              ? 'rgba(34, 211, 238, 0.4)' 
              : i % 3 === 1 
              ? 'rgba(20, 184, 166, 0.4)' 
              : 'rgba(6, 182, 212, 0.4)'
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
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 transition-transform duration-300">
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

      <h2 className="text-2xl md:text-4xl font-semibold text-cyan-300 mb-6">
        Building Scalable Web Apps
      </h2>

      <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
        I specialize in crafting modern, scalable, and responsive web applications that deliver exceptional user experiences across platforms.
      </p>

      <a
        href="#projects"
        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105"
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
