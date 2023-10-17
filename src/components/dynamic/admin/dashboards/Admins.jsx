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

  return (
    <Dashboard
      objects={admin}
      setObjects={setAdmin}
      title="Admins"
      page="admins"
      empty="No Admin Available"
      file=""
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
export default Admin;
