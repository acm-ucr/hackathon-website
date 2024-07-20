"use client";
import { useState } from "react";
import Tag from "../../Tag";
import Modal from "./Modal";
import { COLORS } from "@/data/Tags";
import { FaDownload } from "react-icons/fa";
import Popup from "../../Popup";
import { performDownload } from "@/utils/utils";

const View = ({ title, src }) => {
  const [modal, setModal] = useState(null);

  const [popup, setPopup] = useState({
    title: "Download Confirmation",
    text: "Are you sure you want to download this image?",
    color: "blue",
    button: "confirm",
    visible: false,
  });

  const confirmDownload = () => setPopup({ ...popup, visible: true });

  return (
    <div className="w-full flex justify-between items-center">
      {modal && <Modal data={modal} setModal={setModal} />}
      <Tag
        onClick={() => setModal({ src, title })}
        text="view"
        color={COLORS["gray"]}
      />
      <FaDownload
        className={`h-full hover:cursor-pointer hover:opacity-70`}
        onClick={confirmDownload}
      />

      {popup.visible && (
        <Popup
          popup={popup}
          onClick={() => performDownload(src)}
          setPopup={setPopup}
          text={popup.button}
        />
      )}
    </div>
  );
};

export default View;
