import Checkbox from "@/components/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { ColumnDef } from "@tanstack/react-table";

type Mentor = {
  name: string;
  email: string;
  discord: string;
  availability: string[];
  response: string;
};

type tags = {
  text: string;
  value: number;
};

type objectProp = {
  availability: string[];
  response: string;
};

type dropdownProp = {
  object: objectProp;
};

export const TAGS: tags[] = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const COLUMNS: ColumnDef<Mentor, string>[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-4/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props) => <div>{props.getValue()}</div>,
  },
  generateStatus(STATUSES),
];

export const DROPDOWN: React.FC<dropdownProp> = ({ object }) => {
  return (
    <>
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
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
