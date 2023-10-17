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

  return (
    <Dashboard
      objects={teams}
      setObjects={setTeams}
      title="Teams"
      page="teams"
      empty="No Teams Available"
      file="TEAMS"
      filters={FILTERS}
      headers={HEADERS}
      tags={TAGS}
      statuses={STATUSES}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};

export default Teams;
