"use client";

import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "../../components/Loader"; 

const ProjectDetails = ({ params }) => {
  const { id } = params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching project:", error);
      } else {
        setProject(data);
      }
    };

    if (id) fetchProjectDetails();
  }, [id]);

  if (!project) return <Loader />;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      <motion.h1
        className="text-secondary text-3xl md:text-4xl   mb-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {project.title}
      </motion.h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
