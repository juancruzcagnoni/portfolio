import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import ProjectCards from "./components/ProjectCards";

export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
      <ProjectCards />
      <Navbar />
    </div>
  );
}
