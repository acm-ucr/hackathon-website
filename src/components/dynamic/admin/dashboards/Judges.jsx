"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "../Table.jsx";
import {
  FILTERS,
  HEADERS,
  TAGS,
  STATUSES,
} from "@/data/dynamic/admin/Judges.js";

const Judges = () => {
  const [judges, setJudges] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Judges" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setJudges}
          objects={judges}
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setJudges}
        objects={judges}
        filters={filters}
        file="JUDGES"
        headers={headers}
        page="judges"
      />
      <Table
        headers={headers}
        empty="No Judges Available"
        setHeaders={setHeaders}
        setObjects={setJudges}
        objects={judges}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Judges;
