"use client";
import { useState } from "react";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import { judgeList } from "@/data/mock/judges.js";
import { judgeFilters } from "@/data/Filters.js";
import { judgeHeaders } from "@/data/Headers.js";
import { judgeTags } from "@/data/Tags.js";

const Judges = () => {
  const [judges, setJudges] = useState(judgeList);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(judgeFilters);
  const [headers, setHeaders] = useState(judgeHeaders);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Judges" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setJudges}
          objects={judges}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={judgeTags}
        setObjects={setJudges}
        objects={judges}
        filters={filters}
      />
      <Table
        headers={headers}
        empty="No Judges Available"
        setHeaders={setHeaders}
        setObjects={setJudges}
        objects={judges}
      />
    </div>
  );
};
export default Judges;
