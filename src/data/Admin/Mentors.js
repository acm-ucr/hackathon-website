export const FILTERS = {
  online: true,
  onsite: true,
  "not attending": true,
};

export const TAGS = [
  {
    text: "pending",
  },
  {
    text: "confirm",
  },
  {
    text: "not attending",
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
