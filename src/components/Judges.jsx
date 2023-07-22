import React from "react";
import Judge from "./Judge.jsx";
const Judges = () => {
  const judges = [
    {
      name: "Big Chungus",
      type: "professor",
      email: "bigchungus101@email.com",
    },
    {
      name: "Mario Kart",
      type: "student",
      email: "mariomoviegoated101@email.com",
    },
    {
      name: "Ash Ketchum",
      type: "industry",
      email: "ash.ketchum12@email.com",
    },
  ];

  return (
    <div className="w-full h-5/6 flex bg-white rounded-2xl flex-col">
      <div className="w-full h-16 bg-hackathon-blue-200 flex text-white font-bold text-xl justify-around font-poppins items-center rounded-t-2xl">
        <p className="">Name</p> <p className="">Type</p>{" "}
        <p className="">Email</p>
      </div>
      <div className=" flex flex-col">
        {judges.map((judge, index) => (
          <Judge
            key={index}
            name={judge.name}
            type={judge.type}
            email={judge.email}
          />
        ))}
      </div>
    </div>
  );
};
export default Judges;
