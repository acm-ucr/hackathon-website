"use client";
import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { HiSearch } from "react-icons/hi";
import Tag from "./Tag.jsx";

const Toolbar = ({
  input,
  setInput,
  tags,
  setFilteredObjects,
  objects,
  filters,
  reset,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      handleReset();
      return;
    }
    console.log("CALLED", objects, input);

    setFilteredObjects(
      objects.filter((a) => a.name.toLowerCase().match(input.toLowerCase()))
    );
  };

  const handleReset = () => {
    setInput("");
    setFilteredObjects(
      reset.filter((a) => {
        let boolean = false;

        Object.keys(filters).map((value) => {
          if (a.status === value && filters[value]) {
            boolean = true;
          }
        });
        return boolean;
      })
    );
  };

  const selectAll = () => {
    setToggle(!toggle);

    if (!toggle === true) {
      setFilteredObjects(
        objects.map((a) => {
          a.selected = true;
          return a;
        })
      );
    } else {
      setFilteredObjects(
        objects.map((a) => {
          a.selected = false;
          return a;
        })
      );
    }
  };

  return (
    <div className="my-2.5 w-2/3 flex items-center ">
      <div className="mr-4">
        <Checkbox onClick={selectAll} toggle={toggle} />
      </div>

      <div className="flex flex-row gap-2 ">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag.text}
            name={tag.name}
            onClick={() => tag.onClick(setToggle)}
          />
        ))}
      </div>
      <form className="flex ml-2 w-full items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="px-2 py-1 w-full bg-hackathon-gray rounded-full focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" text-hackathon-darkgray rounded focus:outline-none">
          <HiSearch size={30} className="ml-2" />
        </button>
      </form>
      <button
        onClick={handleReset}
        className={`bg-hackathon-tags-gray-bg text-hackathon-tags-gray-text hover:shadow-[inset_0px_0px_0px_2px_#969696] px-2 rounded-full text-base w-fit hover:cursor-pointer`}
      >
        Reset
      </button>
    </div>
  );
};

export default Toolbar;
