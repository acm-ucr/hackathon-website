"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import SortIcon from "./SortIcon";
import Filters from "@/app/components/Filters";
import Participant from "./Participant";

const participants = [
  {
    name: "Menthy Wu",
    email: "a",
    team: "b",
    major: "Computer Science",
    status: "pending",
  },
  {
    name: "Divyank Shah",
    email: "b",
    team: "c",
    major: "Computer Science",
    status: "accepted",
  },
  {
    name: "Shing Hung",
    email: "c",
    team: "d",
    major: "Computer Science",
    status: "rejected",
  },
  {
    name: "Sachin Chopra",
    email: "d",
    team: "a",
    major: "Computer Science",
    status: "accepted",
  },
];

const headers = [
  { name: "", size: "w-1/12", icon: false },
  { name: "Name", size: "w-1/6", icon: true },
  { name: "Email", size: "w-1/6", icon: true },
  { name: "Team", size: "w-1/6", icon: true },
  { name: "Major", size: "w-1/6", icon: true },
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
        {filteredParticipants.map((participant, index) => (
          <Participant key={index} participant={participant} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default Participants;
