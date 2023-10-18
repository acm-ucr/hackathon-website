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
    text: "qualify",
    value: 1,
  },
  {
    text: "pending",
    value: 0,
  },
  {
    text: "disqualify",
    value: -1,
  },
];

export const HEADERS = [
  { text: "name", size: "w-2/12", icon: true, sort: "off", symbol: "winner" },
  { text: "members", size: "w-2/12", icon: false, sort: "off" },
  { text: "emails", size: "w-3/12", icon: false, sort: "off" },
  { text: "links", size: "w-3/12", icon: false, sort: "off" },
  {
    text: "status",
    size: "w-1/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
];

export const AUTH = {
  POST: {},
  GET: {
    admins: 1,
  },
  PUT: {
    admins: 1,
  },
  DELETE: {
    admins: 1,
  },
};

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
