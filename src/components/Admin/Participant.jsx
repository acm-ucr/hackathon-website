import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "../Checkbox";
import Tag from "./Tag";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { IoIosArrowDown } from "react-icons/io";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { participantHeader } from "@/data/Headers";
const Toggle = ({ eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <IoIosArrowDown
      onClick={decoratedOnClick}
      className={`hover:text-hackathon-blue-100 transition text-xl cursor-pointer duration-300 ease-in-out ${
        activeEventKey === eventKey && "rotate-180"
      }`}
    />
  );
};
const Participant = ({
  filteredParticipants,
  setfilteredParticipants,
  participant,
  index,
}) => {
  const handleSelect = () => {
    if (!participant.selected) {
      setfilteredParticipants(
        filteredParticipants.map((a) => {
          if (a.uid === participant.uid) {
            a.selected = true;
          }
          return a;
        })
      );
    } else {
      setfilteredParticipants(
        filteredParticipants.map((a) => {
          if (a.uid === participant.uid) {
            a.selected = false;
          }
          return a;
        })
      );
    }
  };
  return (
    <Row
      className={
        "m-0 last:rounded-b-2xl text-sm py-2 px-0 first:border-0 border-t-[1px] border-hackathon-gray flex items-center w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (!participant.selected ? "!bg-white" : "!bg-green-100")
      }
    >
      <Col className="flex items-center p-0 justify-center">
        <Checkbox onClick={handleSelect} toggle={participant.selected} />
      </Col>
      <Col
        sm={participantHeader["name"].size}
        className="font-semibold text-xs p-0 md:text-sm"
      >
        {participant.name}
      </Col>
      <Col
        sm={participantHeader["email"].size}
        className="text-xs p-0 md:text-sm"
      >
        {participant.email}
      </Col>
      y
      <Col
        sm={participantHeader["team"].size}
        className="text-xs p-0 md:text-sm"
      >
        {participant.team}
      </Col>
      <Col
        sm={participantHeader["major"].size}
        className="text-xs p-0 md:text-sm"
      >
        {participant.major}
      </Col>
      <Col
        sm={participantHeader["status"].size}
        className="text-xs p-0 md:text-sm"
      >
        <Tag
          color={
            participant.status === "pending"
              ? "yellow"
              : participant.status === "accepted"
              ? "green"
              : participant.status === "rejected"
              ? "red"
              : "gray"
          }
          text={participant.status}
          withHover={false}
        />
      </Col>
      <Col className="flex justify-center p-0">
        <Toggle eventKey={index} />
      </Col>
      <Accordion.Collapse eventKey={index}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Accordion.Collapse>
    </Row>
  );
};

export default Participant;
