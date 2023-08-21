import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "", color }) => {
  return (
    <div
      className={`flex items-start hover:cursor-pointer w-fit ${
        text === "" ? "" : "mt-3"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-4 h-4 rounded-sm mt-1.5 ${
          toggle
            ? `${color ? color : "bg-hackathon-blue-100"}`
            : "bg-hackathon-gray"
        } flex items-center justify-center`}
      >
        <BsCheckLg
          className={`${toggle ? "text-white" : "text-hackathon-gray"} text-lg`}
        />
      </div>
      {text && <p className="pl-3 my-0 pt-0">{text}</p>}
    </div>
  );
};

export default Checkbox;
