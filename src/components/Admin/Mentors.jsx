"use client";

import React, { useState } from "react";
import Mentor from "@/components/Admin/Mentor";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
import { mentors } from "@/data/mock/TableData.js";
import { mentorTags } from "@/data/Tags.js";
import { mentorFilters } from "@/data/Filters.js";
import { mentorHeaders } from "@/data/Headers.js";

const Mentors = () => {
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(mentorFilters);
  const [headers, setHeaders] = useState(mentorHeaders);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Mentors" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setFilteredMentors}
          objects={mentors}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={mentorTags}
        setObjects={setFilteredMentors}
        objects={filteredMentors}
        filters={filters}
        reset={mentors}
      />

      <Table
        headers={headers}
        empty="No Mentors Available"
        setHeaders={setHeaders}
        setObjects={setFilteredMentors}
        objects={filteredMentors}
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
