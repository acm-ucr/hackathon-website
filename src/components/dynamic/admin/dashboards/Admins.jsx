"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "../Table.jsx";
import {
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Admins.js";

const Admin = () => {
  const [admin, setAdmin] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Admins" />
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
        page="admins"
      />
      <Table
        headers={headers}
        empty="No Admin Available"
        setHeaders={setHeaders}
        setObjects={setAdmin}
        objects={admin}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Admin;
