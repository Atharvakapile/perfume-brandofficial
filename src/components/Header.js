import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-800 text-white shadow-lg' : 'bg-transparent text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide hover:text-gray-400 transition-colors duration-300">
          Perfume Brand
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-lg font-medium hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-lg font-medium hover:text-gray-400 transition-colors duration-300"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-lg font-medium hover:text-gray-400 transition-colors duration-300"
          >
            About Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none hover:text-gray-400 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#home"
              className="text-lg font-medium hover:text-gray-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#products"
              className="text-lg font-medium hover:text-gray-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="#about"
              className="text-lg font-medium hover:text-gray-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
