"use client";

import React, { useState } from "react";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
import { teams } from "@/data/mock/teams";
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
          setObjects={setFilteredTeams}
          objects={teams}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={teamTags}
        setObjects={setFilteredTeams}
        objects={filteredTeams}
        filters={filters}
        reset={teams}
      />
      <Table
        headers={headers}
        empty="No Teams Available"
        setHeaders={setHeaders}
        setObjects={setFilteredTeams}
        objects={filteredTeams}
      />
    </div>
  );
};

export default Teams;
