import React from "react";
import { Link } from "react-router-dom"; // Only needed if you're linking internally
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Nikhil. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-3 text-gray-600 dark:text-gray-300 text-xl">
          <a
            href="https://github.com/NikhilWaghade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilwaghade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nikkuwaghade@gmail.com"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
