import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "../Tags";
import { generateSelect, generateStatus } from "./Columns";

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
    width: "w-2/12",
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
    accessorKey: "phone",
    header: "Phone",
    width: "w-2/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "company",
    header: "Company",
    width: "w-2/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "position",
    header: "Position",
    width: "w-2/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "tier",
    header: "Tier",
    width: "w-1/12",
    cell: ({ getValue }) => (
      <Tag text={getValue()} color={COLORS[getValue()]} />
    ),
  },
  generateStatus(STATUSES),
];
