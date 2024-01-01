import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/dynamic/Checkbox";

export const STATUSES = {
  1: "read",
  0: "unread",
};

export const TAGS = [
  {
    text: "read",
    value: 1,
  },
  {
    text: "unread",
    value: 0,
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
    accessorKey: "rating",
    header: "Rating",
    width: "w-1/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "eventSource",
    header: "Event Source",
    width: "w-2/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "improvements",
    header: "Improvements",
    width: "w-4/12",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "helpful",
    header: "Helpful",
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

export const DROPDOWN = ({ object }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 w-11/12">
        <div>
          <span className="font-bold">Additional Comments: </span>
          {object.additionalComments}
        </div>
        <div>
          <span className="font-bold">Not Beneficial: </span>
          {object.notBeneficial}
        </div>
      </div>
    </div>
  );
};
