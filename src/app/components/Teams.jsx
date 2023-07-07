"use client";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Team from "./Team";
import Filters from "@/app/components/Filters";
import SortIcon from "./SortIcon";

const deer = [
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
];

const couple = [
  {
    name: "Menthy Wu",
    email: "yhung022@ucr.edu",
  },
  {
    name: "Divyank Shah",
    email: "yhung022@ucr.edu",
  },
];

const teams = [
  {
    name: "The couple",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "winners",
    members: couple,
  },
  {
    name: "The deer",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "pending",
    members: deer,
  },
  {
    name: "The couple",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "qualified",
    members: couple,
  },
  {
    name: "The deer",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    status: "disqualified",
    members: deer,
  },
];

const headers = [
  { name: "", size: "w-1/12", icon: false },
  { name: "Name", size: "w-1/6", icon: true },
  { name: "Email", size: "w-1/6", icon: false },
  { name: "Status", size: "w-1/6", icon: true },
];

const Teams = () => {
  const [filteredTeams, setFilteredTeams] = useState(teams);

  const [filters, setFilters] = useState({
    disqualified: true,
    qualified: true,
    pending: true,
    winners: true,
  });

  const [sorts, setSorts] = useState({
    name: "down",
    team: "off",
    status: "off",
  });

  return (
    <div>
      <Filters
        filters={filters}
        setFilters={setFilters}
        setfilteredObjects={setFilteredTeams}
        objects={teams}
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
                objects={teams}
                reset={{
                  name: "off",
                  email: "off",
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
              teamName={team.name}
              github={team.github}
              devpost={team.devpost}
              status={team.status}
              members={team.members}
            />
          </Row>
        ))}
      </Col>
    </div>
  );
};

export default Teams;
