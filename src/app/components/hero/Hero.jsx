import React from "react";
import StatusIndicator from "./StatusIndicator";
import Image from "next/image";
import { motion } from "framer-motion"; // Importar Framer Motion

const Hero = () => {
  // Variantes para las animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <motion.section
      className="w-11/12 md:w-2/5 m-auto pt-6 md:pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-left">
        <motion.div
          className="flex flex-row justify-between items-start mb-16 md:mb-20"
          variants={itemVariants}
        >
          <div className="flex mb-5 md:mb-0">
            <Image
              src="/icon.jpg"
              alt="Juan Cruz"
              width={56}
              height={56}
              className="rounded-lg mr-3"
            />
            <motion.div className="flex flex-col" variants={itemVariants}>
              <span className="text-secondary text-base">
                Juan Cruz Cagnoni
              </span>
              <span className="text-accent text-sm">Developer & Designer</span>
            </motion.div>
          </div>

          <div className="flex items-center">
            <div className="mr-2">
              <StatusIndicator />
            </div>
            <motion.span
              className="text-secondary font-serif text-lg"
              variants={itemVariants}
            >
              Open to work
            </motion.span>
          </div>
        </motion.div>

        <motion.div className="mb-14" variants={itemVariants}>
          <motion.h1
            className="text-secondary text-3xl md:text-4xl font-serif mb-4"
            variants={itemVariants}
          >
            Hey, I&appos;m Juan Cruz. <br />
            <span className="text-accent">
              Frontend Developer & UX/UI Designer.
            </span>
          </motion.h1>
          <motion.p
            className="text-base font-sans text-accent"
            variants={itemVariants}
          >
            Conceptualizing our intelligent, frictionless future. A high school
            student by day, designer, engineer, and dreamer by night. Also,
            building cool gadgets in spare time.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-row justify-between pb-10 border-b border-accent"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:juancagnoni@gmail.com"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
            variants={itemVariants}
          >
            Copy Email
          </motion.a>
          <motion.a
            href="https://github.com/juancruzcagnoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
            variants={itemVariants}
          >
            Github
          </motion.a>
          <motion.a
            href="https://dribbble.com/juancagnoni"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
            variants={itemVariants}
          >
            Dribbble
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/juancruzcagnoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-serif text-accent text-lg mb-2 md:mb-0"
            variants={itemVariants}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
