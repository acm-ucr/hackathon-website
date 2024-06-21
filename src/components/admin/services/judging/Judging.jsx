"use client";
import { useState } from "react";
import Title from "../../Title.jsx";
import Table from "./Table.jsx";
import Toolbar from "./Toolbar.jsx";

const generateTEAMS = () => {
  const TEAMS = [];
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";

  for (let i = 0; i < 1000; i++) {
    const charIndex = i % charSet.length;
    TEAMS.push({
      hidden: false,
      name: `${charSet[charIndex]}Name${i + 1}`,
      members: "stream brat",
      rounds: [],
    });
  }
  console.log(TEAMS);
  return TEAMS;
};

const Judging = () => {
  const [teams, setTeams] = useState(generateTEAMS);
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
      {(teams === null || teams.length === 0) && <p>No teams available</p>}
      <Table data={view === false ? teams : judges} />
    </div>
  );
};

export default Judging;
