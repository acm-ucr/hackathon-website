import Checkbox from "@/components/dynamic/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";

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
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-4/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  generateStatus(STATUSES),
];

export const DROPDOWN = ({ object }) => {
  return (
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
  );
};
