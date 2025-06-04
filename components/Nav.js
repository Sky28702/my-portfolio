const Nav = () => {
  return (
    <header
      className="flex flex-row justify-between items-center font-bold text-lg 
    border-b-2 mb-10 pb-[36px] border-slate-100 "
    >
      <h1 className="text-blue-600 font-extrabold "> Prateek </h1>
      <div className="[&_a]:hover:text-blue-600">
        <a href="#home" className=" pr-8 text-blue-600 ">
          <span ClassName="">Home</span>
        </a>
        <a href="#About" className=" pr-8">
          About
        </a>
        <a href="#Skills" className=" pr-8">
          Skills
        </a>
        <a href="#Project" className=" pr-8">
          Project
        </a>
        <a href="#Contact" className=" pr-8">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Nav;
