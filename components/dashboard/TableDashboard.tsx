import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TableProps } from "@/types/dashboard/table";
export default function TableDashboard<T extends Record<string,any>>({
  columns = [],
  cells = [],
}: TableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.column} className={column.className}>{column.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cells.map((cell) => (
          <TableRow key={cell.id}>
            {columns.map((column) => {
              const keyColumn = column.column;
              return (
                <TableCell key={`${cell.id}-${keyColumn}`}>
                  {column.render
                    ? column.render(cell[keyColumn], cell)
                    : cell[keyColumn]}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
