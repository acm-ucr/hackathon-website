import { useState } from "react";
import Title from "../../Title";
import ScanQRCode from "./ScanQRCode";
import DropDown from "../DropDown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "../../Button";
import CheckInfo from "./CheckInfo";
import checkInUser from "../../../../../cypress/fixtures/checkin_user.json";
import mockEvents from "../../../../../cypress/fixtures/events.json";

const CheckIn = () => {
  const [event, setEvent] = useState("No Event Selected");
  const [events, setEvents] = useState(mockEvents);
  const [info, setInfo] = useState(null);

  const setResult = (result) => {
    setInfo(checkInUser[result]);
  };

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Check In" />
      <Row className="p-0 m-0">
        <Col xs={12} md={6} className="p-3 m-0 flex flex-col justify-around">
          <DropDown
            option={event}
            setOption={setEvent}
            options={events}
            setOptions={setEvents}
          />
          <ScanQRCode setResult={setResult} />
          <Button
            text="Check In"
            color="green"
            onClick={() => setInfo({ ...info, [event]: true })}
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
