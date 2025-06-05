import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
const Home = () => {
  return (
    <div className="mt-10 max-w-[1024px]">
      <Nav />

      <Hero />

      <About />

      <Skills />

      <Project />
    </div>
  );
};

export default Home;
