import { CellContext, ColumnDef } from "@tanstack/react-table";
import { generateSelect, generateStatus } from "./Columns";
import { Tags } from "@/types/dashboard";

export const STATUSES = {
  1: "read",
  0: "unread",
};

export const TAGS: Tags[] = [
  {
    text: "read",
    value: 1,
  },
  {
    text: "unread",
    value: 0,
  },
];

type Feedback = {
  rating: string;
  eventSource: string;
  improvements: string;
  helpful: string;
};

export const COLUMNS: ColumnDef<Feedback, string>[] = [
  generateSelect(),
  {
    accessorKey: "rating",
    header: "Rating",
    meta: { width: "w-[8%]" },
    cell: (props: CellContext<Feedback, Feedback["rating"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "eventSource",
    header: "Event Source",
    meta: { width: "w-[15%]" },
    cell: (props: CellContext<Feedback, Feedback["eventSource"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "improvements",
    header: "Improvements",
    meta: { width: "w-[31%]" },
    cell: (props: CellContext<Feedback, Feedback["improvements"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "helpful",
    header: "Helpful",
    meta: { width: "w-[31%]" },
    cell: (props: CellContext<Feedback, Feedback["helpful"]>) => (
      <div>{props.getValue()}</div>
    ),
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
