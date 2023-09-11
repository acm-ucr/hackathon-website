export const FILTERS = {
  confirm: true,
  pending: true,
  "not attending": true,
};

export const TAGS = [
  {
    text: "pending",
  },
  {
    text: "not attending",
  },
  {
    text: "confirm",
  },
];

export const HEADERS = [
  { text: "name", size: 3, icon: true, sort: "off" },
  { text: "email", size: 3, icon: true, sort: "off" },
  { text: "discord", size: 3, icon: true, sort: "off" },
  {
    text: "status",
    size: 2,
    icon: true,
    sort: "off",
    hasTag: true,
  },
];
