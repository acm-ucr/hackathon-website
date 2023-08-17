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
    background: "bg-hackathon-judge-industry-bg",
    text: "text-hackathon-judge-industry-text",
  },
};

const Tag = ({
  color = "gray",
  text,
  withHover = true,
  setFilteredObjects,
  filteredObjects,
}) => {
  const onClick = () => {
    if (!withHover) return;
    setFilteredObjects(
      filteredObjects.map((a) => {
        if (a.selected) {
          a.status = text.toLowerCase();
          a.selected = false;
        }
        return a;
      })
    );
  };
  return (
    <div className="w-full">
      <div
        className={`${colors[color].background} ${colors[color].text} ${
          withHover && `hover:cursor-pointer ${colors[color].hover}`
        } whitespace-nowrap px-2 py-0.5 rounded-full text-xs md:text-sm w-fit`}
        onClick={onClick}
      >
        {text}
      </div>
    </div>
  );
};

export default Tag;
