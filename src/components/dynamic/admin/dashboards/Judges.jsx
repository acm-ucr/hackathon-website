"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Judges.js";
import Table from "./dashboard/Dashboard";

const Judges = ({ searchParams }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        searchParams={searchParams}
        title="Judges"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Judges;
