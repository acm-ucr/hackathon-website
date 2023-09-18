"use client";

import { useState } from "react";
import Filters from "@/components/admin/Filters";
import Toolbar from "@/components/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import participantList from "../../../../cypress/fixtures/Participants.json";
import { FILTERS, HEADERS, TAGS, DROPDOWN } from "@/data/admin/Participants";

const Participants = () => {
  const [participants, setParticipants] = useState(participantList);
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
        page="participant"
      />
      <Table
        headers={headers}
        empty="No Participants Available"
        setHeaders={setHeaders}
        setObjects={setParticipants}
        objects={participants}
        Dropdown={DROPDOWN}
        page="participant"
      />
    </div>
  );
};

export default Participants;
