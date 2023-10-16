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
} from "@/data/dynamic/admin/Committees.js";
import Dashboard from "../Dashboard.jsx";

const Comittee = () => {
  const [committees, setCommittees] = useState(null);
  const title = "Committees";
  const page = "committees";
  const empty = "No Committee Available";
  const file = "";
  const dropdown = "";

  return (
    <Dashboard
      objects={committees}
      setObjects={setCommittees}
      title={title}
      page={page}
      empty={empty}
      file={file}
      dropdown={dropdown}
      FILTERS={FILTERS} // Pass your data constants as props
      HEADERS={HEADERS}
      STATUSES={STATUSES}
      TAGS={TAGS}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};
export default Comittee;
