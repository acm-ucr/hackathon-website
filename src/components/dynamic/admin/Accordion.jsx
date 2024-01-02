"use client";

import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ children, icon, Dropdown }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      {children} <IoIosArrowDown onClick={() => setClicked(!clicked)} />{" "}
      {clicked && <Dropdown />}
    </div>
  );
};

export default Accordion;
