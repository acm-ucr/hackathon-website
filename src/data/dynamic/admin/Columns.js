import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/dynamic/Checkbox";

export const generateSelect = () => ({
  id: "select",
  width: "w-1/12",
  header: ({ table }) => (
    <Checkbox
      toggle={table.getIsAllRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      toggle={row.getIsSelected()}
      onClick={row.getToggleSelectedHandler()}
    />
  ),
});

export const generateAffiliation = (affiliations) => ({
  accessorKey: "affiliation",
  header: "Affiliation",
  width: "w-1/12",
  cell: ({ getValue }) => (
    <Tag text={affiliations[getValue()]} color={COLORS[getValue()]} />
  ),
});

export const generateStatus = (statuses) => ({
  accessorKey: "status",
  header: "Status",
  width: "w-1/12",
  enableColumnFilter: true,
  filterFn: (row, col, filter) => {
    const status = row.getValue(col);
    return filter.includes(status);
  },
  cell: ({ getValue }) => (
    <Tag text={statuses[getValue()]} color={COLORS[getValue()]} />
  ),
});
export const generateTiers = (tiers) => ({
  accessorKey: "tier",
  header: "Tier",
  width: "w-1/12",
  cell: ({ getValue }) => (
    <Tag text={tiers[getValue()]} color={COLORS[getValue()]} />
  ),
});
