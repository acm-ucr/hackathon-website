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

export const COLUMNS: ColumnDef<Participant, string>[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-2/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Participant, Participant["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Participant, Participant["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-2/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Participant, Participant["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "team",
    header: "Team",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Participant, Participant["team"]>) => (
      <div>{props.getValue() ?? "N/A"}</div>
    ),
  },
  {
    accessorKey: "shirt",
    header: "Shirt",
    meta: { width: "w-1/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Participant, Participant["shirt"]>) => (
      <div>{props.getValue() ?? "N/A"}</div>
    ),
  },
  generateStatus(STATUSES),
  {
    accessorKey: "resume",
    header: "Resume",
    meta: { width: "w-1/12" },
    enableSorting: false,
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
    <div className="flex items-center justify-center">
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
    </div>
  );
};
