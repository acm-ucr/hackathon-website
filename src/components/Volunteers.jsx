"use client";

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Volunteer } from "@/components/Volunteer";
import Filters from "@/components/Filters";
import SortIcon from "./SortIcon";
import Toolbar from "@/components/Toolbar";
import Title from "./Title";

const volunteers = [
  {
    uid: 1,
    name: "Raidah Fairooz",
    email: "rfair008@ucr.edu",
    discord: "Raidah#2067",
    status: "online",
    selected: false,
  },
  {
    uid: 2,
    name: "Minsoo Kim",
    email: "mkim001@ucr.edu",
    discord: "Soup#2023",
    status: "online",
    selected: false,
  },
  {
    uid: 3,
    name: "Menthy Divyank",
    email: "couple002@ucr.edu",
    discord: "disney#2033",
    status: "onsite",
    selected: false,
  },
  {
    uid: 4,
    name: "John Cena",
    email: "cantseeme@ucr.edu",
    discord: "babydonthurtme#2067",
    status: "onsite",
    selected: false,
  },
];

const headers = [
  { name: "", size: "w-[7%]", icon: false },
  { name: "Name", size: "w-1/4", icon: true },
  { name: "Email", size: "w-1/4", icon: false },
  { name: "Discord", size: "w-1/4", icon: false },
  { name: "Status", size: "", icon: true },
];

const Volunteers = () => {
  const [filteredVolunteers, setFilteredVolunteers] = useState(volunteers);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState({
    online: true,
    onsite: true,
  });
  const [sorts, setSorts] = useState({
    name: "down",
    team: "off",
    status: "off",
  });

  const tags = [
    {
      color: "purple",
      text: "Onsite",
      name: "Onsite",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredVolunteers(
          filteredVolunteers.map((a) => {
            if (a.selected === true) {
              a.status = "onsite";
              a.selected = false;
            }
            return a;
          })
        );
      },
    },
    {
      color: "red",
      text: "remove",
      name: "Remove",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredVolunteers(
          filteredVolunteers.filter((a) => {
            if (a.selected !== true) {
              return a;
            }
          })
        );
      },
    },
    {
      color: "green",
      text: "online",
      name: "Online",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredVolunteers(
          filteredVolunteers.map((a) => {
            if (a.selected === true) {
              a.status = "online";
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
        <Title title="Volunteers" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredVolunteers}
          objects={volunteers}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredVolunteers}
        objects={filteredVolunteers}
        filters={filters}
        reset={volunteers}
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
                setfilteredObjects={setFilteredVolunteers}
                objects={filteredVolunteers}
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
        {filteredVolunteers.length != 0 ? (
          filteredVolunteers.map((volunteer, index) => (
            <Row key={index}>
              <Volunteer
                uid={volunteer.uid}
                name={volunteer.name}
                email={volunteer.email}
                discord={volunteer.discord}
                status={volunteer.status}
                selected={volunteer.selected}
                filteredVolunteers={filteredVolunteers}
                setFilteredVolunteers={setFilteredVolunteers}
              />
            </Row>
          ))
        ) : (
          <p className=" text-hackathon-darkgray font-poppins bg-white p-4 text-center rounded-b-2xl w-full">
            No Volunteers Available
          </p>
        )}
      </Col>
    </div>
  );
};

export default Volunteers;
