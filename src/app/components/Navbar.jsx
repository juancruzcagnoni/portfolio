"use client"; 

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-nav backdrop-blur-md rounded-full shadow-lg p-3 w-max z-50">
      <ul className="flex items-center justify-between space-x-6 text-white font-serif text-lg">
        <li className="pl-3">
          <Link href="/about">
            <span className="hover:text-gray-300 transition duration-300 text-lg">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <span className="hover:text-gray-300 transition duration-300 text-lg">
              Work
            </span>
          </Link>
        </li>
        <li className="bg-primary px-4 py-2 rounded-full">
          <Link href="/contact">
            <span className="hover:text-gray-300 transition duration-300 text-lg">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
