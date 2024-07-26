"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/admin/Teams.js";
import Table from "./dashboard/Dashboard";

const Teams = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Teams"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Teams;
