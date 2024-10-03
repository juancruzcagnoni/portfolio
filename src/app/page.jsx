import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import ProjectCards from "./components/ProjectCards";
import About from "./components/About";

export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
      <ProjectCards />
      <About />
      <Navbar />
    </div>
  );
}
