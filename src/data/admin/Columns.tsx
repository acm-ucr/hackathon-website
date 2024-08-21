import Tag from "@/components/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/Checkbox";

export const generateSelect = () => ({
  id: "select",
  meta: { width: "w-1/12" },
  header: ({ table }: { table: any }) => (
    <Checkbox
      toggle={table.getIsAllRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }: { row: any }) => (
    <Checkbox
      toggle={row.getIsSelected()}
      onClick={row.getToggleSelectedHandler()}
    />
  ),
});

export const generateAffiliation = (affiliations: Record<string, string>) => ({
  accessorKey: "affiliation",
  header: "Affiliation",
  meta: { width: "w-1/12" },
  cell: ({ getValue }: { getValue: () => string }) => (
    <Tag
      text={affiliations[getValue().toLowerCase()]}
      color={COLORS[getValue().toLowerCase() as keyof typeof COLORS]}
    />
  ),
});

export const generateStatus = (statuses: Record<string, string>) => ({
  accessorKey: "status",
  header: "Status",
  meta: { width: "w-1/12" },
  enableColumnFilter: true,
  filterFn: (row: any, col: any, filter: string[]) => {
    const status = row.getValue(col);
    return filter.includes(status);
  },
  cell: ({ getValue }: { getValue: () => string }) => (
    <Tag
      text={statuses[getValue()]}
      color={COLORS[getValue() as keyof typeof COLORS]}
    />
  ),
});
export const generateTiers = (tiers: Record<string, string>) => ({
  accessorKey: "tier",
  header: "Tier",
  meta: { width: "w-1/12" },
  cell: ({ getValue }: { getValue: () => string }) => (
    <Tag
      text={tiers[getValue()]}
      color={COLORS[getValue() as keyof typeof COLORS]}
    />
  ),
});
