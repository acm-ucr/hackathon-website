"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Participants";
import Table from "./dashboard/Dashboard";

const Participants = ({ searchParams }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Table
        searchParams={searchParams}
        title="Participants"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Participants;
