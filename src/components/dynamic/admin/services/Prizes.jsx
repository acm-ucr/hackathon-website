"use client";
import { useState } from "react";
import Title from "../Title";
import Toolbar from "./Toolbar";
import Table from "../Table";
import { HEADERS, TAGS, STATUSES } from "@/data/dynamic/admin/Prizes";

const Prizes = () => {
  const [teams, setTeams] = useState(null);
  const [prizes, setPrizes] = useState(null);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Prizes" />
      <Toolbar
        objects={prizes}
        setObjects={setPrizes}
        teams={teams}
        setTeams={setTeams}
        tags={TAGS}
      />
      <Table
        headers={headers}
        setHeaders={setHeaders}
        objects={prizes}
        setObjects={setPrizes}
        empty="No Prizes Available"
        statuses={STATUSES}
      />
    </div>
  );
};

export default Prizes;
