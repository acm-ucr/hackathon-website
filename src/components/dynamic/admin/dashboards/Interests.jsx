"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Interests.js";
import Table from "./dashboard/Dashboard";

const Interests = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Interests"
        columns={COLUMNS}
        tags={TAGS}
        page="interests"
        statuses={STATUSES}
        empty="No Interests Available"
      />
    </div>
  );
};
export default Interests;
