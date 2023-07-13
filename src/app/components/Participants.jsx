"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import SortIcon from "./SortIcon";
import Filters from "@/app/components/Filters";
import Participant from "./Participant";
import Toolbar from "@/app/components/Toolbar";

const participants = [
  {
    uid: "1",
    name: "Menthy Wu",
    email: "yhung022@ucr.edu",
    team: "b",
    major: "Computer Science",
    status: "pending",
    selected: false,
  },
  {
    uid: "2",
    name: "Divyank Shah",
    email: "yhung022@ucr.edu",
    team: "c",
    major: "Computer Science",
    status: "accepted",
    selected: false,
  },
  {
    uid: "3",
    name: "Shing Hung",
    email: "yhung022@ucr.edu",
    team: "d",
    major: "Computer Science",
    status: "rejected",
    selected: false,
  },
  {
    uid: "4",
    name: "Sachin Chopra",
    email: "yhung022@ucr.edu",
    team: "a",
    major: "Computer Science",
    status: "accepted",
    selected: false,
  },
];

const headers = [
  { name: "", size: "w-[6%]", icon: false },
  { name: "Name", size: "w-1/6", icon: true },
  { name: "Email", size: "w-1/5", icon: true },
  { name: "Team", size: "w-1/5", icon: true },
  { name: "Major", size: "w-1/5", icon: true },
  { name: "Status", size: "", icon: true },
];

const Participants = () => {
  const [filteredParticipants, setfilteredParticipants] =
    useState(participants);

  const [input, setInput] = useState("");

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

  const tags = [
    {
      text: "accepted",
      name: "Accept",
      onClick: () => {
        setfilteredParticipants(
          filteredParticipants.map((a) => {
            if (a.selected === true) {
              a.status = "accepted";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      text: "rejected",
      name: "Reject",
      onClick: () => {
        setfilteredParticipants(
          filteredParticipants.map((a) => {
            if (a.selected === true) {
              a.status = "rejected";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
  ];

  return (
    <div className="font-poppins">
      <Filters
        filters={filters}
        setFilters={setFilters}
        setfilteredObjects={setfilteredParticipants}
        objects={participants}
        input={input}
      />
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setfilteredParticipants}
        objects={filteredParticipants}
        filters={filters}
        reset={participants}
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
          <Participant
            key={index}
            participant={participant}
            index={index}
            setfilteredParticipants={setfilteredParticipants}
            filteredParticipants={filteredParticipants}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default Participants;
