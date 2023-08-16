import React from "react";
import { Row, Col } from "react-bootstrap";
import Member from "./Member";
import { RiVipCrown2Fill } from "react-icons/ri";
import { SiGithub, SiDevpost } from "react-icons/si";
import Tag from "./Tag";
import Checkbox from "../Checkbox";

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
    <div className="w-full font-poppins">
      <Col
        className={
          "border-t-[1px] border-hackathon-gray flex w-full focus:!ring-0 focus:!bg-hackathon-green-100 align-items-center " +
          (selected ? "!bg-green-100" : "!bg-transparent")
        }
      >
        <div className="h-full items-start pl-3 pt-2">
          <Checkbox onClick={handleSelect} toggle={selected} />
        </div>
        <div className="pl-[3%] my-2 w-2/5">
          <p className="m-0 text-sm flex font-semibold">
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
        <div className=" pt-2 flex flex-col justify-start items-start text-sm w-[42%]">
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
        <div className="my-[10px]">
          <Tag
            color={
              status === "pending"
                ? "purple"
                : status === "qualified"
                ? "green"
                : status === "disqualified"
                ? "red"
                : status === "winner"
                ? "yellow"
                : "gray"
            }
            text={status}
            withHover={false}
          />
        </div>
      </Col>
    </div>
  );
};

export default Teams;
