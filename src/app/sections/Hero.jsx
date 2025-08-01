import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    main: (
      <>
        Currently working on <span className="font-medium text-primary dark:text-secondary">SAP BTP and Fiori development</span> at{" "}
        <a
          href="https://dlconsultores.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary dark:text-secondary underline decoration-primary dark:decoration-secondary"
        >
          DL Consultores
        </a>
        . Passionate about mobile development and have delivered several projects using{" "}
        <span className="font-medium text-primary dark:text-secondary">React Native</span>
        . Technical degree in{" "}
        <span className="font-medium text-primary dark:text-secondary">Web Design and Programming</span> at{" "}
        <a
          href="https://davinci.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary dark:text-secondary underline decoration-primary dark:decoration-secondary"
        >
          Escuela Da Vinci
        </a>
        .
      </>
    ),
  },
  es: {
    main: (
      <>
        Actualmente trabajando en{" "}
        <span className="font-medium text-primary dark:text-secondary">desarrollo SAP BTP y Fiori</span> en{" "}
        <a
          href="https://dlconsultores.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary dark:text-secondary underline decoration-primary dark:decoration-secondary"
        >
          DL Consultores
        </a>
        . Apasionado por el desarrollo móvil, con varios proyectos realizados usando{" "}
        <span className="font-medium text-primary dark:text-secondary">React Native</span>
        . Título técnico en{" "}
        <span className="font-medium text-primary dark:text-secondary">Diseño y Programación Web</span> en{" "}
        <a
          href="https://davinci.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary dark:text-secondary underline decoration-primary dark:decoration-secondary"
        >
          Escuela Da Vinci
        </a>
        .
      </>
    ),
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <div className="space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          {t.main}
        </p>
      </div>
    </section>
  );
}
