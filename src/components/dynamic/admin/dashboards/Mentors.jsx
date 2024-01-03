"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Mentors.js";
import Table from "./dashboard/Dashboard";

const Mentors = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Mentors"
        columns={COLUMNS}
        tags={TAGS}
        page="mentors"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Mentors;
