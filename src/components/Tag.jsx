import React from "react";

const colors = {
  red: {
    background: "bg-hackathon-tags-red-bg",
    text: "text-hackathon-tags-red-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#F07167]",
  },

  yellow: {
    background: "bg-hackathon-tags-yellow-bg",
    text: "text-hackathon-tags-yellow-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#FFB81C]",
  },

  green: {
    background: "bg-hackathon-tags-green-bg",
    text: "text-hackathon-tags-green-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]",
  },

  gray: {
    background: "bg-hackathon-tags-gray-bg",
    text: "text-hackathon-tags-gray-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#969696]",
  },
};

const Tag = ({ text, name, onClick, withHover = true }) => {
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
  const inToolbar = withHover ? color.hover : "";
  const pointCursor = withHover ? "hover:cursor-pointer" : "";
  return (
    <div
      className={`${color.background} ${color.text} ${inToolbar} ${pointCursor} px-2 rounded-full text-base w-fit `}
      onClick={onClick}
    >
      {name ? name : text}
    </div>
  );
};

export default Tag;
