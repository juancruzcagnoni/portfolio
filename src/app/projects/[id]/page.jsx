'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Loader from '../../components/Loader';
import Tooltip from '../../components/ui/Tooltip';
import { motion } from 'framer-motion';

export default function ProjectDetail({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (loading) {
    return null;
  }

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
            <h1 className="font-instrument-serif text-xl md:text-3xl text-primary dark:text-secondary">
              {project.name}
            </h1>

            <div className="flex items-center gap-4">
              {project.repositoryUrl && (
                <Tooltip content="View source code">
                  <Link
                    href={project.repositoryUrl}
                    className="text-sm underline text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                    target="_blank"
                  >
                    Repository
                  </Link>
                </Tooltip>
              )}
              {project.liveDemoUrl && (
                <Tooltip content="View live project">
                  <Link
                    href={project.liveDemoUrl}
                    className="text-sm underline text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                    target="_blank"
                  >
                    Live demo
                  </Link>
                </Tooltip>
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
                {project.status && (
                  <span
                    className={`inline-block px-2 py-0.5 text-xs md:text-sm font-medium rounded transition-colors duration-300
                      ${project.status === 'C'
                        ? 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800'
                        : project.status === 'I'
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-200 dark:text-orange-800'
                        : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200'}
                    `}
                  >
                    {project.status === 'C' ? 'Completed' : project.status === 'I' ? 'In progress' : 'Unknown'}
                  </span>
                )}
              </div>
            )}
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            {project.image && (
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto rounded-lg"
                  onLoad={handleImageLoad}
                />
              </div>
            )}

            {project.longDescription && (
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                {project.longDescription}
              </p>
            )}
          </div>
        </motion.div>
      </article>
    </>
  );
}