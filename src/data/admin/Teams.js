import Link from "next/link";
import { generateSelect, generateStatus } from "./Columns";
import { ICONS } from "./Icons";
export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};

export const TAGS = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const COLUMNS = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "members",
    header: "Members",
    width: "w-3/12",
    enableSorting: false,
    cell: ({ getValue }) => (
      <div>
        {getValue().map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "discords",
    header: "Discords",
    width: "w-2/12",
    enableSorting: false,
    cell: ({ getValue }) => (
      <div>
        {getValue().map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "links",
    header: "Links",
    width: "w-3/12",
    enableSorting: false,
    cell: ({ getValue }) => (
      <div>
        {getValue().map(({ name, link }, index) => (
          <Link key={index} href={link} className="mx-2 inline-flex">
            {ICONS[name]}
          </Link>
        ))}
      </div>
    ),
  },
  generateStatus(STATUSES),
];
