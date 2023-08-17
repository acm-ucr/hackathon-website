"use client";

import React from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const SortIcon = ({
  name,
  headers,
  setHeaders,
  setFilteredObjects,
  objects,
  setCurrentSort,
  currentSort,
}) => {
  const handleClick = (state) => {
    if (currentSort)
      setHeaders({
        ...headers,
        [currentSort]: { ...headers[name], sort: "off" },
      });
    setHeaders({
      ...headers,
      [name]: { ...headers[name], sort: state },
    });

    setCurrentSort(name);
    setFilteredObjects(
      objects.sort((a, b) => {
        if (state === "up") {
          return a[name.toLowerCase()] > b[name.toLowerCase()] ? -1 : 1;
        } else if (state === "down") {
          return b[name.toLowerCase()] > a[name.toLowerCase()] ? -1 : 1;
        }
      })
    );
  };

  return (
    <div className="mx-2">
      <TbTriangleFilled
        className={`${
          headers[name].sort === "up"
            ? " text-hackathon-blue-100"
            : "hover:opacity-50"
        } text-[8px] hover:cursor-pointer`}
        onClick={() => handleClick("up")}
      />
      <TbTriangleInvertedFilled
        onClick={() => handleClick("down")}
        className={`${
          headers[name].sort === "down"
            ? " text-hackathon-blue-100"
            : "hover:opacity-50"
        } text-[8px] hover:cursor-pointer`}
      />
    </div>
  );
};

export default SortIcon;
