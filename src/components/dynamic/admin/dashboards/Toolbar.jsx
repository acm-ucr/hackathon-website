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
import { useRouter } from "next/navigation";

const Toolbar = ({
  input,
  setInput,
  tags,
  setObjects,
  objects,
  filters,
  page,
}) => {
  const router = useRouter();

  const [popup, setPopup] = useState({
    title: "",
    text: "",
    color: "",
    visible: false,
    onClick: () => {},
    button: "",
  });

  const [toggle, setToggle] = useState(false);

  const onClick = (value) => {
    const winners = objects.some((obj) => obj.selected && obj.status === 2);

    if (winners) {
      setPopup({
        title: "Status Change Restricted",
        text: "Changing status from 'winner' is restricted. You can check the prizes page for more information.",
        color: "green",
        visible: true,
        onClick: () => router.push("/admin/prizes"),
        button: "prizes",
      });
      setObjects(
        objects.map((a) => {
          if (a.selected) {
            a.selected = false;
          }
          return a;
        })
      );
      return;
    }

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
      <div className="w-11/12 flex items-center">
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

      <div className="flex">
        <FaTrashAlt
          data-cy="delete"
          onClick={() => {
            const winners = objects.some(
              (obj) => obj.selected && obj.status === 2
            );

            if (winners) {
              setPopup({
                title: "Status Change Restricted",
                text: "Changing status from 'winner' is restricted. You can check the prizes page for more information.",
                color: "green",
                visible: true,
                onClick: () => router.push("/admin/prizes"),
                button: "prizes",
              });
              setObjects(
                objects.map((a) => {
                  if (a.selected) {
                    a.selected = false;
                  }
                  return a;
                })
              );
              return;
            }

            if (objects.filter((a) => a.selected).length === 0) {
              toast("❌ Select row(s) before pressing the delete button");
              return;
            }
            setPopup({
              title: "Delete Confirmation",
              text: "Are you sure you want to delete these row(s)? This action is irreversible.",
              color: "red",
              visible: true,
              onClick: handleDelete,
              button: "confirm",
            });
          }}
          size={22.5}
          className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150 hover:cursor-pointer"
        />
        {popup.visible && (
          <Popup
            popup={popup}
            onClick={popup.onClick}
            setPopup={setPopup}
            text={popup.button}
          />
        )}
      </div>
    </div>
  );
};

export default Toolbar;
