"use client";
import Dashboard from "../Dashboard.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Mentors.js";

const Mentors = () => {
  return (
    <Dashboard
      title="Mentors"
      page="mentors"
      empty="No Mentors Available"
      dropdown={DROPDOWN}
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};

export default Mentors;
