"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";

const Comittee = () => {
  const [committees, setCommittees] = useState(null);

  return <Dashboard committees={committees} setCommittees={setCommittees} />;
};
export default Comittee;
