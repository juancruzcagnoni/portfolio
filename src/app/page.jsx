"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Loader from "./components/Loader";
import Experience from "./sections/Experience";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const handleProjectsLoaded = () => {
    setProjectsLoaded(true);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <Loader 
          onLoadingComplete={handleLoaderComplete}
          isDataLoaded={projectsLoaded}
        />
      )}
      <div className={`py-4 md:py-10 ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <Hero />
        <Experience />
        <Projects onLoad={handleProjectsLoaded} />
      </div>
    </>
  );
}
