"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const { register, handleSubmit, watch } = useForm();
  const [data, setData] = useState("");

  return (
    <section className="mb-[80px]  " id="Contact">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u> Contact </u>
      </h2>
      <form
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        className="flex flex-col justify-between items-center md:flex md:flex-col md:justify-between md:items-center  "
      >
        <input
          {...register("name")}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          className="text-sm mb-8 border border-solid border-slate-200 rounded-[4px] py-2 px-2 w-60"
        ></input>

        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="text-sm mb-8 border border-solid border-slate-200 rounded-[4px] py-2 px-2 w-60"
        ></input>

        <textarea
          {...register("Contact Message: ")}
          className="text-sm h-36 w-60 mb-8 border border-solid border-slate-200 rounded-[4px] py-2 px-2"
          placeholder="Type your message..."
        ></textarea>

        <button
          value="submit"
          className="cursor-pointer text-white bg-blue-600 py-1 px-5 rounded-[6px]"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
