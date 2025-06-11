"use client";
import { useForm } from "react-hook-form";
import Nav from "@/components/Nav";
const profile = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="flex flex-row justify-between items-center mb-10">
          <img
            src="/pfp.png"
            alt="profile picture"
            className="h-18 w-18 rounded-full"
          ></img>
          <div>
            <button className="bg-blue-600 text-white text-[14px] px-4 py-2 rounded-[5px] hover:bg-blue-500 cursor-pointer ">
              Upload New Profile Picture
            </button>
            <button className="text-blue-600 bg-blue-50 text-[14px] px-4 py-2 rounded-[5px] ml-6  hover:bg-blue-100 cursor-pointer">
              Remove Profile Picture
            </button>
          </div>
        </div>

        <form>
          <div className="flex flex-row items-center mb-6">
            {/* start v username and password  */}
            <div>
              <label className="text-slate-500 leading-8">Username</label>
              <br></br>
              <input
                type="text"
                className=" border border-slate-300 h-10 rounded-[6px] w-118 pl-[10px]"
                placeholder="jhondoe123"
              ></input>
            </div>
            {/* username end ^ */}
            {/* password start v */}
            <div className="ml-6">
              <label className="text-slate-500 leading-8">Password</label>
              <br></br>
              <input
                type="Password"
                className=" border border-slate-300 h-10 rounded-[6px] w-128 pl-[10px] "
                placeholder=".........."
              ></input>
            </div>
            {/* password ends  */}
          </div>
          {/* end username and password */}

          <div className="flex flex-row items-center">
            {/* start v FirstName and LastName  */}
            <div>
              <label className="text-slate-500 leading-8">First Name</label>
              <br></br>
              <input
                type="text"
                className=" border border-slate-300 h-10 rounded-[6px] w-118 pl-[10px]"
                placeholder="Jhon"
              ></input>
            </div>
            {/* Firstname end ^ */}
            {/* Lastname start v */}
            <div className="ml-6">
              <label className="text-slate-500 leading-8">Last Name</label>
              <br></br>
              <input
                type="Text"
                className=" border border-slate-300 h-10 rounded-[6px] w-128 pl-[10px] "
                placeholder="Doe"
              ></input>
            </div>
            {/* Lastname ends  */}
          </div>
          {/* end v FirstName and LastName  */}
        </form>
      </section>
    </>
  );
};

export default profile;
