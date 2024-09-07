import Tag from "@/components/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/Checkbox";
import { Table, Row } from "@tanstack/react-table";

export const generateSelect = <TData extends object>() => ({
  id: "select",
  meta: { width: "w-1/12" },
  header: ({ table }: { table: Table<TData> }) => (
    <Checkbox
      toggle={table.getIsAllRowsSelected()}
      onClick={() => table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }: { row: Row<TData> }) => (
    <Checkbox
      toggle={row.getIsSelected()}
      onClick={() => row.getToggleSelectedHandler()}
    />
  ),
});

type cellProp = {
  getValue: () => string;
};

type stringRecord = Record<string, string>;

export const generateAffiliation = (affiliations: stringRecord) => ({
  accessorKey: "affiliation",
  header: "Affiliation",
  meta: { width: "w-1/12" },
  cell: ({ getValue }: cellProp) => (
    <Tag
      text={affiliations[getValue().toLowerCase()]}
      color={COLORS[getValue().toLowerCase() as keyof typeof COLORS]}
    />
  ),
});

export const generateStatus = (statuses: stringRecord) => ({
  accessorKey: "status",
  header: "Status",
  meta: { width: "w-[10%]" },
  enableColumnFilter: true,
  filterFn: (row: any, col: any, filter: string[]) => {
    const status = row.getValue(col);
    return filter.includes(status);
  },
  cell: ({ getValue }: cellProp) => (
    <Tag
      text={statuses[getValue()]}
      color={COLORS[getValue() as keyof typeof COLORS]}
    />
  ),
});
export const generateTiers = (tiers: stringRecord) => ({
  accessorKey: "tier",
  header: "Tier",
  meta: { width: "w-1/12" },
  cell: ({ getValue }: cellProp) => (
    <Tag
      text={tiers[getValue()]}
      color={COLORS[getValue() as keyof typeof COLORS]}
    />
  ),
});
