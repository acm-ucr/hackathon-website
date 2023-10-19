"use client";
import { useState } from "react";
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
      empty="No Admins Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};
export default Admin;
