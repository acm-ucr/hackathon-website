import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";

const Filter = ({ tag }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`rounded ${
        !toggle
          ? "text-hackathon-blue-100 bg-white"
          : "text-white bg-hackathon-blue-100"
      } flex items-center w-fit m-0`}
    >
      <p className="my-0 mx-1 px-2 py-[2px]">{tag}</p>
      <TiPlus
        onClick={() => setToggle(!toggle)}
        className={`mt-[2px] mr-2 hover:opacity-80 ${
          toggle ? "-rotate-45" : null
        }`}
      />
    </div>
  );
};

export default Filter;
