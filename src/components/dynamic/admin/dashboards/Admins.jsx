"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Admins.js";
import Table from "./dashboard/Dashboard";

const Admin = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Admins"
        columns={COLUMNS}
        tags={TAGS}
        page="admins"
        statuses={STATUSES}
        empty="No Admins Available"
      />
    </div>
  );
};
export default Admin;
