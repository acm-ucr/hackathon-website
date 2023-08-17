"use client";

import React, { useState } from "react";
import Team from "./Team";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
const teams = [
  {
    uid: 1,
    name: "The team",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "winner",
    selected: false,
    members: [
      {
        name: "Menthy Wu",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Mengxuan Wu",
        email: "yhung022@ucr.edu",
      },
    ],
  },
  {
    uid: 2,
    name: "The deer",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "pending",
    selected: false,
    members: [
      {
        name: "Blip Gunnels",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Bling Gunnels",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Shing Hung",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Cheuy Cheu",
        email: "yhung022@ucr.edu",
      },
    ],
  },
  {
    uid: 3,
    name: "The team",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "qualify",
    selected: false,
    members: [
      {
        name: "Menthy Wu",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Divyank Shah",
        email: "yhung022@ucr.edu",
      },
    ],
  },
  {
    uid: 4,
    name: "The deer",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "disqualify",
    selected: false,
    members: [
      {
        name: "Blip Gunnels",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Bling Gunnels",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Shing Hung",
        email: "yhung022@ucr.edu",
      },
      {
        name: "Cheuy Cheu",
        email: "yhung022@ucr.edu",
      },
    ],
  },
];

const Teams = () => {
  const [filteredTeams, setFilteredTeams] = useState(teams);
  const [input, setInput] = useState("");

  const [filters, setFilters] = useState({
    disqualify: true,
    qualify: true,
    pending: true,
    winner: true,
  });

  const tags = [
    {
      color: "green",
      text: "qualify",
    },
    {
      color: "purple",
      text: "winner",
    },
    {
      color: "red",
      text: "disqualify",
    },
  ];

  const [headers, setHeaders] = useState({
    Name: { size: "w-1/5", icon: true, sort: "off" },
    Email: { size: "w-1/5", icon: false, sort: "off" },
    Links: { size: "w-[40%]", icon: false, sort: "off" },
    Status: { size: "w-[10%]", icon: true, sort: "off" },
  });
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Teams" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredTeams}
          objects={teams}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredTeams}
        objects={filteredTeams}
        filters={filters}
        reset={teams}
      />
      <Table
        headers={headers}
        empty="No Teams Available"
        setHeaders={setHeaders}
        setFilteredObjects={setFilteredTeams}
        filteredObjects={filteredTeams}
      >
        {filteredTeams.map((team, index) => (
          <Team
            key={index}
            uid={team.uid}
            teamName={team.name}
            github={team.github}
            devpost={team.devpost}
            status={team.status}
            members={team.members}
            selected={team.selected}
            filteredTeams={filteredTeams}
            setFilteredTeams={setFilteredTeams}
          />
        ))}
      </Table>
    </div>
  );
};

export default Teams;
