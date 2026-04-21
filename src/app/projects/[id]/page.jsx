'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Loader from '../../components/Loader';
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
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const project = projectsData.find((p) => p.id === params.id);

  const images = useMemo(() => {
    if (!project) return [];
    if (Array.isArray(project.images)) return project.images;
    if (project.image) return [project.image];
    return [];
  }, [project]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
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
          isDataLoaded={loadedCount === images.length}
        />
      )}

      <article
        className={`relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-4 md:py-10 ${isLoading ? 'hidden' : ''
          }`}
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary dark:text-secondary hover:text-accent transition-colors mb-8"
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
                  target="_blank"
                  className="text-sm underline hover:text-accent"
                >
                  Github
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="text-sm underline hover:text-accent"
                >
                  Demo
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {/* Tech stack */}
            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-accent text-zinc-600 dark:bg-secondary/10 dark:text-secondary rounded px-2 py-0.5 text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
              {getLocalizedText(project.description, language)}
            </p>

            {/* ✅ CAROUSEL */}
            {images.length > 0 && (
              <div className="relative w-full">
                {/* Imagen */}
                <div className="w-full overflow-hidden rounded-lg bg-black">
                  <Image
                    src={`/${images[currentIndex]}`}
                    alt={`${getLocalizedText(project.name, language)} - ${currentIndex + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    onLoad={handleImageLoad}
                    priority
                    unoptimized
                  />
                </div>

                {/* Flecha izquierda */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-white/10 text-white p-2 rounded-full transition"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    {/* Flecha derecha */}
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-white/10 text-white p-2 rounded-full transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
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