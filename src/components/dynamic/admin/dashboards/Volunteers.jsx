"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Volunteers";
import Table from "./dashboard/Dashboard";

const Volunteers = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Volunteers"
        columns={COLUMNS}
        tags={TAGS}
        page="volunteers"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
        empty="No Volunteers Available"
      />
    </div>
  );
};
export default Volunteers;
