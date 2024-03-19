import View from "@/components/dynamic/admin/dashboards/dashboard/View";
import { generateSelect, generateStatus } from "./Columns";
import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";
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
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "panelist",
    header: "Panelist",
    width: "w-3/12",
    cell: ({ getValue }) => (
      <Tag text={getValue()} color={COLORS[getValue()]} />
    ),
  },
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    width: "w-1/12",
    enableSorting: false,
    cell: ({ getValue }) => <View src={getValue()} title="Photo" />,
  },
];
