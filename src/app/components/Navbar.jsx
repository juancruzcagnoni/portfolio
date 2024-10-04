"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {showNavbar && (
        <motion.nav
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-nav backdrop-blur-md rounded-full shadow-lg p-3 w-max z-50"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <ul className="flex items-center justify-between space-x-6 text-white font-serif text-lg">
            <li className="pl-3">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-gray-300 transition duration-300 text-lg"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("work")}
                className="hover:text-gray-300 transition duration-300 text-lg"
              >
                Work
              </button>
            </li>
            <li className="bg-primary px-4 py-2 rounded-full">
              <a href="mailto:juancagnoni@gmail.com" className="hover:text-gray-300 transition duration-300 text-lg">
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
