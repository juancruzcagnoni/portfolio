import React from "react";

export default function Hero() {
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%] flex justify-between mt-16 md:mt-24 mb-12">
      <div className="space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-primary dark:text-secondary">
          I&apos;m from San Antonio de Areco, Buenos Aires, Argentina. I studied Web Design and Programming at Escuela Da Vinci, a three-year technical degree.
        </p>

        <p className="text-sm md:text-base text-primary dark:text-secondary">
          I enjoy playing football.
        </p>

        <p className="text-sm md:text-base text-primary dark:text-secondary">
          In November 2023, I joined DL Consultores as an SAP BTP/Fiori developer.
        </p>

      </div>
    </section>
  );
}
