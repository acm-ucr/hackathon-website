"use client";
import { useState } from "react";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Committees.js";
import Dashboard from "../Dashboard.jsx";

const Comittee = () => {
  const [committees, setCommittees] = useState(null);

  return (
    <Dashboard
      objects={committees}
      setObjects={setCommittees}
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
