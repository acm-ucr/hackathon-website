import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "" }) => {
  return (
    <div>
      <div
        className={`w-4 h-4 rounded-sm hover:cursor-pointer ${
          toggle ? "bg-hackathon-blue-100" : "bg-hackathon-gray"
        } flex items-center justify-center`}
        onClick={onClick}
      >
        {toggle && <BsCheckLg className="text-white text-lg" />}
      </div>
      {text}
    </div>
  );
};

export default Checkbox;
