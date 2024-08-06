import Checkbox from "@/components/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { ColumnDef } from "@tanstack/react-table";

type Person = {
  name: string;
  email: string;
  discord: string;
  status: string | number;
};

type tags = {
  text: string;
  value: number;
};

type objectProp = {
  availability: string[];
  response: string;
};

type extendedColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  width: string;
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

export const COLUMNS: extendedColumnDef<Person, string>[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: { getValue: () => string }) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-4/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: { getValue: () => string }) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: { getValue: () => string }) => <div>{props.getValue()}</div>,
  },
  generateStatus(STATUSES),
];

export const DROPDOWN = ({ object }: { object: objectProp }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-11/12 grid-flow-col grid-rows-4">
          {AVAILABILITY.map((text, index) => (
            <Checkbox
              toggle={object.availability.includes(text)}
              text={text}
              key={index}
              color={"bg-hackathon-blue-100"}
            />
          ))}
        </div>
      </div>
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
