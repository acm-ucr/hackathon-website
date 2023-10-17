"use client";
import { useState } from "react";

const Dashboard = ({
  objects,
  setObjects,
  title,
  page,
  empty,
  file,
  DROPDOWN,
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
  Filters,
  Toolbar,
  Title,
  Table,
}) => {
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title={title} />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setObjects}
          objects={objects}
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setObjects}
        objects={objects}
        filters={filters}
        file={file}
        headers={headers}
        page={page}
      />
      <Table
        headers={headers}
        empty={empty}
        setHeaders={setHeaders}
        setObjects={setObjects}
        objects={objects}
        Dropdown={DROPDOWN}
        statuses={STATUSES}
      />
    </div>
  );
};

export default Dashboard;
