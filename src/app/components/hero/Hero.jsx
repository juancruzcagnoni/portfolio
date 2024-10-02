import React from "react";
import StatusIndicator from "./StatusIndicator";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-11/12 md:w-2/5 m-auto pt-6 md:pt-20">
      <div className="text-left">
        <div className="flex flex-row justify-between items-start mb-16 md:mb-20">
          <div className="flex mb-5 md:mb-0">
            <Image
              src="/icon.jpg"
              alt="Juan Cruz"
              width={56}
              height={56}
              className="rounded-lg mr-3"
            />
            <div className="flex flex-col">
              <span className="text-secondary text-base">
                Juan Cruz Cagnoni
              </span>
              <span className="text-accent text-sm">Developer & Designer</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-2">
              <StatusIndicator />
            </div>
            <span className="text-secondary font-serif text-lg">
              Open to work
            </span>
          </div>
        </div>

        <div className="mb-14">
          <h1 className="text-secondary text-3xl md:text-4xl font-serif mb-4">
            Hey, Im Juan Cruz. <br />
            <span className="text-accent">
              Frontend Developer & UX/UI Designer.
            </span>
          </h1>
          <p className="text-base font-sans text-accent">
            Conceptualizing our intelligent, frictionless future. A high school
            student by day, designer, engineer, and dreamer by night. Also,
            building cool gadgets in spare time.
          </p>
        </div>

        <div className="flex flex-row justify-between pb-10 border-b border-accent"> 
          <a
            href="mailto:juancagnoni@gmail.com"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
          >
            Copy Email
          </a>
          <a
            href="https://github.com/juancruzcagnoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/juancagnoni"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
          >
            Dribbble
          </a>
          <a
            href="https://www.linkedin.com/in/juancruzcagnoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
