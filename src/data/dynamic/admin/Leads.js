import { generateSelect, generateStatus } from "./Columns";
import { ICONS } from "./Icons";

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
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

export const COLUMNS = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  generateStatus(STATUSES),
];

const attributes = [
  "gender",
  "grade",
  "major",
  "eventSource",
  "school",
  "priorHackathons",
];

export const DROPDOWN = ({ object }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 w-11/12">
        {attributes.map((attribute, index) => (
          <div key={index} className="my-1 px-1 flex text-sm">
            {ICONS[attribute]}
            {Array.isArray(object[attribute])
              ? object[attribute].length !== 0
                ? object[attribute].join(",")
                : "N/A"
              : object[attribute]}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-evenly px-5 w-full">
        <div>Why do you want to join?: {object.response}</div>
        <div>Prior Experience: {object.priorExperience}</div>
      </div>
    </div>
  );
};
