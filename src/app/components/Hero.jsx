import React from "react";
import StatusIndicator from "./StatusIndicator";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen text-white w-11/12 md:w-2/5 m-auto pt-6 md:pt-20">
      <div className="text-left">
        <div className="flex flex-row justify-between mb-20">
          <div className="flex mb-5 md:mb-0">
            <Image
              src="/icon.jpg"
              alt="Juan Cruz"
              width={56}
              height={56}
              className="rounded-lg mr-5"
            />
            <div className="flex flex-col">
              <span className="text-md md:text-lg">Juan Cruz Cagnoni</span>
              <span className="text-accent text-sm md:text-base">
                Developer & Designer
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-2">
              <StatusIndicator />
            </div>
            <span className="font-serif text-lg md:text-xl">Open to work</span>
          </div>
        </div>

        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Hey, I'm Juan Cruz. <br />
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

        <div className="flex flex-row justify-between">
          <a
            href="mailto:juancagnoni@gmail.com"
            className="underline font-serif text-accent text-base text-lg mb-2 md:mb-0"
          >
            Copy Email
          </a>
          <a
            href="https://github.com/juancruzcagnoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-base text-lg mb-2 md:mb-0"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/juancagnoni"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-base text-lg mb-2 md:mb-0"
          >
            Dribbble
          </a>
          <a
            href="https://www.linkedin.com/in/juancruzcagnoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-base text-lg mb-2 md:mb-0"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
