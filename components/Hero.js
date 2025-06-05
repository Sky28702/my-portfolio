const Hero = () => {
  return (
    <section
      className="flex flex-row-reverse justify-between items-center mt-[160px] mb-[210px]"
      id="Hero"
    >
      <img src="/hero.png" alt="dev" className="h-[300px] w-[400px]"></img>
      <div>
        <h1 className="font-bold text-[40px] ">
          Hi,<br></br>I'am <span className="text-blue-600">Prateek</span>
          <br></br>
          Web Developer
        </h1>
        <button className="mt-[24px] rounded-[5px] bg-blue-600 text-white text-[16px] mt-[20px] pt-[10px] pb-[10px] pl-[36px] pr-[36px] cursor-pointer">
          <a className="text-[18px]">Contact</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
