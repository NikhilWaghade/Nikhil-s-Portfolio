import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import Hero from "../Pages/Hero";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="#hero" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Nikhil Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a href="#hero" className="hover:text-[#24CFA6]">Home</a>
            <a href="#about" className="hover:text-[#24CFA6]">About Me</a>
            <a href="#projects" className="hover:text-[#24CFA6]">Projects</a>
            <a href="#experience" className="hover:text-[#24CFA6]">Edu & Exp</a>
            <a href="#contact" className="hover:text-[#24CFA6]">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
            <nav className="flex flex-col space-y-4 text-gray-700 dark:text-gray-200 text-sm font-medium">
              <a onClick={toggleMenu} href="#hero" className="hover:text-[#24CFA6]">Home</a>
              <a onClick={toggleMenu} href="#about" className="hover:text-[#24CFA6]">About Me</a>
              <a onClick={toggleMenu} href="#projects" className="hover:text-[#24CFA6]">Projects</a>
              <a onClick={toggleMenu} href="#experience" className="hover:text-[#24CFA6]">Edu & Exp</a>
              <a onClick={toggleMenu} href="#contact" className="hover:text-[#24CFA6]">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Mount Hero section below Navbar, pass menuOpen state */}
      <Hero menuOpen={menuOpen} />
    </>
  );
};

export default Navbar;
