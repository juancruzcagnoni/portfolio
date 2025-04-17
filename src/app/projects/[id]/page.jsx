'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Loader from '../../components/Loader';
import Tooltip from '../../components/ui/Tooltip';

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
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </Link>

        <div className="space-y-4 flex items-center justify-between gap-4 mb-6">
          <h1 className="text-base md:text-lg font-bold text-primary dark:text-secondary">
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
      </article>
    </>
  );
} 