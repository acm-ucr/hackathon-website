"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Table from "./Table.jsx";
import Toolbar from "./Toolbar.jsx";

const groups = [
  {
    hidden: false,
    name: "Citrus Hack",
    table: "1",
    rounds: [
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
    ],
  },
  {
    hidden: false,
    name: "Rosehack",
    table: "2",
    rounds: [
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
    ],
  },
  {
    hidden: false,
    name: "BearHack",
    table: "3",
    rounds: [
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
    ],
  },
  {
    hidden: false,
    name: "Designathon",
    table: "4",
    rounds: [
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
      ["p_allan knight", "s_menthy wu", "i_max verstappen"],
    ],
  },
];

const Judging = () => {
  const [data, setData] = useState(groups);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Judging" />
      <Toolbar data={data} setData={setData} />
      <Table data={data} />
    </div>
  );
};

export default Judging;
