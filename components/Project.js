import ProjectCards from "@/components/ProjectCard";

const Project = () => {
  return (
    <section className="mb-[80px]" id="Project">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u>Projects</u>
      </h2>
      <div className="flex flex-column justify-evenly">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </section>
  );
};

export default Project;
