import { generateSelect, generateStatus } from "./Columns";
import { ICONS } from "./Icons";
import { STATUSES } from "@/data/Statuses";

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

interface CellProps {
  getValue: () => any;
}

export const COLUMNS = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[25%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }: CellProps) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-[30%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }: CellProps) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-[30%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }: CellProps) => <div>{getValue()}</div>,
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

interface ObjectProps {
  object: {
    [key: string]: string;
    attribute: string;
    response: string;
    priorExperience: string;
  };
}

export const DROPDOWN: React.FC<ObjectProps> = ({
  object = {
    attribute: "",
    response: "",
    priorExperience: "",
  },
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid w-11/12 grid-cols-3">
        {attributes.map((attribute, index) => (
          <div key={index} className="my-1 flex px-1 text-sm">
            {ICONS[attribute]}
            {Array.isArray(object[attribute])
              ? object[attribute].length !== 0
                ? object[attribute].join(",")
                : "N/A"
              : object[attribute]}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row justify-evenly px-5">
        <div>Why do you want to join?: {object.response}</div>
        <div>Prior Experience: {object.priorExperience}</div>
      </div>
    </div>
  );
};
