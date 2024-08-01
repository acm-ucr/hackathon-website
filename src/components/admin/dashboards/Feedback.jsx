"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Feedback";
import Table from "./dashboard/Dashboard";

const Feedback = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Feedback"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Feedback;
