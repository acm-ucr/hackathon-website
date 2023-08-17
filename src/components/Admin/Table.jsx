import React from "react";
import TableHeader from "./TableHeader";

const Table = ({
  children,
  headers,
  setHeaders,
  empty,
  setFilteredObjects,
  filteredObjects,
}) => {
  console.log(children);
  return (
    <div className="w-full rounded-xl overflow-hidden flex flex-col">
      <TableHeader
        headers={headers}
        setFilteredObjects={setFilteredObjects}
        filteredObjects={filteredObjects}
        setHeaders={setHeaders}
      />
      <div className="bg-white w-full overflow-scroll">
        {children.length > 0 ||
        (children.length == undefined && children.props.children.length > 0) ? (
          children
        ) : (
          <p className=" text-hackathon-darkgray font-poppins pt-3 text-center rounded-b-2xl w-full">
            {empty}
          </p>
        )}
      </div>
    </div>
  );
};

export default Table;
