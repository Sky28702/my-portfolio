const Hero = () => {
  return (
    <section className="mb-[80px]">
      <h2 className="font-bold text-[36px] text-blue-600 text-center mb-[20px]">
        <u>Skills</u>
      </h2>
      <div className="flex items-center justify-around flex-row-reverse">
        <img
          src="/skills.png"
          alt="Skills"
          className="h-50 w-90 rounded-[5px]"
        ></img>
        <div>
          <h3 className="font-extrabold text-[20px] mb-[20px]">
            Proffesional Skills
          </h3>

          <p className="max-w-[70%] text-base text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quidem voluptatum minus fuga a fugit, nobis eaque, temporibus
            cupiditate officiis optio voluptates.
          </p>
          <div className=" rounded-[5px] bg-white text-[18px] border border-solid border-white mt-4 shadow-[0_4px_25px_rgba(14,36,49,0.15)]  max-w-[400px] py-[8px] px-[16px] flex items-center">
            <span className="text-orange-600 text-[24px]">
              <i class="fa-brands fa-html5"></i>
            </span>
            <span className="pl-[12px]"> HTML5 </span>
            <span className="pl-[242px]"> 95%</span>
          </div>

          <div className=" rounded-[5px] bg-white text-[18px] border border-solid border-white mt-4 shadow-[0_4px_25px_rgba(14,36,49,0.15)]  max-w-[400px] py-[8px] px-[16px] flex items-center">
            <span className="text-blue-600 text-[24px]">
              <i class="fa-brands fa-css3-alt"></i>
            </span>
            <span className="pl-[12px]"> CSS3 </span>
            <span className="pl-[254px]"> 36%</span>
          </div>

          <div className=" rounded-[5px] bg-white text-[18px] border border-solid border-white mt-4 shadow-[0_4px_25px_rgba(14,36,49,0.15)]  max-w-[400px] py-[8px] px-[16px] flex items-center">
            <span className="text-yellow-300 text-[24px]">
              <i class="fa-brands fa-square-js"></i>
            </span>
            <span className="pl-[12px]"> JS </span>
            <span className="pl-[280px]"> 06%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
