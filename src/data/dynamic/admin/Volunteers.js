import Checkbox from "@/components/dynamic/Checkbox";
import { AVAILABILITY } from "../form/Information";

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
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const HEADERS = [
  { text: "name", size: "w-3/12", icon: true, sort: "off" },
  { text: "email", size: "w-3/12", icon: true, sort: "off" },
  { text: "discord", size: "w-2/12", icon: true, sort: "off" },
  {
    text: "status",
    size: "w-2/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "",
    size: "w-1/12",
  },
];

export const DROPDOWN = ({ object }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 w-11/12">
        {AVAILABILITY.map((text, index) => (
          <Checkbox
            toggle={object.availability.includes(text)}
            text={text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export const AUTH = {
  POST: {},
  GET: {
    admins: [1],
    committees: [1],
  },
  PUT: {
    admins: [1],
    committees: [1],
  },
  DELETE: {
    admins: [1],
    committees: [1],
  },
};

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
