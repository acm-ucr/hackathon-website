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
  professor: {
    background: "bg-hackathon-judge-professor-bg",
    text: "text-hackathon-judge-professor-text",
  },
  student: {
    background: "bg-hackathon-judge-student-bg",
    text: "text-hackathon-judge-student-text",
  },
  industry: {
    background: "bg-hackathon-judge-student-bg",
    text: "text-hackathon-judge-student-text",
  },
  marketing: {
    background: "bg-hackathon-judge-professor-bg",
    text: "text-hackathon-judge-professor-text",
  },
  operations: {
    background: "bg-hackathon-judge-student-bg",
    text: "text-hackathon-judge-student-text",
  },
  sponsorship: {
    background: "bg-hackathon-judge-industry-bg",
    text: "text-hackathon-judge-industry-text",
  },
  directors: {
    background: "bg-hackathon-judge-industry-bg",
    text: "text-hackathon-judge-industry-text",
  },
};

const Tag = ({ color = "gray", text, name, onClick, withHover = true }) => {
  const inToolbar = withHover ? colors[color].hover : "";
  const pointCursor = withHover ? "hover:cursor-pointer" : "";
  return (
    <div
      className={`${colors[color].background} ${colors[color].text} ${inToolbar} ${pointCursor} whitespace-nowrap px-2 py-0.5 rounded-xl text-xs md:text-sm w-fit `}
      onClick={onClick}
    >
      {name ? name : text}
    </div>
  );
};

export default Tag;
