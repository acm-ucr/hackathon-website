"use client";

import { useState } from "react";
import Filters from "@/components/admin/Filters";
import Toolbar from "@/components/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import { FILTERS, HEADERS, TAGS, DROPDOWN } from "@/data/admin/Participants";

const Participants = () => {
  const [participants, setParticipants] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Participants" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setParticipants}
          objects={participants}
          input={input.input}
          page="participants"
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setParticipants}
        objects={participants}
        filters={filters}
        file="PARTICIPANTS"
        headers={headers}
        page="participants"
      />
      <Table
        headers={headers}
        empty="No Participants Available"
        setHeaders={setHeaders}
        setObjects={setParticipants}
        objects={participants}
        Dropdown={DROPDOWN}
        page="participants"
      />
    </div>
  );
};

export default Participants;
