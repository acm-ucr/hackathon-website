"use client";
import React from "react";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import { judgeHeaders } from "@/data/Headers";
import { Row, Col } from "react-bootstrap";

const Judge = ({
  type,
  name,
  email,
  selected,
  filteredJudges,
  setFilteredJudges,
  status,
}) => {
  const handleSelect = () => {
    setFilteredJudges(
      filteredJudges.map((a) => {
        if (a.email === email) {
          a.selected = !selected;
        }
        return a;
      })
    );
  };
  return (
    <div
      className={
        "justify-evenly py-2 first:border-0 border-t-[1px] border-hackathon-gray flex items-center w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <Row className="w-full flex justify-between items-center p-0 m-0">
        <Col className="font-semibold p-0 flex justify-center items-center">
          <Checkbox onClick={handleSelect} toggle={selected} />
        </Col>
        <Col
          md={judgeHeaders["name"].size}
          className="font-semibold text-xs p-0 md:text-sm"
        >
          {name}
        </Col>
        <Col md={judgeHeaders["email"].size} className="text-xs p-0 md:text-sm">
          {email}
        </Col>
        <Col md={judgeHeaders["type"].size} className="text-xs p-0 md:text-sm">
          <Tag color={type} text={type} withHover={false} />
        </Col>
        <Col
          md={judgeHeaders["status"].size}
          className="text-xs p-0 md:text-sm"
        >
          <Tag
            color={
              status === "pending"
                ? "gray"
                : status === "confirm"
                ? "green"
                : status === "not attending"
                ? "red"
                : "gray"
            }
            text={status}
            withHover={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Judge;
