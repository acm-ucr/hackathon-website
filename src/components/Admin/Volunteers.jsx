"use client";
import React, { useState } from "react";
import Volunteer from "@/components/Admin/Volunteer";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";

import { volunteers } from "@/data/mock/TableData";
import { volunteerFilters } from "@/data/Filters";
import { volunteerHeaders } from "@/data/Headers";
import { volunteerTags } from "@/data/Tags";

const Volunteers = () => {
  const [filteredVolunteers, setFilteredVolunteers] = useState(volunteers);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(volunteerFilters);
  const [headers, setHeaders] = useState(volunteerHeaders);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Volunteers" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setFilteredVolunteers}
          objects={volunteers}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={volunteerTags}
        setObjects={setFilteredVolunteers}
        objects={filteredVolunteers}
        filters={filters}
        reset={volunteers}
      />
      <Table
        headers={headers}
        empty="No Volunteers Available"
        setHeaders={setHeaders}
        setObjects={setFilteredVolunteers}
        objects={filteredVolunteers}
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
