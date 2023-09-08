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
    rounds: [],
  },
  {
    hidden: false,
    name: "Rosehack",
    table: "2",
    rounds: [],
  },
  {
    hidden: false,
    name: "BearHack",
    table: "3",
    rounds: [],
  },
  {
    hidden: false,
    name: "Designathon",
    table: "4",
    rounds: [],
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
