"use client";
import { api } from "@/utils/api";
import { useState, useEffect } from "react";
import { FaTrashAlt, FaUndoAlt } from "react-icons/fa";
import toaster from "@/utils/toaster";
import Popup from "../../Popup";
import Tag from "../../Tag";
import { COLORS } from "@/data/dynamic/Tags";
import Input from "../../Input";

const Toolbar = ({
  page,
  filters,
  setFilters,
  data,
  setData,
  tags,
  getFilteredSelectedRowModel,
  toggleAllRowsSelected,
}) => {
  const selectedRows = getFilteredSelectedRowModel();

  const rows = selectedRows.rows.map(({ original }) => original);

  const [popup, setPopup] = useState({
    title: "",
    text: "",
    color: "",
    visible: false,
    onClick: () => {},
    button: "",
  });

  const handleReload = async () => {
    setData([]);
    api({
      method: "GET",
      url: `/api/dashboard/${page}`,
    }).then(({ items }) => {
      setData(items);
      toaster("Fetched Data Successfully", "success");
    });
  };

  const handleDelete = () => {
    const ids = rows.map(({ uid }) => uid);
    const keep = data.filter(({ uid }) => !ids.includes(uid));

    setData(keep);
    api({
      method: "DELETE",
      url: `/api/dashboard/${page}?remove=${ids.join(",")}`,
    }).then(() => {
      toaster("Successfully Deleted", "success");
      toggleAllRowsSelected(false);
    });
  };

  const confirmDelete = () => {
    if (rows.length === 0) {
      toaster("No rows selected for deletion.", "error");
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
  };

  const onClick = (value) => {
    if (rows.length === 0) {
      toaster("No items selected.", "error");
      return;
    }

    const notPending = rows.some((obj) => obj.status !== 0);

    if (notPending) {
      toaster("Only pending items can be changed!", "error");
      toggleAllRowsSelected(false);
      return;
    }

    api({
      method: "PUT",
      url: `/api/dashboard/${page}`,
      body: {
        objects: rows,
        status: value,
        attribute: "status",
      },
    })
      .then(() => {
        const ids = rows.map(({ uid }) => uid);

        setData(
          data.map((a) => {
            if (ids.includes(a.uid)) a.status = value;
            return a;
          })
        );

        toggleAllRowsSelected(false);

        toaster("Operation Completed", "success");
      })
      .catch(() => toaster("Operation Failed", "error"));
  };

  useEffect(() => {
    handleReload();
  }, []);

  const value = filters.find(({ id }) => id === "name")?.value || "";

  const onChange = (id, value) =>
    setFilters((prev) =>
      prev.filter(({ id }) => id !== "name").concat({ id, value })
    );

  return (
    <div className="flex items-center my-2 gap-3" data-cy="toolbar">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          text={tag.text}
          onClick={() => onClick(tag.value)}
          color={COLORS[tag.value]}
        />
      ))}
      <Input
        label="search"
        classes="w-full"
        placeholder="Search"
        showLabel={false}
        maxLength={100}
        clear={true}
        value={value}
        onChangeFn={(e) => onChange("name", e.target.value)}
        clearFn={() => onChange("name", "")}
      />
      <div>
        Rows:<span className="mx-2">{data.length}</span>
      </div>
      <FaUndoAlt
        size={22.5}
        onClick={handleReload}
        className="text-hackathon-gray-300 hover:opacity-70 duration-150 hover:cursor-pointer"
      />
      <FaTrashAlt
        data-cy="delete"
        onClick={confirmDelete}
        size={22.5}
        className="text-hackathon-gray-300 hover:opacity-70 duration-150 hover:cursor-pointer mx-2"
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
  );
};

export default Toolbar;
