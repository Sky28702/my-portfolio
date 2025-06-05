const Hero = () => {
  return (
    <section className="mb-[80px]" id="Project">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u>Projects</u>
      </h2>
      <div className="flex flex-column justify-evenly">
        <div>
          <img
            src="/project.png"
            alt="my projects"
            className="h-[200px] w-[300px] rounded-[5px]"
          ></img>
          <h5 className="font-semi  bold mt-1 mb-2">Project 1</h5>
          <p className="text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div>
          <img
            src="/project2.png"
            alt="my projects"
            className="h-[200px] w-[300px] rounded-[5px]"
          ></img>
          <h5 className="font-semibold mt-1 mb-2">Project 2</h5>
          <p className="text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div>
          <img
            src="/project3.png"
            alt="my projects"
            className="h-[200px] w-[300px] rounded-[5px]"
          ></img>
          <h5 className="font-semibold mt-1 mb-2">Project 3</h5>
          <p className="text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
