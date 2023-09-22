export const FILTERS = {
  pending: true,
  accept: true,
  reject: true,
};

export const TAGS = [
  {
    text: "accept",
  },
  {
    text: "reject",
  },
  {
    text: "pending",
  },
];

export const HEADERS = [
  { text: "name", size: 3, icon: true, sort: "off", symbol: "lead" },
  { text: "email", size: 4, icon: true, sort: "off" },
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
