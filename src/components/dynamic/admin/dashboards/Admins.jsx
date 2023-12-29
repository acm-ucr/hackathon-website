"use client";
import {
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Admins.js";
import Dashboard from "../Dashboard.jsx";
import { columns } from "@/data/dynamic/admin/Admins.js";

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
      columns={columns}
    />
  );
};
export default Admin;
