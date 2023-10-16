"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
import Filters from "@/components/dynamic/admin/Filters";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import { FILTERS, HEADERS, TAGS, STATUSES } from "@/data/dynamic/admin/Teams";

const Teams = () => {
  const [teams, setTeams] = useState(null);
  const title = "Teams";
  const page = "teams";
  const empty = "No Teams Available";
  const file = "TEAMS";

  return (
    <Dashboard
      objects={teams}
      setObjects={setTeams}
      title={title}
      page={page}
      empty={empty}
      file={file}
      FILTERS={FILTERS}
      HEADERS={HEADERS}
      TAGS={TAGS}
      STATUSES={STATUSES}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};

export default Teams;
