"use client";

import { useState } from "react";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Dashboards/Toolbar";
import Title from "../Title";
import Table from "./Table";
import mentorList from "../../../../cypress/fixtures/Mentors.json";
import { FILTERS, HEADERS, TAGS } from "@/data/Admin/Mentors.js";

const Mentors = () => {
  const [mentors, setMentors] = useState(mentorList);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Mentors" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setMentors}
          objects={mentors}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setMentors}
        objects={mentors}
        filters={filters}
        file="MENTORS"
        headers={headers}
      />

      <Table
        headers={headers}
        empty="No Mentors Available"
        setHeaders={setHeaders}
        setObjects={setMentors}
        objects={mentors}
      />
    </div>
  );
};

export default Mentors;
