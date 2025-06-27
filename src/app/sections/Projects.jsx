'use client';
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

const translations = {
  en: {
    title: 'Projects',
    soon: '(coming soon)',
    noProjects: 'No projects found.'
  },
  es: {
    title: 'Proyectos',
    soon: '(próximamente)',
    noProjects: 'No se encontraron proyectos.'
  }
};

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Error fetching projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <h2 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-6">
        {t.title}
      </h2>
      {loading ? (
        <div className="text-zinc-500 dark:text-zinc-400">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : projects.length === 0 ? (
        <div className="text-zinc-500 dark:text-zinc-400">{t.noProjects}</div>
      ) : (
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project._id}>
              <a
                href={`/projects/${project._id}`}
                className="font-semibold text-base text-primary dark:text-secondary mb-1 hover:underline hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                {project.name}
              </a>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}