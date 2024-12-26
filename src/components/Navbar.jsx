import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WaitlistModal from "./WaitlistModal";
import InteractiveHoverButton from "../components/ui/interactive-hover-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-[#00add1]" : "text-gray-600";

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/pricing", label: "Pricing" },
    { path: "/future", label: "Roadmap" },

  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#052127] border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-white text-2xl">
              azmth
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${isActive(path)} hover:text-[#00add1] transition-colors duration-200`}
                >
                  {label}
                </Link>
              ))}
              
              <InteractiveHoverButton
                className="bg-gradient-to-r from-[#003e4b] to-[#00ff99] w-40 text-base"
                text="Join Waitlist"
                onClick={() => window.open("https://forms.visme.co/formsPlayer/dm4rnj6e-azmth-waitlist")}
              />
            </div>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                {[1, 2.5, 4].map((translateY, i) => (
                  <span
                    key={i}
                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen
                        ? i === 0 ? "rotate-45 translate-y-2.5" 
                        : i === 1 ? "opacity-0"
                        : "-rotate-45 translate-y-2.5"
                        : `translate-y-${translateY}`
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className="h-16" />

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed z-[99] left-0 top-0 right-0 bg-[#052127]/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="block text-white px-3 py-2 rounded-md hover:text-black hover:bg-white/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          
          <button
            className="w-full px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#003e4b] to-[#00ff99] hover:opacity-90 transition-colors"
            onClick={() => window.open("https://forms.visme.co/formsPlayer/dm4rnj6e-azmth-waitlist")}
          >
            Join Waitlist
          </button>
        </div>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;