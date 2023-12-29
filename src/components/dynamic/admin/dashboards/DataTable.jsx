"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const Data = ({ data, columns }) => {
  const [selected, setSelected] = useState([]);

  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      rowSelection: selected,
    },
    onRowSelectionChange: setSelected,
    enableRowSelection: true,
  });

  return (
    <div className="w-full overflow-scroll p-2">
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
    </div>
  );
};

export default Data;
