import React from "react";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import { Row, Col } from "react-bootstrap";
import { mentorHeaders } from "@/data/Headers";

const Mentor = ({
  uid,
  name,
  email,
  discord,
  status,
  selected,
  setFilteredMentors,
  filteredMentors,
}) => {
  const handleSelect = () => {
    if (!selected) {
      setFilteredMentors(
        filteredMentors.map((a) => {
          if (a.uid === uid) {
            a.selected = true;
          }
          return a;
        })
      );
    } else {
      setFilteredMentors(
        filteredMentors.map((a) => {
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
        "justify-evenly py-2 first:border-0 border-t-[1px] border-hackathon-gray flex items-center w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <Row className="w-full flex justify-between items-center p-0 m-0">
        <Col className="p-0 flex justify-center items-center">
          <Checkbox onClick={handleSelect} toggle={selected} />
        </Col>
        <Col
          md={mentorHeaders["name"].size}
          className="font-semibold text-xs p-0 md:text-sm"
        >
          {name}
        </Col>
        <Col
          md={mentorHeaders["email"].size}
          className="text-xs p-0 md:text-sm"
        >
          {email}
        </Col>
        <Col
          md={mentorHeaders["discord"].size}
          className="text-xs p-0 md:text-sm"
        >
          {discord}
        </Col>
        <Col
          md={mentorHeaders["status"].size}
          className="text-xs p-0 md:text-sm"
        >
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

export default Mentor;
