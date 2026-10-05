"use client";
import { useMemo } from "react";
import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "@/components/ui/data-table";

import { useDataTable } from "@/hooks/tables/useDataTable";
import { Category } from "@/types/category";
import { useDisclosure } from "@heroui/react";
import { LoaderOverlay } from "@/components/loader-overlay";
import { createBrandColumn } from "./BrandColumns";
import { useBrand } from "../hooks/useBrand";
import BrandModal from "./BrandModal";

export function BrandManager() {
  //MODAL DE CREACION Y EDICION
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //LLENADO DE TABLA
  const table = useDataTable<Category>({
    initialPageSize: 10,
    endpoint: "brands",
  });
  //ACCIONES DE EDITAR Y ELIMINAR DB
  const {
    onEdit,
    onDelete,
    brand,
    setBrand,
    status: statusRequest,
  } = useBrand({
    openModal: onOpenChange,
    onFetch: table.fetchData,
  });
  //CONSTRUCCION DE COLUMNAS
  const columns = useMemo(
    () =>
      createBrandColumn({
        onEdit,
        onDelete,
      }),
    [onEdit, onDelete],
  );
  return (
    <>
      <div className="space-y-5">
        <DataTableToolbar
          search={table.search}
          onSearchChange={table.setSearch}
          onFilterChange={table.setFilter}
          onClearFilters={table.clearFilters}
          createLabel="Nueva marca"
          onCreate={() => {
            onOpen();
            setBrand(null);
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
      <BrandModal
        brand={brand}
        isOpen={isOpen}
        onFetchdata={table.fetchData}
        onOpenChange={onOpenChange}
      />
      {statusRequest === "EN_PROGRESO" && (
        <LoaderOverlay isVisible={true} message="Cargando petición" />
      )}
    </>
  );
}
