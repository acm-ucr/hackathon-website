import { flexRender } from "@tanstack/react-table";
import Body from "./Body";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";
import Loading from "@/components/Loading";
import Link from "next/link";

const Table = ({
  getHeaderGroups,
  getRowModel,
  Dropdown,
  empty,
  loading,
  meta,
  searchParams,
  page,
}) => {
  const index = parseInt(searchParams.index ?? 1);
  const size = parseInt(searchParams.size ?? 10);

  const { first, last, total } = meta;

  return (
    <>
      <div className="flex h-[75vh] flex-col justify-between overflow-y-scroll bg-white">
        <div className="h-full">
          <div className="rounded-t-lg bg-hackathon-blue-200 text-white">
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
                        className={`mx-2 rotate-90 text-hackathon-gray-200 hover:cursor-pointer hover:opacity-50 ${
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
                        className="mx-2 text-white hover:cursor-pointer hover:opacity-50"
                      />
                    )}
                    {column.getIsSorted() === "desc" && (
                      <FaSortAlphaUp
                        onClick={column.getToggleSortingHandler()}
                        data-cy={`${column.columnDef.header}-sorting-asc`}
                        className="mx-2 text-white hover:cursor-pointer hover:opacity-50"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <>
            {loading ? (
              <div className="h-full">
                <Loading />
              </div>
            ) : (
              <>
                {getRowModel().rows.length === 0 && (
                  <p className="w-full bg-white py-8 text-center">{empty}</p>
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
                  ),
                )}
              </>
            )}
          </>
        </div>
      </div>
      <div className="flex w-full items-center justify-end rounded-b-lg bg-white p-4 text-lg">
        <div className="mx-2">{getRowModel().rows.length} row(s)</div>
        <Link
          href={`/admin/${page}?direction=prev&index=${
            index - 1
          }&size=${size}&first=${first}&last=${last}`}
          className={`mx-2 ${
            index <= 1 && "pointer-events-none text-hackathon-gray-200"
          }`}
        >
          <FaChevronLeft />
        </Link>
        <div>
          Page {index} of {Math.ceil(total / size)}
        </div>
        <Link
          href={`/admin/${page}?direction=next&index=${
            index + 1
          }&size=${size}&first=${first}&last=${last}`}
          className={`mx-2 ${
            index >= Math.ceil(total / size) &&
            "pointer-events-none text-hackathon-gray-200"
          }`}
        >
          <FaChevronRight />
        </Link>
      </div>
    </>
  );
};

export default Table;
