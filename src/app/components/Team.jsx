import React from "react";
import { Row, Col } from "react-bootstrap";
import Member from "./Member";
// import Tag from "./Tag";
import { RiVipCrown2Fill } from "react-icons/ri";

const Teams = ({ teamName, other, tag, members }) => {
  return (
    <div>
      <div className="flex font-semibold py-1">
        <div className="flex pl-[5%] w-[35%]">
          <p className="m-0">{teamName}</p>
          {tag == "winner" && (
            <RiVipCrown2Fill className="ml-2 text-yellow-500 text-xl" />
          )}
        </div>
        <p className="m-0">{other}</p>
      </div>
      <div>
        <Col>
          {members.map((member, index) => (
            <Row key={index}>
              <Member name={member.name} email={member.email} />
            </Row>
          ))}
        </Col>
      </div>
      <div className="my-3 h-[2px] bg-hackathon-gray" />
    </div>
  );
};

export default Teams;
