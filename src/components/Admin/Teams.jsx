"use client";

import React, { useState } from "react";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import Title from "./Title";
import Table from "./Table";
import { teamList } from "@/data/mock/teams";
import { teamFilters } from "@/data/Filters";
import { teamTags } from "@/data/Tags";
import { teamHeaders } from "@/data/Headers";

const Teams = () => {
  const [teams, setTeams] = useState(teamList);
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
          setObjects={setTeams}
          objects={teams}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={teamTags}
        setObjects={setTeams}
        objects={teams}
        filters={filters}
        file="TEAMS"
        headers={headers}
      />
      <Table
        headers={headers}
        empty="No Teams Available"
        setHeaders={setHeaders}
        setObjects={setTeams}
        objects={teams}
      />
    </div>
  );
};

export default Teams;
