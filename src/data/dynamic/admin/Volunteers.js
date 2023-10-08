import Checkbox from "@/components/dynamic/Checkbox";
import { AVAILABILITY } from "../forms/Helper";
import Col from "react-bootstrap/Col";

export const FILTERS = {
  pending: {
    state: true,
    value: 0,
  },
  accept: {
    state: true,
    value: 1,
  },
  reject: {
    state: true,
    value: -1,
  },
};
export const TAGS = [
  {
    text: "pending",
    value: 0,
  },
  {
    text: "not attending",
    value: -1,
  },
  {
    text: "confirm",
    value: 1,
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

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
