type CellValue = string | number | boolean | null | undefined;
export type Columns<T> = {
  name: string;
  column: string;
  sorteable?: boolean;
  className?: string;
  render?: (value: CellValue, row?: T) => React.ReactNode;
};
type Row<T> = T;
export interface TableProps<T> {
  columns: Columns<T>[];
  cells: Row<T>[];
}
