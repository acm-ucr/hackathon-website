"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Participants";
import Table from "./dashboard/Dashboard";

const Participants = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        title="Participants"
        columns={COLUMNS}
        tags={TAGS}
        page="participants"
        statuses={STATUSES}
        Dropdown={DROPDOWN}
        empty="No Participants Available"
      />
    </div>
  );
};
export default Participants;
