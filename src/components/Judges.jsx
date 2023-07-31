"use client";
import React, { useState } from "react";
import Judge from "./Judge.jsx";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";

const judges = [
  {
    uid: 1,
    name: "Big Chungus",
    status: "professor",
    email: "bigchungus101@email.com",
    selected: false,
  },
  {
    uid: 2,
    name: "Mario Kart",
    status: "student",
    email: "mariomoviegoated101@email.com",
    selected: false,
  },
  {
    uid: 3,
    name: "Ash Ketchum",
    status: "industry",
    email: "ash.ketchum12@email.com",
    selected: false,
  },
];

const Judges = () => {
  const [filteredJudges, setFilteredJudges] = useState(judges);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState({
    student: true,
    industry: true,
    professor: true,
  });

  const tags = [
    {
      text: "qualified",
      name: "student",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredJudges(
          filteredJudges.map((a) => {
            if (a.selected === true) {
              a.status = "student";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      text: "disqualified",
      name: "professor",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredJudges(
          filteredJudges.map((a) => {
            if (a.selected === true) {
              a.status = "professor";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      text: "winner",
      name: "industry",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredJudges(
          filteredJudges.map((a) => {
            if (a.selected === true) {
              a.status = "industry";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
  ];

  return (
    <div className="w-full">
      <Title title="Judges" />
      <Filters
        filters={filters}
        setFilters={setFilters}
        setfilteredObjects={setFilteredJudges}
        objects={judges}
        input={input}
      />
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredJudges}
        objects={filteredJudges}
        filters={filters}
        reset={judges}
      />
      <div className="flex bg-white rounded-2xl flex-col">
        <div className="bg-hackathon-blue-200 flex text-white font-bold text-xl justify-around font-poppins items-center rounded-t-2xl">
          <p className="">Name</p> <p className="">Email</p>{" "}
          <p className="">Type</p>
        </div>
        <div className=" flex flex-col">
          {filteredJudges.map((judge, index) => (
            <Judge
              uid={judge.uid}
              setFilteredJudges={setFilteredJudges}
              filteredJudges={filteredJudges}
              key={index}
              name={judge.name}
              type={judge.status}
              email={judge.email}
              selected={judge.selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Judges;
