import { TIERS } from "@/data/form/Sponsors";
import { generateSelect, generateStatus, generateTiers } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Tags } from "@/types/dashboard";

type Sponsor = {
  name: string;
  email: string;
  company: string;
  position: string;
  tier: string;
  comments: string;
};

type dropdownProps = {
  object: {
    response: string;
  };
};

export const TAGS: Tags[] = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const COLUMNS: (ColumnDef<Sponsor, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[20%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Sponsor, Sponsor["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-[28%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Sponsor, Sponsor["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "company",
    header: "Company",
    meta: { width: "w-[25%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Sponsor, Sponsor["company"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    meta: { width: "w-[15%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Sponsor, Sponsor["position"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generateTiers(TIERS),
  generateStatus(STATUSES),
];

export const DROPDOWN: React.FC<dropdownProps> = ({ object }) => {
  return (
    <>
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
