"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Committees";
import Table from "./dashboard/Dashboard";

const Committee = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Committees"
        columns={COLUMNS}
        tags={TAGS}
        page="committees"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
        empty="No Committees Available"
      />
    </div>
  );
};
export default Committee;
