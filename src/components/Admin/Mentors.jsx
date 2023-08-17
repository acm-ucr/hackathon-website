"use client";

import React, { useState } from "react";
import Mentor from "@/components/Admin/Mentor";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";

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

const Mentors = () => {
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState({
    online: true,
    onsite: true,
    "not attending": true,
  });

  const [headers, setHeaders] = useState({
    Name: { size: "w-1/4", icon: true, sort: "off" },
    Email: { size: "w-1/4", icon: false, sort: "off" },
    Discord: { size: "w-1/4", icon: false, sort: "off" },
    Status: { size: "w-[10%]", icon: true, sort: "off" },
  });

  const tags = [
    {
      color: "purple",
      text: "onsite",
    },
    {
      color: "red",
      text: "not attending",
    },
    {
      color: "green",
      text: "online",
    },
  ];

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
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

      <Table
        headers={headers}
        empty="No Mentor Available"
        setHeaders={setHeaders}
        setFilteredObjects={setFilteredMentors}
        filteredObjects={filteredMentors}
      >
        {filteredMentors.map((mentor, index) => (
          <Mentor
            key={index}
            uid={mentor.uid}
            name={mentor.name}
            email={mentor.email}
            discord={mentor.discord}
            status={mentor.status}
            selected={mentor.selected}
            filteredMentors={filteredMentors}
            setFilteredMentors={setFilteredMentors}
          />
        ))}
      </Table>
    </div>
  );
};

export default Mentors;
