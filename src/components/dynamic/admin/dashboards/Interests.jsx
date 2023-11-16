"use client";
import {
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Interest";
import Dashboard from "../Dashboard";

const Feedback = () => {
  return (
    <Dashboard
      title="Interests"
      page="interests"
      empty="No Interests Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
    />
  );
};
export default Feedback;
