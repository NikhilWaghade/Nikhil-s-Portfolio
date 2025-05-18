import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const handleNavClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleNavClick();
    }
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo - scroll to top */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleNavClick();
          }}
          className="text-2xl font-bold text-[#24CFA6] cursor-pointer"
        >
          Nikhil's
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("hero")} className="hover:text-[#24CFA6]">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-[#24CFA6]">
            About
          </button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-[#24CFA6]">
            Education
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-[#24CFA6]">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[#24CFA6]">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
