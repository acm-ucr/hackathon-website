"use client";
import { useState } from "react";
import Title from "../../Title.jsx";
import Table from "./Table.jsx";
import Toolbar from "./Toolbar.jsx";

// debugging purposes
// const generateTEAMS = () => {
//   const TEAMS = [];
//   const charSet =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";

//   for (let i = 0; i < 100; i++) {
//     const charIndex = i % charSet.length;
//     TEAMS.push({
//       hidden: false,
//       name: `${charSet[charIndex]}Name${i + 1}`,
//       rounds: [],
//       link: [
//         {
//           name: "github",
//           link: "https://github.com",
//         },
//         {
//           name: "devpost",
//           link: "https://rose-hack-2021.devpost.com",
//         },
//         {
//           name: "figma",
//           link: "https://figma.com",
//         },
//       ],
//     });
//   }
//   console.log(TEAMS);
//   return TEAMS;
// };

const Judging = () => {
  const [teams, setTeams] = useState(null);
  const [filters, setFilters] = useState(teams);
  const [judges, setJudges] = useState(null);
  const [view, setView] = useState(false);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
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
      {(filters === null || filters.length === 0) && <p>No teams available</p>}
      <Table data={view === false ? filters : judges} />
    </div>
  );
};

export default Judging;
