"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import adminList from "../../../../cypress/fixtures/Admin.json";
import { FILTERS, HEADERS, TAGS } from "@/data/admin/Admin.js";

const Admin = () => {
  const [admin, setAdmin] = useState(adminList);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Admin" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setAdmin}
          objects={admin}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setAdmin}
        objects={admin}
        filters={filters}
      />
      <Table
        headers={headers}
        empty="No Admin Available"
        setHeaders={setHeaders}
        setObjects={setAdmin}
        objects={admin}
      />
    </div>
  );
};
export default Admin;
