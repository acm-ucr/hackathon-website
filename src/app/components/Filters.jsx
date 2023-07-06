import React from "react";
import { Row, Col } from "react-bootstrap";
import Filter from "./Filter";
const filters = [
  {
    tag: "Winner",
  },
  {
    tag: "Qualify",
  },
  {
    tag: "Disqualify",
  },
  {
    tag: "Reject",
  },
  {
    tag: "Accept",
  },
  {
    tag: "Pending",
  },
];

const Filters = () => {
  return (
    <div>
      <Row className="w-fit">
        {filters.map((filter, index) => (
          <Col className="px-1" key={index}>
            <Filter tag={filter.tag} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Filters;
