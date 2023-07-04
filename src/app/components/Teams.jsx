"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Team from "./Team";

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
    teamName: "The couple",
    other: "Other information",
    tag: "winner",
    members: couple,
  },
  {
    teamName: "The deer",
    other: "Other information",
    tag: "winner",
    members: deer,
  },
  {
    teamName: "The couple",
    other: "Other information",
    tag: "qualify",
    members: couple,
  },
  {
    teamName: "The deer",
    other: "Other information",
    tag: "disqualify",
    members: deer,
  },
];

const Teams = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-[95%]">
        <div className="text-sm rounded-sm flex font-bold text-white bg-hackathon-blue-200 py-1.5">
          <p className="pl-[5%] w-[35%] m-0">Name</p>
          <p className="m-0">Other</p>
        </div>
        <Col>
          {teams.map((team, index) => (
            <Row key={index}>
              <Team
                teamName={team.teamName}
                other={team.other}
                tag={team.tag}
                members={team.members}
              />
            </Row>
          ))}
        </Col>
      </div>
    </div>
  );
};

export default Teams;
