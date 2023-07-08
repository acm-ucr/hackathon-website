"use client";
import React from "react";
import Checkbox from "./Checkbox";
import { HiSearch } from "react-icons/hi";
import Tag from "./Tag.jsx";
const Toolbar = ({ tags }) => {
  return (
    <div className="w-2/3 flex items-center ">
      <Checkbox />
      <div className="ml-auto space-x-2">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag.text}
            name={tag.name}
            onClick={tag.onClick}
          />
        ))}
      </div>
      <form className="flex ml-2 w-full items-center">
        <input
          type="text"
          className="px-2 py-1 w-full bg-hackathon-gray rounded-full focus:outline-none"
        />
        <button className=" text-hackathon-darkgray rounded focus:outline-none">
          <HiSearch size={30} className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Toolbar;
