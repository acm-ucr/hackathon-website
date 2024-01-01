"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Volunteers";
import Title from "../Title";
import Table from "./dashboard/Table";

const Volunteers = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Volunteers" />
      <Table
        columns={COLUMNS}
        tags={TAGS}
        page="volunteers"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Volunteers;
