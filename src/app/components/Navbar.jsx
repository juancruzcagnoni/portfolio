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
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-full py-3 px-6 w-max z-50 bg-gray"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <ul className="flex items-center justify-between space-x-6 text-secondary text-lg">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-base"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("work")}
                className="text-base"
              >
                Work
              </button>
            </li>
            <li>
              <a href="mailto:juancagnoni@gmail.com" className="text-base">
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
