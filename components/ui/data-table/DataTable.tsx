"use client";

import { TableColumn as TableColumnConfig } from "@/types/table";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

import { Key, ReactNode } from "react";

interface Props<T extends { id: Key }> {
  data: T[];
  columns: TableColumnConfig<T>[];
  loading?: boolean;
  emptyContent?: ReactNode;
  selectedKeys?: Set<Key>;
  onSelectionChange?: (keys: "all" | Set<Key>) => void;
  sortDescriptor?: SortDescriptor;
  onSortChange?: (descriptor: SortDescriptor) => void;
  renderExpanded?: (item: T) => ReactNode;
}
export function DataTable<T extends { id: Key }>({
  data,
  columns,
  loading = false,
  emptyContent = "No hay registros.",
  selectedKeys,
  onSelectionChange,
  sortDescriptor,
  onSortChange,
  renderExpanded,
}: Props<T>) {
  return (
    <Table
      aria-label="Tabla de datos"
      removeWrapper
      selectionMode={onSelectionChange ? "multiple" : "none"}
      onSelectionChange={onSelectionChange}
      sortDescriptor={sortDescriptor}
      onSortChange={onSortChange}
      classNames={{
        th: "bg-default-100",
        td: "py-4",
      }}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.key}
            allowsSorting={column.sortable}
            align={column.align ?? "start"}
          >
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={data} isLoading={loading} emptyContent={emptyContent}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => {
              const column = columns.find((item) => item.key === columnKey);

              if (!column) {
                return <TableCell>-</TableCell>;
              }

              return (
                <TableCell>
                  {column.render
                    ? column.render(item, data.indexOf(item))
                    : String(item[column.key as keyof T] ?? "-")}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
