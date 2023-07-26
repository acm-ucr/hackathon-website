import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "" }) => {
  return (
    <div className="flex items-center">
      <div
        className={` hover:border-2 hover:border-hackathon-blue-100 w-4 h-4 rounded-sm hover:cursor-pointer ${
          toggle ? "bg-hackathon-blue-100" : "bg-hackathon-gray"
        } flex items-center justify-center`}
        onClick={onClick}
      >
        {toggle && <BsCheckLg className="text-white text-lg" />}
      </div>
      <p className="pl-2">{text}</p>
    </div>
  );
};

export default Checkbox;
