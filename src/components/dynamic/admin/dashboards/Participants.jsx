"use client";
import Dashboard from "../Dashboard.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Participants";

const Participants = () => {
  return (
    <Dashboard
      title="Participants"
      page="participants"
      empty="No Participants Available"
      dropdown={DROPDOWN}
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};

export default Participants;
