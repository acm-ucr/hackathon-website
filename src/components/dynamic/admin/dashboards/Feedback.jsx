"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Feedback";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Admin = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Feedback" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="feedback"
        statuses={STATUSES}
        dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Admin;
