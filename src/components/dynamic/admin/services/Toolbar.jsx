"use client";
import { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import DropDown from "./DropDown";
import Checkbox from "@/components/dynamic/Checkbox";
import Popup from "../Popup";
import { FaTrashAlt } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import axios from "axios";
import toast from "react-hot-toast";
import Tag from "../Tag.jsx";
import { COLORS } from "@/data/dynamic/Tags";

const reset = {
  category: "",
  prize: "",
  status: 0,
};

const Toolbar = ({ objects, setObjects, teams, setTeams, tags, empty }) => {
  const [team, setTeam] = useState({ name: empty, id: "" });
  const [backup, setBackup] = useState({ id: "" });
  const [toggle, setToggle] = useState(false);
  const [prize, setPrize] = useState(reset);
  const [edit, setEdit] = useState(false);
  const [popup, setPopup] = useState({
    title: "Delete Confirmation",
    text: "Are you sure you want to delete these row(s)? This action is irreversible.",
    color: "red",
    visible: false,
  });
  const [input, setInput] = useState({
    input: "",
  });

  const onClick = (value) => {
    setToggle(false);
    const items = objects.filter((object) => object.selected);
    axios.put(`/api/prizes`, {
      objects: items,
      status: value,
      attribute: "status",
    });
    setObjects(
      objects.map((a) => {
        if (a.selected) {
          a.status = value;
          a.selected = false;
        }
        return a;
      })
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setObjects(
      objects.map((group) => {
        let boolean = false;

        if (group.prize.toLowerCase().match(input.input.toLowerCase())) {
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
    const keep = objects.filter((object) => !object.selected);
    const remove = objects
      .filter((object) => object.selected)
      .map((object) => object.uid)
      .join(",");

    const teams = objects
      .filter((object) => object.selected)
      .map((object) => object.id)
      .join(",");

    setObjects(keep);
    axios
      .delete(`/api/prizes?ids=${remove}&teams=${teams}`)
      .then(() => toast("✅ Successfully deleted!"));
  };

  const handleAdd = () => {
    const formattedTeam = team.name === "No Team Selected" ? "" : team.name;

    const data = {
      ...prize,
      team: formattedTeam,
      id: team.id,
      uid: uuid(),
    };

    setObjects([...objects, data]);

    axios.post("/api/prizes", data).then(() => toast("✅ Prize Added!"));

    setPrize(reset);
    setTeam({ name: "No Team Selected", id: "" });
  };

  const handleEdit = () => {
    const prizes = objects.filter((a) => a.selected);
    if (prizes.length !== 1) {
      toast("❌ Select a prize!");
      return;
    }
    const prize = prizes[0];

    setPrize(prize);
    setTeam({
      name: prize.team === "" ? "No Team Selected" : prize.team,
      id: prize.id,
    });
    setBackup({ id: prize.id });
    setEdit(true);
  };

  const handleSave = () => {
    const data = {
      ...prize,
      team: team.name,
      id: team.id,
      backupId: backup.id,
    };

    setObjects(
      objects.map((a) => {
        if (a.uid === prize.uid) {
          a = data;
          a.selected = false;
        }
        return a;
      })
    );

    axios.put("/api/prizes", data).then(() => toast("✅ Prize Updated"));

    setPrize(reset);
    setTeam({ name: "No Team Selected", id: "" });
    setBackup({ id: "" });
    setEdit(false);
  };

  const load = () => {
    axios.get("/api/prizes").then((response) => {
      setObjects(response.data.items.prizes);
      setTeams(response.data.items.teams);
    });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <form className="flex items-center" onSubmit={handleSearch}>
        <div className="mr-4" data-cy="select-all">
          <Checkbox onClick={selectAll} toggle={toggle} />
        </div>
        <div className="flex flex-row gap-2">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.text}
              onClick={() => onClick(tag.value)}
              color={COLORS[tag.value]}
              setObjects={setObjects}
              objects={objects}
            />
          ))}
        </div>
        <Input
          classes="w-full ml-5"
          object={input}
          setObject={setInput}
          clear={true}
          label="input"
          maxLength={60}
          placeholder="search"
          showLabel={false}
        />
        <FaUndoAlt
          size={22.5}
          onClick={load}
          className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150 hover:cursor-pointer"
        />
        <FaTrashAlt
          onClick={() =>
            setPopup({
              ...popup,
              visible: true,
            })
          }
          size={22.5}
          className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150 hover:cursor-pointer"
        />
        {popup.visible && (
          <Popup
            popup={popup}
            onClick={handleDelete}
            setPopup={setPopup}
            text="confirm"
          />
        )}
      </form>
      <div className="flex gap-2">
        <Input
          setObject={setPrize}
          object={prize}
          label="category"
          maxLength={30}
        />
        <Input
          setObject={setPrize}
          object={prize}
          label="prize"
          maxLength={30}
        />
        <DropDown
          option={team}
          setOption={setTeam}
          options={teams}
          setOptions={setTeams}
          empty="no teams"
        />
        <Button color="green" text="add" onClick={handleAdd} disabled={edit} />
        {!edit && <Button color="green" text="edit" onClick={handleEdit} />}
        {edit && <Button color="green" text="save" onClick={handleSave} />}
      </div>
    </>
  );
};

export default Toolbar;
