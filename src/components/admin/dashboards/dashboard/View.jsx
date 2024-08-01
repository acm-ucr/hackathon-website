"use client";
import { useState } from "react";
import Tag from "../../Tag";
import Modal from "./Modal";
import { COLORS } from "@/data/Tags";
import { Download } from "lucide-react";
import { download } from "@/utils/download";

const View = ({ title, src }) => {
  const [modal, setModal] = useState(null);

  return (
    <div className="flex w-full items-center justify-between">
      {modal && <Modal data={modal} setModal={setModal} />}
      <Tag
        onClick={() => setModal({ src, title })}
        text="view"
        color={COLORS["gray"]}
      />
      <Download
        className={`h-full hover:cursor-pointer hover:opacity-70`}
        onClick={() => download(src, `${title.replace(" ", "_")}.png`)}
      />
    </div>
  );
};

export default View;
