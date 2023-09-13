export const FILTERS = {
  pending: true,
  confirm: true,
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
  {
    text: "type",
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
  {
    text: "image",
    size: 1,
    icon: false,
    sort: "off",
    hasTag: true,
    onClick: (object, setModal) => {
      setModal({ src: object.image, title: object.name + "'s Image" });
    },
  },
];
