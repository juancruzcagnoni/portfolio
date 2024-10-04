"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Manejar la intersección
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Cambiar estado a visible
            observer.unobserve(entry.target); // Dejar de observar una vez que está visible
          }
        });
      },
      { threshold: 0.1 } // Cambiar según lo que necesites
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observar el div
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpiar el observer al desmontar
      }
    };
  }, []);

  // Variantes para las animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="py-16 w-11/12 md:w-7/12 m-auto">
      <motion.h2
        className="font-serif text-secondary text-center text-2xl sm:text-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        What&apos;s about me?
      </motion.h2>

      <motion.div
        ref={sectionRef}
        className="flex flex-col lg:flex-row justify-between mt-16 lg:mt-24 w-full"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="bg-secondary p-5 flex flex-col items-center w-full lg:w-4/12 mb-8 lg:mb-0">
          <Image
            src="/icon.jpg"
            alt="Juan Cruz"
            width={300}
            height={300}
            className="object-cover w-full h-auto"
          />
          <span className="text-lg sm:text-xl font-serif text-primary mt-6">
            That&apos;s me!
          </span>
        </div>

        <div className="flex flex-col justify-between items-start lg:items-end mt-5 md:mt-0 w-full lg:w-8/12 lg:ml-5">
          <p className="text-base text-secondary leading-relaxed">
            Figma ipsum component variant main layer. Device figma content
            boolean community. Invite font move list asset follower. Vertical
            flows selection connection underline asset overflow. Fill opacity
            library project content text background. Object opacity community
            layer rotate background inspect. Asset move clip blur background.
            Layer boolean pen flows community layout. Layout fill scale
            background subtract font device duplicate horizontal. Figjam
            resizing align device duplicate pen flatten. Figma frame arrange
            line slice. Opacity inspect variant export invite team. Polygon
            device font fill line ipsum.
          </p>
          <span className="font-serif text-lg text-accent mt-4 lg:mt-6">
            Juan Cruz Cagnoni.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
