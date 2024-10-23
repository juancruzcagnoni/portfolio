import React from "react";

export default function Hero() {
  return (
    <section className="text-white flex justify-center px-4 sm:px-6 lg:px-8 md:py-16 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-medium tracking-tight mb-8">
          Hey, I&apos;m Juan Cruz Cagnoni,{" "}
          <span className="text-accent">where code meets design</span>
        </h1>
        <p className="text-base text-accent mb-4">
          Blending the precision of a developer with the creativity of a designer, 
          I craft digital solutions that are both functional and beautiful. 
          Currently, I&apos;m working at DL Consultores as a Fiori/UI5 developer.
        </p>
        <p className="text-base text-accent mb-4">
          Based in Buenos Aires, Argentina, I&apos;m always up for 
          a good coffee and an even better conversation about tech, design, or anything 
          in between. Let's connect and explore how we can create something amazing together!
        </p>
        <p className="text-base text-accent mb-4">
          Curious about my work? Check out my digital footprint on{" "}
          <a className="text-secondary underline" href="">
            LinkedIn
          </a>
          ,{" "}
          <a className="text-secondary underline" href="">
            Dribbble
          </a>{" "}
          and{" "}
          <a className="text-secondary underline" href="">
            Github
          </a>
          . Each platform showcases a different facet of my professional journey.
        </p>
        <p className="text-base text-accent mb-12">
          Want the full story? Dive into my career highlights and projects{" "}
          <a className="text-secondary underline" href="">
            right here
          </a>
          . It's a journey you won't want to miss!
        </p>
        <a
          href="#contact"
          className="underline rounded-full text-base hover:text-accent transition-colors duration-300"
        >
          Ready to collaborate? Let's chat! →
        </a>
      </div>
    </section>
  );
}
