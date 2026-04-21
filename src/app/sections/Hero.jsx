import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    main: (
      <>
        Currently working as SAP Fiori Developer at DL Consultores.
        Developing independent projects with React.js.
        Technical degree in Web Design and Development from Escuela Da Vinci.
      </>
    ),
    contact: "Reach me out 🡥"
  },
  es: {
    main: (
      <>
        Actualmente trabajando como SAP Fiori Developer en DL Consultores.
        Desarrollando proyectos de manera independiente con React.js.
        Título técnico en Diseño y Programación Web en Escuela Da Vinci.
      </>
    ),
    contact: "Contactame 🡥"
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <div className="space-y-4 md:space-y-6">
        <h1 className="tracking-tight text-primary dark:text-secondary text-4xl font-instrument-serif">Juan Cruz Cagnoni</h1>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          {t.main}
        </p>
        <button>
          <a href="mailto:juancagnoni@gmail.com" target="_blank" className="font-instrument-serif hover:underline">{t.contact}</a>
        </button>
      </div>
    </section>
  );
}
