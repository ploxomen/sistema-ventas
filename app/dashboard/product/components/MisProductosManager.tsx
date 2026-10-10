"use client";
import { useMemo } from "react";
import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "@/components/ui/data-table";

import { useDataTable } from "@/hooks/tables/useDataTable";
import { createColumnProducts, ProductTable } from "./MisProductosColumn";

export function MisProductosManager() {
  //MODAL DE CREACION Y EDICION
  //LLENADO DE TABLA
  const table = useDataTable<ProductTable>({
    initialPageSize: 10,
    endpoint: "product",
  });
  const columns = useMemo(
      () =>
        createColumnProducts({
          onDelete : () => {},
        }),
      [],
    );
  
  return (
    <>
      <div className="space-y-5">
        <DataTableToolbar
          search={table.search}
          onSearchChange={table.setSearch}
          onFilterChange={table.setFilter}
          onClearFilters={table.clearFilters}
          createLabel="Nuevo producto"
          onCreate={() => {
          }}
        />
        <DataTable data={table.data} columns={columns} />
        <DataTablePagination
          page={table.page}
          totalPages={table.totalPages}
          pageSize={table.limit}
          totalItems={table.total}
          onPageChange={table.setPage}
          onPageSizeChange={table.setPageSize}
        />
      </div>
    </>
  );
}
