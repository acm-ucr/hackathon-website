"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Teams.js";
import Table from "./dashboard/Dashboard";

const Teams = ({ searchParams }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
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
