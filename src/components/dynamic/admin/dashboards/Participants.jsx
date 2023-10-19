"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Participants";

const Participants = () => {
  const [participants, setParticipants] = useState(null);

  return (
    <Dashboard
      objects={participants}
      setObjects={setParticipants}
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
