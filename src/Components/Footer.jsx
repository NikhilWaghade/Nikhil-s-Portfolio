import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-center py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-300 dark:text-gray-400">
          © {new Date().getFullYear()} Nikhil. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-3 text-gray-300 dark:text-gray-400 text-xl">
          <a
            href="https://github.com/NikhilWaghade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilwaghade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nikkuwaghade@gmail.com"
            aria-label="Email"
            className="hover:text-white transition-colors hover:scale-110 duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
