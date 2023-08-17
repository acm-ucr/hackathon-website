"use client";

import React, { useState } from "react";
import Volunteer from "@/components/Admin/Volunteer";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";

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

const Volunteers = () => {
  const [filteredVolunteers, setFilteredVolunteers] = useState(volunteers);
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
      <Table
        headers={headers}
        empty="No Volunteers Available"
        setHeaders={setHeaders}
        setFilteredObjects={setFilteredVolunteers}
        filteredObjects={filteredVolunteers}
      >
        {filteredVolunteers.map((volunteer, index) => (
          <Volunteer
            key={index}
            uid={volunteer.uid}
            name={volunteer.name}
            email={volunteer.email}
            discord={volunteer.discord}
            status={volunteer.status}
            selected={volunteer.selected}
            filteredVolunteers={filteredVolunteers}
            setFilteredVolunteers={setFilteredVolunteers}
          />
        ))}
      </Table>
    </div>
  );
};

export default Volunteers;
