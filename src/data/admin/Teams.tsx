import Link from "next/link";
import { generateSelect, generateStatus } from "./Columns";
import { ICONS } from "./Icons";
import { STATUSES } from "@/data/Statuses";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Tags } from "@/types/dashboard";

type Team = {
  name: string;
  teamid: string;
  members: string[];
  discords: string[];
  links: {
    name: string;
    url: string;
  }[];
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

export const COLUMNS: (ColumnDef<Team, any> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[18%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Team, Team["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "teamid",
    header: "Team ID",
    meta: { width: "w-[20%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Team, Team["teamid"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "members",
    header: "Members",
    meta: { width: "w-[20%]" },
    enableSorting: false,
    filterFn: "includesString",
    enableColumnFilter: true,
    searchable: true,
    cell: (props: CellContext<Team, Team["members"]>) => (
      <div>
        {props.getValue().map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "discords",
    header: "Discords",
    meta: { width: "w-[15%]" },
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Team, Team["discords"]>) => (
      <div>
        {props.getValue().map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "links",
    header: "Links",
    meta: { width: "w-[20%]" },
    enableSorting: false,
    cell: (props: CellContext<Team, Team["links"]>) => (
      <div>
        {props.getValue().map(({ name, url }, index) => (
          <Link key={index} href={url} className="mx-2 inline-flex">
            {ICONS[name]}
          </Link>
        ))}
      </div>
    ),
  },
  generateStatus(STATUSES),
];
