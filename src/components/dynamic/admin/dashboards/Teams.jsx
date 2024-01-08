"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Teams.js";
import Table from "./dashboard/Dashboard";

const Teams = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Teams"
        columns={COLUMNS}
        tags={TAGS}
        page="teams"
        statuses={STATUSES}
        empty="No Teams Available"
      />
    </div>
  );
};
export default Teams;
