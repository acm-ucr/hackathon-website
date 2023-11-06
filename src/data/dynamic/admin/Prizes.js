export const TAGS = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const HEADERS = [
  {
    text: "category",
    size: "w-3/12",
    icon: true,
    sort: "off",
  },
  {
    text: "prize",
    size: "w-4/12",
    icon: true,
    sort: "off",
  },
  {
    text: "team",
    size: "w-4/12",
    icon: true,
    sort: "off",
  },
  {
    text: "status",
    size: "w-1/12",
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
