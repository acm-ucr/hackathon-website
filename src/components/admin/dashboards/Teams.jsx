"use client";

import { useState } from "react";
import Filters from "@/components/admin/Filters";
import Toolbar from "@/components/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import { FILTERS, HEADERS, TAGS } from "@/data/admin/Teams";

const Teams = () => {
  const [teams, setTeams] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Teams" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setTeams}
          objects={teams}
          input={input.input}
          page="teams"
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setTeams}
        objects={teams}
        filters={filters}
        file="TEAMS"
        headers={headers}
        page="teams"
      />
      <Table
        headers={headers}
        empty="No Teams Available"
        setHeaders={setHeaders}
        setObjects={setTeams}
        objects={teams}
        page="teams"
      />
    </div>
  );
};

export default Teams;
