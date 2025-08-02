'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Loader from '../../components/Loader';
import Tooltip from '../../components/ui/Tooltip';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

import { getLocalizedText } from '../../context/localization';
import projectsData from '../../data/projects';

const translations = {
  en: {
    repository: 'Repository',
    liveDemo: 'Live demo',
  },
  es: {
    repository: 'Repositorio',
    liveDemo: 'Demo',
  },
};

export default function ProjectDetail({ params }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const project = projectsData.find((p) => p.id === params.id);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (!project) {
    return (
      <div className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] mt-8 md:mt-16">
        <p className="text-primary dark:text-secondary">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <Loader
          onLoadingComplete={handleLoaderComplete}
          isDataLoaded={imageLoaded}
        />
      )}

      <article className={`relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-4 md:py-10 ${isLoading ? 'hidden' : ''}`}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Link>

          <div className="flex items-center justify-between gap-4 mb-6">
            <h1 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary">
              {getLocalizedText(project.name, language)}
            </h1>

            <div className="flex items-center gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  className="inline-flex items-center gap-1 text-sm underline text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                  target="_blank"
                >
                  Github
                  <svg
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              )}
              {project.demo && project.demo !== '' && (
                <Link
                  href={project.demo}
                  className="inline-flex items-center gap-1 text-sm underline text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                  target="_blank"
                >
                  Demo
                  <svg
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              )}
              {project.web && project.web !== '' && (
                <Link
                  href={project.web}
                  className="inline-flex items-center gap-1 text-sm underline text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                  target="_blank"
                >
                  Web
                  <svg
                    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {project.techStack && Array.isArray(project.techStack) && project.techStack.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 w-full">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-accent text-zinc-600 dark:text-zinc-400 dark:bg-secondary/10 dark:text-secondary rounded px-2 py-0.5 text-xs md:text-sm font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
              {getLocalizedText(project.description, language)}
            </p>

            {project.image && project.image !== '' && (
              <div className="relative w-full">
                <img
                  src={`/${project.image}`}
                  alt={getLocalizedText(project.name, language)}
                  className="w-full h-auto rounded-lg"
                  onLoad={handleImageLoad}
                />
              </div>
            )}

            {project.longDescription && (
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                {getLocalizedText(project.longDescription, language)}
              </p>
            )}
          </div>
        </motion.div>
      </article>
    </>
  );
}
