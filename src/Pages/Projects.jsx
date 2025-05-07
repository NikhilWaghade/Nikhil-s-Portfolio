import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      imageUrl: "https://images.unsplash.com/photo-1634937809683-ddb52aa8ec62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
      link: "https://example.com/project1",
      description: "Built with React, Tailwind, and Node.js.",
    },
    {
      name: "Project 2",
      imageUrl: "https://images.unsplash.com/photo-1591484385394-f5083609ed6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9qZWN0fGVufDB8fDB8fHww",
      link: "https://example.com/project2",
      description: "Built with React, Tailwind, and Node.js.",
    },
    {
      name: "Project 3",
      imageUrl: "https://images.unsplash.com/photo-1710881645107-2423c5309a5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvYWNoaW5nJTIwd2Vic2l0ZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://example.com/project3",
      description: "Built with React, Tailwind, and Node.js.",
    },
    {
      name: "Project 4",
      imageUrl: "https://images.unsplash.com/photo-1628029437115-a48bbb6e6ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNvYWNoaW5nJTIwd2Vic2l0ZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://example.com/project1",
      description: "Built with React, Tailwind, and Node.js.",
    },
    {
      name: "Project 5",
      imageUrl: "https://images.unsplash.com/photo-1677617586879-ad2ae3b61099?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvYWNoaW5nJTIwd2Vic2l0ZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://example.com/project2",
      description: "Built with React, Tailwind, and Node.js.",
    },
    {
      name: "Project 6",
      imageUrl: "https://images.unsplash.com/photo-1621953459443-f3bf9cf79527?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbW1hcmNlfGVufDB8fDB8fHww",
      description: "Built with React, Tailwind, and Node.js.",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
    {/* Bubble Background */}
    <div className="bubble-container absolute top-0 left-0 w-full h-full overflow-hidden z-0">
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
  
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
        Projects
      </h2>
  
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:border-4 hover:border-[#24CFA6]">
            <h3 className="text-xl font-semibold text-indigo-500">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-60 object-cover mt-4 rounded-lg transform transition-transform hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Projects;
