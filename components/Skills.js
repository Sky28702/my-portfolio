const Skills = () => {
  return (
    <section className="mb-[80px]" id="Skills">
      <h2 className="font-semibold text-[30px] text-blue-600  text-center mb-[20px]">
        <u>Skills</u>
      </h2>
      <div className="md:flex md:items-center md:justify-around md:flex-row-reverse">
        <img
          src="/skills.png"
          alt="Skills"
          className="md:h-50 md:max-w-90 md:rounded-[5px]  ml-5 w-90 h-auto mb-10 "
        ></img>
        <div>
          <h3 className="font-bold text-[20px] md:mb-[20px] mb-2">
            Proffesional Skills
          </h3>

          <p className="md:max-w-[70%] text-base text-slate-600">
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
            <span className="pl-[274px]"> 06%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
