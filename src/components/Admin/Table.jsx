import React, { useState } from "react";
import SortIcon from "./SortIcon";

const Table = ({
  children,
  headers,
  setHeaders,
  empty,
  setObjects,
  objects,
}) => {
  const [currentSort, setCurrentSort] = useState(Object.keys(headers)[0]);
  return (
    <div className="w-full rounded-xl overflow-hidden flex flex-col">
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
      <div className="bg-white w-full overflow-scroll">
        {children.length > 0 || children?.props?.children.length > 0 ? (
          children
        ) : (
          <p className="text-hackathon-darkgray font-poppins pt-3 text-center rounded-b-2xl w-full">
            {empty}
          </p>
        )}
      </div>
    </div>
  );
};

export default Table;
