"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Interests.js";
import Table from "./dashboard/Dashboard";

const Interests = ({ searchParams }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        searchParams={searchParams}
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Interests;
