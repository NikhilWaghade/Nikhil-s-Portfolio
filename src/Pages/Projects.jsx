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
      name: "Portfolio Website",
      imageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
      link: "#",
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
      className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      
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
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <Code2 className="w-8 h-8 text-cyan-400 animate-pulse" />
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-cyan-500 via-cyan-500 to-transparent rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
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
              className="group relative bg-gradient-to-br from-cyan-900/20 to-teal-900/20 backdrop-blur-sm rounded-3xl border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-cyan-500/90 backdrop-blur-sm rounded-full border border-cyan-400/50">
                  <span className="text-white text-xs font-semibold">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
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
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-medium"
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
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
                      className="flex items-center justify-center px-4 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-300 rounded-xl font-semibold transition-all duration-300"
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
                  className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"
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
