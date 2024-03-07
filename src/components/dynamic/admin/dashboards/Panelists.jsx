"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Panelists.js";
import Table from "./dashboard/Dashboard";

const Panelists = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Panelists"
        columns={COLUMNS}
        tags={TAGS}
        page="panelists"
        statuses={STATUSES}
        empty="No Panelists Available"
      />
    </div>
  );
};
export default Panelists;
