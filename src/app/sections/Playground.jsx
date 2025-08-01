'use client';

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import projectsData from "../data/projects";
import { getLocalizedText } from "../context/localization";

const translations = {
  en: {
    title: 'Playground',
    soon: '(coming soon)',
    noProjects: 'No lab projects found.'
  },
  es: {
    title: 'Playground',
    soon: '(próximamente)',
    noProjects: 'No se encontraron proyectos de laboratorio.'
  }
};

export default function Lab() {
  const { language } = useLanguage();
  const t = translations[language];
  const [mounted, setMounted] = useState(false);

  const labProjects = projectsData
    .filter((project) => project.type === "playground")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <h2 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-6">
        {t.title}
      </h2>
      {labProjects.length === 0 ? (
        <div className="text-zinc-500 dark:text-zinc-400">{t.noProjects}</div>
      ) : (
        <div className="grid gap-6">
          {labProjects.map((project) => (
            <div key={project.id}>
              <a
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-1 font-semibold text-base text-primary dark:text-secondary mb-1 hover:underline hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                {getLocalizedText(project.name, language)}
                <svg
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              {project.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  {getLocalizedText(project.description, language)}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
