"use client";
import { TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Mentors";
import { STATUSES } from "@/data/Statuses";
import Table from "./dashboard/Dashboard";
import { SearchParams } from "@/types/dashboard";

type props = {
  searchParams: SearchParams;
};

const Mentors = ({ searchParams }: props) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Mentors"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Mentors;
