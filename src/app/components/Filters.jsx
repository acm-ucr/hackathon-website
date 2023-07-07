import React from "react";
import { Row, Col } from "react-bootstrap";
import { TiPlus } from "react-icons/ti";

const Filters = ({
  filters,
  setFilters,
  setfilteredParticipants,
  participants,
}) => {
  const handleClick = (filter) => {
    const filterValues = { ...filters, [filter]: !filters[filter] };
    setFilters(filterValues);

    setfilteredParticipants(
      participants.filter(
        (a) =>
          (a.status === "pending" && filterValues["pending"]) ||
          (a.status === "rejected" && filterValues["rejected"]) ||
          (a.status === "accepted" && filterValues["accepted"])
      )
    );
  };

  return (
    <Row className="w-fit">
      {Object.keys(filters).map((filter, index) => (
        <Col className="px-1" key={index} onClick={() => handleClick(filter)}>
          <div
            className={`rounded ${
              filters[filter]
                ? "text-white bg-hackathon-blue-100"
                : "text-hackathon-blue-100 bg-white"
            } flex items-center w-fit m-0`}
          >
            <p className="my-0 mx-1 px-2 py-[2px]">{filter}</p>
            <TiPlus
              className={`mt-[2px] mr-2 hover:opacity-80 ${
                filters[filter] ? "-rotate-45" : ""
              }`}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Filters;
