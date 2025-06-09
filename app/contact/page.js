"use client";
import { useForm } from "react-hook-form";
import Nav from "@/components/Nav";
import ContactData from "@/components/ContactData";

const Contactable = () => {
  const existingData =
    JSON.parse(localStorage.getItem("contactFormData")) || [];
  // prase: mean Object to String aur get item to get previous data , if there is none then empty array []
  const nameData = [{ ...existingData }];

  return (
    <>
      <Nav />
      <section className="  ">
        <thead className="flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-xl">Users</h1>
            <p className="text-sm  text-slate-400 mb-2">Total Roam Users: 13</p>
          </div>
        </thead>
        <table className="border rounded-5   [&>tr>td]:p-4 [&>tr>td]:font-normal [&>tr>td]:border-b [&>tr>td]:border-slate-200 border-slate-200">
          <tr className="[&>th]:font-normal text-slate-400 border-b border-slate-200">
            <th className="  p-4">Id</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Message</th>
          </tr>
          {nameData.map((item, index = 1) => (
            <ContactData
              id={index}
              name={item.name}
              email={item.email}
              message={item.message}
            />
          ))}
        </table>
      </section>
    </>
  );
};

export default Contactable;
