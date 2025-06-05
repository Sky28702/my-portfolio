import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
const Home = () => {
  return (
    <div className="mt-10 max-w-[1024px]">
      <Nav />

      <Hero />

      <About />

      <Skills />
    </div>
  );
};

export default Home;
