"use client";
import {
  STATUSES,
  TAGS,
  COLUMNS,
  DROPDOWN,
} from "@/data/dynamic/admin/Feedback";
import Table from "./dashboard/Dashboard";

const Feedback = ({ searchParams }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
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
