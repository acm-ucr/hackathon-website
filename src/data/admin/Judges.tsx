import View from "@/components/admin/dashboards/dashboard/View";
import { AFFILIATIONS } from "../form/Information";
import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import JSZip from "jszip";
import { save } from "@/utils/download";
import { Download } from "lucide-react";
import data from "../Config";
import { Tags } from "@/types/dashboard";
import { ColumnDef, CellContext } from "@tanstack/react-table";

type Judge = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  title: string;
  affiliation: string;
  shirt: string;
  photo: string;
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

export const COLUMNS: (ColumnDef<Judge, string> & {
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
    cell: (props: CellContext<Judge, Judge["name"]>) => (
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
    cell: (props: CellContext<Judge, Judge["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    meta: { width: "w-[18%]" },
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Judge, Judge["title"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generateAffiliation(AFFILIATIONS),
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
    cell: (props: CellContext<Judge, Judge["photo"]>) => (
      <View src={props.getValue()} title={props.row.getValue("name")} />
    ),
  },
];
