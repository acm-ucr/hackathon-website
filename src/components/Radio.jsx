import React from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";

const Radio = ({ field, options, user, setUser }) => {
  const handleClick = (option) => {
    setUser({ ...user, [field]: option });
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} onClick={() => handleClick(option)}>
          {option === user[field] ? <BsCircleFill /> : <BsCircle />}
          {option}
        </div>
      ))}
    </div>
  );
};

export default Radio;
