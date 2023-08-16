"use client";
import React from "react";
import Checkbox from "../Checkbox";
import Tag from "./Tag";

const Judge = ({
  type,
  name,
  email,
  selected,
  filteredJudges,
  setFilteredJudges,
  status,
}) => {
  const handleSelect = () => {
    setFilteredJudges(
      filteredJudges.map((a) => {
        if (a.email === email) {
          a.selected = !selected;
        }
        return a;
      })
    );
  };
  return (
    <div
      className={
        " last:rounded-b-2xl py-2 first:border-0 border-t-[1px] border-hackathon-gray flex items-center w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <div className="w-[7%] flex justify-center items-center">
        <Checkbox onClick={handleSelect} toggle={selected} />
      </div>
      <div className=" font-semibold text-xs md:text-sm w-1/5">{name}</div>
      <div className="text-xs md:text-sm w-1/3">{email}</div>
      <div className="text-xs md:text-sm w-1/5">
        <Tag color={type} text={type} withHover={false} />
      </div>
      <div className="text-lg mr-4">
        <Tag
          color={
            status === "pending"
              ? "gray"
              : status === "confirmed"
              ? "green"
              : "gray"
          }
          text={status}
          withHover={false}
        />
      </div>
    </div>
  );
};

export default Judge;
