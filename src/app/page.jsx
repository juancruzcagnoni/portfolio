"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Lab from "./sections/Playground";
import TechCarousel from "./sections/TechCarousel";
import Loader from "./components/Loader";
import Experience from "./sections/Experience";

import { motion } from "framer-motion";

const IS_LIVE = true;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 1.2 segundos
    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (!IS_LIVE) {
    return (
      <div className="bg-primary flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="font-instrument-serif text-2xl text-secondary dot-typing" />
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <Loader
          onLoadingComplete={handleLoaderComplete}
        />
      )}
      <div className={`pt-4 md:pt-10 ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <Experience />
        </motion.div> */}

        {/* <TechCarousel /> */}

        <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <Lab />
        </motion.div>
      </div>
    </>
  );
}
