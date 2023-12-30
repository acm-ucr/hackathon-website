"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Participants";
import Title from "../Title";
import DataTable from "./dashboard/Table";

const Participants = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Participants" />
      <DataTable
        columns={COLUMNS}
        tags={TAGS}
        page="participants"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Participants;
