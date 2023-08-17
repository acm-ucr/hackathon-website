"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Filters from "@/components/Admin/Filters";
import Participant from "./Participant";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
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

const Participants = () => {
  const [filteredParticipants, setfilteredParticipants] =
    useState(participants);

  const [input, setInput] = useState("");

  const [filters, setFilters] = useState({
    rejected: true,
    accepted: true,
    pending: true,
  });

  const [headers, setHeaders] = useState({
    Name: { size: "w-1/5", icon: true, sort: "off" },
    Email: { size: "w-1/5", icon: true, sort: "off" },
    Team: { size: "w-1/5", icon: true, sort: "off" },
    Major: { size: "w-1/5", icon: true, sort: "off" },
    Status: { size: "w-[10%]", icon: true, sort: "off" },
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
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
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
      <Table
        headers={headers}
        empty="No Participants Available"
        setHeaders={setHeaders}
        setFilteredObjects={setfilteredParticipants}
        filteredObjects={filteredParticipants}
      >
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
      </Table>
    </div>
  );
};

export default Participants;
