import View from "@/components/admin/dashboards/dashboard/View";
import { AFFILIATIONS } from "../form/Information";
import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
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
  generateAffiliation(AFFILIATIONS),
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    width: "w-1/12",
    enableSorting: false,
    cell: ({ getValue }) => <View src={getValue()} title="Photo" />,
  },
];
