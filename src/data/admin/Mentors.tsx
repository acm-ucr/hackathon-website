import Checkbox from "@/components/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { Table, Row } from "@tanstack/react-table";

interface Person {
  name: string;
  email: string;
  discord: string;
  status: number | string;
}

interface tagsDef {
  text: string;
  value: number;
}

interface columnsDef {
  accessorKey: string;
  header: string;
  width: string;
  enableColumnFilter: boolean;
  filterFn: string;
  searchable: boolean;
  cell: (props: { getValue: () => string }) => React.JSX.Element;
}

interface generateSelectDef {
  id: string;
  width: string;
  header: (props: { table: Table<Person> }) => React.JSX.Element;
  cell: (props: { row: Row<Person> }) => React.JSX.Element;
}

interface generateStatusDef {
  accessorKey: string;
  header: string;
  width: string;
  enableColumnFilter: boolean;
  filterFn: (
    row: Row<Person>,
    col: string,
    filter: number | number[],
  ) => boolean;
  cell: (props: { getValue: () => number | string }) => React.JSX.Element;
}

type column = columnsDef | generateSelectDef | generateStatusDef;

export const TAGS: tagsDef[] = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const COLUMNS: column[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: { getValue: () => string }) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-4/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: { getValue: () => string }) => <div>{props.getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: { getValue: () => string }) => <div>{props.getValue()}</div>,
  },
  generateStatus(STATUSES),
];

export const DROPDOWN = ({
  object,
}: {
  object: { availability: string[]; response: string };
}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-11/12 grid-flow-col grid-rows-4">
          {AVAILABILITY.map((text, index) => (
            <Checkbox
              toggle={object.availability.includes(text)}
              text={text}
              key={index}
              color={"bg-hackathon-gray-100"}
            />
          ))}
        </div>
      </div>
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
