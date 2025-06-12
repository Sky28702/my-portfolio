"use client";
import ProfileData from "@/components/ProfileData";
import Nav from "@/components/Nav";
const profiledit = () => {
  const existingData =
    JSON.parse(localStorage.getItem("contactFormData")) || [];
  return (
    <>
      <Nav />
      <section>
        {existingData.map((item, index) => (
          <ProfileData
            name={item.firstname + " " + item.lastname}
            email={item.email}
            number={item.number}
            address={item.Address}
          />
        ))}
      </section>
    </>
  );
};

export default profiledit;
