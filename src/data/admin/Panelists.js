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
    meta: { width: "w-[23%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-[30%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    meta: { width: "w-[15%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "panelist",
    header: "Panelist",
    meta: { width: "w-[15%]" },
    cell: ({ getValue }) => (
      <Tag text={getValue()} color={COLORS[getValue()]} />
    ),
  },
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    meta: { width: "w-[8%]" },
    enableSorting: false,
    cell: ({ getValue }) => <View src={getValue()} title="Photo" />,
  },
];
