'use client';
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    title: 'Projects',
    soon: '(coming soon)'
  },
  es: {
    title: 'Proyectos',
    soon: '(próximamente)'
  }
};

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <h2 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary">
        {t.title} <span className="text-zinc-500 dark:text-zinc-400">{t.soon}</span>
      </h2>
    </section>
  );
}