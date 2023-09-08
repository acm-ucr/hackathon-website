"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import { adminList } from "@/data/mock/Admin.js";
import { adminFilters } from "@/data/Filters.js";
import { adminHeaders } from "@/data/Headers.js";
import { adminTags } from "@/data/Tags.js";

const Admin = () => {
  const [admin, setAdmin] = useState(adminList);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(adminFilters);
  const [headers, setHeaders] = useState(adminHeaders);

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
        tags={adminTags}
        setObjects={setAdmin}
        objects={admin}
        filters={filters}
      />
      <Table
        headers={headers}
        empty="No admin Available"
        setHeaders={setHeaders}
        setObjects={setAdmin}
        objects={admin}
      />
    </div>
  );
};
export default Admin;
