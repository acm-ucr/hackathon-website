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
} from "@/data/dynamic/admin/Volunteers";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState(null);
  const title = "Volunteers";
  const page = "volunteers";
  const empty = "No Volunteers Available";
  const file = "VOLUNTEERS";

  return (
    <Dashboard
      objects={volunteers}
      setObjects={setVolunteers}
      title={title}
      page={page}
      empty={empty}
      file={file}
      FILTERS={FILTERS}
      HEADERS={HEADERS}
      TAGS={TAGS}
      DROPDOWN={DROPDOWN}
      STATUSES={STATUSES}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};

export default Volunteers;
