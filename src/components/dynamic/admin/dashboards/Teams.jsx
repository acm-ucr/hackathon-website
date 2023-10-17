"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
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
    />
  );
};

export default Teams;
