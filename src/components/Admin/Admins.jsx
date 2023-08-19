"use client";
import React, { useState } from "react";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import { judges } from "@/data/mock/TableData.js";
import { judgeFilters } from "@/data/Filters.js";
import { judgeHeaders } from "@/data/Headers.js";
import { judgeTags } from "@/data/Tags.js";

const Judges = () => {
  const [filteredJudges, setFilteredJudges] = useState(judges);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(judgeFilters);
  const [headers, setHeaders] = useState(judgeHeaders);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Admin" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setFilteredJudges}
          objects={judges}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={judgeTags}
        setObjects={setFilteredJudges}
        objects={filteredJudges}
        filters={filters}
        reset={judges}
      />
      <Table
        headers={headers}
        empty="No Judges Available"
        setHeaders={setHeaders}
        setObjects={setFilteredJudges}
        objects={filteredJudges}
      />
    </div>
  );
};
export default Judges;
