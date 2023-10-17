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
      file="PARTICIPANTS"
      filters={FILTERS}
      headers={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
      dropdown={DROPDOWN}
    />
  );
};

export default Participants;
