"use client";
import { useEffect, useState } from "react";
import Checkbox from "../../Checkbox";
import Tag from "../Tag.jsx";
import { FaTrashAlt } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { COLORS } from "@/data/dynamic/Tags";
import Popup from "../Popup";
import Input from "../Input";
import axios from "axios";
import toast from "react-hot-toast";

const Toolbar = ({
  input,
  setInput,
  tags,
  setObjects,
  objects,
  filters,
  page,
}) => {
  const [popup, setPopup] = useState({
    title: "Delete Confirmation",
    text: "Are you sure you want to delete these row(s)? This action is irreversible.",
    color: "red",
    visible: false,
  });
  const [toggle, setToggle] = useState(false);

  const onClick = (value) => {
    setToggle(false);
    const items = objects.filter((object) => object.selected);
    axios.put(`/api/${page}`, {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setObjects(
      objects.map((a) => {
        let boolean = false;

        Object.values(filters).map(({ value, state }) => {
          if (
            a.status === value &&
            state &&
            a.name.toLowerCase().match(input.input.toLowerCase())
          ) {
            boolean = true;
          }
        });
        return { ...a, hidden: !boolean };
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
    const remove = objects.filter((object) => object.selected);
    const keep = objects.filter((object) => !object.selected);
    setObjects(keep);
    axios
      .put(`/api/${page}`, { objects: remove, attribute: "role" })
      .then(() => {
        toast("✅ Successfully Deleted");
      });
  };

  const handleReload = () => {
    axios.get(`/api/${page}`).then((response) => {
      setObjects(response.data.items);
      toast("✅ Fetched Data Successfully");
    });
  };

  useEffect(() => {
    handleReload();
  }, []);

  return (
    <div className="w-full flex items-center" data-cy="toolbar">
      <div className="w-2/3 flex items-center">
        <div className="mr-4" data-cy="select-all">
          <Checkbox onClick={selectAll} toggle={toggle} />
        </div>
        <div className="flex flex-row gap-2 ">
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
        <form className="flex ml-2 w-full items-center" onSubmit={handleSubmit}>
          <Input
            classes="w-full"
            object={input}
            setObject={setInput}
            clear={true}
            label="input"
            maxLength={60}
            placeholder="search"
            showLabel={false}
          />
        </form>
      </div>
      <FaUndoAlt
        size={22.5}
        onClick={handleReload}
        className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150 hover:cursor-pointer"
      />
      <div className="flex w-1/3">
        <FaTrashAlt
          data-cy="delete"
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
      </div>
    </div>
  );
};

export default Toolbar;
