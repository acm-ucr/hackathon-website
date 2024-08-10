import Checkbox from "@/components/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";

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
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-4/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-3/12" },
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
      <div className="grid w-11/12 grid-flow-col grid-rows-4">
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
