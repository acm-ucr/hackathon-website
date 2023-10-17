"use client";
import { useState } from "react";
import Filters from "@/components/dynamic/admin/Filters";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import {
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Admins.js";
import Dashboard from "../Dashboard.jsx";

const Admin = () => {
  const [admin, setAdmin] = useState(null);

  const title = "Admins";
  const page = "admins";
  const empty = "No Admin Available";
  const file = "";

  return (
    <Dashboard
      objects={admin}
      setObjects={setAdmin}
      title={title}
      page={page}
      empty={empty}
      file={file}
      FILTERS={FILTERS}
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
export default Admin;
