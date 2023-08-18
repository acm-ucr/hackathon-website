"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Filters from "@/components/Admin/Filters";
import Participant from "./Participant";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
import { participants } from "@/data/mock/TableData";
import { participantFilters } from "@/data/Filters";
import { participantHeader } from "@/data/Headers";
import { participantTags } from "@/data/Tags";

const Participants = () => {
  const [filteredParticipants, setfilteredParticipants] =
    useState(participants);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(participantFilters);
  const [headers, setHeaders] = useState(participantHeader);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Participants" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setfilteredParticipants}
          objects={participants}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={participantTags}
        setObjects={setfilteredParticipants}
        objects={filteredParticipants}
        filters={filters}
        reset={participants}
      />
      <Table
        headers={headers}
        empty="No Participants Available"
        setHeaders={setHeaders}
        setObjects={setfilteredParticipants}
        objects={filteredParticipants}
      >
        <Accordion>
          {filteredParticipants.map((participant, index) => (
            <Participant
              key={index}
              participant={participant}
              index={index}
              setfilteredParticipants={setfilteredParticipants}
              filteredParticipants={filteredParticipants}
            />
          ))}
        </Accordion>
      </Table>
    </div>
  );
};

export default Participants;
