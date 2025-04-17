'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Projects({ onLoad }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setProjects(data);
      } catch (error) {
        console.error('Error details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
        onLoad && onLoad();
      }
    };

    fetchProjects();
  }, [onLoad]);

  if (loading || error) {
    return null;
  }

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%]">
      <h2 className="text-base md:text-lg font-bold text-primary dark:text-secondary mb-6">
        Projects
      </h2>
      
      <div className="space-y-8">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="space-y-2">
              <Link 
                href={`/projects/${project._id}`}
                className="group block"
              >
                <h3 className="underline text-base md:text-lg font-medium text-primary dark:text-secondary group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
              </Link>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
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