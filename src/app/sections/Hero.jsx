import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    main: (
      <>
        Frontend developer with a design background — I build interfaces that feel
        as good as they work. Currently shipping enterprise SAP portals and modern
        web apps from Buenos Aires.{" "}
        <a
          href="mailto:juancagnoni@gmail.com"
          className="text-primary dark:text-secondary hover:underline transition-colors duration-200"
        >
          Available for remote work.
        </a>
      </>
    ),
  },
  es: {
    main: (
      <>
        Desarrollador frontend con background en diseño — construyo interfaces que
        se sienten tan bien como funcionan. Trabajando en portales SAP enterprise
        y apps web modernas desde Buenos Aires.{" "}
        <a
          href="mailto:juancagnoni@gmail.com"
          className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200"
        >
          Disponible para trabajo remoto.
        </a>
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
