import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WaitlistModal from "./WaitlistModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-[#00add1]" : "text-gray-600";
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#052127] border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center justify-center space-x-2">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1641 1H18.9081V19H15.1461L15.0021 16.39C14.4741 17.314 13.7601 18.058 12.8601 18.622C11.9601 19.186 10.8981 19.468 9.67408 19.468C8.35408 19.468 7.11208 19.222 5.94808 18.73C4.78408 18.226 3.75808 17.53 2.87008 16.642C1.99408 15.754 1.31008 14.734 0.818078 13.582C0.326078 12.418 0.0800781 11.17 0.0800781 9.838C0.0800781 8.554 0.320078 7.348 0.800078 6.22C1.28008 5.08 1.94608 4.084 2.79808 3.232C3.65008 2.38 4.63408 1.714 5.75008 1.234C6.87808 0.742002 8.08408 0.496002 9.36808 0.496002C10.6761 0.496002 11.8281 0.796002 12.8241 1.396C13.8321 1.984 14.6661 2.74 15.3261 3.664L15.1641 1ZM9.58408 15.85C10.6401 15.85 11.5641 15.592 12.3561 15.076C13.1481 14.548 13.7601 13.84 14.1921 12.952C14.6361 12.064 14.8581 11.08 14.8581 10C14.8581 8.908 14.6361 7.918 14.1921 7.03C13.7481 6.142 13.1301 5.44 12.3381 4.924C11.5581 4.396 10.6401 4.132 9.58408 4.132C8.54008 4.132 7.58608 4.396 6.72208 4.924C5.85808 5.452 5.17408 6.16 4.67008 7.048C4.16608 7.936 3.91408 8.92 3.91408 10C3.91408 11.092 4.17208 12.082 4.68808 12.97C5.21608 13.846 5.90608 14.548 6.75808 15.076C7.62208 15.592 8.56408 15.85 9.58408 15.85Z"
                  fill="white"
                />
              </svg>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isActive("/")} hover:text-[#00add1] transition-colors`}>
                Home
              </Link>
              <Link to="/pricing" className={`${isActive("/pricing")} hover:text-[#00add1] transition-colors`}>
                Pricing
              </Link>
              <Link to="/future" className={`${isActive("/future")} hover:text-[#00add1] transition-colors`}>
                Future
              </Link>
              <Link to="/innovations" className={`${isActive("/innovations")} hover:text-[#00add1] transition-colors`}>
                Innovations
              </Link>
              <Link to="/about" className={`${isActive("/about")} hover:text-[#00add1] transition-colors`}>
                About
              </Link>

              <button
                className="px-4 py-2 rounded-md border border-gray-300 text-white hover:bg-gray-700 transition-colors"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>

              <button 
                className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#003e4b] to-[#00ff99] hover:opacity-90 transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                Join Waitlist
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-white transition-colors"
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

      <div className="h-16" />

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed left-0 right-0 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out origin-top md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "64px" }}
      >
        <div className="container mx-auto px-4">
          <div className="py-6 space-y-4">
            <Link
              to="/"
              className="block text-white px-3 py-2 rounded-md hover:text-white hover:bg-purple-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className="block text-white px-3 py-2 rounded-md hover:text-white hover:bg-purple-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 text-white rounded-md hover:text-white hover:bg-purple-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Future
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 text-white rounded-md hover:text-white hover:bg-purple-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Innovations
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 text-white rounded-md hover:text-white hover:bg-purple-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <div className="space-y-2 pt-2">
              <button
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-white hover:bg-gray-700 transition-colors"
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
              >
                Log in
              </button>
              <button 
                className="w-full px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#003e4b] to-[#00ff99] hover:opacity-90 transition-colors"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;