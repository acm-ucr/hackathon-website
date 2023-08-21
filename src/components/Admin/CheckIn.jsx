import React from "react";
import Title from "./Title";
import ScanQRCode from "./ScanQRCode";
import { useState } from "react";
import DropDown from "./DropDown";
import { events } from "@/data/mock/events";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import CheckInfo from "./CheckInfo";
import { checkInUser } from "@/data/mock/checkInUser";

const CheckIn = () => {
  const setResult = (result) => {
    setInfo(checkInUser[result]);
  };
  const [event, setEvent] = useState(events[0]);
  const [info, setInfo] = useState(null);
  const onClick = () => {
    setInfo({ ...info, [event]: true });
  };
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Mentors" />
      <Row className="p-0 m-0">
        <Col xs={12} md={6} className="p-3 m-0 flex flex-col justify-around">
          <DropDown option={event} setOption={setEvent} options={events} />
          <ScanQRCode setResult={setResult} />
          <Button
            text="Check In"
            color="green"
            onClick={onClick}
            size="text-xl"
          />
        </Col>
        <Col xs={12} md={6} className="p-3 m-0 flex flex-col justify-around">
          <CheckInfo info={info} events={events} />
        </Col>
      </Row>
    </div>
  );
};

export default CheckIn;
