"use client";
import {
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Admins.js";
import Dashboard from "../Dashboard.jsx";

const Admin = () => {
  return (
    <Dashboard
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
