"use client";

import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import { DROPDOWN } from "@/data/dynamic/admin/Teams";

const Teams = () => {
  const [teams, setTeams] = useState(null);
  const title = "Teams";
  const page = "teams";
  const empty = "No Teams Available";
  const file = "TEAMS";
  const dropdown = "";

  return (
    <Dashboard
      objects={teams}
      setObjects={setTeams}
      title={title}
      page={page}
      empty={empty}
      file={file}
      dropdown={dropdown}
    />
    // <div className="h-full font-poppins flex flex-col py-4 gap-3">
    //   <div className="flex">
    //     <Title title="Teams" />
    //     <Filters
    //       filters={filters}
    //       setFilters={setFilters}
    //       setObjects={setTeams}
    //       objects={teams}
    //       input={input.input}
    //     />
    //   </div>
    //   <Toolbar
    //     input={input}
    //     setInput={setInput}
    //     tags={TAGS}
    //     setObjects={setTeams}
    //     objects={teams}
    //     filters={filters}
    //     file="TEAMS"
    //     headers={headers}
    //     page="teams"
    //   />
    //   <Table
    //     headers={headers}
    //     empty="No Teams Available"
    //     setHeaders={setHeaders}
    //     setObjects={setTeams}
    //     objects={teams}
    //     statuses={STATUSES}
    //   />
    // </div>
  );
};

export default Teams;
