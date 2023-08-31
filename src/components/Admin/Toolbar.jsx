"use client";
import { useState } from "react";
import Checkbox from "../Checkbox";
import { HiSearch } from "react-icons/hi";
import Tag from "./Tag.jsx";
import { FaDownload, FaTrashAlt } from "react-icons/fa";
import { colors } from "@/data/Tags";
import Popup from "./Popup";

const Toolbar = ({ input, setInput, tags, setObjects, objects, filters }) => {
  const [popup, setPopup] = useState("");
  const [toggle, setToggle] = useState(false);
  const onClick = (text) => {
    setToggle(false);
    setObjects(
      objects.map((a) => {
        if (a.selected) {
          a.status = text.toLowerCase();
          a.selected = false;
        }
        return a;
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      handleReset();
      return;
    }
    setObjects(
      objects.map((a) => {
        let boolean = false;

        Object.entries(filters).map(([filter, value]) => {
          if (
            a.status === filter &&
            value &&
            a.name.toLowerCase().match(input.toLowerCase())
          ) {
            boolean = true;
          }
        });
        return { ...a, hidden: !boolean };
      })
    );
  };

  const handleReset = () => {
    setInput("");
    setObjects(
      objects.map((a) => {
        let boolean = false;

        Object.entries(filters).map(([filter, value]) => {
          if (a.status === filter && value) {
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
    setObjects(objects.filter((object) => !object.selected));
  };
  return (
    <div className="w-full flex items-center">
      <div className="w-2/3 flex items-center">
        <div className="mr-4">
          <Checkbox onClick={selectAll} toggle={toggle} />
        </div>
        <div className="flex flex-row gap-2 ">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.text}
              name={tag.name}
              onClick={() => onClick(tag.text)}
              color={colors[tag.text]}
              setObjects={setObjects}
              objects={objects}
            />
          ))}
        </div>
        <form className="flex ml-2 w-full items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            className="px-2 py-1 w-full bg-hackathon-gray-100 rounded-full focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="focus:outline-none">
            <HiSearch
              size={30}
              className="ml-2 text-hackathon-gray-300 hover:opacity-70 duration-150"
            />
          </button>
        </form>
        <button
          onClick={handleReset}
          className={
            "bg-hackathon-tags-gray-bg text-hackathon-tags-gray-text hover:shadow-[inset_0px_0px_0px_2px_#969696] px-2 rounded-full text-base w-fit hover:cursor-pointer"
          }
        >
          Reset
        </button>
      </div>
      <button>
        <FaDownload
          size={22.5}
          className="ml-4 text-hackathon-gray-300 hover:opacity-70 duration-150"
        />
      </button>
      <button
        onClick={() =>
          setPopup(
            "Are you sure you want to delete these row(s)? This action is irreversible."
          )
        }
      >
        <FaTrashAlt
          size={22.5}
          className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150"
        />
      </button>
      {popup && (
        <Popup
          buttonColor="red"
          text={popup}
          callBack={handleDelete}
          setText={setPopup}
          title="Delete Confirmation"
        />
      )}
    </div>
  );
};

export default Toolbar;
