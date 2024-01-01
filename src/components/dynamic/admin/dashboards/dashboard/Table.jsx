"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Toolbar from "./Toolbar";
import Filters from "./Filters";

const Table = ({ columns, page, tags, statuses }) => {
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
      <div className="text-white bg-hackathon-blue-200 rounded-t-lg">
        {getHeaderGroups().map(({ headers, id }) => (
          <div key={id} className="flex items-center px-3 py-2">
            {headers.map(({ id, column, getContext }) => (
              <div key={id} className={`${column.columnDef.width}`}>
                {flexRender(column.columnDef.header, getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {getRowModel().rows.map(({ id, getVisibleCells }) => (
          <div
            className="flex px-3 py-2 border-b-[1px] border-hackathon-gray-200"
            key={id}
          >
            {getVisibleCells().map(({ id, column, getContext }) => (
              <div
                className={`flex items-center ${column.columnDef.width}`}
                key={id}
              >
                {flexRender(column.columnDef.cell, getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="mx-2">Showing 10 of {data.length}</div>
        <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          {"<"}
        </button>
        <div>
          Page {getState().pagination.pageIndex + 1} of {getPageCount()}
        </div>
        <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Table;
