import React, { useEffect, useState } from "react";
import { GraduationCap, School, Calendar, Award, Trophy } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section
      id="experience"
      className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      
      {/* Floating Particles Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 overflow-hidden ${
          isVisible
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <Award className="w-8 h-8 text-cyan-400 animate-pulse" />
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-cyan-500 via-cyan-500 to-transparent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              ></motion.div>
            </div>
          </div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(34,211,238,0.5)",
                "0 0 40px rgba(34,211,238,0.8)",
                "0 0 20px rgba(34,211,238,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Education & Experience
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </motion.div>

        {/* Academic Details */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={fadeInLeft}
            className="flex items-center gap-3 mb-12"
          >
            <GraduationCap className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text">
              Academic Excellence
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 10th Class */}
            <motion.article 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeInLeft}
              className="group relative bg-gradient-to-br from-cyan-900/20 to-teal-900/20 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">10th Class</h3>
                  <div className="px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-400/30">
                    <span className="text-cyan-300 font-semibold">83.2%</span>
                  </div>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                      <GraduationCap className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Student Name</p>
                      <p className="text-white font-medium">Nikhil Waghade</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                      <School className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Institution</p>
                      <p className="text-white font-medium">Govt. High School Aawlajhari</p>
                      <p className="text-gray-400 text-sm">District Balaghat, Madhya Pradesh</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-cyan-500/20 rounded-lg group-hover/item:bg-cyan-500/30 transition-colors">
                      <Calendar className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Graduation Year</p>
                      <p className="text-white font-medium">2019</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.article>

            {/* 12th Class */}
            <motion.article 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInRight}
              className="group relative bg-gradient-to-br from-teal-900/20 to-emerald-900/20 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/20 transition-all duration-500 hover:border-teal-500/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">12th Class</h3>
                  <div className="px-4 py-2 bg-teal-500/20 rounded-full border border-teal-400/30">
                    <span className="text-teal-300 font-semibold">82.8%</span>
                  </div>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-teal-500/20 rounded-lg group-hover/item:bg-teal-500/30 transition-colors">
                      <GraduationCap className="text-teal-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Student Name</p>
                      <p className="text-white font-medium">Nikhil Waghade</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-teal-500/20 rounded-lg group-hover/item:bg-teal-500/30 transition-colors">
                      <School className="text-teal-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Institution</p>
                      <p className="text-white font-medium">Govt. Excellence School Balaghat</p>
                      <p className="text-gray-400 text-sm">Madhya Pradesh</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-teal-500/20 rounded-lg group-hover/item:bg-teal-500/30 transition-colors">
                      <Calendar className="text-teal-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Graduation Year</p>
                      <p className="text-white font-medium">2021</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Course and Internship Certificates */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <Trophy className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-teal-300 to-pink-300 bg-clip-text">
              Specialized Training & Certifications
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Full Stack Certificate */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-emerald-900/30 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(217,70,239,0.4)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    Full Stack Development
                  </h3>
                  <p className="text-gray-400 text-sm">Completed Courses Certificate</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={fullstack}
                    alt="Full Stack Certificate"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Internship Certificate */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/30 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Professional Internship
                  </h3>
                  <p className="text-gray-400 text-sm">Internship Certificate</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={intership}
                    alt="Internship Certificate"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Network & CCNA Certificate */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              className="group relative overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-900/30 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-teal-400/60 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    Network & Cloud Computing
                  </h3>
                  <p className="text-gray-400 text-sm">Network, CCNA & Cloud Certificate</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-teal-500/30 group-hover:border-teal-400/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={network}
                    alt="Network Certificate"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Activities */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <Trophy className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text">
              Achievements & Competitions
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 2021 Hackathon */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              variants={fadeInLeft}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/30 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-4 py-1.5 bg-cyan-500/20 rounded-full border border-cyan-400/40">
                      <span className="text-cyan-300 text-sm font-semibold">🏆 Participant</span>
                    </div>
                    <div className="px-3 py-1.5 bg-cyan-500/10 rounded-full">
                      <span className="text-cyan-400 text-xs font-medium">2021</span>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    State Level Hackathon
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sardar VallabhBhai Patel Polytechnic College, Bhopal
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={hackathon1}
                    alt="2021 Hackathon Certificate"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* 2025 Hackathon */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeInRight}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-900/30 to-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-teal-400/60 hover:shadow-[0_0_50px_rgba(20,184,166,0.4)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-4 py-1.5 bg-teal-500/20 rounded-full border border-teal-400/40">
                      <span className="text-teal-300 text-sm font-semibold">🥈 Participant</span>
                    </div>
                    <div className="px-3 py-1.5 bg-teal-500/10 rounded-full">
                      <span className="text-teal-400 text-xs font-medium">2025</span>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    State Level Hackathon
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Bansal Institute of Science & Technology, Bhopal
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-teal-500/30 group-hover:border-teal-400/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={hackathon2}
                    alt="2025 Hackathon Certificate"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
