import React from "react";

export default function Hero() {
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%] flex justify-between mt-8 md:mt-16 mb-16">
      <div className="space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          I'm from San Antonio de Areco, Buenos Aires, Argentina. I studied <span className="font-medium text-primary dark:text-secondary">Web Design and Programming</span> at <a href="https://davinci.edu.ar/" target="_blank" className="font-medium text-primary dark:text-secondary decoration-primary dark:decoration-secondary underline">Escuela Da Vinci</a>, a three-year technical degree.
        </p>

        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          I enjoy <span className="font-medium text-primary dark:text-secondary">playing football</span>.
        </p>

        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          In November 2023, I joined <a href="https://dlconsultores.com.ar/" target="_blank" className="font-medium text-primary dark:text-secondary decoration-primary dark:decoration-secondary underline">DL Consultores</a> as an <span className="font-medium text-primary dark:text-secondary">SAP BTP/Fiori developer</span>.
        </p>
      </div>
    </section>
  );
}
