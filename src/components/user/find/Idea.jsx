import Tag from "@/components/admin/Tag";
import { COLORS } from "@/data/Tags";
import React from "react";

const Idea = ({ title, technologies, description, contact }) => {
  return (
    <div className="col-span-1 rounded-lg bg-white p-3">
      <p className="text-lg font-semibold">{title}</p>
      <div className="my-2 flex gap-3">
        {technologies.map((technology, index) => (
          <Tag key={index} text={technology} color={COLORS["green"]} />
        ))}
      </div>
      <p>{description}</p>

      <p className="my-2">
        <span className="font-semibold">Contact:</span> {contact}
      </p>
    </div>
  );
};

export default Idea;
