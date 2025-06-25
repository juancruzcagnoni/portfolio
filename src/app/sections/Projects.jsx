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
    <section className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] py-8 md:py-10">
      <h2 className="font-instrument-serif text-2xl md:text-3xl text-primary dark:text-secondary">
        Projects <span className="text-zinc-500 dark:text-zinc-400">(coming soon)</span>
      </h2>
    </section>
  );
}