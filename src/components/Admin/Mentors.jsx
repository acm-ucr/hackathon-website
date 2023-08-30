"use client";

import { useState } from "react";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
import { mentorList } from "@/data/mock/mentors";
import { mentorTags } from "@/data/Tags.js";
import { mentorFilters } from "@/data/Filters.js";
import { mentorHeaders } from "@/data/Headers.js";

const Mentors = () => {
  const [mentors, setMentors] = useState(mentorList);
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
          setObjects={setMentors}
          objects={mentors}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={mentorTags}
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
