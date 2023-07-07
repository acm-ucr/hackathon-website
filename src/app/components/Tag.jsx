import React from "react";

const colors = {
  red: {
    background: "bg-hackathon-tags-red-bg",
    text: "text-hackathon-tags-red-text",
  },

  yellow: {
    background: "bg-hackathon-tags-yellow-bg",
    text: "text-hackathon-tags-yellow-text",
  },

  green: {
    background: "bg-hackathon-tags-green-bg",
    text: "text-hackathon-tags-green-text",
  },

  gray: {
    background: "bg-hackathon-tags-gray-bg",
    text: "text-hackathon-tags-gray-text",
  },
};

const Tag = ({ text, name, onClick }) => {
  const color =
    text === "disqualified" || text === "rejected"
      ? colors["red"]
      : text === "winner"
      ? colors["yellow"]
      : text === "qualified" || text === "accepted"
      ? colors["green"]
      : text === "pending"
      ? colors["gray"]
      : undefined;

  return (
    <div
      className={`${color.background} ${color.text} px-2 py-1 rounded w-fit`}
      onClick={onClick}
    >
      {text}
      {name}
    </div>
  );
};

export default Tag;
