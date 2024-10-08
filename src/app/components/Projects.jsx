import React, { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import Image from "next/image";
import Link from "next/link"; 
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
        setVisible(Array(data.length).fill(false)); 
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisible((prevVisible) => {
              const newVisible = [...prevVisible];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".project-card");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [projects]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div ref={sectionRef} className="py-16 w-11/12 md:w-7/12 m-auto">
      <motion.h2
        className="font-semibold tracking-tight text-secondary text-center text-2xl sm:text-3xl"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        These are my selected works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 lg:mt-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card bg-primary text-white rounded-lg"
            data-index={index}
            initial="hidden"
            animate={visible[index] ? "visible" : "hidden"}
            variants={itemVariants}
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
              <h3 className="  text-xl">{project.title}</h3>
              <Link
                className="  text-base text-accent underline"
                href={`/projects/${project.id}`} // Enlace dinámico al detalle del proyecto
              >
                View details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
