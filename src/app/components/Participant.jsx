import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "./Checkbox";
import Tag from "./Tag";

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
    <Accordion.Item eventKey={index} className="!rounded-none">
      <Accordion.Button className="focus:!ring-0 focus:!bg-hackathon-green-100 !bg-transparent">
        <Checkbox onClick={handleSelect} toggle={participant.selected} />
        <div className="w-1/6">
          {participant.name} {participant.uid}{" "}
          {participant.selected ? "true" : "false"}
        </div>
        <div className="w-1/6">{participant.email}</div>
        <div className="w-1/6">{participant.team}</div>
        <div className="w-1/6">{participant.major}</div>
        <div className="w-1/6">
          <Tag text={participant.status} />
        </div>
      </Accordion.Button>

      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Participant;
