import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "USER GUIDE", path: "/user-guide" },
    { name: "PRIVACY POLICY", path: "/privacy-policy" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT US", path: "/contact" },
    //  { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-white  border-b border-white fixed w-full z-60 top-0">
      <div className="max-w-7xl mx-auto  max-sm:px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:p-0 max-sm:p-3  max-sm:h-30 max-md:h-20 lg:h-22.5">
          {/* LEFT: Logo */}
          <div className="flex items-center ">
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <img
                src={logo}
                alt="Review.Law Logo"
                className="lg:h-13 h-8 max-sm:h-10 max-md:h-15  w-auto lg:w-50"
              />
            </NavLink>
          </div>

         

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1  ">
            <div className="flex items-center ml-11 pt-1   xl:space-x-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative lg:px-1 lg:py-3 lg:mt-2  lg:text-[15px] md:text-sm  gresco-semibold      duration-300 inline-block  ${
                      isActive
                        ? "text-green-600 after:scale-x-160"
                        : "text-gray-700 hover:text-green-600"
                    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-green-600 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-110 ${
                      isActive ? "after:scale-x-100" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* RIGHT: My Account Button - Desktop */}
          <div className="hidden lg:flex mr-14">
            <NavLink
              to="/login"
              className="flex items-center font-robotos lg:px-7.5 lg:py-3 mt-1 md:px-13 md:py-2.5 bg-[#39138F] text-white lg:text-[14px] md:text-base  lg:font-normal   rounded hover:bg-green-700 duration-300 "
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {/* SVG Icon on the left */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                stroke=" white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
              </svg>
              MY ACCOUNT
            </NavLink>
          </div>

          {/* Tablet Menu (Medium screens) */}
          <div className="hidden md:flex    lg:hidden items-center">
  <div className="flex items-center md:mr-0 space-x-1 md:space-x-2">
    {/* Show shortened versions of menu items for tablet */}
    <div className="md:mr-30 flex space-x-"> 
    <NavLink
      to="/"
      className={({ isActive }) =>
        `px-2 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }`
      }
    >
      HOME
    </NavLink>
    
    <NavLink
      to="/user-guide"
      className={({ isActive }) =>
        `px-2 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }`
      }
    >
      GUIDE
    </NavLink>
    
    <NavLink
      to="/privacy-policy"
      className={({ isActive }) =>
        `px-2 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }`
      }
    >
      PRIVACY
    </NavLink>
    
    {/* Blog and Contact - show full or shortened based on available space */}
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        `px-2 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }`
      }
    >
      BLOG
    </NavLink>
    
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `px-2 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-700 hover:text-green-600"
        }`
      }
    >
      CONTACT
    </NavLink>
    </div>
    {/* My Account button with responsive icon/text */}
    <NavLink
      to="/login"
      className="flex items-center px-3 py-2 bg-[#39138F] text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-200 whitespace-nowrap"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1.5"
      >
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
      </svg>
      Account
    </NavLink>
  </div>
</div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center  md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center  justify-center   p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset bg-blue-900 focus:ring-blue-900 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-sm font-normal transition-colors duration-200 ${
                    isActive
                      ? "text-green-700  border-green-300 bg-green-50" // ACTIVE STATE
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700  hover:border-green-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile My Account Button */}
            <div className="pt-2">
              <NavLink
                to="/account"
                onClick={closeMenu}
                className="block w-full px-3 py-3 rounded-md text-base font-medium bg-[#39138F] text-white text-center hover:bg-green-700 transition-colors duration-200 shadow-md"
              >
                My Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;   
