import React from "react";

export default function Hero() {
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <div className="space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m from San Antonio de Areco, Buenos Aires, Argentina. I hold a three-year technical degree in <span className="font-medium text-primary dark:text-secondary">Web Design and Programming</span> from <a href="https://davinci.edu.ar/" target="_blank" className="font-medium text-primary dark:text-secondary decoration-primary dark:decoration-secondary underline">Escuela Da Vinci</a>, where I developed a strong foundation in front-end and back-end technologies.
        </p>

        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          Passionate about technology and problem-solving, now I&apos;m working on SAP BTP and Fiori development, creating user-friendly and efficient business applications. In November 2023, I joined  <a href="https://dlconsultores.com.ar/" target="_blank" className="font-medium text-primary dark:text-secondary decoration-primary dark:decoration-secondary underline">DL Consultores</a> as an <span className="font-medium text-primary dark:text-secondary">SAP BTP/Fiori developer</span>, where I work on designing and implementing modern enterprise solutions.
        </p>

        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          Beyond coding, I enjoy <span className="font-medium text-primary dark:text-secondary">playing football</span>, a sport that has taught me teamwork, strategy, and perseverance—qualities that I bring to my professional projects as well.
        </p>
      </div>
    </section>
  );
}
