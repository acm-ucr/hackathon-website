import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
import { AFFILIATIONS } from "../form/Information";
import { ICONS } from "./Icons";
import { STATUSES } from "@/data/Statuses";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";

type TAGS = {
  text: string;
  value: number;
};

type Attributes = string[];

type Meta = {
  width: string;
};
type Committee<TData extends object> = ColumnDef<TData> & {
  searchable?: boolean;
};

interface Column {
  accessorKey: string;
  header: string;
  meta: Meta;
  enableColumnFilter: boolean;
  filterFn: string;
  cell: ({ getValue }: { getValue: () => any }) => JSX.Element;
}

type Dropdown = {
  object: Record<string, any>;
};

export const TAGS: TAGS[] = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const COLUMNS: Committee<Column>[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue() as ReactNode}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue() as ReactNode}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue() as ReactNode}</div>,
  },
  generateAffiliation(AFFILIATIONS),
  generateStatus(STATUSES),
];

const attributes: Attributes = [
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

export const DROPDOWN: React.FC<Dropdown> = ({ object }) => {
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
