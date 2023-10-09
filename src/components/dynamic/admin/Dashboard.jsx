"use client";
import { useState } from "react";
import Filters from "./Filters.jsx";
import Toolbar from "./dashboards/Toolbar.jsx";
import Title from "./Title.jsx";
import Table from "./Table.jsx";
import {
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Admins.js";

const Dashboard = ({ data, setData }) => {
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
          setObjects={setData}
          objects={data}
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setData}
        objects={data}
        filters={filters}
        page="admins"
      />
      <Table
        headers={headers}
        empty="No Admin Available"
        setHeaders={setHeaders}
        setObjects={setData}
        objects={data}
        statuses={STATUSES}
      />
    </div>
  );
};

export default Dashboard;
