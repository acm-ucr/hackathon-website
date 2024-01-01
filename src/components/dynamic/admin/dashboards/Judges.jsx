"use client";
import { STATUSES, TAGS, COLUMNS } from "@/data/dynamic/admin/Judges.js";
import Title from "../Title";
import Table from "./dashboard/Table";

const Judges = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Judges" />
      <Table columns={COLUMNS} tags={TAGS} page="judges" statuses={STATUSES} />
    </div>
  );
};
export default Judges;
