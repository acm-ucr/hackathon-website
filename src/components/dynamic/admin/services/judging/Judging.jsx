"use client";
import { useState } from "react";
import Title from "../../Title.jsx";
import Table from "./Table.jsx";
import Toolbar from "./Toolbar.jsx";

const Judging = () => {
  const [data, setData] = useState(null);
  const [judges, setJudges] = useState(null);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Judging" />
      <Toolbar
        data={data}
        setData={setData}
        judges={judges}
        setJudges={setJudges}
      />
      <Table data={data} />
    </div>
  );
};

export default Judging;
