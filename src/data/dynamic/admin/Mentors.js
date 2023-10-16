import Checkbox from "@/components/dynamic/Checkbox";
import { AVAILABILITY } from "../forms/Availability";

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
    text: "pending",
    value: 0,
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
    size: "w-3/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },

  {
    text: "",
    size: 1,
    // added new empty box so that the alignment would match.
  },
];

export const DROPDOWN = ({ object }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 w-11/12">
        {Object.values(AVAILABILITY).map(({ text }, index) => (
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
    admins: 1,
    committevfdvbfdeves: 1,
  },
  PUT: {
    admins: 1,
    committees: 1,
  },
  DELETE: {
    admins: 1,
    committees: 1,
  },
};

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
