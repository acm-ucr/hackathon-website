import React from "react";
import { createRoot } from "react-dom/client";
import View from "@/components/admin/dashboards/dashboard/View";
import { AFFILIATIONS } from "../form/Information";
import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
import { performDownload } from "../../utils/download";
import Popup from "../../components/admin/Popup";

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
    width: "w-2/12",
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
    header: "Photo",
    width: "w-1/12",
    enableSorting: false,
    customAction: (rows) => {
      const popupInfo = {
        title: "Download Confirmation",
        text: "Are you sure you want to download all images?",
        color: "blue",
        button: "confirm",
        visible: true,
      };
      const div = document.createElement("div");
      const hidePopup = () => div.remove();
      const root = createRoot(div);
      root.render(
        <Popup
          popup={popupInfo}
          onClick={() => rows.map((row) => performDownload(row.original.photo))}
          setPopup={hidePopup}
          text={popupInfo.button}
        />,
      );
      document.body.appendChild(div);
    },
    cell: ({ getValue }) => <View src={getValue()} title="Photo" />,
  },
];
