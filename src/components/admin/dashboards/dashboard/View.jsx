"use client";
import { useState } from "react";
import Tag from "../../Tag";
import Modal from "./Modal";
import { COLORS } from "@/data/Tags";

const View = ({ title, src }) => {
  const [modal, setModal] = useState(null);

  const onClick = () => {
    setModal({ src, title });
  };

  return (
    <>
      {modal && <Modal data={modal} setModal={setModal} />}
      <Tag onClick={onClick} text="view" color={COLORS["gray"]} />
    </>
  );
};

export default View;
