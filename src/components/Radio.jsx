import React from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";

const Radio = ({ text, field, options, user, setUser }) => {
  const handleClick = (option) => {
    setUser({ ...user, [field]: option });
  };

  return (
    <div className=" mt-4 flex flex-col">
      <p>{text}</p>
      <div className="flex flex-wrap mt-2">
        {options.map((option, index) => (
          <div
            className="flex items-center px-1 w-1/4"
            key={index}
            onClick={() => handleClick(option)}
          >
            {option === user[field] ? (
              <BsCircleFill className="mx-1 w-3.5 h-3.5 text-hackathon-green-300 border-[1.5px] rounded-full border-black" />
            ) : (
              <BsCircle className=" hover:cursor-pointer mx-1 h-3.5 w-3.5" />
            )}
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
