"use client";
import Dashboard from "../Dashboard.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Volunteers";

const Volunteers = () => {
  return (
    <Dashboard
      title="Volunteers"
      page="volunteers"
      empty="No Volunteers Available"
      dropdown={DROPDOWN}
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};

export default Volunteers;
