const About = () => {
  return (
    <section className="mb-[80px] ml-20" id="About">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u> About </u>
      </h2>
      <div className="md:flex md:flex-row md:justify-between md:items-center  flex  flex-col">
        <img
          src="/about.png"
          alt="portrait"
          className="  max-w-[270px]  h-[300px] rounded-md mx-auto md:mx-0 w-full h-auto mb-9"
        ></img>
        <div className="leading-[26px] md:pl-[150px]  ">
          <h3 className="font-bold text-[20px] mb-[20px]">I'am Prateek</h3>
          <p className="md:max-w-[96%] text-slate-600   ">
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

export default About;
