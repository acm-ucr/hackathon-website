import Tag from "@/components/admin/Tag";
import { COLORS } from "@/data/Tags";
import React from "react";

const Idea = ({ title, technologies, description, contact }) => {
  return (
    <div className="col-span-1 bg-white p-3 rounded-lg">
      <p className="text-lg font-semibold">{title}</p>
      <div className="flex gap-3 my-2">
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
