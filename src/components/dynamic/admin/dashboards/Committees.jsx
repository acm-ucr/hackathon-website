"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Committees";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Admin = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Committees" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="committees"
        statuses={STATUSES}
      />
    </div>
  );
};
export default Admin;
