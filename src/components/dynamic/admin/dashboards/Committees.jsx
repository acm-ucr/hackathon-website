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

  return (
    <Dashboard
      objects={committees}
      setObjects={setCommittees}
      title="Committees"
      page="committees"
      empty="No Committee Available"
      file=""
      dropdown=""
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
export default Comittee;
