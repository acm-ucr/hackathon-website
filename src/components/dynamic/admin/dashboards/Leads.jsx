"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Leads.js";
import Table from "./dashboard/Dashboard";

const Leads = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Leads"
        columns={COLUMNS}
        tags={TAGS}
        page="leads"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
        empty="No Leads Available"
      />
    </div>
  );
};
export default Leads;
