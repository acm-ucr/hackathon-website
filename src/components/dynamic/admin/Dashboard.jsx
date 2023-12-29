"use client";
import { useState } from "react";
import Filters from "./Filters.jsx";
import Toolbar from "./dashboards/Toolbar.jsx";
import Title from "./Title.jsx";
// import Table from "./Table.jsx";
import DataTable from "./DataTable.jsx";

const Dashboard = ({
  title,
  page,
  empty,
  dropdown,
  filter,
  header,
  statuses,
  tags,
  columns,
}) => {
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(filter);
  const [headers] = useState(header);
  const [objects, setObjects] = useState([]);

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
        tags={tags}
        setObjects={setObjects}
        objects={objects}
        filters={filters}
        headers={headers}
        page={page}
      />
      {console.log(objects)}
      <DataTable data={objects} columns={columns} />
      {/* <Table
        headers={headers}
        empty={empty}
        setHeaders={setHeaders}
        setObjects={setObjects}
        objects={objects}
        Dropdown={dropdown}
        statuses={statuses}
      /> */}
    </div>
  );
};

export default Dashboard;
