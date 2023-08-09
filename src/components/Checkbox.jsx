import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "", color }) => {
  return (
    <div
      className={`flex items-center hover:cursor-pointer ${
        text === "" ? "" : "mt-3"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-4 h-4 rounded-sm  ${
          toggle
            ? `${color ? color : "bg-hackathon-blue-100"}`
            : "bg-hackathon-gray"
        } flex items-center justify-center`}
      >
        {toggle && <BsCheckLg className="text-white text-lg" />}
      </div>
      <p className="pl-2 mb-0">{text}</p>
    </div>
  );
};

export default Checkbox;
