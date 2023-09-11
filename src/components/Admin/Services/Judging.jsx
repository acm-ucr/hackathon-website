"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Table from "./Table.jsx";
import Toolbar from "./Toolbar.jsx";
import teamsCopy from "../../../../cypress/fixtures/TeamsCopy.json";
import judges from "../../../../cypress/fixtures/Judges.json";

const Judging = () => {
  const [data, setData] = useState(teamsCopy);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Judging" />
      <Toolbar data={data} setData={setData} judges={judges} />
      <Table data={data} />
    </div>
  );
};

export default Judging;
