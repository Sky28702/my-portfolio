import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contactus from "@/components/Contactus";
const Home = () => {
  return (
    <div className="mt-10 max-w-[1024px]">
      <Nav />

      <Hero />

      <About />

      <Skills />

      <Project />

      <Contactus />
    </div>
  );
};

export default Home;
