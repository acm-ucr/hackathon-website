"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Admins.js";
import Title from "../Title";
import Table from "./dashboard/Dashboard";

const Admin = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Admins" />
      <Table columns={COLUMNS} tags={TAGS} page="admins" statuses={STATUSES} />
    </div>
  );
};
export default Admin;
