"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "../Table.jsx";
import admins from "../../../../cypress/fixtures/admins.json";
import { FILTERS, HEADERS, TAGS } from "@/data/admin/Admin.js";

const Admin = () => {
  const [admin, setAdmin] = useState(admins);
  const [input, setInput] = useState({
    input: "",
  });
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
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setAdmin}
        objects={admin}
        filters={filters}
        page="admin"
      />
      <Table
        headers={headers}
        empty="No Admin Available"
        setHeaders={setHeaders}
        setObjects={setAdmin}
        objects={admin}
        page="admin"
      />
    </div>
  );
};
export default Admin;
