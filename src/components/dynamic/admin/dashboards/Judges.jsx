"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Judges.js";
import Table from "./dashboard/Dashboard";

const Judges = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Judges"
        columns={COLUMNS}
        tags={TAGS}
        page="judges"
        statuses={STATUSES}
        empty="No Judges Available"
      />
    </div>
  );
};
export default Judges;
