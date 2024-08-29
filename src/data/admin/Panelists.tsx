import View from "@/components/admin/dashboards/dashboard/View";
import { generateSelect, generateStatus } from "./Columns";
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
    meta: { width: "w-[23%]" },
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
    accessorKey: "title",
    header: "Title",
    meta: { width: "w-[15%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }: CellProps) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "panelist",
    header: "Panelist",
    meta: { width: "w-[15%]" },
  },
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    meta: { width: "w-[8%]" },
    enableSorting: false,
    cell: ({ getValue }: CellProps) => <View src={getValue()} title="Photo" />,
  },
];
