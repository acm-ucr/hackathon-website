import React from "react";
import { Row, Col } from "react-bootstrap";
import { TiPlus } from "react-icons/ti";

const Filters = ({
  filters,
  setFilters,
  setfilteredObjects,
  objects,
  input,
}) => {
  const handleClick = (filter) => {
    const filterValues = { ...filters, [filter]: !filters[filter] };
    setFilters(filterValues);

    setfilteredObjects(
      objects.filter((a) => {
        let boolean = false;

        Object.entries(filterValues).map(([key, value]) => {
          if (
            a.status === key &&
            value &&
            a.name.toLowerCase().match(input.toLowerCase())
          ) {
            boolean = true;
          }
        });
        return boolean;
      })
    );
  };

  return (
    <Row className="w-fit">
      {Object.entries(filters).map(([filter, value], index) => (
        <Col className="px-1" key={index} onClick={() => handleClick(filter)}>
          <div
            className={`rounded hover:opacity-70 duration-300 ${
              value
                ? "text-white bg-hackathon-blue-100"
                : "text-hackathon-blue-100 bg-white"
            } cursor-pointer flex items-center w-fit m-0`}
          >
            <p className="my-0 mx-1 px-2 py-[2px]">{filter}</p>
            <TiPlus
              className={`duration-300 mt-[2px] mr-2 hover:opacity-80 ${
                value ? "-rotate-45" : ""
              }`}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Filters;
