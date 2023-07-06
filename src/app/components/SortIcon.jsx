"use client";

import React from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const reset = {
  name: "off",
  email: "off",
  team: "off",
  major: "off",
  status: "off",
};

const SortIcon = ({
  name,
  sorts,
  setSorts,
  setfilteredParticipants,
  participants,
}) => {
  const handleClick = (state) => {
    setSorts({ ...reset, [name]: state });

    setfilteredParticipants(
      participants.sort((a, b) => {
        if (state === "up") {
          return a[name] > b[name];
        } else if (state === "down") {
          return b[name] > a[name];
        }
      })
    );
  };

  return (
    <div className="mx-2">
      <TbTriangleFilled
        className={`${
          sorts[name] === "up" ? "text-green-500" : ""
        } text-xs hover:cursor-pointer`}
        onClick={() => handleClick("up")}
      />
      <TbTriangleInvertedFilled
        onClick={() => handleClick("down")}
        className={`${
          sorts[name] === "down" ? "text-green-500" : ""
        } text-xs hover:cursor-pointer`}
      />
    </div>
  );
};

export default SortIcon;
