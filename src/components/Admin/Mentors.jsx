"use client";

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Mentor from "@/components/Admin/Mentor";
import Filters from "@/components/Admin/Filters";
import SortIcon from "./SortIcon";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "../Title";

const mentors = [
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
    name: "Menthy Wu",
    email: "mwu171@ucr.edu",
    discord: "_wmx",
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

const Mentors = () => {
  const [filteredMentors, setFilteredMentors] = useState(mentors);
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
        setFilteredMentors(
          filteredMentors.map((a) => {
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
        setFilteredMentors(
          filteredMentors.filter((a) => {
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
        setFilteredMentors(
          filteredMentors.map((a) => {
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
        <Title title="Mentors" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredMentors}
          objects={mentors}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredMentors}
        objects={filteredMentors}
        filters={filters}
        reset={mentors}
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
                setfilteredObjects={setFilteredMentors}
                objects={filteredMentors}
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
        {filteredMentors.length != 0 ? (
          filteredMentors.map((mentor, index) => (
            <Row key={index}>
              <Mentor
                uid={mentor.uid}
                name={mentor.name}
                email={mentor.email}
                discord={mentor.discord}
                status={mentor.status}
                selected={mentor.selected}
                filteredMentors={filteredMentors}
                setFilteredMentors={setFilteredMentors}
              />
            </Row>
          ))
        ) : (
          <p className=" text-hackathon-darkgray font-poppins bg-white p-4 text-center rounded-b-2xl w-full">
            No Mentors Signed Up
          </p>
        )}
      </Col>
    </div>
  );
};

export default Mentors;
