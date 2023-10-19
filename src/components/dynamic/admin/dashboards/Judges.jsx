"use client";
import { useState } from "react";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Judges.js";
import Dashboard from "../Dashboard.jsx";

const Judges = () => {
  const [judges, setJudges] = useState(null);

  return (
    <Dashboard
      objects={judges}
      setObjects={setJudges}
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
