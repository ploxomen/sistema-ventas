"use client";

import { useCallback, useMemo } from "react";

import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "@/components/ui/data-table";

import { useDataTable } from "@/hooks/tables/useDataTable";

import { Category } from "@/types/category";
import { createCategoryColumns } from "./CategoryColumns";
import { TableFilter } from "@/types/table";
import { useDisclosure } from "@heroui/react";
import CategoryModal from "./CategoryModal";
interface Props {
  onCreate?: () => void;

  onEdit?: (category: Category) => void;

  onDelete?: (category: Category) => void;

  onCreateSubcategory?: (category: Category) => void;
}
export function CategoryManager({
  onCreate,

  onEdit,

  onDelete,

  onCreateSubcategory,
}: Props) {
  const searchFunction = useCallback(
    (category: Category, search: string) => {},
    [],
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const table = useDataTable<Category>({
    initialPageSize: 10,
  });

  const filters = useMemo<TableFilter[]>(
    () => [
      {
        key: "status",
        label: "Estado",
        className: "col-span-full md:col-span-6",
        options: [
          {
            label: "Activo",
            value: "active",
          },
          {
            label: "Inactivo",
            value: "inactive",
          },
        ],
      },
    ],
    [],
  );
  const columns = useMemo(
    () =>
      createCategoryColumns({
        onEdit,
        onDelete,
        onCreateSubcategory,
      }),
    [onEdit, onDelete, onCreateSubcategory],
  );

  return (
    <>
      <div className="space-y-5">
        <DataTableToolbar
          search={table.search}
          onSearchChange={table.setSearch}
          filters={filters}
          onFilterChange={table.setFilter}
          onClearFilters={table.clearFilters}
          createLabel="Nueva categoría"
          onCreate={() => {
            onOpen();
          }}
        />

        <DataTable data={table.data} columns={columns} />

        <DataTablePagination
          page={table.page}
          totalPages={table.totalPages}
          pageSize={table.totalPages}
          totalItems={table.total}
          onPageChange={table.setPage}
          onPageSizeChange={table.setPageSize}
        />
      </div>
      <CategoryModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
