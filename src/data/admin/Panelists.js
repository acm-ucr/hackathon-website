import View from "@/components/admin/dashboards/dashboard/View";
import { generateSelect, generateStatus } from "./Columns";
import Tag from "@/components/admin/Tag";
import { COLORS } from "@/data/Tags";
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

export const COLUMNS = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-2/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "panelist",
    header: "Panelist",
    meta: { width: "w-3/12" },
    cell: ({ getValue }) => (
      <Tag text={getValue()} color={COLORS[getValue()]} />
    ),
  },
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    meta: { width: "w-1/12" },
    enableSorting: false,
    cell: ({ getValue }) => <View src={getValue()} title="Photo" />,
  },
];
