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
    text: "disqualify",
    value: -1,
  },
  {
    text: "pending",
    value: 0,
  },
];

export const HEADERS = [
  { text: "name", size: 2, icon: true, sort: "off", symbol: "winner" },
  { text: "members", size: 2, icon: false, sort: "off" },
  { text: "emails", size: 3, icon: false, sort: "off" },
  { text: "links", size: 3, icon: false, sort: "off" },
  {
    text: "status",
    size: 1,
    icon: true,
    sort: "off",
    hasTag: true,
  },
];

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
