import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "./Checkbox";
import Tag from "./Tag";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { IoIosArrowDown } from "react-icons/io";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useContext } from "react";
const Toggle = ({ children, eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    console.log(eventKey);
  });

  return (
    <div onClick={decoratedOnClick}>
      <IoIosArrowDown
        className={`transition duration-300 text-2xl ease-in-out ${
          activeEventKey === eventKey && "rotate-180"
        }`}
      />
    </div>
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
    <Card eventKey={index} className="!rounded-none ">
      <Card.Header className="flex focus:!ring-0 focus:!bg-hackathon-green-100 !bg-transparent">
        <Checkbox onClick={handleSelect} toggle={participant.selected} />
        <div className="w-1/6">{participant.name}</div>
        <div className="w-1/6">{participant.email}</div>
        <div className="w-1/6">{participant.team}</div>
        <div className="w-1/6">{participant.major}</div>
        <div className="w-1/6">
          <Tag text={participant.status} />
        </div>
        <Toggle eventKey={index} />
      </Card.Header>
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
    </Card>
  );
};

export default Participant;
