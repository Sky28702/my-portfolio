const Hero = () => {
  return (
    <section className="mb-[80px]" id="About">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u> About </u>
      </h2>
      <div className="flex flex-row justify-between items-center">
        <img
          src="/about.png"
          alt="portrait"
          className="h-[300px] w-[270px] rounded-[5px]"
        ></img>
        <div className="leading-[26px] pl-[150px]">
          <h3 className="font-bold text-[20px] mb-[20px]">I'am Prateek</h3>
          <p className="max-w-[96%] text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ad
            veniam , sequi expedita doloribus molestias eius, tempora veritatis
            hic nam ratione tenetur modi neque, velit fugit tempore numquam!
            Vel, impedit!
          </p>
          <p className="text-red-800 font-bold mt-[20px]">
            <i>
              "Code is read much more often than it is written." - Guido van
              Rossum
            </i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
