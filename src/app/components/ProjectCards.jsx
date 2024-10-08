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
    <section className="transition-all duration-500 w-11/12 md:w-7/12 m-auto py-12 md:py-24">
      <div className="container mx-auto grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between md:items-center">
        {projects.map((project) => (
          <div
            className="flex flex-col items-center mb-4 md:mb-0"
            key={project.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`relative w-40 h-40 sm:w-48 sm:h-48 md:w-40 md:h-40 bg-white rounded-lg overflow-hidden transition-transform duration-500`}
              style={{
                transform: `rotate(0deg)`,
                ...(typeof window !== "undefined" && window.innerWidth >= 768
                  ? {
                      transform: isHovered
                        ? "rotate(0deg)" 
                        : `rotate(${getRandomRotation()}deg)`, 
                    }
                  : {}),
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 md:mt-4">
              <h3 className="  text-secondary text-base md:text-lg text-center">
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
