"use client";
import { TAGS, COLUMNS } from "@/data/admin/Judges";
import { STATUSES } from "@/data/Statuses";
import Table from "./dashboard/Dashboard";

const Judges = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
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
