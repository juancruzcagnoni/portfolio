'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItems = () => (
    <>
      <li className="list-none">
        <Link href="/" className="text-black text-base px-2.5">
          About
        </Link>
      </li>
      <li className="list-none">
        <Link href="/" className="text-black text-base px-2.5">
          Works
        </Link>
      </li>
      <li className="border-l border-gray-300 h-6 hidden md:block"></li>
      <li className="list-none">
        <Link href="/" className="text-black text-base px-2.5">
          Dribbble
        </Link>
      </li>
      <li className="list-none">
        <Link href="/" className="text-black text-base px-2.5">
          LinkedIn
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-800 p-3 rounded-full w-10/12 mx-auto mt-4 bg-white shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/Logo.svg" 
              alt="Logo"
              width={50} 
              height={50}
            />
          </Link>
          <ul className="hidden md:flex space-x-4 ml-4">
            <NavItems />
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn">
            Get in touch
          </button>
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full bg-white shadow-lg rounded-b-lg mt-3 py-2 z-10 md:hidden rounded-lg h-max w-max">
          <nav className="flex flex-col space-y-2 items-end p-5">
            <NavItems />
          </nav>
        </div>
      )}
    </nav>
  );
}