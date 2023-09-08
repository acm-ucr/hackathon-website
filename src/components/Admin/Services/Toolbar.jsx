"use client";
import { useState } from "react";
import Input from "./Input";
import Button from "../Button";
import Tag from "../Tag";
import { colors } from "@/data/Tags";
import { HiSearch } from "react-icons/hi";

const tags = ["professor", "industry", "student"];

const Toolbar = ({ data, setData }) => {
  const [input, setInput] = useState({
    rotations: "",
    search: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    setData(
      data.map((group) => {
        let boolean = false;

        if (group.name.toLowerCase().match(input.search.toLowerCase())) {
          boolean = true;
        }

        return { ...group, hidden: !boolean };
      })
    );
  };

  const generate = () => {
    const round = ["p_allan knight", "s_menthy wu", "i_max verstappen"];

    const rounds = new Array(parseInt(input.rotations)).fill(round);

    setData(
      data.map((group) => {
        group.rounds = rounds;

        return group;
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Input
            setObject={setInput}
            object={input}
            label="rotations"
            showLabel={false}
            maxLength={2}
          />
          <p className="mb-0 font-semibold mx-2"># of rotations</p>
          <Button color="green" text="generate" onClick={generate} />
        </div>
        <div className="flex">
          {tags.map((tag, index) => (
            <Tag key={index} color={colors[tag]} text={tag} classes="mx-2" />
          ))}
        </div>
      </div>
      <form className="flex items-center" onSubmit={handleSearch}>
        <Input
          object={input}
          setObject={setInput}
          maxLength={100}
          label="search"
          showLabel={false}
          classes="w-full"
        />
        <HiSearch
          onClick={handleSearch}
          size={30}
          className="mx-2 text-hackathon-gray-300 hover:cursor-pointer hover:opacity-70 duration-150"
        />
      </form>
    </>
  );
};

export default Toolbar;
