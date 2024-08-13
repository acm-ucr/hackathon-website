import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { Tags } from "@/types/dashboard";
import { ColumnDef } from "@tanstack/react-table";

type Interest = {
  name: string;
  email: string;
};

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

export const COLUMNS: ColumnDef<Interest, string>[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-5/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-5/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  generateStatus(STATUSES),
];
