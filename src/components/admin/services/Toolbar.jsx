"use client";
import { useState } from "react";
import Input from "../Input";
import { HiSearch } from "react-icons/hi";
import Button from "../Button";
import DropDown from "./DropDown";
import Checkbox from "@/components/Checkbox";
import { FaTrashAlt } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const reset = {
  category: "",
  name: "",
};

const Toolbar = ({ objects, setObjects, teams, setTeams }) => {
  const [team, setTeam] = useState("No Team Selected");
  const [toggle, setToggle] = useState(false);
  const [prize, setPrize] = useState(reset);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    search: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    setObjects(
      objects.map((group) => {
        let boolean = false;

        if (group.name.toLowerCase().match(input.search.toLowerCase())) {
          boolean = true;
        }

        return { ...group, hidden: !boolean };
      })
    );
  };

  const selectAll = () => {
    setObjects(
      objects.map((a) => {
        a.selected = !toggle;
        return a;
      })
    );
    setToggle(!toggle);
  };

  const handleDelete = () => {
    setToggle(false);
    setObjects(objects.filter((object) => !object.selected));
  };

  const handleAdd = () => {
    setObjects([...objects, { ...prize, team, uid: uuid() }]);
    setPrize(reset);
    setTeam("No Team Selected");
  };

  const handleEdit = () => {
    const prize = objects.filter((a) => a.selected)[0];
    console.log(prize);
    setPrize(prize);
    setTeam(prize.team);
    setEdit(true);
  };

  const handleSave = () => {
    setObjects(
      objects.map((a) => {
        if (a.uid === prize.uid) {
          a = { ...prize, team };
          a.selected = false;
        }
        return a;
      })
    );
    setPrize(reset);
    setTeam("No Team Selected");
  };

  return (
    <>
      <div className="flex items-center justify-between w-full"></div>
      <div className="flex">
        <Input
          setObject={setPrize}
          object={prize}
          label="category"
          maxLength={30}
        />
        <Input
          setObject={setPrize}
          object={prize}
          label="name"
          maxLength={30}
        />
        <DropDown
          option={team}
          setOption={setTeam}
          options={teams}
          setOptions={setTeams}
        />
        <Button color="green" text="add" onClick={handleAdd} />
        {!edit && <Button color="green" text="edit" onClick={handleEdit} />}
        {edit && <Button color="green" text="save" onClick={handleSave} />}
      </div>
      <form className="flex items-center" onSubmit={handleSearch}>
        <Checkbox onClick={selectAll} toggle={toggle} />
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
        <FaTrashAlt
          onClick={handleDelete}
          size={22.5}
          className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150"
        />
      </form>
    </>
  );
};

export default Toolbar;
