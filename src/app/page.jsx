"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Loader from "./components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const handleProjectsLoaded = () => {
    setProjectsLoaded(true);
  };

  useEffect(() => {
    if (projectsLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [projectsLoaded]);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setProjectsLoaded(true)} />;
  }

  return (
    <div className="py-4 md:py-10">
      <Navbar />
      <Hero />
      <Projects onLoad={handleProjectsLoaded} />
    </div>
  );
}
