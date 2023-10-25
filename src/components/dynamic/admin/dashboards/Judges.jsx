"use client";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Judges.js";
import Dashboard from "../Dashboard.jsx";

const Judges = () => {
  return (
    <Dashboard
      title="Judges"
      page="judges"
      empty="No Judges Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};
export default Judges;
