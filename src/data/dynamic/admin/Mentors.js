import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/dynamic/Checkbox";
import { AVAILABILITY } from "../form/Information";

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
  {
    accessorKey: "status",
    header: "Status",
    width: "w-2/12",
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
    <>
      <div className="flex justify-center">
        <div className="grid grid-rows-4 grid-flow-col w-11/12">
          {AVAILABILITY.map((text, index) => (
            <Checkbox
              toggle={object.availability.includes(text)}
              text={text}
              key={index}
            />
          ))}
        </div>
      </div>
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
