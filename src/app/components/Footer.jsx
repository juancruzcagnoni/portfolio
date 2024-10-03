import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-24 py-8 md:py-12">
      <div className="flex flex-col md:flex-row mb-6 md:mb-0">
        <div className="flex flex-col mb-4 md:mb-0 md:mr-5">
          <span className="text-accent font-serif text-base">Work with me</span>
          <a
            href="mailto:juancagnoni@gmail.com"
            className="text-secondary text-sm"
          >
            juancagnoni@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-accent font-serif text-base">Follow me</span>
          <div className="flex flex-wrap">
            <a
              href="https://dribbble.com/juancagnoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-sm mr-4"
            >
              Dribbble
            </a>
            <a
              href="https://www.linkedin.com/in/juancruzcagnoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-sm mr-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/juancruzcagnoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-sm mr-4"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 md:mt-0">
        <Image
          src="/icon.jpg"
          alt="Juan Cruz"
          width={46}
          height={46}
          className="rounded-lg mr-3"
        />
        <div className="flex flex-col">
          <span className="text-secondary text-base">Juan Cruz Cagnoni</span>
          <span className="text-accent text-sm">Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
