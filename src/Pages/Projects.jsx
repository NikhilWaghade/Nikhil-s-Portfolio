import React, { useState, useEffect } from "react";
import { Code2, ExternalLink, Github } from "lucide-react";
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
      name: "Restaurant Website",
      imageUrl:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1074&auto=format&fit=crop",
      link: "https://restrorent-frontend.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Modern restaurant platform with responsive UI and animations",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend"
    },
    {
      name: "D&D Footwear",
      imageUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
      link: "https://dnd-footwear.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Full-stack e-commerce platform with cart and authentication",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Full Stack"
    },
    {
      name: "Real Estate Website",
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      link: "https://real-state-frontend-phi.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Property listing platform with API integration",
      tech: ["React", "Tailwind CSS", "API Integration"],
      category: "Full Stack"
    },
    {
      name: "Rock Paper Scissor Game",
      imageUrl:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
      link: "https://rock-paper-scissor-game-chi-seven.vercel.app/",
      github: "https://github.com/NikhilWaghade",
      description: "Interactive game built with pure JavaScript logic",
      tech: ["JavaScript", "HTML5", "CSS3"],
      category: "Web App"
    },
    {
      name: "Task Management System",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/NikhilWaghade",
      description: "Team task tracking and collaboration system",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      upcoming: true
    },
    {
      name: "Weather Dashboard",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/NikhilWaghade",
      description: "Real-time weather app with API and charts",
      tech: ["React", "Weather API", "Chart.js"],
      category: "Web App",
      upcoming: true
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcase of my recent work and problem-solving projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-black text-xs font-semibold">
                  {project.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-white text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">

                  {project.upcoming ? (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 bg-gray-700 text-gray-300 rounded-xl cursor-not-allowed"
                    >
                      🚧 Upcoming
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black border border-white/30 rounded-xl text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;