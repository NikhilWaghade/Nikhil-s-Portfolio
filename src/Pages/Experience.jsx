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
  const [scrollY, setScrollY] = useState(0);
  const [certificateStates, setCertificateStates] = useState({
    cert0: false,
    cert1: false,
    cert2: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      
      // Track scroll position for certificate animations
      setScrollY(window.scrollY);

      // Certificate section detection for layered animation
      const certSection = document.getElementById("certificates-section");
      if (certSection) {
        const certRect = certSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Trigger animations based on scroll position
        if (certRect.top < windowHeight * 0.7) {
          setCertificateStates(prev => ({ ...prev, cert0: true }));
        }
        if (certRect.top < windowHeight * 0.6) {
          setCertificateStates(prev => ({ ...prev, cert1: true }));
        }
        if (certRect.top < windowHeight * 0.5) {
          setCertificateStates(prev => ({ ...prev, cert2: true }));
        }
        
        // Reset on scroll up
        if (certRect.top > windowHeight) {
          setCertificateStates({ cert0: false, cert1: false, cert2: false });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if scrolling up for rounded effect
  const isScrollingDown = scrollY > 100;

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
      className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Gradient Background - Black & White Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-400/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500/3 via-transparent to-transparent"></div>
      
      {/* Floating Particles Background with Black & White Colors */}
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
                className="h-1 w-12 bg-gradient-to-r from-transparent via-white to-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <Award className="w-8 h-8 text-white animate-pulse" />
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-white via-white to-transparent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              ></motion.div>
            </div>
          </div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)"
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
            <GraduationCap className="w-8 h-8 text-white animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
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
              className="group relative bg-gradient-to-br from-white/5 to-gray-400/5 backdrop-blur-sm p-8 rounded-3xl border border-white/20 transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">10th Class</h3>
                  <div className="px-4 py-2 bg-white/10 rounded-full border border-white/30">
                    <span className="text-white font-semibold">83.2%</span>
                  </div>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-white/10 rounded-lg group-hover/item:bg-white/20 transition-colors">
                      <GraduationCap className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Student Name</p>
                      <p className="text-white font-medium">Nikhil Waghade</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-white/10 rounded-lg group-hover/item:bg-white/20 transition-colors">
                      <School className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Institution</p>
                      <p className="text-white font-medium">Govt. High School Aawlajhari</p>
                      <p className="text-gray-400 text-sm">District Balaghat, Madhya Pradesh</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-white/10 rounded-lg group-hover/item:bg-white/20 transition-colors">
                      <Calendar className="text-white w-5 h-5" />
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
              className="group relative bg-gradient-to-br from-gray-400/5 to-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-400/20 transition-all duration-500 hover:border-gray-300/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.2)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">12th Class</h3>
                  <div className="px-4 py-2 bg-gray-400/10 rounded-full border border-gray-400/30">
                    <span className="text-gray-300 font-semibold">82.8%</span>
                  </div>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-gray-400/10 rounded-lg group-hover/item:bg-gray-400/20 transition-colors">
                      <GraduationCap className="text-gray-300 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Student Name</p>
                      <p className="text-white font-medium">Nikhil Waghade</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-gray-400/10 rounded-lg group-hover/item:bg-gray-400/20 transition-colors">
                      <School className="text-gray-300 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Institution</p>
                      <p className="text-white font-medium">Govt. Excellence School Balaghat</p>
                      <p className="text-gray-400 text-sm">Madhya Pradesh</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-gray-400/10 rounded-lg group-hover/item:bg-gray-400/20 transition-colors">
                      <Calendar className="text-gray-300 w-5 h-5" />
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

        {/* Course and Internship Certificates - Enhanced with Layered Animations */}
        <section className="mb-20" id="certificates-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <Trophy className="w-8 h-8 text-white animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text">
              Specialized Training & Certifications
            </h3>
          </motion.div>
          
          {/* Certificates with Layered Animation Effect */}
          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
            {/* Full Stack Certificate */}
            <div
              className={`certificate-card group relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-white/60 hover:-translate-y-3 ${
                certificateStates.cert0 ? 'scroll-active' : ''
              } ${isScrollingDown ? '' : 'scroll-rounded'}`}
              style={{
                transitionDelay: '0ms',
                boxShadow: certificateStates.cert0 ? '0 0 50px rgba(255,255,255,0.3)' : 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      Full Stack Development
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/50 animate-pulse">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Completed Courses Certificate</p>
                </div>
                <div className={`relative overflow-hidden rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-500 ${
                  certificateStates.cert0 ? 'glow-effect' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={fullstack}
                    alt="Full Stack Certificate"
                    className="certificate-image w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Internship Certificate */}
            <div
              className={`certificate-card group relative overflow-hidden rounded-3xl border border-gray-400/30 bg-gradient-to-br from-gray-400/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-300/60 hover:-translate-y-3 ${
                certificateStates.cert1 ? 'scroll-active' : ''
              } ${isScrollingDown ? '' : 'scroll-rounded'}`}
              style={{
                transitionDelay: '150ms',
                boxShadow: certificateStates.cert1 ? '0 0 50px rgba(156,163,175,0.3)' : 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      Professional Internship
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-gray-400/20 flex items-center justify-center border-2 border-gray-400/50 animate-pulse">
                      <span className="text-gray-300 text-xs font-bold">2</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Internship Certificate</p>
                </div>
                <div className={`relative overflow-hidden rounded-2xl border-2 border-gray-400/30 group-hover:border-gray-300/60 transition-all duration-500 ${
                  certificateStates.cert1 ? 'glow-effect' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={intership}
                    alt="Internship Certificate"
                    className="certificate-image w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Network & CCNA Certificate */}
            <div
              className={`certificate-card group relative overflow-hidden rounded-3xl border border-gray-500/30 bg-gradient-to-br from-gray-500/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-400/60 hover:-translate-y-3 ${
                certificateStates.cert2 ? 'scroll-active' : ''
              } ${isScrollingDown ? '' : 'scroll-rounded'}`}
              style={{
                transitionDelay: '300ms',
                boxShadow: certificateStates.cert2 ? '0 0 50px rgba(107,114,128,0.3)' : 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      Network & Cloud Computing
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center border-2 border-gray-400/50 animate-pulse">
                      <span className="text-gray-400 text-xs font-bold">3</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Network, CCNA & Cloud Certificate</p>
                </div>
                <div className={`relative overflow-hidden rounded-2xl border-2 border-gray-500/30 group-hover:border-gray-400/60 transition-all duration-500 ${
                  certificateStates.cert2 ? 'glow-effect' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={network}
                    alt="Network Certificate"
                    className="certificate-image w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Animation Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Scroll down to reveal certificates layer by layer
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
            </p>
          </motion.div>
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
            <Trophy className="w-8 h-8 text-white animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text">
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
              className="group relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-white/60 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-4 py-1.5 bg-white/10 rounded-full border border-white/40">
                      <span className="text-white text-sm font-semibold">🏆 Participant</span>
                    </div>
                    <div className="px-3 py-1.5 bg-white/5 rounded-full">
                      <span className="text-gray-400 text-xs font-medium">2021</span>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                    State Level Hackathon
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sardar VallabhBhai Patel Polytechnic College, Bhopal
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              className="group relative overflow-hidden rounded-3xl border border-gray-400/30 bg-gradient-to-br from-gray-400/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-300/60 hover:shadow-[0_0_50px_rgba(156,163,175,0.3)] hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-4 py-1.5 bg-gray-400/10 rounded-full border border-gray-400/40">
                      <span className="text-gray-300 text-sm font-semibold">🥈 Participant</span>
                    </div>
                    <div className="px-3 py-1.5 bg-gray-400/5 rounded-full">
                      <span className="text-gray-400 text-xs font-medium">2025</span>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                    State Level Hackathon
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Bansal Institute of Science & Technology, Bhopal
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-400/30 group-hover:border-gray-300/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
