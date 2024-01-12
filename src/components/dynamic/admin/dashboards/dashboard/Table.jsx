import { flexRender } from "@tanstack/react-table";
import Body from "./Body";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";

const Table = ({
  getHeaderGroups,
  getRowModel,
  getState,
  previousPage,
  getCanPreviousPage,
  nextPage,
  getCanNextPage,
  getPageCount,
  Dropdown,
  empty,
}) => {
  return (
    <>
      <div className="bg-white h-[75vh] overflow-y-scroll flex flex-col justify-between">
        <div>
          <div className="text-white bg-hackathon-blue-200 rounded-t-lg">
            {getHeaderGroups().map(({ headers, id }) => (
              <div key={id} className="flex items-center px-3 py-2">
                {headers.map(({ id, column, getContext }) => (
                  <div
                    key={id}
                    className={`${column.columnDef.width} flex items-center`}
                    data-cy="header"
                  >
                    {flexRender(column.columnDef.header, getContext())}
                    {column.getCanSort() && (
                      <FaArrowRightArrowLeft
                        className={`mx-2 rotate-90 hover:cursor-pointer ${
                          column.getIsSorted() && "hidden"
                        }`}
                        data-cy={`${column.id}-sorting`}
                        onClick={column.getToggleSortingHandler()}
                      />
                    )}
                    {column.getIsSorted() === "asc" && (
                      <FaSortAlphaDown
                        onClick={column.getToggleSortingHandler()}
                        data-cy={`${column.id}-sorting-desc`}
                        className="mx-2 hover:cursor-pointer text-hackathon-green-300"
                      />
                    )}
                    {column.getIsSorted() === "desc" && (
                      <FaSortAlphaUp
                        onClick={column.getToggleSortingHandler()}
                        data-cy={`${column.columnDef.header}-sorting-asc`}
                        className="mx-2 hover:cursor-pointer text-hackathon-green-300"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <>
            {getRowModel().rows.length === 0 && (
              <p className="w-full text-center py-8 bg-white">{empty}</p>
            )}
            {getRowModel().rows.map(
              ({ id, getVisibleCells, original, getIsSelected }) => (
                <Body
                  getIsSelected={getIsSelected}
                  key={id}
                  getVisibleCells={getVisibleCells}
                  Dropdown={Dropdown}
                  original={original}
                />
              )
            )}
          </>
        </div>
      </div>
      <div className="flex justify-end items-center p-4 text-lg bg-white w-full rounded-b-lg">
        <div className="mx-2">{getRowModel().rows.length} row(s)</div>
        <button
          onClick={() => previousPage()}
          disabled={!getCanPreviousPage()}
          className="mx-2 disabled:text-hackathon-gray-200"
        >
          <FaChevronLeft />
        </button>
        <div>
          Page {getState().pagination.pageIndex + 1} of {getPageCount()}
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!getCanNextPage()}
          className="mx-2 disabled:text-hackathon-gray-200"
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default Table;
