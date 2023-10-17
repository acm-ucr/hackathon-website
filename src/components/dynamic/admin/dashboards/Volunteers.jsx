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

  return (
    <Dashboard
      objects={volunteers}
      setObjects={setVolunteers}
      title="Volunteers"
      page="volunteers"
      empty="No Volunteers Available"
      file="VOLUNTEERS"
      filters={FILTERS}
      headers={HEADERS}
      tags={TAGS}
      dropdown={DROPDOWN}
      statuses={STATUSES}
      Title={Title}
      Filters={Filters}
      Toolbar={Toolbar}
      Table={Table}
    />
  );
};

export default Volunteers;
