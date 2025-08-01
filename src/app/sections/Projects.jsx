'use client';

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import projectsData from "../data/projects";
import { getLocalizedText } from "../context/localization";

const translations = {
  en: {
    title: 'Projects',
    soon: '(coming soon)',
    noProjects: 'Coming soon.'
  },
  es: {
    title: 'Proyectos',
    soon: '(próximamente)',
    noProjects: 'Próximamente.'
  }
};

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [mounted, setMounted] = useState(false);

  const mainProjects = projectsData
    .filter((project) => project.type === "project")
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
      {mainProjects.length === 0 ? (
        <div className="text-zinc-500 dark:text-zinc-400">{t.noProjects}</div>
      ) : (
        <div className="grid gap-6">
          {mainProjects.map((project) => (
            <div key={project.id}>
              <a
                href={`/projects/${project.id}`}
                className="font-semibold text-base text-primary dark:text-secondary mb-1 hover:underline hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                {getLocalizedText(project.name, language)}
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
