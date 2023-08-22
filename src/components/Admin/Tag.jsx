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
  purple: {
    background: "bg-hackathon-tags-purple-bg",
    text: "text-hackathon-tags-purple-text",
    hover: "hover:shadow-[inset_0px_0px_0px_2px_#825ED0]",
  },
  grayblue: {
    background: "bg-hackathon-tags-grayblue-bg",
    text: "text-hackathon-tags-grayblue-text",
  },
  teal: {
    background: "bg-hackathon-tags-teal-bg",
    text: "text-hackathon-tags-teal-text",
  },
  lightgreen: {
    background: "bg-hackathon-tags-lightgreen-bg",
    text: "text-hackathon-tags-lightgreen-text",
  },
  pink: {
    background: "bg-hackathon-tags-pink-bg",
    text: "text-hackathon-tags-pink-text",
  },
};

const Tag = ({ color = "gray", text, onClick, classes }) => {
  return (
    <div
      className={`${classes} ${colors[color].background} ${
        colors[color].text
      } ${
        onClick && `hover:cursor-pointer ${colors[color].hover}`
      } whitespace-nowrap px-2 py-0.5 rounded-full text-xs md:text-sm w-fit m-0`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Tag;
