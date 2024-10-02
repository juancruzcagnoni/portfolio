"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const getRandomRotation = () => {
    const min = -6;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <section
      className="py-16 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto relative flex justify-center items-center transition-all duration-500">
        {projects.map((project) => (
          <div
            className="flex flex-col items-center"
            key={project.id}
            style={{
              margin: isHovered ? '0 10px' : '0px', // Ajusta el margen según el estado
              transition: 'margin 0.5s ease', // Transición suave para el margen
            }}
          >
            <div
              className="relative w-64 h-64 bg-white rounded-lg overflow-hidden transform transition-transform duration-500"
              style={{
                transform: isHovered
                  ? "rotate(0deg)"
                  : `rotate(${getRandomRotation()}deg)`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-secondary text-lg">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
