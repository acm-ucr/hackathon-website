"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Volunteers";
import Table from "./dashboard/Dashboard";

const Volunteers = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Volunteers"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Volunteers;
