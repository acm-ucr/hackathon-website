export const FILTERS = {
  disqualify: true,
  qualify: true,
  pending: true,
  winner: true,
};

export const TAGS = [
  {
    text: "qualify",
  },
  {
    text: "disqualify",
  },
  {
    text: "pending",
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
