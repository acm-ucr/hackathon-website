"use client";
import React from "react";
import Checkbox from "./Checkbox";
import Tag from "./Tag";

const Judge = ({
  uid,
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
        if (a.uid === uid) {
          a.selected = !selected;
        }
        return a;
      })
    );
  };
  return (
    <div
      className={
        " py-1 first:border-0 border-t-[1px] flex w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <div className="w-[7%] flex justify-center">
        <Checkbox onClick={handleSelect} toggle={selected} />
      </div>
      <div className="w-1/5">{name}</div>
      <div className="w-1/3">{email}</div>
      <div className="w-1/5">
        <Tag color={type} text={type} withHover={false} />
      </div>
      <div className="text-lg mr-4">
        <Tag
          color={
            status === "pending"
              ? "yellow"
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
