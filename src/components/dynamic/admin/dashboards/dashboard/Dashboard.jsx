"use client";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Toolbar from "./Toolbar";
import Filters from "./Filters";
import Table from "./Table";

const Dashboard = ({ columns, page, tags, statuses, Dropdown }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([{ id: "status", value: [-1, 0, 1] }]);
  const [selected, setSelected] = useState([]);

  const {
    getHeaderGroups,
    getRowModel,
    getFilteredSelectedRowModel,
    toggleAllRowsSelected,
    getState,
    previousPage,
    getCanPreviousPage,
    nextPage,
    getCanNextPage,
    getPageCount,
  } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setSelected,
    enableRowSelection: true,
    state: {
      rowSelection: selected,
      columnFilters: filters,
    },
  });

  return (
    <div className="w-full overflow-scroll p-2">
      <Filters statuses={statuses} filters={filters} setFilters={setFilters} />
      <Toolbar
        page={page}
        filters={filters}
        setFilters={setFilters}
        data={data}
        setData={setData}
        tags={tags}
        getFilteredSelectedRowModel={getFilteredSelectedRowModel}
        toggleAllRowsSelected={toggleAllRowsSelected}
      />
      <Table
        data={data}
        getHeaderGroups={getHeaderGroups}
        getRowModel={getRowModel}
        getState={getState}
        previousPage={previousPage}
        getCanPreviousPage={getCanPreviousPage}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        getPageCount={getPageCount}
        Dropdown={Dropdown}
      />
    </div>
  );
};

export default Dashboard;
