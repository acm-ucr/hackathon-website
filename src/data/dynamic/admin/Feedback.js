export const FILTERS = {
  unread: {
    state: true,
    value: 0,
  },
  read: {
    state: true,
    value: 1,
  },
};

export const TAGS = [
  {
    text: "read",
    value: 1,
  },
  {
    text: "unread",
    value: 0,
  },
];

export const HEADERS = [
  { text: "rating", size: "w-1/12", icon: true, sort: "off" },
  { text: "eventSource", size: "w-2/12" },
  { text: "improvements", size: "w-3/12" },
  {
    text: "helpful",
    size: "w-3/12",
  },
  {
    text: "status",
    size: "w-1/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "",
    size: "w-1/12",
  },
];

export const DROPDOWN = ({ object }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 w-11/12">
        <div>
          <span className="font-bold">Additional Comments: </span>
          {object.additionalComments}
        </div>
        <div>
          <span className="font-bold">Not Beneficial: </span>
          {object.notBeneficial}
        </div>
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
  1: "read",
  0: "unread",
};
