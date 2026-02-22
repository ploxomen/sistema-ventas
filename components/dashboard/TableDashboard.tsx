import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
type CellValue = string | number | boolean | null | undefined;

export type Columns<T> = {
  name: string;
  column: string;
  sorteable?: boolean;
  className?: string;
  render?: (value: CellValue, row?: T) => React.ReactNode;
};

type Row<T> = T;

interface TableProps<T> {
  columns: Columns<T>[];
  cells: Row<T>[];
}

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
