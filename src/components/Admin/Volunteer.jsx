"use client";

import React from "react";
import Checkbox from "../Checkbox";
import Tag from "./Tag";

const Volunteer = ({
  uid,
  name,
  email,
  discord,
  status,
  selected,
  setFilteredVolunteers,
  filteredVolunteers,
}) => {
  const handleSelect = () => {
    if (!selected) {
      setFilteredVolunteers(
        filteredVolunteers.map((a) => {
          if (a.uid === uid) {
            a.selected = true;
          }
          return a;
        })
      );
    } else {
      setFilteredVolunteers(
        filteredVolunteers.map((a) => {
          if (a.uid === uid) {
            a.selected = false;
          }
          return a;
        })
      );
    }
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
      <div className=" font-semibold text-xs md:text-sm w-1/4">{name}</div>
      <div className="text-xs md:text-sm w-1/4">{email}</div>
      <div className="text-xs md:text-sm w-1/4">{discord}</div>
      <div className="text-lg mr-4">
        <Tag
          color={
            status === "onsite"
              ? "purple"
              : status === "online"
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

export default Volunteer;
