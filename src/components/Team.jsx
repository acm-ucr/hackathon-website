import React from "react";
import { Row, Col } from "react-bootstrap";
import Member from "./Member";
import { RiVipCrown2Fill } from "react-icons/ri";
import { SiGithub, SiDevpost } from "react-icons/si";
import Tag from "./Tag";
import Checkbox from "./Checkbox";

const Teams = ({
  uid,
  teamName,
  github,
  devpost,
  status,
  members,
  selected,
  setFilteredTeams,
  filteredTeams,
}) => {
  const handleSelect = () => {
    if (!selected) {
      setFilteredTeams(
        filteredTeams.map((a) => {
          if (a.uid === uid) {
            a.selected = true;
          }
          return a;
        })
      );
    } else {
      setFilteredTeams(
        filteredTeams.map((a) => {
          if (a.uid === uid) {
            a.selected = false;
          }
          return a;
        })
      );
    }
  };

  return (
    <div className="w-full">

      <Col className="flex w-full">
        <div className="pl-[7%] m-0 w-[52%]">
        <p className="m-0 flex font-semibold">
        <Checkbox onClick={handleSelect} toggle={selected} />
          {teamName}
          {status == "winner" && (
          <RiVipCrown2Fill className="ml-2 text-yellow-500 text-xl" />
        )}
        </p>
          {members.map((member, index) => (
            <Row key={index}>
              <Member name={member.name} email={member.email} />
            </Row>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start text-sm w-1/3">
          <a
            href={github}
            rel="noreferrer"
            target="_blank"
            className="no-underline hover:opacity-70 text-black flex flex-row items-center"
          >
            <SiGithub className="text-lg mr-1" />
            {github}
          </a>
          <a
            href={devpost}
            rel="noreferrer"
            target="_blank"
            className=" no-underline hover:opacity-70 text-black flex flex-row items-center"
          >
            <SiDevpost className="text-lg mr-1" />
            {devpost}
          </a>
        </div>
        <div className="m-0">
          <Tag text={status} withHover={false} />
        </div>
      </Col>
      <div className="my-1 h-[2px] bg-hackathon-gray" />
    </div>
  );
};

export default Teams;
