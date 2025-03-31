'use client';

import { useEffect, useState } from 'react';

export default function Projects({ onLoad }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        console.log('Fetching projects from API...');
        const response = await fetch('/api/projects', {
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json();
        console.log('API Response:', data);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(data)}`);
        }

        if (data.error) {
          throw new Error(`API error: ${data.error}, details: ${data.details}`);
        }

        setProjects(data);
        onLoad && onLoad();
      } catch (error) {
        console.error('Error details:', error);
        setError(error.message);
        onLoad && onLoad();
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [onLoad]);

  if (error) {
    return (
      <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%] mb-24 md:mb-32">
        <h2 className="text-base md:text-lg font-bold text-primary dark:text-secondary mb-6">
          Projects
        </h2>
        <div className="text-red-500">Error loading projects: {error}</div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%]">
        <h2 className="text-base md:text-lg font-bold text-primary dark:text-secondary mb-6">
          Projects
        </h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%]">
      <h2 className="text-base md:text-lg font-bold text-primary dark:text-secondary mb-6">
        Projects
      </h2>
      
      <div className="space-y-8">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="space-y-2">
              <h3 className="text-base md:text-lg font-medium text-primary dark:text-secondary">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                {project.subtitle}
              </p>
            </div>
          ))
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">No projects found.</p>
        )}
      </div>
    </section>
  );
} 