"use client";
import { useState } from "react";
import Filters from "@/components/dynamic/admin/Filters";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Judges.js";
import Dashboard from "../Dashboard.jsx";

const Judges = () => {
  const [judges, setJudges] = useState(null);
  const title = "Judges";
  const page = "judges";
  const empty = "No Judges Available";
  const file = "JUDGES";
  const dropdown = "";

  return (
    <Dashboard
      objects={judges}
      setObjects={setJudges}
      title={title}
      page={page}
      empty={empty}
      file={file}
      dropdown={dropdown}
      filters={FILTERS}
      headers={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};
export default Judges;
