"use client";
import React from "react";
import Checkbox from "./Checkbox";
import Card from "react-bootstrap/Card";
const colors = {
  professor: {
    bg: "bg-hackathon-judge-professor-bg",
    text: "text-hackathon-judge-professor-text",
  },
  student: {
    bg: "bg-hackathon-judge-student-bg",
    text: "text-hackathon-judge-student-text",
  },
  industry: {
    bg: "bg-hackathon-judge-student-bg",
    text: "text-hackathon-judge-student-text",
  },
};

const Judge = ({ type, name, email }) => {
  const toggle = false;
  const dummy = () => {
    return 0;
  };
  const color = colors[type] || {};
  const { bg, text } = color;
  return (
    <Card className="flex flex-row items-center !rounded-none border-t-0">
      <div className=" ml-4 w-[11%]">
        <Checkbox onClick={dummy} toggle={toggle} />
      </div>

      <div className="text-xl w-[34%] my-2">{name}</div>
      <div className="w-[28%]">
        <div
          className={`${bg} ${text} px-4 text-xl rounded-full w-fit bg-opacity-20`}
        >
          <div>{type}</div>
        </div>
      </div>
      <div className="text-lg w-[27%] mr-4">{email}</div>
    </Card>
  );
};

export default Judge;
