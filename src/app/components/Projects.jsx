"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Image from "next/image"; // Importa el componente Image de Next.js

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="py-16 w-11/12 md:w-7/12 m-auto">
      <h2 className="font-serif text-secondary text-center text-2xl sm:text-3xl">
        These are my selected works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-primary text-white rounded-lg shadow-lg"
          >
            {project.image && (
              <Image
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={600} 
                className="object-cover h-64 w-full rounded-md mb-4"
              />
            )}
            <div className="flex justify-between items-end">
              <h3 className="font-serif text-xl">{project.title}</h3>
              <a
                href={project.link}
                className="font-serif text-base text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
