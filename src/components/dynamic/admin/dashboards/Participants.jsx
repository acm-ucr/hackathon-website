"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
import Filters from "@/components/dynamic/admin/Filters";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import Title from "../Title.jsx";
import Table from "../Table.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Participants";

const Participants = () => {
  const [participants, setParticipants] = useState(null);
  const title = "Participants";
  const page = "participants";
  const empty = "No Participants Available";
  const file = "PARTICIPANTS";

  return (
    <Dashboard
      objects={participants}
      setObjects={setParticipants}
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

export default Participants;
