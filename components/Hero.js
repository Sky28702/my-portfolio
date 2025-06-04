const Hero = () => {
  return (
    <section className="flex flex-row-reverse justify-between items-center mt-[106px] mb-[210px]">
      <img
        src="https://raw.githubusercontent.com/Sky28702/my-portfolio/refs/heads/main/hero.png"
        alt="dev"
        className="h-[300px] w-[400px]"
      ></img>
      <div>
        <h1 className="font-bold text-[50px] ">
          Hi,<br></br>I'am <span className="text-blue-600">Prateek</span>
          <br></br>
          Web Developer
        </h1>
        <button className="mt-[20px] rounded-[5px] bg-blue-600 text-white text-[16px] mt-[20px] pt-[12px] pb-[12px] pl-[36px] pr-[36px] cursor-pointer">
          <a className="text-[18px]">Contact</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
