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
    text: "accept",
    value: 1,
  },
  {
    text: "pending",
    value: 0,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const HEADERS = [
  { text: "name", size: 2, icon: true, sort: "off", symbol: "lead" },
  { text: "email", size: 3, icon: true, sort: "off" },
  { text: "discord", size: 2, icon: true, sort: "off" },
  {
    text: "affiliation",
    size: 2,
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "status",
    size: 2,
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
