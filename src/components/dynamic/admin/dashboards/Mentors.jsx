"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Mentors.js";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Mentors = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Mentors" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="mentors"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Mentors;
