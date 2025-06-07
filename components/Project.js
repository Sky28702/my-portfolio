import ProjectCards from "@/components/ProjectCard";

const Project = () => {
  return (
    <section className="mb-[80px] ml-20" id="Project">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u>Projects</u>
      </h2>
      <div className="md:flex md:flex-row flex-col justify-evenly">
        <ProjectCards
          title="Project Card 1"
          image="project.png"
          paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        />
        <ProjectCards
          title="Project Card 2"
          image="project2.png"
          paragraph="Ipsum lorem, dolor sit amet adipisicing consectetur elit"
        />
        <ProjectCards
          title="Project Card 3"
          image="project3.png"
          paragraph="Epsom lodem, dllor sat aeet adipisicing consectetur elit"
        />
      </div>
    </section>
  );
};

export default Project;
