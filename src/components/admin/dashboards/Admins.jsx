"use client";
import { TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Admins.js";
import { STATUSES } from "@/data/Statuses";
import Table from "./dashboard/Dashboard";

const Admin = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Admins"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Admin;
