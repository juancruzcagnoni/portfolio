"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; 

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [loading, setLoading] = useState(true); 

  const scrollToSection = (section) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "work" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      setLoading(false); 
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div>
      <Hero />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <CTA />
      <Footer />
      <Navbar scrollToSection={scrollToSection} />
    </div>
  );
}
