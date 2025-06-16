"use client";
import createProfile from "@/app/backend/actions/profile";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "@/components/Nav";
const profiledit = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setValue("image", file); // Update form value with the file
  };

  async function submit(data) {
    console.log(data); // data will contain the image file
    console.log(selectedImage);

    await createProfile(data);
  }

  return (
    <>
      <Nav />
      <section>
        <form
          className="flex flex-col justify-between items-center"
          onSubmit={handleSubmit(submit)}
        >
          <img
            src="/pfp.png"
            alt="profile picture"
            className="h-30 w-30 rounded-full justify-between items-center mb-10"
          ></img>

          <input
            type="file"
            className="bg-blue-600 text-white text-[14px] px-4 py-2 rounded-[5px] hover:bg-blue-500 cursor-pointer mb-12"
            name="Upload"
            onChange={handleImageChange}
          ></input>

          <div className=" items-center ">
            {/* start v FirstName and LastName  */}
            <div>
              <label className="text-slate-500 leading-8">First Name</label>
              <br></br>
              <input
                {...register("firstName")}
                type="text"
                className=" border border-slate-300 h-10 rounded-[6px] w-90 pl-[10px] mb-4"
                placeholder="Jhon"
                required
              ></input>
            </div>
            {/* Firstname end ^ */}
            {/* Lastname start v */}
            <div>
              <label className="text-slate-500 leading-8">Last Name</label>
              <br></br>
              <input
                {...register("lastName")}
                type="Text"
                className=" border border-slate-300 h-10 rounded-[6px] w-90 pl-[10px] mb-4 "
                placeholder="Doe"
              ></input>
            </div>
            {/* Lastname ends  */}
          </div>
          {/* end v FirstName and LastName  */}

          <div className="  items-center ">
            {/* start v Phone and Email  */}
            <div>
              <label className="text-slate-500 leading-8">Phone Number</label>
              <br></br>
              <input
                {...register("number")}
                type="number"
                className=" border border-slate-300 h-10 rounded-[6px] w-90 pl-[10px] mb-4"
                placeholder="9834275403"
                required
              ></input>
            </div>
            {/* Phonenumber end ^ */}
            {/* email start v */}
            <div>
              <label className="text-slate-500 leading-8">Email Address</label>
              <br></br>
              <input
                {...register("email")}
                type="email"
                className=" border border-slate-300 h-10 rounded-[6px] w-90 pl-[10px] mb-4"
                placeholder="example@email.com"
              ></input>
            </div>
            {/* Email ends  */}
          </div>
          {/* end v email and phoenumber  */}

          <div className=" mb-6">
            <label className="text-slate-500 leading-8">Address</label>
            <br></br>
            <input
              {...register("address")}
              type="text"
              className=" border border-slate-300 h-10 rounded-[6px] w-90 pl-[10px] mb-4"
              placeholder="A - 1002 Alpha Plus"
              required
            ></input>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-[6px] text-[14px] hover:bg-blue-500 cursor-pointer mb-6"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default profiledit;
