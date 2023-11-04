"use client";
import Dashboard from "../Dashboard.jsx";
import { FILTERS, HEADERS, TAGS, STATUSES } from "@/data/dynamic/admin/Teams";

const Teams = () => {
  return (
    <Dashboard
      title="Teams"
      page="teams"
      empty="No Teams Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};

export default Teams;
