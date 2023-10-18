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
  {
    text: "category",
    size: 3,
    icon: true,
    sort: "off",
  },
  {
    text: "prize",
    size: 3,
    icon: true,
    sort: "off",
  },
  {
    text: "team",
    size: 3,
    icon: true,
    sort: "off",
  },
  {
    text: "status",
    size: 2,
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
