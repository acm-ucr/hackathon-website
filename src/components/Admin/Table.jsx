import React, { useState } from "react";
import SortIcon from "./SortIcon";
import { Row, Col } from "react-bootstrap";

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
      <Row className="w-full py-2 text-sm flex text-white bg-hackathon-blue-200 justify-evenly px-0 m-0">
        <Col className="p-0">
          <div className="w-4" />
        </Col>
        {Object.entries(headers).map(([header, value], index) => (
          <Col
            xs={value.size}
            key={index}
            className={`font-semibold text-white flex items-center p-0`}
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
          </Col>
        ))}
      </Row>
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
