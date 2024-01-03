import { flexRender } from "@tanstack/react-table";
import Body from "./Body";

const Table = ({
  data,
  getHeaderGroups,
  getRowModel,
  getState,
  previousPage,
  getCanPreviousPage,
  nextPage,
  getCanNextPage,
  getPageCount,
  Dropdown,
}) => {
  return (
    <>
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
        {getRowModel().rows.map(({ id, getVisibleCells, original }) => (
          <Body
            key={id}
            getVisibleCells={getVisibleCells}
            Dropdown={Dropdown}
            original={original}
          />
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
    </>
  );
};

export default Table;
