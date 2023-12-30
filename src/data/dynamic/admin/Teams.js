import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/dynamic/Checkbox";

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
  {
    id: "select",
    width: "w-1/12",
    header: ({ table }) => (
      <Checkbox
        toggle={table.getIsAllRowsSelected()}
        onClick={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        toggle={row.getIsSelected()}
        onClick={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: "uid",
    header: "uid",
    width: "w-2/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "members",
    header: "Members",
    width: "w-2/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "discords",
    header: "Discords",
    width: "w-3/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "links",
    header: "Links",
    width: "w-3/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    width: "w-1/12",
    enableColumnFilter: true,
    filterFn: (row, col, filter) => {
      const status = row.getValue(col);
      return filter.includes(status);
    },
    cell: ({ getValue }) => (
      <Tag text={STATUSES[getValue()]} color={COLORS[getValue()]} />
    ),
  },
];
