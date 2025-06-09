"use client";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={` transition-all absolute w-[300px] h-full bg-white top-0 ${
          open ? "left-0" : "left-[-200%]"
        } pl-4 shadow-2xl `}
      >
        <div className="flex flex-row justify-between items-center mb-15 pt-10">
          <h1 className="text-blue-600 font-bold text-xl"> Prateek </h1>

          <span
            onClick={() => setOpen(false)}
            className="text-xl font-bold text-sky-400 hover:pointer:cursor pr-4 "
          >
            {"  "}
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>

        <div className="[&_a]:hover:text-blue-600  flex flex-col text-xl">
          <a href="#home" className="pb-18 pr-8 text-blue-600 font-medium">
            <span ClassName=" ">Home</span>
          </a>
          <a href="#About" className=" pb-18 pr-8 font-medium">
            About
          </a>
          <a href="#Skills" className=" pb-18 pr-8 font-medium">
            Skills
          </a>
          <a href="#Project" className="pb-18 pr-8 font-medium">
            Project
          </a>
          <a href="#Contact" className="pb-18 pr-8 font-medium">
            Contact
          </a>
        </div>
      </div>

      <header
        className="md:flex md:flex-row md:justify-between md:items-center font-bold text-lg 
    border-b-2 mb-10 pb-[36px] border-slate-100 pt-10 flex flex-row justify-between items-center"
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
        <span onClick={() => setOpen(true)} className="md:hidden">
          <i class="fa fa-bars"></i>
        </span>
      </header>
    </>
  );
};

export default Nav;
