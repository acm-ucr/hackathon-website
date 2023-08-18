"use client";

import React from "react";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import { Row, Col } from "react-bootstrap";
import { volunteerHeaders } from "@/data/Headers";

const Volunteer = ({
  uid,
  name,
  email,
  discord,
  status,
  selected,
  setFilteredVolunteers,
  filteredVolunteers,
}) => {
  const handleSelect = () => {
    if (!selected) {
      setFilteredVolunteers(
        filteredVolunteers.map((a) => {
          if (a.uid === uid) {
            a.selected = true;
          }
          return a;
        })
      );
    } else {
      setFilteredVolunteers(
        filteredVolunteers.map((a) => {
          if (a.uid === uid) {
            a.selected = false;
          }
          return a;
        })
      );
    }
  };

  return (
    <div
      className={
        "py-2 first:border-0 border-t-[1px] border-hackathon-gray flex items-center justify-evenly w-full" +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <Row className="w-full flex justify-between items-center p-0 m-0">
        <Col className="p-0 flex justify-center items-center">
          <Checkbox onClick={handleSelect} toggle={selected} />
        </Col>
        <Col
          md={volunteerHeaders["name"].size}
          className="font-semibold text-xs p-0 md:text-sm"
        >
          {name}
        </Col>
        <Col
          md={volunteerHeaders["email"].size}
          className="text-xs p-0 md:text-sm"
        >
          {email}
        </Col>
        <Col
          md={volunteerHeaders["discord"].size}
          className="text-xs p-0 md:text-sm"
        >
          {discord}
        </Col>
        <Col md={volunteerHeaders["status"].size} className="p-0">
          <Tag
            color={
              status === "onsite"
                ? "purple"
                : status === "online"
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

export default Volunteer;
