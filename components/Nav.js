const Nav = () => {
  return (
    <>
      <div className="absolute w-[300px] h-full bg-sky-700 top-0 left-0"></div>

      <header
        className="md:flex md:flex-row md:justify-between md:items-center font-bold text-lg 
    border-b-2 mb-10 pb-[36px] border-slate-100 mt-10 flex flex-row justify-between items-center"
      >
        <h1 className="text-blue-600 font-bold text-xl"> Prateek </h1>
        <div className="[&_a]:hover:text-blue-600 md:flex hidden">
          <a href="#home" className=" pr-8 text-blue-600 font-medium">
            <span ClassName="">Home</span>
          </a>
          <a href="#About" className=" pr-8 font-medium">
            About
          </a>
          <a href="#Skills" className=" pr-8 font-medium">
            Skills
          </a>
          <a href="#Project" className=" pr-8 font-medium">
            Project
          </a>
          <a href="#Contact" className=" pr-8 font-medium">
            Contact
          </a>
        </div>
        <a className="md:hidden" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </header>
    </>
  );
};

export default Nav;
