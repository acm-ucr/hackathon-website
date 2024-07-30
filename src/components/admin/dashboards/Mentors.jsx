"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Mentors.js";
import Table from "./dashboard/Dashboard";

const Mentors = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Mentors"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Mentors;
