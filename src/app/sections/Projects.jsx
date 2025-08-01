'use client';

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import projectsData from "../data/projects";
import { getLocalizedText } from "../context/localization";
import Image from "next/image";

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
      {mainProjects.map((project) => (
        <a
          key={project.id}
          href={`/projects/${project.id}`}
          className="
    flex items-start flex-col md:flex-row 
    gap-3 md:gap-4
    bg-zinc-900/50 hover:bg-zinc-900/80 
    border border-zinc-800 rounded-xl 
    overflow-hidden transition group shadow-sm hover:shadow-lg 
    cursor-pointer p-3 md:p-4
  "
        >
          {/* Imagen */}
          <div className="
    w-full md:w-40 
    h-65 md:h-40
    flex-shrink-0 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 
    flex items-center justify-center mb-2 md:mb-0
  ">
            {project.image ? (
              <Image
                src={`/${project.image}`}
                alt={getLocalizedText(project.name, language)}
                width={200}
                height={120}
                className="object-cover object-center w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-zinc-700" />
            )}
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 font-semibold text-lg text-primary dark:text-secondary group-hover:underline mb-2">
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
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              {getLocalizedText(project.description, language)}
            </p>
          </div>
        </a>
      ))}
    </section>
  );
}
