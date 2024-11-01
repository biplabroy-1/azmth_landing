// components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-purple-600" : "text-gray-600";
  };

  return (
    <>
      {/* Fixed Header Strip */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="font-bold text-xl">AI App</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className={`${isActive(
                  "/features"
                )} hover:text-purple-600 transition-colors`}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className={`${isActive(
                  "/pricing"
                )} hover:text-purple-600 transition-colors`}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className={`${isActive(
                  "/about"
                )} hover:text-purple-600 transition-colors`}
              >
                About
              </Link>
              <Button
                variant="outline"
                className="mr-2"
                onClick={() => navigate("/dashboard")}
              >
                Sign In
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 transition-colors"
              onClick={toggleMenu}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out translate-y-2.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out origin-top md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "64px" }}
      >
        <div className="container mx-auto px-4">
          <div className="py-6 space-y-4">
            <Link
              to="/features"
              className={`block px-3 py-2 rounded-md ${isActive(
                "/features"
              )} hover:text-purple-600 hover:bg-purple-50 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-md ${isActive(
                "/pricing"
              )} hover:text-purple-600 hover:bg-purple-50 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md ${isActive(
                "/about"
              )} hover:text-purple-600 hover:bg-purple-50 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2 pt-2">
              <Button
                variant="outline"
                className="w-full transition-colors"
                onClick={() => {
                  navigate("/dashboard");
                  setIsMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
