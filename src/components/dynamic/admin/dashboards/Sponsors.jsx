"use client";
import Dashboard from "../Dashboard.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Sponsors.js";

const Sponsors = () => {
  return (
    <Dashboard
      title="Sponsors"
      page="sponsors"
      empty="No Sponsors Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};

export default Sponsors;
