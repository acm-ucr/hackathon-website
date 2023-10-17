"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Mentors.js";

const Mentors = () => {
  const [mentors, setMentors] = useState(null);

  return (
    <Dashboard
      objects={mentors}
      setObjects={setMentors}
      title="Mentors"
      page="mentors"
      empty="No Mentors Available"
      file="MENTORS"
      filters={FILTERS}
      headers={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
      dropdown={DROPDOWN}
    />
  );
};

export default Mentors;
