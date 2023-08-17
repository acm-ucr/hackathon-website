import React, { useState } from "react";
import SortIcon from "./SortIcon";

const TableHeader = ({
  headers,
  setHeaders,
  setFilteredObjects,
  filteredObjects,
}) => {
  const [currentSort, setCurrentSort] = useState("Name");
  return (
    <div className="py-2 text-sm flex text-white bg-hackathon-blue-200 justify-evenly">
      <div className="w-4" />
      {Object.keys(headers).map((header, index) => (
        <div
          key={index}
          className={`${headers[header].size} font-semibold text-white flex items-center`}
        >
          {header}
          {headers[header].icon && (
            <SortIcon
              currentSort={currentSort}
              setCurrentSort={setCurrentSort}
              name={header}
              headers={headers}
              setHeaders={setHeaders}
              setFilteredObjects={setFilteredObjects}
              objects={filteredObjects}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
