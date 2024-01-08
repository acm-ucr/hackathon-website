"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Feedback";
import Table from "./dashboard/Dashboard";

const Admin = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Feedback"
        columns={COLUMNS}
        tags={TAGS}
        page="feedback"
        statuses={STATUSES}
        dropdown={DROPDOWN}
        empty="No Feedback Available"
      />
    </div>
  );
};
export default Admin;
