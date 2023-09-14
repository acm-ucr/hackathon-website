export const FILTERS = {
  reject: true,
  accept: true,
  pending: true,
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
  { text: "name", size: 2, icon: true, sort: "off" },
  { text: "email", size: 2, icon: true, sort: "off" },
  { text: "team", size: 2, icon: true, sort: "off" },
  { text: "major", size: 2, icon: true, sort: "off" },
  {
    text: "status",
    size: 1,
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "resume",
    size: 1,
    icon: false,
    sort: "off",
    hasTag: true,
    onClick: (object, setModal) => {
      setModal({ src: object.resume, title: object.name + "'s Resume" });
    },
  },
  {
    text: "",
    size: 1,
  },
];
