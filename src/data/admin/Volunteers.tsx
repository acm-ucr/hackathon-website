import Checkbox from "@/components/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { Tags } from "@/types/dashboard";
import { ColumnDef, CellContext } from "@tanstack/react-table";

type Volunteer = {
  name: string;
  email: string;
  phone: string;
  discord: string;
  major: string;
  grade: string;
  availability: string[];
  gender: string;
  shirt: string;
};

type dropdownProps = {
  object: {
    availability: string[];
  };
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

export const COLUMNS: (ColumnDef<Volunteer, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[28%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["name"]>) => (
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
    cell: (props: CellContext<Volunteer, Volunteer["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-[25%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generateStatus(STATUSES),
];

export const DROPDOWN: React.FC<dropdownProps> = ({ object }) => {
  return (
    <div className="flex justify-center">
      <div className="grid w-11/12 grid-flow-col grid-rows-4">
        {AVAILABILITY.map((text, index) => (
          <Checkbox
            toggle={object.availability.includes(text)}
            text={text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
