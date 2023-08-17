"use client";
import React, { useState } from "react";
import Judge from "./Judge.jsx";
import Title from "./Title.jsx";
import Filters from "./Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import AddJudgeForm from "./AddJudgeForm.jsx";
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
        <Title title="Judges" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredJudges}
          objects={judges}
          input={input}
        />
      </div>
      <AddJudgeForm
        filteredJudges={filteredJudges}
        setFilteredJudges={setFilteredJudges}
      />
      <Toolbar
        input={input}
        setInput={setInput}
        tags={judgeTags}
        setFilteredObjects={setFilteredJudges}
        objects={filteredJudges}
        filters={filters}
        reset={judges}
      />
      <Table
        headers={headers}
        empty="No Judges Available"
        setHeaders={setHeaders}
        setFilteredObjects={setFilteredJudges}
        filteredObjects={filteredJudges}
      >
        {filteredJudges.map((judge, index) => (
          <Judge
            setFilteredJudges={setFilteredJudges}
            filteredJudges={filteredJudges}
            key={index}
            name={judge.name}
            status={judge.status}
            type={judge.type}
            email={judge.email}
            selected={judge.selected}
          />
        ))}
      </Table>
    </div>
  );
};
export default Judges;
