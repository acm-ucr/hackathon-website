import View from "@/components/admin/dashboards/dashboard/View";
import { ICONS } from "./Icons";
import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { Tags } from "@/types/dashboard";
import { ColumnDef, CellContext } from "@tanstack/react-table";

type Participant = {
  phone: string;
  major: string;
  age: number;
  country: string;
  school: string;
  grade: string;
  gender: string;
  shirt: string;
  diet: string;
  resume: string;
  name: string;
  email: string;
  roles: string;
  discord: string;
  team: string;
};

type dropdownProps = {
  object: Record<string, string[]>;
};

export const TAGS: Tags[] = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const COLUMNS: (ColumnDef<Participant, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[16%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Participant, Participant["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-[25%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Participant, Participant["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-[13%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Participant, Participant["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "team",
    header: "Team",
    meta: { width: "w-[20%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Participant, Participant["team"]>) => (
      <div>{props.getValue() ?? "N/A"}</div>
    ),
  },
  {
    accessorKey: "shirt",
    header: "Shirt",
    meta: { width: "w-[7%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Participant, Participant["shirt"]>) => (
      <div>{props.getValue() ?? "N/A"}</div>
    ),
  },
  generateStatus(STATUSES),
  {
    accessorKey: "resume",
    header: "Resume",
    meta: { width: "w-[3%]" },
    enableSorting: false,
    searchable: true,
    cell: (props: CellContext<Participant, Participant["resume"]>) =>
      props.getValue() ? (
        <View title="Resume" src={props.getValue()} />
      ) : (
        <div>N/A</div>
      ),
  },
];

const attributes: string[] = [
  "email",
  "phone",
  "age",
  "gender",
  "country",
  "school",
  "major",
  "grade",
  "shirt",
  "diet",
  "restriction",
];

export const DROPDOWN: React.FC<dropdownProps> = ({ object }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 text-sm">
      {attributes.map((attribute, index) => (
        <div key={index} className="flex items-center">
          {ICONS[attribute] && <span className="mr-2">{ICONS[attribute]}</span>}
          {Array.isArray(object[attribute])
            ? object[attribute].length !== 0
              ? object[attribute].join(",")
              : "N/A"
            : object[attribute]}
        </div>
      ))}
    </div>
  );
};
