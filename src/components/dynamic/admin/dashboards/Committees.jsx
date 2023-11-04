"use client";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Committees.js";
import Dashboard from "../Dashboard.jsx";

const Comittee = () => {
  return (
    <Dashboard
      title="Committees"
      page="committees"
      empty="No Committee Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};
export default Comittee;
