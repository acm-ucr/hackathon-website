"use client";
import { useState } from "react";
import Title from "../../Title.js";
import Table from "./Table.js";
import Toolbar from "./Toolbar.js";

const Judging = () => {
  const [teams, setTeams] = useState(null);
  const [judges, setJudges] = useState(null);
  const [view, setView] = useState(false);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Judging" />
      <Toolbar
        data={teams}
        setData={setTeams}
        view={view}
        setView={setView}
        judgesView={judges}
        setJudgesView={setJudges}
      />
      <Table data={view === false ? teams : judges} />
    </div>
  );
};

export default Judging;
