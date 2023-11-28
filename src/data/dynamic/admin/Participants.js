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
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const HEADERS = [
  { text: "name", size: "w-2/12", icon: true, sort: "off", limit: 200 },
  { text: "discord", size: "w-2/12", icon: true, sort: "off" },
  { text: "team", size: "w-2/12", icon: true, sort: "off" },
  { text: "major", size: "w-2/12", icon: true, sort: "off" },
  {
    text: "status",
    size: "w-1/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "resume",
    size: "w-1/12",
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

const attributes = [
  "email",
  "phone",
  "age",
  "gender",
  "school",
  "major",
  "grade",
  "shirt",
  "diet",
  "restriction",
];

export const DROPDOWN = ({ object, icons }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 w-11/12">
        {attributes.map((attribute, index) => (
          <div key={index} className="my-1 px-1 flex text-sm">
            {icons[attribute]}
            {Array.isArray(object[attribute])
              ? object[attribute].join(",")
              : object[attribute]}
          </div>
        ))}
      </div>
    </div>
  );
};

export const AUTH = {
  POST: {},
  GET: {
    admins: [1],
  },
  PUT: {
    admins: [1],
  },
  DELETE: {
    admins: [1],
  },
};

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
