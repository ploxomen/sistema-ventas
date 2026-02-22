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
import { cn } from "@/lib/utils";
import { ContentBox } from "../setting-option";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
export default function TableDashboard<T extends Record<string, any>>({
  columns = [],
  cells = [],
}: TableProps<T>) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.column}
                className={cn("p-4 bg-thead text-slate-500", column.className)}
              >
                {column.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="text-slate-600">
          {cells.map((cell) => (
            <TableRow key={cell.id}>
              {columns.map((column) => {
                const keyColumn = column.column;
                return (
                  <TableCell className="p-4" key={`${cell.id}-${keyColumn}`}>
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
      <ContentBox className="flex gap-2 justify-between">
        <ContentBox className="flex items-center space-x-2 pl-6">
          <Switch size="md" id="row-compact" />
          <Label htmlFor="row-compact" className="text-sm font-light">
            Filas compactas
          </Label>
        </ContentBox>
        <ContentBox className="flex gap-2 py-4 items-center text-sm font-light">
          <span>Filas por página:</span>
          <ContentBox>
          <Select defaultValue="20">
            <SelectTrigger size="sm" className="w-full max-w-20">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </ContentBox>
          <ContentBox className="mx-1">
            <span>1 - 20 de 50</span>
          </ContentBox>
          <ContentBox className="flex gap-1">
            <Button size="sm" variant="ghost">
              <ChevronLeftIcon className="size-5" />
            </Button>
            <Button size="sm" variant="ghost">
              <ChevronRightIcon className="size-5" />
            </Button>
          </ContentBox>
        </ContentBox>
      </ContentBox>
    </>
  );
}
