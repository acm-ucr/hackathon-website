import { generateSelect, generateStatus } from "./Columns";

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
  generateSelect(),
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
  generateStatus(STATUSES),
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
