"use client";
import { useState } from "react";
import Filters from "@/components/dynamic/admin/Filters";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import Title from "../Title";
import Table from "../Table";
import {
  FILTERS,
  HEADERS,
  TAGS,
  DROPDOWN,
  STATUSES,
} from "@/data/dynamic/admin/Volunteers";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Volunteers" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setVolunteers}
          objects={volunteers}
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setVolunteers}
        objects={volunteers}
        filters={filters}
        file="VOLUNTEERS"
        headers={headers}
        page="volunteers"
      />
      <Table
        headers={headers}
        empty="No Volunteers Available"
        setHeaders={setHeaders}
        setObjects={setVolunteers}
        objects={volunteers}
        Dropdown={DROPDOWN}
        statuses={STATUSES}
      />
    </div>
  );
};

export default Volunteers;
