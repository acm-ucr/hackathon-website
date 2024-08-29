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

interface CellProp {
  getValue: () => any;
}

export const COLUMNS = [
  generateSelect(),
  {
    accessorKey: "rating",
    header: "Rating",
    meta: { width: "w-[8%]" },
    cell: ({ getValue }: CellProp) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "eventSource",
    header: "Event Source",
    meta: { width: "w-[15%]" },
    cell: ({ getValue }: CellProp) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "improvements",
    header: "Improvements",
    meta: { width: "w-[31%]" },
    cell: ({ getValue }: CellProp) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "helpful",
    header: "Helpful",
    meta: { width: "w-[31%]" },
    cell: ({ getValue }: CellProp) => <div>{getValue()}</div>,
  },
  generateStatus(STATUSES),
];

interface ObjectProp {
  object: {
    [key: string]: string;
    addtionalComments: string;
    notBeneficial: string;
  };
}

export const DROPDOWN: React.FC<ObjectProp> = ({
  object = {
    addtionalComments: "",
    notBeneficial: "",
  },
}) => {
  return (
    <div className="flex justify-center">
      <div className="grid w-11/12 grid-cols-2">
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
