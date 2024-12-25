import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#best-sellers"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#new-arrivals"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#exclusive"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Exclusive Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-sm">
          <p className="mb-2">&copy; 2024 Perfume Brand. All rights reserved.</p>
          <p>
            Made with <span className="text-indigo-400">♥</span> by{" "}
            <a
              href="https://imperiumofficial.vercel.app"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Imperium
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
