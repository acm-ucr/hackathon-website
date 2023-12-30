"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Interests.js";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Interests = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Interests" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="interests"
        statuses={STATUSES}
      />
    </div>
  );
};
export default Interests;
