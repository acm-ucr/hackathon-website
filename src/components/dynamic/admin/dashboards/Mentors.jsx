"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
import Filters from "@/components/dynamic/admin/Filters";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Mentors.js";

const Mentors = () => {
  const [mentors, setMentors] = useState(null);
  const title = "Mentors";
  const page = "mentors";
  const empty = "No Mentors Available";
  const file = "MENTORS";

  return (
    <Dashboard
      objects={mentors}
      setObjects={setMentors}
      title={title}
      page={page}
      empty={empty}
      file={file}
      filters={FILTERS}
      headers={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
      dropdown={DROPDOWN}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};

export default Mentors;
