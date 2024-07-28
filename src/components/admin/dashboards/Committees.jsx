"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Committees";
import Table from "./dashboard/Dashboard";

const Committee = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Committees"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Committee;
