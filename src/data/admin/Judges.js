import React from "react";
import View from "@/components/admin/dashboards/dashboard/View";
import { AFFILIATIONS } from "../form/Information";
import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
import { STATUSES } from "@/data/Statuses";
import JSZip from "jszip";
import { save } from "@/utils/download";
import { Download } from "lucide-react";
import data from "../Config";

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
    width: "w-2/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: ({ getValue }) => <div>{getValue()}</div>,
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

        console.log(photos);

        const zip = new JSZip();
        const folder = zip.folder();

        photos.forEach(({ photo, name }) => {
          const src = photo.split(",")[1];
          folder.file(`${name.replace(" ", "_")}.png`, src, { base64: true });
        });

        zip.generateAsync({ type: "blob" }).then((blob) => {
          const url = URL.createObjectURL(blob);
          save(
            `${data.name.replace(" ", "_")}_${data.year}_judges_images.zip`,
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
    width: "w-1/12",
    enableSorting: false,
    cell: ({ getValue, row }) => (
      <View src={getValue()} title={row.getValue("name")} />
    ),
  },
];
