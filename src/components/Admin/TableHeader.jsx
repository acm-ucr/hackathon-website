import React, { useState } from "react";
import SortIcon from "./SortIcon";

const TableHeader = ({ headers, setHeaders, setObjects, objects }) => {
  const [currentSort, setCurrentSort] = useState("Name");
  return (
    <div className="py-2 text-sm flex text-white bg-hackathon-blue-200 justify-evenly">
      <div className="w-4" />
      {Object.entries(headers).map(([header, value], index) => (
        <div
          key={index}
          className={`${value.size} font-semibold text-white flex items-center`}
        >
          {header}
          {value.icon && (
            <SortIcon
              currentSort={currentSort}
              setCurrentSort={setCurrentSort}
              name={header}
              headers={headers}
              setHeaders={setHeaders}
              setObjects={setObjects}
              objects={objects}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
