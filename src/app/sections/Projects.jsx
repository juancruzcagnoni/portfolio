import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { motion } from "framer-motion"; 
import Image from 'next/image';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) console.log('Error fetching projects:', error);
    else setProjects(data);
  }

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.type === filter
  );

  return (
    <section className="text-white min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-medium tracking-tight mb-8">
          Featured projects,{" "}
          <span className="text-accent">where innovation comes to life</span>
        </h2>
        <p className="text-base text-accent mb-8">
          Each project is a story of challenges overcome and creative solutions realized.
          Explore how I&apos;ve transformed ideas into impactful digital experiences.
        </p>
        <div className="flex justify-center space-x-4 mb-8 mt-24">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-1 rounded-full ${filter === 'all' ? 'bg-accent text-primary' : 'bg-accent bg-gray text-secondary'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('design')} 
            className={`px-4 py-1 rounded-full ${filter === 'design' ? 'bg-accent text-primary' : 'bg-accent bg-gray text-secondary'}`}
          >
            Design
          </button>
          <button 
            onClick={() => setFilter('development')} 
            className={`px-4 py-1 rounded-full ${filter === 'development' ? 'bg-accent text-primary' : 'bg-accent bg-gray text-secondary'}`}
          >
            Development
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
                <span className="absolute bottom-2 right-2 bg-primary text-accent px-3 py-1 rounded-full text-sm">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </span>
              </div>
              <div className="pt-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-md font-medium mb-2">{project.title}</h3>
                  <p className="text-accent mb-4">{project.description}</p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary underline hover:text-accent transition-colors duration-300 self-start mt-2"
                >
                  View project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-base text-accent mt-12">
          Interested in collaborating on a similar project? 
          <a href="#contact" className="text-secondary underline ml-1 hover:text-accent transition-colors duration-300">
            Get in touch
          </a> and let&apos;s bring your digital vision to life.
        </p>
      </div>
    </section>
  );
}
