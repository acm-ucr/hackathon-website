import View from "@/components/admin/dashboards/dashboard/View";
import { generateSelect, generateStatus, generatePanelists } from "./Columns";
import { PANELISTS } from "../form/Information";
import { STATUSES } from "@/data/Statuses";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { Tags } from "@/types/dashboard";
import { Download } from "lucide-react";
import JSZip from "jszip";
import { save } from "@/utils/download";
import data from "../Config";

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

type Panelists = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  shirt: string;
  title: string;
  photo: string;
};

export const COLUMNS: (ColumnDef<Panelists, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-[23%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Panelists, Panelists["name"]>) => (
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
    cell: (props: CellContext<Panelists, Panelists["email"]>) => (
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
    cell: (props: CellContext<Panelists, Panelists["title"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generatePanelists(PANELISTS),
  generateStatus(STATUSES),
  {
    accessorKey: "photo",
    header: ({ table }) => {
      const downloadZip = () => {
        const { rows } = table.getRowModel();
        const photos = rows.map(({ original: { name, photo } }) => ({
          photo,
          name,
        }));

        const zip = new JSZip();
        const folder = zip.folder("photos");

        if (folder) {
          photos.forEach(({ photo, name }) => {
            const src = photo.split(",")[1];
            folder.file(`${name.replace(" ", "_")}.png`, src, { base64: true });
          });
        }

        zip.generateAsync({ type: "blob" }).then((blob) => {
          const url = URL.createObjectURL(blob);
          save(
            `${data.name.replace(" ", "_")}_${data.date.getFullYear()}_judges_images.zip`,
            url,
          );
          URL.revokeObjectURL(url);
        });
      };

      return (
        <div className="flex">
          Photo <Download onClick={downloadZip} />
        </div>
      );
    },
    meta: { width: "w-1/12" },
    enableSorting: false,
    cell: (props: CellContext<Panelists, Panelists["photo"]>) => (
      <View src={props.getValue()} title={props.row.getValue("name")} />
    ),
  },
];
