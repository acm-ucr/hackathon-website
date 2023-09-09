"use client";
import { useState } from "react";
import Checkbox from "../../Checkbox";
import { HiSearch } from "react-icons/hi";
import Tag from "../Tag.jsx";
import { FaDownload, FaTrashAlt } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { colors } from "@/data/Tags";
import Popup from "../Popup";

const convert = (input) => {
  if (Array.isArray(input)) {
    return input.join(", ");
  } else if (typeof input === "object") {
    return Object.values(input).join(", ");
  }
  return input;
};

const Toolbar = ({
  input,
  setInput,
  tags,
  setObjects,
  objects,
  filters,
  file,
  headers,
}) => {
  const [popup, setPopup] = useState({
    title: "Delete Confirmation",
    text: "Are you sure you want to delete these row(s)? This action is irreversible.",
    color: "red",
    visible: false,
  });
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

  const blacklist = ["uid", "selected", "hidden", "links", "dropdown", ""];

  const mapObjectsToCSVData = (objects = [], blacklist, headers = []) => {
    const columns = headers.reduce((res, header) => {
      if (!blacklist.includes(header.text)) {
        return res.concat(header.text);
      }
      return res;
    }, []);
    const data = [columns];
    objects.forEach((item) => {
      const row = columns.map((key) => convert(item[key]));
      data.push(row);
    });
    return data;
  };

  const data = mapObjectsToCSVData(objects, blacklist, headers);

  const handleDelete = () => {
    setObjects(objects.filter((object) => !object.selected));
  };

  const date = new Date()
    .toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(/,/g, "")
    .replace(/\s+/g, "_");

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
        <Tag text="reset" onClick={handleReset} color="gray" />
      </div>
      <div className="flex w-1/3">
        <button
          data-cy="delete"
          onClick={() =>
            setPopup({
              ...popup,
              visible: true,
            })
          }
        >
          <FaTrashAlt
            size={22.5}
            className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150"
          />
        </button>
        {popup.visible && (
          <Popup popup={popup} onClick={handleDelete} setPopup={setPopup} />
        )}
      </div>
      <CSVLink
        data={data}
        filename={`${process.env.NEXT_PUBLIC_HACKATHON}_${date}_${file}.csv`}
        className="hover:cursor-pointer"
      >
        <FaDownload
          size={22.5}
          className="ml-4 text-hackathon-gray-300 hover:opacity-70 duration-150"
        />
      </CSVLink>
    </div>
  );
};

export default Toolbar;
