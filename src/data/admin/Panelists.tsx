import View from "@/components/admin/dashboards/dashboard/View";
import { generateSelect, generateStatus } from "./Columns";
import  {Tag}   from "@/components/admin/Tag";
import { COLORS } from "@/data/Tags";
import { STATUSES } from "@/data/Statuses";
import { CellContext, ColumnDef } from "@tanstack/react-table";


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




type Panelist = {
  name: string;
  email: string;
  title: string;
  panelist: string;
  photo: string;
}






export const COLUMNS: (ColumnDef <Panelist, string> &
  {searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[23%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Panelist, Panelist["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-[30%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Panelist, Panelist["email"]>) => (
     <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    meta: { width: "w-[15%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Panelist, Panelist["title"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "panelist",
    header: "Panelist",
    meta: { width: "w-[15%]" },
    cell: (props: CellContext<Panelist, Panelist["panelist"]>) => {
   return <Tag text={props.getValue()} color={[props.getValue()]} />
    },
  },
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: "Photo",
    meta: { width: "w-[8%]" },
    enableSorting: false,
    cell: (props: CellContext<Panelist, Panelist["photo"]>) => 
      <View src={props.getValue()} title="Photo" />
  },
];
