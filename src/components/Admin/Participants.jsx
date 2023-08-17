"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import SortIcon from "./SortIcon";
import Filters from "@/components/Admin/Filters";
import Participant from "./Participant";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
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
  { name: "Major", size: "w-[22%]", icon: true },
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
      color: "green",
      text: "accepted",
      name: "Accept",
      onClick: (setToggle) => {
        setToggle(false);
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
      color: "red",
      text: "rejected",
      name: "Reject",
      onClick: (setToggle) => {
        setToggle(false);
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
    <div className="max-h-[80%] font-poppins">
      <div className="flex pb-3 pt-4">
        <Title title="Participants" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setfilteredParticipants}
          objects={participants}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setfilteredParticipants}
        objects={filteredParticipants}
        filters={filters}
        reset={participants}
      />
      <div className="flex bg-hackathon-blue-200 py-2 rounded-t-xl !z-[1000]">
        {headers.map((header, index) => (
          <div
            key={index}
            className={`${header.size} font-semibold text-sm text-white flex items-center`}
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
      {filteredParticipants.length != 0 ? (
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
      ) : (
        <p className=" text-hackathon-darkgray font-poppins bg-white p-4 text-center w-full rounded-b-2xl">
          No participant to display
        </p>
      )}
    </div>
  );
};

export default Participants;
