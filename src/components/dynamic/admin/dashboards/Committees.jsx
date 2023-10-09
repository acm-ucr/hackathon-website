"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import {
//   DROPDOWN
// } from "@/data/dynamic/admin/Admins.js";

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
    />
  );
};
export default Comittee;
