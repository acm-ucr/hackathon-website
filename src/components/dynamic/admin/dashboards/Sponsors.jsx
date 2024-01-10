"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Sponsors.js";
import Table from "./dashboard/Dashboard";

const Sponsors = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Sponsors"
        columns={COLUMNS}
        tags={TAGS}
        page="sponsors"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
        empty="No Sponsors Available"
      />
    </div>
  );
};
export default Sponsors;
