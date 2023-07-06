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
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    tag: "winner",
    members: couple,
  },
  {
    teamName: "The deer",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    tag: "winner",
    members: deer,
  },
  {
    teamName: "The couple",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    tag: "qualify",
    members: couple,
  },
  {
    teamName: "The deer",
    github: "https://github.com",
    devpost: "https://rose-hack-2021.devpost.com",
    tag: "disqualify",
    members: deer,
  },
];

const Teams = () => {
  return (
    <div>
      <div className="text-sm rounded-sm flex font-bold text-white bg-hackathon-blue-200 py-1.5">
        <p className="pl-[5%] w-[35%] m-0">Name</p>
        <p className="m-0">Links</p>
      </div>
      <Col className="bg-white">
        {teams.map((team, index) => (
          <Row key={index}>
            <Team
              teamName={team.teamName}
              github={team.github}
              devpost={team.devpost}
              tag={team.tag}
              members={team.members}
            />
          </Row>
        ))}
      </Col>
    </div>
  );
};

export default Teams;
