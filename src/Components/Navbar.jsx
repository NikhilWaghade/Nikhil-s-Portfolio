import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background blur when scrolled
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navItems = ["hero", "about", "experience", "projects", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-black/98 via-gray-900/98 to-black/98 backdrop-blur-xl shadow-2xl shadow-white/5 border-b border-white/10"
          : "bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with enhanced styling */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleNavClick();
            }}
            className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent cursor-pointer group transition-all duration-300 hover:scale-110"
          >
            <span className="relative z-10 text-white">Nikhil's</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
          </Link>

          {/* Desktop Menu with enhanced design */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-5 py-2.5 text-sm lg:text-base font-semibold transition-all duration-300 rounded-xl group ${
                  activeSection === section
                    ? "text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">
                  {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                
                {/* Active indicator with glow */}
                {activeSection === section && (
                  <>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-gray-300/10 to-white/10 rounded-xl blur-sm"></span>
                  </>
                )}
                
                {/* Hover effect with gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-300/5 to-white/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                
                {/* Bottom border on hover with glow */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full group-hover:w-4/5 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative p-2.5 text-white text-2xl focus:outline-none hover:bg-gradient-to-r hover:from-white/10 hover:to-gray-300/10 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              aria-label="Toggle menu"
            >
              <span className={`transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
                {menuOpen ? <FiX /> : <FiMenu />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-gray-900/98 to-black/98 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-2 shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)]">
          {navItems.map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-full text-left px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 transform ${
                activeSection === section
                  ? "bg-gradient-to-r from-white/15 via-gray-300/15 to-white/15 text-white translate-x-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white/20"
                  : "text-gray-400 hover:bg-gradient-to-r hover:from-white/5 hover:to-gray-300/5 hover:text-white hover:translate-x-3 border border-transparent hover:border-white/10"
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <span className="flex items-center">
                {activeSection === section && (
                  <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                )}
                {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
