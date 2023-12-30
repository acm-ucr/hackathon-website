"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Sponsors.js";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Sponsors = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Sponsors" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="sponsors"
        statuses={STATUSES}
      />
    </div>
  );
};
export default Sponsors;
