import React, { useState, useEffect } from "react";
import { Code2, ExternalLink, Github } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      imageUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
      link: "https://ecommarce-frontend-9hnv-nikhilwaghades-projects.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Full-stack e-commerce platform with modern UI and shopping cart functionality",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Full Stack"
    },
    {
      name: "Real Estate Website",
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      link: "https://real-state-frontend-phi.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Modern real estate platform for property listings and searches",
      tech: ["React", "Tailwind CSS", "API Integration"],
      category: "Full Stack"
    },
    {
      name: "Rock Paper Scissor Game",
      imageUrl:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
      link: "https://rock-paper-scissor-game-chi-seven.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Interactive rock-paper-scissors game with smooth animations",
      tech: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      category: "Web App"
    },
    {
      name: "Restaurant Website",
      imageUrl:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://restrorent-frontend.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Modern portfolio with smooth animations and responsive design",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend"
    },
    {
      name: "Task Management System",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
      link: "#",
      github: "https://github.com/NikhilWaghade",
      description: "Project management tool with task tracking and team collaboration",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      category: "Full Stack"
    },
    {
      name: "Weather Dashboard",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
      link: "#",
      github: "https://github.com/NikhilWaghade",
      description: "Real-time weather monitoring with beautiful visualizations",
      tech: ["React", "Weather API", "Chart.js", "Tailwind"],
      category: "Web App"
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-400/5 via-transparent to-transparent"></div>
      
      {/* Floating Particles Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 overflow-hidden ${
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
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <Code2 className="w-8 h-8 text-white animate-pulse" />
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-white via-white to-transparent rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
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
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/5 to-gray-400/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-white/50">
                  <span className="text-black text-xs font-semibold">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-white text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 text-black rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      aria-label={`View ${project.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 bg-black/50 hover:bg-black/70 border border-white/30 hover:border-white/60 text-white rounded-xl font-semibold transition-all duration-300"
                      aria-label={`View ${project.name} code`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              {activeProject === index && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
