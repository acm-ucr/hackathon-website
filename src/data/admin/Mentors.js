import Checkbox from "@/components/Checkbox";
import Col from "react-bootstrap/Col";
import { AVAILABILITY } from "../forms/Helper";

export const FILTERS = {
  confirm: true,
  pending: true,
  "not attending": true,
};

export const TAGS = [
  {
    text: "pending",
  },
  {
    text: "confirm",
  },
  {
    text: "not attending",
  },
];

export const HEADERS = [
  { text: "name", size: 3, icon: true, sort: "off" },
  { text: "email", size: 3, icon: true, sort: "off" },
  { text: "discord", size: 3, icon: true, sort: "off" },
  {
    text: "status",
    size: 2,
    icon: true,
    sort: "off",
    hasTag: true,
  },
];

export const DROPDOWN = ({ object }) => {
  return (
    <>
      {Object.entries(AVAILABILITY).map(([key, value], index) => (
        <Col key={index} xs={4}>
          <Checkbox
            toggle={object.availability.includes(value.text)}
            text={value.text}
          />
        </Col>
      ))}
    </>
  );
};
