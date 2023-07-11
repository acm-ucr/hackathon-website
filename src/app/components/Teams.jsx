"use client";

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Team from "./Team";
import Filters from "@/app/components/Filters";
import SortIcon from "./SortIcon";
import Toolbar from "@/app/components/Toolbar";

const teams = [
  {
    uid: 1,
    name: "The couple",
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
        name: "Divyank Shah",
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
    name: "The couple",
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
  { name: "", size: "w-[6.5%]", icon: false },
  { name: "Name", size: "w-[18%]", icon: true },
  { name: "Email", size: "w-[17%]", icon: false },
  { name: "Links", size: "w-[39%]", icon: false },
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
      text: "winner",
      name: "Winner",
      onClick: () => {
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
      text: "disqualified",
      name: "Disqualify",
      onClick: () => {
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
    {
      text: "qualified",
      name: "Qualify",
      onClick: () => {
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
  ];

  return (
    <div>
      <Filters
        filters={filters}
        setFilters={setFilters}
        setfilteredObjects={setFilteredTeams}
        objects={teams}
        input={input}
      />
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredTeams}
        objects={filteredTeams}
        filters={filters}
        reset={teams}
      />
      <div className="text-sm rounded-sm flex font-bold text-white bg-hackathon-blue-200 py-1.5">
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
      <Col className="bg-white">
        {filteredTeams.map((team, index) => (
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
        ))}
      </Col>
    </div>
  );
};

export default Teams;
