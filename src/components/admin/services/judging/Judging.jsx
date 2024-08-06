"use client";
import { useState } from "react";
import Title from "../../Title";
import Table from "./Table";
import Toolbar from "./Toolbar";

function generateArray() {
  const objectsArray = [];
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";

  for (let i = 0; i < 1000; i++) {
    const charIndex = i % charSet.length;
    objectsArray.push({
      hidden: false,
      name: `${charSet[charIndex]}Name${i + 1}`,
      members: "stream brat",
      rounds: [],
    });
  }

  return objectsArray;
}

const Judging = () => {
  const [teams, setTeams] = useState(generateArray());
  const [filters, setFilters] = useState(teams);
  const [judges, setJudges] = useState([{ name: "helen" }]);
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
