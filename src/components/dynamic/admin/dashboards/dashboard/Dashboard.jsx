"use client";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Toolbar from "./Toolbar";
import Filters from "./Filters";
import Table from "./Table";
import Title from "../../Title";

const Dashboard = ({
  title,
  columns,
  page,
  tags,
  statuses,
  Dropdown,
  empty,
}) => {
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
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setSelected,
    enableRowSelection: true,
    state: {
      rowSelection: selected,
      columnFilters: filters,
    },
  });

  return (
    <div className="w-full overflow-scroll">
      <div className="flex items-center my-2">
        <Title title={title} />
        <Filters
          statuses={statuses}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
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
        getHeaderGroups={getHeaderGroups}
        getRowModel={getRowModel}
        getState={getState}
        previousPage={previousPage}
        getCanPreviousPage={getCanPreviousPage}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        getPageCount={getPageCount}
        Dropdown={Dropdown}
        empty={empty}
      />
    </div>
  );
};

export default Dashboard;
