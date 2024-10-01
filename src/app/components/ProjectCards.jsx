"use client"; // Asegúrate de que el componente se renderice en el cliente

import React, { useState } from "react";

const ProjectCards = () => {
  const [isHovered, setIsHovered] = useState(false);

  const getRandomRotation = () => {
    const min = -10;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A cool project about design.",
      image: "/project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "An innovative frontend project.",
      image: "/project2.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A UX/UI focused project.",
      image: "/project3.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      description: "A high-performing app.",
      image: "/project4.jpg",
    },
  ];

  return (
    <section 
      className="py-16 transition-all duration-500 cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto relative flex justify-center items-center space-x-[-10px] transition-all duration-500"> 
        {projects.map((project) => (
          <div className="flex flex-col items-center" key={project.id}>
            <div
              className="relative w-64 h-64 bg-white rounded-lg overflow-hidden transform transition-transform duration-500"
              style={{
                transform: isHovered ? 'rotate(0deg)' : `rotate(${getRandomRotation()}deg)`,
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
