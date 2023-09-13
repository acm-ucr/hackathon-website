"use client";

import { useState } from "react";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Dashboards/Toolbar";
import Title from "../Title";
import Table from "./Table";
import participantList from "../../../../cypress/fixtures/Participants.json";
import { FILTERS, HEADERS, TAGS } from "@/data/Admin/Participants";

const Participants = () => {
  const [participants, setParticipants] = useState(participantList);
  const [input, setInput] = useState("");
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
          input={input}
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
      />
      <Table
        headers={headers}
        empty="No Participants Available"
        setHeaders={setHeaders}
        setObjects={setParticipants}
        objects={participants}
      />
    </div>
  );
};

export default Participants;
