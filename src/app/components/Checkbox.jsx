import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ onClick = () => {} }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`w-4 h-4 rounded-sm hover:cursor-pointer ${
        selected ? "bg-hackathon-blue-100" : "bg-hackathon-gray"
      } flex items-center justify-center`}
      onClick={() => {
        setSelected(!selected);
        onClick();
      }}
    >
      {selected && <BsCheckLg className="text-white text-lg" />}
    </div>
  );
};

export default Checkbox;
