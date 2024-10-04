"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import ProjectCards from "./components/ProjectCards";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // Importa el Loader

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  const scrollToSection = (section) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "work" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Simula la carga de datos desde Supabase
    const fetchData = async () => {
      // Simula un retraso para la carga de datos
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula 2 segundos de carga
      // Aquí puedes agregar la lógica para cargar los datos desde Supabase

      setLoading(false); // Actualiza el estado una vez que los datos están listos
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />; // Muestra el Loader mientras se cargan los datos
  }

  return (
    <div className="bg-primary">
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
