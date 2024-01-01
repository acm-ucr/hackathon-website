import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/dynamic/Checkbox";
import View from "@/components/dynamic/admin/dashboards/dashboard/View";

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};

export const TAGS = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
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
    accessorKey: "discord",
    header: "Discord",
    width: "w-2/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "team",
    header: "Team",
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
  {
    accessorKey: "Resume",
    header: "Resume",
    width: "w-1/12",
    cell: ({ getValue }) =>
      getValue() && <View title="Resume" src={getValue()} />,
  },
];

const attributes = [
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

export const DROPDOWN = ({ object, icons }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 w-11/12">
        {attributes.map((attribute, index) => (
          <div key={index} className="my-1 px-1 flex text-sm">
            {icons[attribute]}
            {Array.isArray(object[attribute])
              ? object[attribute].join(",")
              : object[attribute]}
          </div>
        ))}
      </div>
    </div>
  );
};
