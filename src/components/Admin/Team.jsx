import React from "react";
import Member from "./Member";
import { RiVipCrown2Fill } from "react-icons/ri";
import { SiGithub, SiDevpost } from "react-icons/si";
import Tag from "./Tag";
import Checkbox from "../Checkbox";
import { Row, Col } from "react-bootstrap";

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
    <div
      className={
        "justify-evenly py-2 first:border-0 border-t-[1px] border-hackathon-gray flex items-center w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <Row className="w-full p-0 m-0">
        <Col className="p-0 m-0 items-center justify-center flex">
          <Checkbox onClick={handleSelect} toggle={selected} />
        </Col>
        <Col sm={10} className="flex flex-col p-0">
          <p className="m-0 text-sm flex font-semibold">
            {teamName}
            {status == "winner" && (
              <RiVipCrown2Fill className="ml-2 text-yellow-500 text-xl" />
            )}
          </p>
          <div className="w-full flex justify-evenly items-start">
            <div className="w-[60%]">
              {members.map((member, index) => (
                <Member key={index} name={member.name} email={member.email} />
              ))}
            </div>
            <div className="w-[40%] flex flex-col justify-start items-start text-sm">
              <a
                href={github}
                rel="noreferrer"
                target="_blank"
                className="no-underline hover:opacity-70 text-black flex flex-row items-center my-[2px]"
              >
                <SiGithub className="text-lg mr-1" />
                {github}
              </a>
              <a
                href={devpost}
                rel="noreferrer"
                target="_blank"
                className=" no-underline hover:opacity-70 text-black flex flex-row items-center my-[2px]"
              >
                <SiDevpost className="text-lg mr-1" />
                {devpost}
              </a>
            </div>
          </div>
        </Col>
        <Col sm={1} className="p-0 m-0 items-center justify-center flex">
          <Tag
            color={
              status === "pending"
                ? "yellow"
                : status === "qualify"
                ? "green"
                : status === "disqualify"
                ? "red"
                : status === "winner"
                ? "purple"
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

export default Teams;
