"use client";
import React, { useState } from "react";
import Judge from "./Judge.jsx";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import AddJudgeForm from "./AddJudgeForm.jsx";

const judges = [
  {
    name: "Big Chungus",
    status: "confirm",
    type: "professor",
    email: "bigchungus101@email.com",
    selected: false,
  },
  {
    name: "Mario Kart",
    status: "confirm",
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

  const [filters, setFilters] = useState({
    pending: true,
    confirm: true,
    "not attending": true,
  });

  const tags = [
    {
      color: "gray",
      text: "pending",
    },
    {
      color: "green",
      text: "confirm",
    },

    {
      color: "red",
      text: "not attending",
    },
  ];
  const [headers, setHeaders] = useState({
    Name: { size: "w-1/4", icon: true, sort: "off" },
    Email: { size: "w-1/4", icon: false, sort: "off" },
    Type: { size: "w-1/4", icon: false, sort: "off" },
    Status: { size: "w-[10%]", icon: true, sort: "off" },
  });
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Judges" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredJudges}
          objects={judges}
          input={input}
        />
      </div>
      <AddJudgeForm
        filteredJudges={filteredJudges}
        setFilteredJudges={setFilteredJudges}
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
      <Table
        headers={headers}
        empty="No Judges Available"
        setHeaders={setHeaders}
        setFilteredObjects={setFilteredJudges}
        filteredObjects={filteredJudges}
      >
        {filteredJudges.map((judge, index) => (
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
        ))}
      </Table>
    </div>
  );
};
export default Judges;
