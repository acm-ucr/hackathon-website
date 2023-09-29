"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "../Table.jsx";
import { FILTERS, HEADERS, TAGS } from "@/data/admin/Committees.js";

const Comittee = () => {
  const [committees, setCommittees] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Committees" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setCommittees}
          objects={committees}
          input={input.input}
          page="committees"
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setCommittees}
        objects={committees}
        filters={filters}
        page="committees"
      />
      <Table
        headers={headers}
        empty="No Committee Available"
        setHeaders={setHeaders}
        setObjects={setCommittees}
        objects={committees}
        page="committees"
      />
    </div>
  );
};
export default Comittee;
