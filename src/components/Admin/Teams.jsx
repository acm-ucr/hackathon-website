"use client";

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Team from "./Team";
import Filters from "@/components/Admin/Filters";
import SortIcon from "./SortIcon";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
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
    status: "qualified",
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
    status: "disqualified",
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

const headers = [
  { name: "", size: "w-[7%]", icon: false },
  { name: "Name", size: "w-[18%]", icon: true },
  { name: "Email", size: "w-1/5", icon: false },
  { name: "Links", size: "w-[41%]", icon: false },
  { name: "Status", size: "", icon: true },
];

const Teams = () => {
  const [filteredTeams, setFilteredTeams] = useState(teams);
  const [input, setInput] = useState("");

  const [sorts, setSorts] = useState({
    name: "down",
    team: "off",
    status: "off",
  });

  const [filters, setFilters] = useState({
    disqualified: true,
    qualified: true,
    pending: true,
    winner: true,
  });

  const tags = [
    {
      color: "green",
      text: "qualified",
      name: "Qualify",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredTeams(
          filteredTeams.map((a) => {
            if (a.selected === true) {
              a.status = "qualified";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      color: "purple",
      text: "winner",
      name: "Winner",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredTeams(
          filteredTeams.map((a) => {
            if (a.selected === true) {
              a.status = "winner";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      color: "red",
      text: "disqualified",
      name: "Disqualify",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredTeams(
          filteredTeams.map((a) => {
            if (a.selected === true) {
              a.status = "disqualified";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
  ];

  return (
    <div className="max-h-[80%] font-poppins">
      <div className="flex pb-3 pt-4">
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
        file="TEAMS.csv"
      />
      <div className=" py-2 text-sm rounded-t-xl flex text-white bg-hackathon-blue-200">
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
                setfilteredObjects={setFilteredTeams}
                objects={filteredTeams}
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
      <Col className="bg-white last:rounded-b-2xl">
        {filteredTeams.length != 0 ? (
          filteredTeams.map((team, index) => (
            <Row key={index}>
              <Team
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
            </Row>
          ))
        ) : (
          <p className=" text-hackathon-darkgray font-poppins bg-white p-4 text-center rounded-b-2xl w-full">
            No team to display
          </p>
        )}
      </Col>
    </div>
  );
};

export default Teams;
