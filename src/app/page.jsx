"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Loader from "./components/Loader";
import Experience from "./sections/Experience";

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

  return (
    <>
      {isLoading && (
        <Loader 
          onLoadingComplete={handleLoaderComplete}
        />
      )}
      <div className={`pt-4 md:pt-10 ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
