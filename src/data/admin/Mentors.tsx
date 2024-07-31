import Checkbox from "@/components/Checkbox";
import { AVAILABILITY } from "../form/Information";
import { generateSelect, generateStatus } from "./Columns";
import React from "react";

interface statuses {
  1: string;
  0: string;
  "-1": string;
}

interface tags {
  text: string;
  value: number;
}

interface cellProps {
  cell: {
    getValue: () => any;
  };
}

interface columns {
  accessorKey: string;
  header: string;
  width: string;
  enableColumnFilter: boolean;
  filterFn: string;
  searchable: boolean;
  cell: (props: cellProps) => React.JSX.Element;
}

interface select {
  id: string;
  width: string;
  header: (props: { table: any }) => React.JSX.Element;
  cell: (props: { row: any }) => React.JSX.Element;
}

interface status {
  accessorKey: string;
  header: string;
  width: string;
  enableColumnFilter: boolean;
  filterFn: (row: any, col: any, filter: any) => any;
  cell: ({ getValue }: { getValue: any }) => React.JSX.Element;
}

type column = columns | select | status;

export const STATUSES: statuses = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
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

export const COLUMNS: column[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ cell }: cellProps) => <div>{cell.getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-4/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ cell }: cellProps) => <div>{cell.getValue()}</div>,
  },
  {
    accessorKey: "discord",
    header: "Discord",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ cell }: cellProps) => <div>{cell.getValue()}</div>,
  },
  generateStatus(STATUSES),
];

export const DROPDOWN = ({ object }: { object: any }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-11/12 grid-flow-col grid-rows-4">
          {AVAILABILITY.map((text, index) => (
            <Checkbox
              toggle={object.availability.includes(text)}
              text={text}
              key={index}
              color
            />
          ))}
        </div>
      </div>
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
