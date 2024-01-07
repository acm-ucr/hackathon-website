export const FILTERS = {
  unnotified: {
    state: true,
    value: 0,
  },
  notified: {
    state: true,
    value: 1,
  },
};

export const TAGS = [
  {
    text: "notified",
    value: 1,
  },
  {
    text: "unnotified",
    value: 0,
  },
];

export const HEADERS = [
  { text: "name", size: "w-5/12", icon: true, sort: "off" },
  { text: "email", size: "w-5/12", icon: true, sort: "off" },
  {
    text: "status",
    size: "w-2/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
];

export const STATUSES = {
  1: "notified",
  0: "unnotified",
};
