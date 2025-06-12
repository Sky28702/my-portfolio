"use client";
import { useForm } from "react-hook-form";
import Nav from "@/components/Nav";
const profiledit = () => {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    const updatedData = [data];

    localStorage.setItem("contactFormData", JSON.stringify(updatedData));
    console.log("Form submitted and saved:", updatedData);
  }

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

        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-row items-center mb-6">
            {/* start v FirstName and LastName  */}
            <div>
              <label className="text-slate-500 leading-8">First Name</label>
              <br></br>
              <input
                {...register("firstname")}
                type="text"
                className=" border border-slate-300 h-10 rounded-[6px] w-118 pl-[10px]"
                placeholder="Jhon"
                required
              ></input>
            </div>
            {/* Firstname end ^ */}
            {/* Lastname start v */}
            <div className="ml-6">
              <label className="text-slate-500 leading-8">Last Name</label>
              <br></br>
              <input
                {...register("lastname")}
                type="Text"
                className=" border border-slate-300 h-10 rounded-[6px] w-128 pl-[10px] "
                placeholder="Doe"
              ></input>
            </div>
            {/* Lastname ends  */}
          </div>
          {/* end v FirstName and LastName  */}

          <div className="flex flex-row items-center mb-6">
            {/* start v Phone and Email  */}
            <div>
              <label className="text-slate-500 leading-8">Phone Number</label>
              <br></br>
              <input
                {...register("number")}
                type="number"
                className=" border border-slate-300 h-10 rounded-[6px] w-118 pl-[10px]"
                placeholder="9834275403"
                required
              ></input>
            </div>
            {/* Phonenumber end ^ */}
            {/* email start v */}
            <div className="ml-6">
              <label className="text-slate-500 leading-8">Email Address</label>
              <br></br>
              <input
                {...register("email")}
                type="email"
                className=" border border-slate-300 h-10 rounded-[6px] w-128 pl-[10px] "
                placeholder="example@email.com"
              ></input>
            </div>
            {/* Email ends  */}
          </div>
          {/* end v email and phoenumber  */}

          <div className="mb-6">
            <label className="text-slate-500 leading-8">Address</label>
            <br></br>
            <input
              {...register("Address")}
              type="text"
              className=" border border-slate-300 h-10 rounded-[6px] w-252 pl-[10px]"
              placeholder="A - 1002 Alpha Plus,Raiya Telephone Exchange"
              required
            ></input>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-[6px] text-[14px] hover:bg-blue-500 cursor-pointer"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default profiledit;
