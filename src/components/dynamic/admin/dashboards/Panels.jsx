"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Panels.js";
import Table from "./dashboard/Dashboard";

const Panels = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Panels"
        columns={COLUMNS}
        tags={TAGS}
        page="panels"
        statuses={STATUSES}
        empty="No Panelists Available"
      />
    </div>
  );
};
export default Panels;
