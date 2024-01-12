"use client";
import { useState } from "react";
import Tag from "../../Tag";
import Modal from "./Modal";
import { COLORS } from "@/data/dynamic/Tags";

const View = ({ title, src }) => {
  const [modal, setModal] = useState(null);

  console.log("\n\n\n\n\nhere at view.jsx\n\n\n\n\n\n");

  const onClick = () => {
    setModal({ src, title });
  };

  return (
    <>
      {console.log("######################\nbro show up pleaseeee")}
      {console.log(src)}
      {modal && <Modal data={modal} setModal={setModal} />}
      <Tag onClick={onClick} text="view" color={COLORS["gray"]} />
    </>
  );
};

export default View;
