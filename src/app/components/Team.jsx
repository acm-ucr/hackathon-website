import React from "react";
import { Row, Col } from "react-bootstrap";
import Member from "./Member";
import { RiVipCrown2Fill } from "react-icons/ri";
import { SiGithub, SiDevpost } from "react-icons/si";

const Teams = ({ teamName, github, devpost, status, members }) => {
  return (
    <div>
      <div className="flex font-semibold pl-[5%] w-[35%]">
        <p className="m-0">{teamName}</p>
        {status == "winners" && (
          <RiVipCrown2Fill className="ml-2 text-yellow-500 text-xl" />
        )}
      </div>
      <Col className="flex">
        <div className="pl-[5%] m-0 w-[35%]">
          {members.map((member, index) => (
            <Row key={index}>
              <Member name={member.name} email={member.email} />
            </Row>
          ))}
        </div>
        <div className="flex flex-col justify-between text-sm">
          <div className="flex items-start h-[50%]">
            <a
              href={github}
              rel="noreferrer"
              target="_blank"
              className="no-underline hover:opacity-70 text-black flex flex-row items-center"
            >
              <SiGithub className="text-lg mr-1" />
              {github}
            </a>
          </div>
          <div className="flex items-start h-[50%]">
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
        </div>
        <div className="pl-[5%] m-0 w-[35%]">{status}</div>
      </Col>
      <div className="my-1 h-[2px] bg-hackathon-gray" />
    </div>
  );
};

export default Teams;
