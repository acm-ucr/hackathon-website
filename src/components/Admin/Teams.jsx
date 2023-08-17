"use client";

import React, { useState } from "react";
import Team from "./Team";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
import { teams } from "@/data/mock/TableData";
import { teamFilters } from "@/data/Filters";
import { teamTags } from "@/data/Tags";
import { teamHeaders } from "@/data/Headers";

const Teams = () => {
  const [filteredTeams, setFilteredTeams] = useState(teams);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(teamFilters);

  const [headers, setHeaders] = useState(teamHeaders);
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Teams" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredTeams}
          objects={teams}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={teamTags}
        setFilteredObjects={setFilteredTeams}
        objects={filteredTeams}
        filters={filters}
        reset={teams}
      />
      <Table
        headers={headers}
        empty="No Teams Available"
        setHeaders={setHeaders}
        setFilteredObjects={setFilteredTeams}
        filteredObjects={filteredTeams}
      >
        {filteredTeams.map((team, index) => (
          <Team
            key={index}
            uid={team.uid}
            teamName={team.name}
            github={team.github}
            devpost={team.devpost}
            status={team.status}
            members={team.members}
            selected={team.selected}
            filteredTeams={filteredTeams}
            setFilteredTeams={setFilteredTeams}
          />
        ))}
      </Table>
    </div>
  );
};

export default Teams;
