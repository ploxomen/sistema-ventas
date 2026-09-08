import { Key, ReactNode } from "react";

export interface TableColumn<T> {
  key: string;
  label?: string;
  width?: string;
  align?: "start" | "center" | "end";
  sortable?: boolean;
  render?: (item: T, index: number) => ReactNode;
}

export interface TableFilterOption {
  label: string;
  value: string;
}

export interface TableFilter {
  key: string;
  label: string;
  className?: string;
  options: TableFilterOption[];
}

export interface PaginationState {
  column: string | null;
  direction: "ascending" | "descending" | null;
}

export interface SortingState {
  column: string | null;
  direction: "ascending" | "descending" | null;
}

export interface DataTableState {
  search: string;
  filters: Record<string, string[]>;
  pagination: PaginationState;
  sorting: SortingState;
  selectedKeys: Set<Key>;
}

export interface DataTableParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
  filters?: Record<string, string | string[] | number | boolean>;
}
