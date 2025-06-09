"use client";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    const existingData =
      JSON.parse(localStorage.getItem("contactFormData")) || [];
    const updatedData = [...existingData, data];

    localStorage.setItem("contactFormData", JSON.stringify(updatedData));
    console.log("Form submitted and saved:", updatedData);
  }

  return (
    <section className="mb-[80px]" id="Contact">
      <h2 className="font-semibold text-[30px] text-blue-600 text-center mb-[20px]">
        <u>Contact</u>
      </h2>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col justify-between items-center"
      >
        <input
          {...register("name")}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          className="text-sm mb-8 border border-solid border-slate-200 rounded-[4px] py-2 px-2 w-60"
        />

        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="text-sm mb-8 border border-solid border-slate-200 rounded-[4px] py-2 px-2 w-60"
        />

        <textarea
          {...register("message")}
          className="text-sm h-36 w-60 mb-8 border border-solid border-slate-200 rounded-[4px] py-2 px-2"
          placeholder="Type your message..."
        ></textarea>

        <button
          type="submit"
          className="cursor-pointer text-white bg-blue-600 py-1 px-5 rounded-[6px]"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
