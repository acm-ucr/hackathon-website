"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Teams.js";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Teams = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Teams" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="teams"
        statuses={STATUSES}
      />
    </div>
  );
};
export default Teams;
