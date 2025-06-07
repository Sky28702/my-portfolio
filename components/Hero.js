const Hero = () => {
  return (
    <section
      className="md:flex sm:flex ml-9 md:flex-row sm:flex-col sm:items-left sm:justify-between md:justify-between md:items-center mt-[160px]  mb-[210px]   "
      id="Hero"
    >
      <div className=" pl-15">
        <h1 className="font-bold text-[40px] sm:Pl-950">
          Hi,<br></br>I'am <span className="text-blue-600">Prateek</span>
          <br></br>
          Web Developer
        </h1>
        <button className="mt-[24px] rounded-[5px] bg-blue-600 text-white text-[16px] mt-[20px] pt-[10px] pb-[10px] pl-[36px] pr-[36px] cursor-pointer">
          <a className="text-[18px]">Contact</a>
        </button>
      </div>

      <img
        src="/hero.png"
        alt="dev"
        className="h-[300px] w-[400px]  w-[100px]  "
      ></img>
    </section>
  );
};

export default Hero;
