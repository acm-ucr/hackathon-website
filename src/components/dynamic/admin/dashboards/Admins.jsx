"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";

const Admin = () => {
  const [admin, setAdmin] = useState(null);

  return <Dashboard admin={admin} setAdmin={setAdmin} />;
};
export default Admin;
