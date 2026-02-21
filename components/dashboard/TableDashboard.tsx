import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type Columns = {
  name: string;
  sorteable?: boolean;
  className?: string;
};
type CellValue = string | number | boolean | null | undefined;

type Cell<T> = {
  value: CellValue;
  row?: T;
  className?: string;
  render?: (value: CellValue | number, row?: T) => React.ReactNode;
};
interface TableProps<T> {
  columns: Columns[];
  cells: Cell<T>[];
}

export default function TableDashboard<T>({
  columns = [],
  cells = [],
}: TableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead className={column.className}>{column.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cells.map((cell) => (
          <TableRow>
            <TableCell className={cell.className}>
              {cell.render ? cell.render(cell.value, cell.row) : cell.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
