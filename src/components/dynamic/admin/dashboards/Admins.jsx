"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import {
//   DROPDOWN
// } from "@/data/dynamic/admin/Admins.js";

const Admin = () => {
  const [admin, setAdmin] = useState(null);
  const title = "Admins";
  const page = "admins";
  const empty = "No Admin Available";
  const file = "";
  const dropdown = "";

  return (
    <Dashboard
      objects={admin}
      setObjects={setAdmin}
      title={title}
      page={page}
      empty={empty}
      file={file}
      dropdown={dropdown}
    />
  );
};
export default Admin;
