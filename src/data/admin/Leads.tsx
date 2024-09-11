import { generateSelect, generateStatus } from "./Columns";
import { ICONS } from "./Icons";
import { STATUSES } from "@/data/Statuses";
import { Tags } from "@/types/dashboard";
import { ColumnDef, CellContext } from "@tanstack/react-table";

export const TAGS: Tags[] = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

type Leads = {
  name: string;
  email: string;
  discord: string;
};

export const COLUMNS: (ColumnDef<Leads, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[25%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Leads, Leads["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-[30%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Leads, Leads["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-[30%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Leads, Leads["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
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

type dropdownProp = {
  object: Record<string, string[]>;
};

export const DROPDOWN: React.FC<dropdownProp> = ({ object }) => {
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
