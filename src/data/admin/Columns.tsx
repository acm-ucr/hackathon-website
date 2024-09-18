import Tag from "@/components/admin/Tag";
import { COLORS } from "../Tags";
import Checkbox from "@/components/Checkbox";
import { Table, Row, CellContext } from "@tanstack/react-table";

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

type stringRecord = Record<string, string>;

export const generateAffiliation = <TData extends stringRecord>(
  affiliations: stringRecord,
) => ({
  accessorKey: "affiliation",
  header: "Affiliation",
  meta: { width: "w-1/12" },
  cell: ({ getValue }: CellContext<TData, string>) => (
    <Tag
      text={affiliations[getValue().toLowerCase()]}
      color={COLORS[getValue().toLowerCase() as keyof typeof COLORS]}
    />
  ),
});

export const generateStatus = <TData extends object>(
  statuses: stringRecord,
) => ({
  accessorKey: "status",
  header: "Status",
  meta: { width: "w-[10%]" },
  enableColumnFilter: true,
  filterFn: (row: any, col: any, filter: string[]) => {
    const status = row.getValue(col);
    return filter.includes(status);
  },
  cell: ({ getValue }: CellContext<TData, string>) => (
    <Tag
      text={statuses[getValue()]}
      color={COLORS[getValue() as keyof typeof COLORS]}
    />
  ),
});
export const generateTiers = <TData extends stringRecord>(
  tiers: stringRecord,
) => ({
  accessorKey: "tier",
  header: "Tier",
  meta: { width: "w-1/12" },
  cell: ({ getValue }: CellContext<TData, string>) => (
    <Tag
      text={tiers[getValue().toLowerCase()]}
      color={COLORS[getValue().toLowerCase() as keyof typeof COLORS]}
    />
  ),
});
