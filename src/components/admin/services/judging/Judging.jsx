"use client";
import { useState } from "react";
import Title from "../../Title.jsx";
import Table from "./Table.jsx";
import Toolbar from "./Toolbar.jsx";

const Judging = () => {
  const [teams, setTeams] = useState(null);
  const [filters, setFilters] = useState(teams);
  const [judges, setJudges] = useState(null);
  const [view, setView] = useState(false);

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Title title="Judging" />
      <Toolbar
        data={teams}
        setData={setTeams}
        setFilters={setFilters}
        view={view}
        setView={setView}
        judgesView={judges}
        setJudgesView={setJudges}
      />
      <Title title={view ? "Judges" : "Teams"} />
      {filters === null || filters.length === 0 ? (
        <div className="flex flex-grow items-center justify-center">
          {view ? "No Judges Available" : "No Teams Available"}
        </div>
      ) : (
        <Table data={view === false ? filters : judges} />
      )}
    </div>
  );
};

export default Judging;
