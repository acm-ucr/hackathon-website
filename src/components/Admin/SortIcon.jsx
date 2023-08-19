"use client";

import React from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const SortIcon = ({
  index,
  name,
  headers,
  setHeaders,
  setObjects,
  objects,
  setCurrentSort,
  currentSort,
}) => {
  const handleClick = (state) => {
    if (currentSort == name)
      setHeaders({
        ...headers,
        [name]: { ...headers[name], sort: state },
      });
    else
      setHeaders({
        ...headers,
        [currentSort]: { ...headers[currentSort], sort: "off" },
        [name]: { ...headers[name], sort: state },
      });
    setCurrentSort(name);
    setObjects(
      objects.sort((a, b) => {
        if (state === "up") {
          return a[name] > b[name] ? -1 : 1;
        } else if (state === "down") {
          return b[name] > a[name] ? -1 : 1;
        }
      })
    );
  };

  return (
    <div className="mx-2">
      <TbTriangleFilled
        className={`${
          headers[index].sort === "up"
            ? " text-hackathon-blue-100"
            : "hover:opacity-50"
        } text-[8px] hover:cursor-pointer`}
        onClick={() => handleClick("up")}
      />
      <TbTriangleInvertedFilled
        onClick={() => handleClick("down")}
        className={`${
          headers[index].sort === "down"
            ? " text-hackathon-blue-100"
            : "hover:opacity-50"
        } text-[8px] hover:cursor-pointer`}
      />
    </div>
  );
};

export default SortIcon;
