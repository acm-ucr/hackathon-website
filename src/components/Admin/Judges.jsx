"use client";
import React, { useState } from "react";
import Judge from "./Judge.jsx";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import SortIcon from "./SortIcon.jsx";
import Radio from "../Radio.jsx";
import { Col } from "react-bootstrap";

const judgeType = ["student", "professor", "industry"];

const judges = [
  {
    name: "Big Chungus",
    status: "confirmed",
    type: "professor",
    email: "bigchungus101@email.com",
    selected: false,
  },
  {
    name: "Mario Kart",
    status: "confirmed",
    type: "student",
    email: "mariomoviegoated101@email.com",
    selected: false,
  },
  {
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
  const [judge, setJudge] = useState({
    name: "",
    type: "",
    status: "pending",
    email: "",
    selected: false,
  });

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
      color: "yellow",
      text: "pending",
      name: "Pending",
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
    {
      color: "green",
      text: "confirm",
      name: "Confirm",
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
      text: "not attending",
      name: "Not Attending",
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
  ];

  const headers = [
    { name: "", size: "w-[7%]", icon: false },
    { name: "Name", size: "w-1/5", icon: true },
    { name: "Email", size: "w-1/3", icon: true },
    { name: "Type", size: "w-1/5", icon: true },
    { name: "Status", size: "", icon: true },
  ];
  return (
    <div className="w-full font-poppins">
      <div className="flex pb-3 pt-4">
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
        file="JUDGES.csv"
      />
      <div className="max-h-[80%] w-full flex bg-white rounded-2xl flex-col">
        <div className="w-full text-sm rounded-t-xl flex font-poppins text-white bg-hackathon-blue-200 py-2">
          {headers.map((header, index) => (
            <div
              key={index}
              className={`${header.size} font-semibold text-white flex items-center`}
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
        <div className="w-full flex flex-col ">
          {filteredJudges.length != 0 ? (
            filteredJudges.map((judge, index) => (
              <Judge
                setFilteredJudges={setFilteredJudges}
                filteredJudges={filteredJudges}
                key={index}
                name={judge.name}
                status={judge.status}
                type={judge.type}
                email={judge.email}
                selected={judge.selected}
              />
            ))
          ) : (
            <p className="m-0 bg-white rounded-b-2xl p-4 text-center w-full text-hackathon-darkgray">
              No judges to display
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center mx-10">
        <div className="font-light text-sm mt-3">name</div>
        <form>
          <input
            className="w-3/5 bg-hackathon-gray rounded-full focus:outline-none mx-12 mt-3"
            value={judge.name}
            onChange={(e) => setJudge({ ...judge, name: e.target.value })}
          />
        </form>
        <div className="font-light text-sm mt-3">email</div>
        <form>
          <input
            className="w-3/5 bg-hackathon-gray rounded-full focus:outline-none mx-12 mt-3"
            value={judge.email}
            onChange={(e) => setJudge({ ...judge, email: e.target.value })}
          />
        </form>
        <Col xl={4} className="text-xs font-light">
          <Radio
            options={judgeType}
            field="type"
            user={judge}
            setUser={setJudge}
          />
        </Col>
        <button
          className="text-white whitespace-nowrap px-10 py-1 hover:opacity-50 text-xs font-semibold w-fit rounded-xl bg-hackathon-green-300 mt-3"
          onClick={() => setFilteredJudges([...filteredJudges, judge])}
        >
          add judge
        </button>
      </div>
    </div>
  );
};
export default Judges;
