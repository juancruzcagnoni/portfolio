import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import ProjectCards from "./components/ProjectCards";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
      <ProjectCards />
      <About />
      <Projects />
      <CTA />
      <Footer />
      <Navbar />
    </div>
  );
}
