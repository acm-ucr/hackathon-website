"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import SortIcon from "./SortIcon";
import Filters from "@/app/components/Filters";
import Checkbox from "./Checkbox";
import Tag from "./Tag";

const participants = [
  {
    name: "Menthy Wu",
    email: "yhung022@ucr.edu",
    team: "Deers",
    major: "Computer Science",
    status: "pending",
  },
  {
    name: "Divyank Shah",
    email: "yhung022@ucr.edu",
    team: "Deers",
    major: "Computer Science",
    status: "accepted",
  },
  {
    name: "Shing Hung",
    email: "yhung022@ucr.edu",
    team: "Deers",
    major: "Electrical Engineering",
    status: "rejected",
  },
  {
    name: "Sachin Chopra",
    email: "yhung022@ucr.edu",
    team: "Deers",
    major: "Computer Science",
    status: "accepted",
  },
];

const headers = [
  { name: "", size: "w-[9%]", icon: false },
  { name: "Name", size: "w-1/5", icon: true },
  { name: "Email", size: "w-1/5", icon: true },
  { name: "Team", size: "w-1/6", icon: true },
  { name: "Major", size: "w-1/5", icon: true },
  { name: "Status", size: "w-1/6", icon: true },
];

const Participants = () => {
  const [filteredParticipants, setfilteredParticipants] =
    useState(participants);

  const [sorts, setSorts] = useState({
    name: "down",
    email: "off",
    team: "off",
    major: "off",
    status: "off",
  });

  const [filters, setFilters] = useState({
    rejected: true,
    accepted: true,
    pending: true,
  });

  return (
    <div className="font-poppins">
      <Filters
        filters={filters}
        setFilters={setFilters}
        setfilteredObjects={setfilteredParticipants}
        objects={participants}
      />
      <div className="flex bg-hackathon-blue-200 py-2 rounded-t !z-[1000]">
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
                setfilteredObjects={setfilteredParticipants}
                objects={filteredParticipants}
                reset={{
                  name: "off",
                  email: "off",
                  team: "off",
                  major: "off",
                  status: "off",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <Accordion>
        {filteredParticipants.map((participant, index) => {
          return (
            <Accordion.Item
              eventKey={index}
              key={index}
              className="!rounded-none"
            >
              <Accordion.Header className=" w-full font-normal text-start">
                <div className="w-[7%]">
                  <Checkbox />
                </div>
                <div className="w-1/5">{participant.name}</div>
                <div className="w-[21%]">{participant.email}</div>
                <div className="w-1/6">{participant.team}</div>
                <div className="w-1/5">{participant.major}</div>
                <div className="w-[5%]">
                  <Tag text={participant.status} />
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Participants;
