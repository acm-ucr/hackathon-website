import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
import { AFFILIATIONS } from "../form/Committees";
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
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-3/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "discord",
    width: "w-3/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  generateAffiliation(AFFILIATIONS),
  generateStatus(STATUSES),
];
