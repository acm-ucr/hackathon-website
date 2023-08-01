"use client";
import React, { useState } from "react";
import Judge from "./Judge.jsx";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import SortIcon from "./SortIcon.jsx";
const judges = [
  {
    uid: 1,
    name: "Big Chungus",
    status: "confirmed",
    type: "professor",
    email: "bigchungus101@email.com",
    selected: false,
  },
  {
    uid: 2,
    name: "Mario Kart",
    status: "confirmed",
    type: "student",
    email: "mariomoviegoated101@email.com",
    selected: false,
  },
  {
    uid: 3,
    name: "Ash Ketchum",
    type: "industry",
    status: "pending",
    email: "ash.ketchum12@email.com",
    selected: false,
  },
];

const Judges = () => {
  const [filteredJudges, setFilteredJudges] = useState(judges);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState({
    pending: true,
    confirmed: true,
  });
  const [sorts, setSorts] = useState({
    name: "down",
    team: "off",
    status: "off",
  });

  const tags = [
    {
      color: "green",
      text: "confirm",
      name: "confirm",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredJudges(
          filteredJudges.map((a) => {
            if (a.selected === true) {
              a.status = "confirmed";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      color: "red",
      text: "remove",
      name: "remove",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredJudges(
          filteredJudges.filter((a) => {
            if (a.selected !== true) {
              return a;
            }
          })
        );
      },
    },
    {
      color: "yellow",
      text: "pending",
      name: "pending",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredJudges(
          filteredJudges.map((a) => {
            if (a.selected === true) {
              a.status = "pending";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
  ];

  const headers = [
    { name: "", size: "w-[7%]", icon: false },
    { name: "Name", size: "w-1/5", icon: true },
    { name: "Email", size: "w-1/3", icon: false },
    { name: "Type", size: "w-1/5", icon: false },
    { name: "Status", size: "", icon: true },
  ];
  return (
    <div className="w-full">
      <div className="flex mb-3 mt-4">
        <Title title="Judges" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredJudges}
          objects={judges}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredJudges}
        objects={filteredJudges}
        filters={filters}
        reset={judges}
      />
      <div className="w-full flex bg-white rounded-2xl flex-col">
        <div className="w-full text-sm rounded-t-xl flex font-bold text-white bg-hackathon-blue-200 py-1.5">
          {headers.map((header, index) => (
            <div
              key={index}
              className={`${header.size} font-bold text-white flex items-center`}
            >
              {header.name}
              {header.icon && (
                <SortIcon
                  name={header.name.toLowerCase()}
                  sorts={sorts}
                  setSorts={setSorts}
                  setfilteredObjects={setFilteredJudges}
                  objects={filteredJudges}
                  reset={{
                    name: "off",
                    team: "off",
                    status: "off",
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col">
          {filteredJudges.map((judge, index) => (
            <Judge
              uid={judge.uid}
              setFilteredJudges={setFilteredJudges}
              filteredJudges={filteredJudges}
              key={index}
              name={judge.name}
              status={judge.status}
              type={judge.type}
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
