import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ onClick = () => {} }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`w-5 h-5 hover:cursor-pointer ${
        toggle ? "bg-hackathon-blue-100" : "bg-hackathon-gray"
      } flex items-center justify-center`}
      onClick={() => {
        onClick(!toggle === false ? "uncheck" : "check");
        setToggle(!toggle);
      }}
    >
      {toggle && <BsCheckLg className="text-white text-lg" />}
    </div>
  );
};

export default Checkbox;
